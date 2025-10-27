import pandas as pd
import os

# Read the updated Excel file
excel_path = '/Users/tobiasmeier/Desktop/Github Workspace/example/Assets/Portfolio/Portfolio_Overview.xlsx'
df = pd.read_excel(excel_path)

# Base path for portfolio companies
base_path = '/Users/tobiasmeier/Desktop/Github Workspace/example/Assets/Portfolio'

# Mapping for companies with different folder names
folder_mapping = {
    'DEMM': 'Demm',
    'ISOLITE': 'Isolite', 
    'Shieldtec': 'Shieldtech',
    'VielfaltMenü': 'Vielfaltmenue',
    'Wegener+Stapel': 'Wegener'
}

# Update each company's txt file with the new data
for index, row in df.iterrows():
    company_name = row['Company']
    
    # Convert revenue from kEUR to million EUR for display
    revenue_keur = row['Revenue 2024 in kEUR']
    revenue_million = revenue_keur / 1000
    
    # Create the content for the txt file
    content = f"""Company: {company_name}
Industry: {row['Industry']}
Acquisition year: {row['Acquisition Year']}
Revenue: {revenue_million:.1f} Million EUR
FTE: {row['FTE']}
Countries: {row['Countries with branches']}
Website: {row['Website']}
Headquarter: {row['Headquarter']}
Seller: {row['Seller']}"""
    
    # Determine the folder name (use mapping if exists)
    folder_name = folder_mapping.get(company_name, company_name)
    
    # Determine the file path
    file_path = os.path.join(base_path, folder_name, f"{folder_name}.txt")
    
    # Write the content to the file
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ Updated {folder_name}.txt (Company: {company_name})")
    except Exception as e:
        print(f"✗ Error updating {folder_name}.txt (Company: {company_name}): {e}")

print("\nCompany files update complete!")

# Now calculate new industry statistics
print("\nCalculating new industry statistics:")
for industry in df['Industry'].unique():
    industry_data = df[df['Industry'] == industry]
    total_countries = industry_data['Countries with branches'].sum()
    total_fte = industry_data['FTE'].sum()
    companies_count = len(industry_data)
    print(f"{industry}: {companies_count} companies, {total_countries} countries, {total_fte} FTE")

print(f"\nOverall totals:")
print(f"Total countries: {df['Countries with branches'].sum()}")
print(f"Total FTE: {df['FTE'].sum()}")
print(f"Total companies: {len(df)}")
