# student_summary_v3

This repository contains a simple static summary page for the provided `student_data.csv`.

What is included:
- index.html — HTML report summarizing the CSV (overview, numeric stats, categorical top values) and displaying the histogram.
- style.css — Styles for the report.
- script.js — Small script for UI enhancements.

Generated assets (created by the helper script and saved separately):
- histogram.png — Histogram image for the primary numeric column (Total). Place this file next to index.html.
- sample.png — Provided logo/sample image (if available). Place next to index.html.

How to use:
1. Ensure the following files are in the repository root next to index.html: `histogram.png` and `sample.png`.
2. Open `index.html` in a browser (or serve via GitHub Pages) to view the report.

Notes:
- The CSV used had 10 rows and 9 columns: Student ID, Name, Math, Science, English, History, Total, Average, Grade.
- The histogram was generated for the "Total" column.
