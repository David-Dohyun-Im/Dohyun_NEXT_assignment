from datetime import datetime
import time
import csv
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

chromedriver_path = '/Users/DOHYUN1M/Downloads/chromedriver-mac-x64/chromedriver'
user_data_dir ='/Users/DOHYUN1M/Desktop/NEXT/Session/NEXT_Session_6'

chrome_options = Options()
chrome_options.add_argument(f'user-data-dir={user_data_dir}')
service = Service(executable_path=chromedriver_path)

driver = webdriver.Chrome(service=service,options=chrome_options)

driver.get('https://www.melon.com/new/index.htm')

chartbtn = driver.find_element(By.XPATH, '/html/body/div/div[2]/div/div[2]/ul[1]/li[1]/a/span[2]')
chartbtn.click()
time.sleep(3)

first = driver.find_element(By.XPATH, '/html/body/div/div[3]/div/div/div[3]/form/div/table/tbody/tr[1]/td[6]/div/div/div[1]/span/a').text
print(first)

for i in range(1,21):
    title = driver.find_element(By.XPATH, f'/html/body/div/div[3]/div/div/div[3]/form/div/table/tbody/tr[{i}]/td[6]/div/div/div[1]/span/a').text
    print(title)
    
driver.execute_script('window.scrollTo(0, document.body.scrollHeight);')
time.sleep(3)

infos = driver.find_elements(By.XPATH, '//*[@id="lst50"]')
for i, info in enumerate(infos,start=1):
    rank = i
    title = info.find_element(By.XPATH, f'/html/body/div/div[3]/div/div/div[3]/form/div/table/tbody/tr[{i}]/td[6]/div/div/div[1]/span/a').text
    singer = info.find_element(By.XPATH, f'/html/body/div/div[3]/div/div/div[3]/form/div/table/tbody/tr[{i}]/td[6]/div/div/div[2]/a').text
    
    print(rank,title,singer)
    
today = datetime.now().strftime('%Y%m%d')

file = open(f'{today}melon.csv', mode = 'w', newline ='')
writer = csv.writer(file)
writer.writerow(['rank','title','singer'])

infos = driver.find_elements(By.XPATH, '//*[@id="lst50"]')
for i, info in enumerate(infos, start=1):
    rank = i
    title = info.find_element(By.XPATH, f'/html/body/div/div[3]/div/div/div[3]/form/div/table/tbody/tr[{i}]/td[6]/div/div/div[1]/span/a').text
    singer = info.find_element(By.XPATH, f'/html/body/div/div[3]/div/div/div[3]/form/div/table/tbody/tr[{i}]/td[6]/div/div/div[2]/a').text
    writer.writerow([rank,title,singer])

file.close()