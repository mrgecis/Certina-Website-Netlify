import pandas as pd

# Read the Excel file to check the actual countries data
excel_path = '/Users/tobiasmeier/Desktop/Github Workspace/example/Assets/Portfolio/Portfolio_Overview.xlsx'
df = pd.read_excel(excel_path)

# Filter by industry and count unique countries
automotive_companies = df[df['Industry'] == 'Automotive']
print("Automotive Companies and their countries:")
for _, row in automotive_companies.iterrows():
    print(f"- {row['Company']}: {row['Countries with branches']} countries")

# Count total unique countries for automotive
total_automotive_countries = automotive_companies['Countries with branches'].sum()
print(f"\nTotal countries (sum): {total_automotive_countries}")

# Check other industries too
print("\nIndustry breakdown:")
for industry in df['Industry'].unique():
    industry_data = df[df['Industry'] == industry]
    total_countries = industry_data['Countries with branches'].sum()
    companies_count = len(industry_data)
    print(f"{industry}: {companies_count} companies, {total_countries} total countries")

print(f"\nOverall total countries (sum of all): {df['Countries with branches'].sum()}")
print(f"All companies count: {len(df)}")
