# Career Assets Folder

This folder contains job postings and career-related assets for the CERTINA GROUP website.

## Structure

- `jobs.json` - Contains all current job postings in JSON format
- Individual job folders (if needed for specific job assets)

## Adding New Job Postings

To add a new job posting, edit the `jobs.json` file and add a new job object to the "jobs" array.

### Job Object Structure

```json
{
  "id": "unique_id",
  "title": "Job Title",
  "company": "Company Name",
  "description": "Job description text",
  "location": "City, Country",
  "type": "Vollzeit/Teilzeit/Praktikum",
  "applicationLink": "mailto:careers@certina-group.com?subject=Application Job Title",
  "requirements": [
    "Requirement 1",
    "Requirement 2",
    "..."
  ],
  "benefits": [
    "Benefit 1",
    "Benefit 2",
    "..."
  ],
  "datePosted": "YYYY-MM-DD",
  "active": true
}
```

### Required Fields
- `id`: Unique identifier for the job
- `title`: Job title
- `company`: Company name (usually a CERTINA GROUP portfolio company)
- `description`: Brief job description
- `location`: Job location
- `type`: Employment type (Vollzeit, Teilzeit, Praktikum, etc.)
- `active`: Boolean - set to true to display the job, false to hide it

### Optional Fields
- `applicationLink`: Custom application link (defaults to careers@certina-group.com)
- `requirements`: Array of job requirements
- `benefits`: Array of job benefits
- `datePosted`: Date when the job was posted

## Displaying Jobs

The Career.html page automatically loads and displays all active jobs from the `jobs.json` file. Jobs with `"active": false` will not be displayed on the website.

## Translation

Job content should be provided in both German and English. Consider creating separate JSON files for different languages if needed:
- `jobs-de.json` (German)
- `jobs-en.json` (English)

## Email Integration

Job applications are currently set up to send emails to `careers@certina-group.com`. Update the email address in the Career.html file if needed.
