import pandas as pd

# Read the Excel file to check the actual FTE data
excel_path = '/Users/tobiasmeier/Desktop/Github Workspace/example/Assets/Portfolio/Portfolio_Overview.xlsx'
df = pd.read_excel(excel_path)

# Calculate FTE by industry
print("FTE breakdown by industry:")
for industry in df['Industry'].unique():
    industry_data = df[df['Industry'] == industry]
    total_fte = industry_data['FTE'].sum()
    companies_count = len(industry_data)
    print(f"{industry}: {companies_count} companies, {total_fte} total FTE")

print(f"\nOverall total FTE: {df['FTE'].sum()}")
print(f"All companies count: {len(df)}")
