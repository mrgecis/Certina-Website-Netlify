import pandas as pd

# Read Excel data
excel_path = '/Users/tobiasmeier/Desktop/Github Workspace /example/Assets/Portfolio/Portfolio_Overview.xlsx'
df = pd.read_excel(excel_path)

# Filter only company rows (exclude summary rows)
company_df = df[~pd.isna(df['Company']) & 
               ~df['Company'].astype(str).str.startswith(('Summary', 'Total', 'Industry', 'Unique', '  ', 'nan'))]

print("PORTFOLIO REVENUE ANALYSIS")
print("=" * 50)

# Calculate total revenue in different formats
total_revenue_keur = company_df['Revenue 2024 in kEUR'].sum()
total_revenue_million = total_revenue_keur / 1000
total_revenue_billion = total_revenue_million / 1000

print(f"Total Revenue:")
print(f"  {total_revenue_keur:,.0f} kEUR")
print(f"  €{total_revenue_million:.1f}M")
print(f"  €{total_revenue_billion:.3f}B")

print(f"\nFormat for Portfolio.html:")
if total_revenue_million >= 1000:
    print(f"  €{total_revenue_billion:.1f}B")
else:
    print(f"  €{total_revenue_million:.0f}M")

print(f"\nCompanies by revenue (descending):")
company_revenue = company_df[['Company', 'Revenue 2024 in kEUR']].copy()
company_revenue['Revenue Million EUR'] = company_revenue['Revenue 2024 in kEUR'] / 1000
company_revenue = company_revenue.sort_values('Revenue 2024 in kEUR', ascending=False)

for _, row in company_revenue.iterrows():
    print(f"  {row['Company']:15} €{row['Revenue Million EUR']:6.1f}M")

print(f"\nBreakdown by industry:")
for industry in company_df['Industry'].unique():
    if pd.notna(industry):
        industry_data = company_df[company_df['Industry'] == industry]
        industry_revenue = industry_data['Revenue 2024 in kEUR'].sum() / 1000
        company_count = len(industry_data)
        print(f"  {industry:15} {company_count:2d} companies, €{industry_revenue:6.1f}M")
