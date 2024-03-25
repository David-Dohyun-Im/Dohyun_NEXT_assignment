from bs4 import BeautifulSoup as bs
import requests
from openpyxl import Workbook
from datetime import datetime

url = 'https://topstartups.io/?hq_location=usa&industries=Artificial+Intelligence&company_size=1-10+employees&company_size=11-50+employees'

try:
    headers = {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36'
    }
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        html_text = response.text
        soup = bs(html_text, 'html.parser')

        companies = soup.select('#startup-website-link')
        company_names = [company.text.strip() for company in companies]

        # Select the second occurrence of #industry-tags
        industries = soup.select('#industry-tags:nth-of-type(2)')
        industry_tags = [industry.text.strip() for industry in industries]

        company_sizes = soup.select('#company-size-tags:nth-of-type(2)')
        company_size_tags = [size.text.strip() for size in company_sizes]

        wb = Workbook()
        ws = wb.active

        ws.append(['Company Name', 'Industry', 'Company Size'])

        for i, (name, industry, size) in enumerate(zip(company_names, industry_tags, company_size_tags), start=1):
            ws.append([i, name, industry, size])

        today = datetime.now().strftime('%Y%m%d')
        filename = f'topstartups_requests_{today}.xlsx'
        wb.save(filename)
        print(f'Excel file saved successfully: {filename}')

    else:
        print(f'Error: HTTP request failed. Status code: {response.status_code}')

except requests.exceptions.RequestException as e:
    print(f'Error: Request failed. Error message: {e}')
