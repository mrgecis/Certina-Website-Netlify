import pandas as pd
import os

# Read the updated Excel file
excel_path = '/Users/tobiasmeier/Desktop/Github Workspace /example/Assets/Portfolio/Portfolio_Overview.xlsx'
df = pd.read_excel(excel_path)

# Display all the updated data
print("Updated Portfolio Overview Data:")
print("=" * 80)
for index, row in df.iterrows():
    print(f"\nCompany: {row['Company']}")
    print(f"Industry: {row['Industry']}")
    print(f"Acquisition Year: {row['Acquisition Year']}")
    print(f"Revenue 2024 in kEUR: {row['Revenue 2024 in kEUR']}")
    print(f"FTE: {row['FTE']}")
    print(f"Countries with branches: {row['Countries with branches']}")
    print(f"Website: {row['Website']}")
    print(f"Headquarter: {row['Headquarter']}")
    print(f"Seller: {row['Seller']}")
    print("-" * 40)
