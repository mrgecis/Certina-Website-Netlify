import pandas as pd
import os

# Read Excel data
excel_path = '/Users/tobiasmeier/Desktop/Github Workspace /example/Assets/Portfolio/Portfolio_Overview.xlsx'
df = pd.read_excel(excel_path)

# Filter only company rows (exclude summary rows)
company_df = df[~pd.isna(df['Company']) & 
               ~df['Company'].astype(str).str.startswith(('Summary', 'Total', 'Industry', 'Unique', '  ', 'nan'))]

print("REVENUE COMPARISON: Excel vs Portfolio.html")
print("=" * 80)

# Portfolio txt files base path
base_path = '/Users/tobiasmeier/Desktop/Github Workspace /example/Assets/Portfolio'

# Mapping for companies with different folder names
folder_mapping = {
    'DEMM': 'Demm',
    'ISOLITE': 'Isolite', 
    'Shieldtec': 'Shieldtech',
    'VielfaltMenü': 'Vielfaltmenue',
    'Wegener+Stapel': 'Wegener'
}

mismatches = []
matches = []

for index, row in company_df.iterrows():
    company_name = row['Company']
    excel_revenue_keur = row['Revenue 2024 in kEUR']
    excel_revenue_million = excel_revenue_keur / 1000  # Convert to Million EUR
    
    # Determine the folder name
    folder_name = folder_mapping.get(company_name, company_name)
    
    # Read the corresponding txt file
    file_path = os.path.join(base_path, folder_name, f"{folder_name}.txt")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Parse revenue from txt file
        txt_revenue_million = None
        for line in content.split('\n'):
            if line.startswith('Revenue:'):
                revenue_str = line.split(':', 1)[1].strip()
                # Extract number from "X.X Million EUR"
                if 'Million EUR' in revenue_str:
                    txt_revenue_million = float(revenue_str.split()[0])
                break
        
        if txt_revenue_million is not None:
            # Compare revenues
            difference = abs(excel_revenue_million - txt_revenue_million)
            tolerance = 0.1  # 0.1 Million EUR tolerance
            
            if difference <= tolerance:
                matches.append({
                    'company': company_name,
                    'excel': excel_revenue_million,
                    'txt': txt_revenue_million,
                    'difference': difference
                })
                status = "✅ MATCH"
            else:
                mismatches.append({
                    'company': company_name,
                    'excel': excel_revenue_million,
                    'txt': txt_revenue_million,
                    'difference': difference
                })
                status = "❌ MISMATCH"
            
            print(f"{company_name:15} | Excel: €{excel_revenue_million:6.1f}M | TXT: €{txt_revenue_million:6.1f}M | {status}")
        else:
            print(f"{company_name:15} | Excel: €{excel_revenue_million:6.1f}M | TXT: ERROR parsing | ❌ ERROR")
            
    except Exception as e:
        print(f"{company_name:15} | Excel: €{excel_revenue_million:6.1f}M | TXT: FILE ERROR | ❌ ERROR")

print("\n" + "=" * 80)
print("SUMMARY:")
print(f"✅ Matches: {len(matches)}")
print(f"❌ Mismatches: {len(mismatches)}")

if mismatches:
    print(f"\nMISMATCHES FOUND:")
    for mismatch in mismatches:
        print(f"  {mismatch['company']}: Excel €{mismatch['excel']:.1f}M vs TXT €{mismatch['txt']:.1f}M (Diff: €{mismatch['difference']:.1f}M)")

print(f"\nTotal companies checked: {len(company_df)}")
print(f"Excel total revenue: €{company_df['Revenue 2024 in kEUR'].sum() / 1000:.1f}M")
