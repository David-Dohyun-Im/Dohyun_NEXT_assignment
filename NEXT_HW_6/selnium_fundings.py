from datetime import datetime
import csv
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

# Path to ChromeDriver executable
chromedriver_path = '/Users/DOHYUN1M/Downloads/chromedriver-mac-x64/chromedriver'

# URL of the webpage
url = 'https://topstartups.io/?hq_location=usa&industries=Artificial+Intelligence&company_size=1-10+employees&company_size=11-50+employees'

# Initialize WebDriver service and Chrome driver
service = Service(executable_path=chromedriver_path)
driver = webdriver.Chrome(service=service)

try:
    # Load the webpage
    driver.get(url)
    driver.implicitly_wait(5)  # Implicit wait for the elements to load

    # Extract company names, industry tags, and company size tags
    company_elements = driver.find_elements(By.CSS_SELECTOR, '#startup-website-link')
    company_names = [company.text.strip() for company in company_elements if company.text.strip()]

    industry_tags = [industry.text.strip() for industry in driver.find_elements(By.CSS_SELECTOR, '#industry-tags:nth-of-type(2)')]
    company_size_tags = [size.text.strip() for size in driver.find_elements(By.CSS_SELECTOR, '#company-size-tags:nth-of-type(2)')]

    # Write data to CSV
    today = datetime.now().strftime('%Y%m%d')
    with open(f'topstartups_selnium_{today}.csv', mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['Company Name', 'Industry', 'Company Size'])
        for i, (name, industry, size) in enumerate(zip(company_names, industry_tags, company_size_tags), start=1):
            writer.writerow([name, industry, size])
    
    print(f'CSV file saved successfully: topstartups_selnium_{today}.csv')
    print(company_names)

except Exception as e:
    print(f'An error occurred: {e}')

finally:
    # Quit the WebDriver session
    driver.quit()
