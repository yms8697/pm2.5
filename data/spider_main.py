#encoding=utf-8
import urllib.request
import bs4
import http.cookiejar
import re
import pymysql
import json
from urllib.parse import quote


class SpiderMain(object):
    def __init__(self):
        self.downloader=Htmldownloder()
        self.parser=Htmlparser()
        self.outputer=Output()
    def parser_main(self, root_url):
        html = self.downloader.download(root_url)
        datas = self.parser.parserTwo(html)
        self.outputer.output_json(datas)
    def parser_main2(self,root_url,city):
        html= self.downloader.download(root_url)
        datas = self.parser.parserAll(html)
        self.outputer.outputAll(datas,city)
#html下载器
class Htmldownloder(object):
    def download(self,chaper_url):
        if chaper_url is None:
            print('url为空')
            return None
        cj = http.cookiejar.CookieJar()
        pro = urllib.request.HTTPCookieProcessor(cj)
        opener = urllib.request.build_opener(pro)
        opener.addheaders = [('User-Agent',
                            'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.101 Safari/537.36'),
                            ('Cookie', '4564564564564564565646540')]
        urllib.request.install_opener(opener)
        response= urllib.request.urlopen(chaper_url)
        if response.getcode()!=200:
            print('连接失败')
            return None
        return response.read()
#html解析器
class Htmlparser(object):
    #解析  
    def parserTwo(self,html):
        from bs4 import BeautifulSoup
        if html is None:
            return None
        soup=BeautifulSoup(html,'html.parser',from_encoding='utf-8')
        res_datas=self._get_data(soup)
        return res_datas
    def parserAll(self,html):
        from bs4 import BeautifulSoup
        if html is None:
            return None
        soup=BeautifulSoup(html,'html.parser',from_encoding='utf-8')
        res_datas=self._get_allData(soup)
        return res_datas
    #获取城市,省,aqi,pm25
    def _get_data(self,soup):
        res_datas=[]
        all_data=soup.findAll('a',class_='pjadt_location')
        all_data2=soup.findAll('span',class_='pjadt_sheng')
        all_data3=soup.findAll('span',class_='pjadt_aqi')
        all_data4=soup.findAll('span',class_='pjadt_pm25')
        print(len(all_data4))
        print(len(all_data)/2)
        print(len(all_data2))
        print(len(all_data3))
        for i in range(362):
            res_data={}
            res_data['city']=all_data[i].get_text()
            res_data['province']=all_data2[i].get_text()
            res_data['aqi']=all_data3[i].get_text()
            res_data['pm25']=all_data4[i+1].get_text()
            res_datas.append(res_data)
        return res_datas
    def _get_allData(self,soup):
        
        res_datas=[]
        data=[]
        tables=soup.findAll('table')
        tab=tables[0]
        tr=tab.findAll('tr')
        print(len(tr))
        for i in tr:
            for td in i.findAll('td'):
                data.append(td.get_text())
        for j in range(len(tr)-1):
            res_data={}
            res_data['time']=data[11*j]
            res_data['allAQI']=data[1+11*j]
            res_data['airQuality']=data[3+11*j]
            res_data['allPm25']=data[4+11*j]
            res_datas.append(res_data)
        return res_datas
#输出器
class Output(object):
    def __init__(self):
        self.datas=[]
    def collect_data(self,data):
        if data is None:
            return
        self.datas.append(data)
#输出为json
    def output_json(self,datas):
        fout=open('dataQuery.json','w+',encoding="utf-8")
        encodejson = json.dumps(datas)
        print(encodejson)
        fout.write(encodejson)
        fout.close()
    def outputAll(self,datas,city):
        db = pymysql.connect(host="localhost",user="root",passwd="123456",db="pm25",charset="utf8")
        cursor = db.cursor()
        for data in datas:
            sql="INSERT INTO  historydata(time,airQuality,aqi,pm25,city) VALUES('{0}','{1}','{2}','{3}','{4}')".format(data['time'],data['airQuality'],data['allAQI'],data['allPm25'],city)
            cursor.execute(sql)
            db.commit()
        db.close()        
if __name__ == '__main__':
    url = "http://www.pm25.com/rank.html"
    obj_spider = SpiderMain()
    obj_spider.parser_main(url)
    cityData=["烟台","临沂","潍坊","青岛","菏泽","济宁","德州","滨州","聊城","东营","济南","泰安","威海","日照","淄博","枣庄","莱芜"]
    url2="https://www.aqistudy.cn/historydata/monthdata.php?city="
    #db = pymysql.connect(host="localhost",user="root",passwd="123456",db="pm25",charset="utf8")
    #cursor = db.cursor()
    #cursor.execute("truncate historydata")
    #db.close
    #for i in range(len(cityData)):
        #search= urllib.parse.quote(cityData[i])
        #root_url=url2+search
        #obj_spider.parser_main2(root_url,cityData[i])
