#!/usr/bin/env python3
"""
Script to read industry assignments from Excel and update the company data in Portfolio.html
"""

import pandas as pd
import re

def read_excel_industries():
    """Read industry assignments from Excel file"""
    excel_path = '/Users/tobiasmeier/Desktop/Github Workspace  Kopie/example/Assets/Portfolio/Portfolio_Overview.xlsx'
    df = pd.read_excel(excel_path)
    
    # Company mapping for names (Excel name -> folder name)
    company_mapping = {
        'WPS': 'WPS',
        'MOBOTIX': 'MOBOTIX', 
        'AFT': 'AFT',
        'COI': 'COI',
        'DEMM': 'Demm',
        'Enorise': 'Enorise',
        'Hannemann': 'Hannemann',
        'HermannKoch': 'HermannKoch',
        'Horn': 'Horn',
        'ISOLITE': 'Isolite',
        'PAL': 'PAL',
        'Pruss': 'Pruss',
        'Qcision': 'Qcision',
        'Qualiform': 'Qualiform',
        'Rebhan': 'Rebhan',
        'SCV': 'SCV',
        'Shieldtec': 'Shieldtech',
        'Trassl': 'Trassl',
        'UST': 'UST',
        'VielfaltMenü': 'Vielfaltmenue',
        'Wegener+Stapel': 'Wegener'
    }
    
    # Industry mapping (Excel -> JS filter value)
    industry_mapping = {
        'Software': 'software',
        'Industrials': 'industrials', 
        'Automotive': 'automotive',
        'Packaging': 'packaging',
        'Goods & Services': 'goods-services'
    }
    
    print("INDUSTRY ASSIGNMENTS FROM EXCEL:")
    print("================================")
    
    industry_assignments = {}
    
    for index, row in df.iterrows():
        if pd.notna(row.get('Company')) and pd.notna(row.get('Industry')):
            excel_company = row['Company']
            excel_industry = row['Industry']
            
            if excel_company in company_mapping and excel_industry in industry_mapping:
                folder_name = company_mapping[excel_company]
                js_industry = industry_mapping[excel_industry]
                industry_assignments[folder_name] = js_industry
                print(f"{excel_company:15} ({folder_name:12}) -> {excel_industry:12} ({js_industry})")
    
    return industry_assignments

def update_portfolio_html(industry_assignments):
    """Update the Portfolio.html file with new industry assignments"""
    html_file = '/Users/tobiasmeier/Desktop/Github Workspace /example/Pages/Portfolio.html'
    
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    print("\nUPDATING PORTFOLIO.HTML:")
    print("========================")
    
    # Update parseCompanyData function to set the correct category based on Excel data
    category_updates = []
    for company, industry in industry_assignments.items():
        category_updates.append(f"            if (data.company === '{company}') data.category = '{industry}';")
    
    category_update_code = '\n'.join(category_updates)
    
    # Find the parseCompanyData function and add category assignments
    pattern = r'(function parseCompanyData\(text\) \{[^}]*)(return data;)'
    
    replacement = f"""\\1
            // Update categories based on Excel data
{category_update_code}
            
            \\2"""
    
    if re.search(pattern, content, re.DOTALL):
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
        print("✅ Updated parseCompanyData function with industry assignments")
    else:
        print("❌ Could not find parseCompanyData function to update")
    
    # Write back to file
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("✅ Portfolio.html updated successfully")

if __name__ == "__main__":
    industry_assignments = read_excel_industries()
    update_portfolio_html(industry_assignments)
    print(f"\n✅ Updated {len(industry_assignments)} company industry assignments")
