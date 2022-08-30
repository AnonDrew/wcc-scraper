Big thanks to **@[roobscoob](https://github.com/roobscoob)** for code references & general advice!

# Instructions
1. Visit https://catalog.sunywcc.edu/search_advanced.php
2. Enter desired course prefix in the "Enter a keyword or phrase" field within "Search Options". View the prefix list if needed.
3. Press the "Search" button. **Do not click on anything else after this step**.
4. The first argument of the scraper will be your desired data format: json or csv.
5. The second argument should be the largest page number at the bottom of the box under "Search Results" -> "Courses - Prefix/Code Matches".
6. The third argument will be the URL displayed in the address bar after step 3, **enclosed in single ' ' quotes**.

# Argument Ex.
json 3 'https://catalog.sunywcc.edu/search_advanced.php?your_course_prefix_query_info'
(2 more examples can be found in the package.json "scripts" property)

# .csv and .json Ex.
Examples of the output can be found in the src directory, both named "catalog" with the corresponding file extension.