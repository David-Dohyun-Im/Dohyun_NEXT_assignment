from bs4 import BeautifulSoup as bs
import requests
import openpyxl

from datetime import datetime
from openpyxl import Workbook

url = 'https://www.melon.com/new/index.htm#params%5BareaFlg%5D=O&params%5BorderBy%5D=&po=pageObj&startIndex=1'


try:
    headers ={
    'User-Agent' : 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36'
    }
    responce = requests.get(url, headers=headers)
    
    if responce.status_code ==200:
        html_text = responce.text
        
        soup = bs(responce.text, 'html.parser')
        
        titles=soup.find_all(class_='rank01')
        titles = list(map(lambda x : x.text.strip(),titles))
        print(titles)
        
        artists = soup.select('.rank02>a')
        artists = list(map(lambda x: x.text, artists))
        print(artists)
        
        wb = Workbook()
        ws = wb.active
        
        ws.append(['순위','제목','아티스트'])
        
        for i, (title, artist) in enumerate(zip(titles, artists), start =1):
            ws.append([i,title,artist])
            
        today = datetime.now().strftime('%Y%m%d')
        
        filename = f'melon_chart_{today}.xlsx'
        wb.save(filename)
        print(f'엑셀 파일 저장 완료: {filename}')
        
        
        
        
        today = datetime.now().strftime('%Y%m%d')

    else:
        print(f'Error: HTTP 요청 실패. 상태 코드 : {responce.status_code}')
        
except requests.exceptions.RequestException as e:


    print(f'Error: 요청 중 오류 발생. 오류 메시지: {e}')