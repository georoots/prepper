# GeoRoots Prepper
Browser based tool that convers spreadsheet data into EU Deforestation Regulation (EUDR) compatible GeoJSON format

This tool has been developed for everyone who keeps geolocations tracked in spreadsheets and need to convert them into suitable GeoJSON format.

Because it is running only locally, for large amounts of data it will consume significant amount of RAM. Approximately 2GB RAM for 5000 records.

## Usage

* Open the prepper.html file in your browser.
* Select a language from the dropdown at the top.
* Prepare your data in an MS Excel / LibreOffice Calc / OpenOffice Calc
* Copy the data in the spreadsheet into clipboard, select the top cell in the top row and paste all data.
* Correct any highlighted errors.
* Press Export GeoJSON to download the data in EUDR compatible format. This file can be then viewed in GeoRoots Mapper and submitted into EUDR DDS portal directly.

## FAQ

##### Q: **My language is not included. Can it be added?**
A: Yes, please open an issue ticket and request a new language.

##### Q: **Do I have to submit farmer names?**
A: Some buyers might request that information, but in general submitting individual farmer names in not neccessary and instead we recommend putting the organization's, company's or cooperative's name into the Producer Name column.

##### Q: **What is my country code?**
A: As far as we understand, EUDR DDS follows this format: [Wikipedia ISO 3166-1 Alpha 2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

##### Q: **What fields are required?**
A: Mandatory fields are only geoinformation + size in case it is a point. But we stronly recommend including unique place identifier code into the Place Reference at the very least.

##### Q: **My geocoordinates are in DMS (degrees, minutes and seconds) format. How can I convert them into decimals?**
A: We recommend trying following formula in Excel:
   ```
=IFERROR(
  LET(
    txt, TRIM(P3),
    cleaned, SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(txt, "°", "|"), "'", "|"), """", "|"), CHAR(160), ""),
    m, TEXTSPLIT(cleaned, "|"),
    deg, VALUE(INDEX(m,1)),
    min, VALUE(INDEX(m,2)),
    sec, VALUE(INDEX(m,3)),
    dir, UPPER(RIGHT(txt,1)),
    validDir, ISNUMBER(MATCH(dir, {"N","S","E","W"}, 0)),
    validValues, AND(deg>=0, min>=0, sec>=0),
    dec, deg + min/60 + sec/3600,
    IF(AND(validDir, validValues),
       IF(OR(dir="S", dir="W"), -dec, dec),
       "Invalid Data"
    )
  ),
  "Invalid Data"
)
```


## Keyboard Shortcuts

Prepper tool supports following shortcuts:

* Ctrl/Meta + Z - Undo function (single step back only)
* Ctrl/Meta + I - Insert new row
* Ctrl/Meta + D - Delete selected row
* Ctrl/Meta + S - Export GeoJSON file


## About GeoRoots: Open Source Coffee Industry Tools for EUDR Compliance and geo traceability

GeoRoots is a collection of minimalistic, open-source tools designed specifically for the coffee industry to meet EU Deforestation Regulation (EUDR) requirements and enhance geo traceability.

Our philosophy is simple: provide useful tools that respect your privacy, work offline (where possible), and require no complex setup or subscription fees. Every tool runs entirely in your browser and can be downloaded for offline use.

### Why Use GeoRoots?

*   **100% Private**: All tools run locally in your browser. No data is ever transmitted to external servers.
*   **Open Source**: Fully open source and transparent. Inspect, modify, and contribute to the code.
*   **Offline Ready**: Download and use tools completely offline. Perfect for remote locations.
*   **Mobile Friendly**: Works seamlessly on desktop, tablet, and mobile devices.

### Perfect for:

*   Coffee producers and cooperatives
*   Smaller coffee traders and exporters
*   Coffee roasters and importers
*   Sustainability consultants

### Useful Resources

*   [EUDR DDS on LIVE Environment](https://eudr.webcloud.ec.europa.eu/tracesnt/)
*   [EUDR DDS on TEST Environment](https://acceptance.eudr.webcloud.ec.europa.eu/tracesnt/)
*   [EUDR on Green Forum](https://green-forum.ec.europa.eu/deforestation-regulation-implementation/information-system-deforestation-regulation_en)
*   [EUDR on EUR-Lex](https://eur-lex.europa.eu/legal-content/EN/HIS/?uri=CELEX:52024PC0452)

### Contributing

We welcome contributions! Please see our [contribution guidelines](CONTRIBUTING.md) for more information.

### License

This project is licensed under the GPLv3 License. See the [LICENSE](LICENSE) file for details.

### Contact

For any questions or feedback, please open an issue on this repository.
