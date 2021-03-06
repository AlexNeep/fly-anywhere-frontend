import React, { Component } from "react";

import { TextField } from "@material-ui/core";
import Suggestions from "../Suggestions/Suggestions";

import "./LocationChoice.css";
export default class LocationChoice extends Component {
  state = {
    locations: [{ name: "bla", code: "bla" }],
  };

  componentDidMount = () => {
    let IATA_codes = this.defineIATACodes();
    this.setState(() => ({ locations: IATA_codes }));
  };

  render() {
    return (
      <div className="selection-item">
        <div className="title">{this.props.title}</div>
        <TextField
          type="text"
          onChange={(event) => this.props.clickHandler(event.target.value)}
          value={this.props.origin}
          InputLabelProps={{
            shrink: false,
          }}
          InputProps={{ disableUnderline: true }}
        />
        <Suggestions
          locations={this.state.locations}
          clickHandler={this.props.clickHandler}
          origin={this.props.origin}
        />
      </div>
    );
  }

  defineIATACodes = () => {
    const IATA_codes = [
      { country: "Albania", name: "Tirana Airport", code: "TIA-SKY" },
      {
        country: "Armenia",
        name: "Yerevan Zvartnots Airport",
        code: "EVN-SKY",
      },
      { country: "Austria", name: "Graz Airport", code: "GRZ-SKY" },
      { country: "Austria", name: "Innsbruck Airport", code: "INN-SKY" },
      { country: "Austria", name: "Klagenfurt Airport", code: "KLU-SKY" },
      { country: "Austria", name: "Linz Airport", code: "LNZ-SKY" },
      { country: "Austria", name: "Salzburg Airport", code: "SZG-SKY" },
      { country: "Austria", name: "Vienna Airport", code: "VIE-SKY" },
      { country: "Azerbaijan", name: "Baku Airport", code: "GYD-SKY" },
      { country: "Belarus", name: "Minsk Airport", code: "MSQ-SKY" },
      { country: "Belgium", name: "Antwerp Airport", code: "ANR-SKY" },
      { country: "Belgium", name: "Brussels Airport", code: "BRU-SKY" },
      { country: "Belgium", name: "Charleroi Airport", code: "CRL-SKY" },
      { country: "Belgium", name: "Liege Airport", code: "LGG-SKY" },
      { country: "Belgium", name: "Ostend Bruges Airport", code: "OST-SKY" },
      {
        country: "Bosnia and Herzegovina",
        name: "Sarajevo Airport",
        code: "SJJ-SKY",
      },
      {
        country: "Bosnia and Herzegovina",
        name: "Tuzla Airport",
        code: "TZL-SKY",
      },
      { country: "Bulgaria", name: "Burgas Airport", code: "BOJ-SKY" },
      { country: "Bulgaria", name: "Sofia Airport", code: "SOF-SKY" },
      { country: "Bulgaria", name: "Varna Airport", code: "VAR-SKY" },
      { country: "Croatia", name: "Dubrovnik Airport", code: "DBV-SKY" },
      { country: "Croatia", name: "Pula Airport", code: "PUY-SKY" },
      { country: "Croatia", name: "Split Airport", code: "SPU-SKY" },
      { country: "Croatia", name: "Zadar Airport", code: "ZAD-SKY" },
      { country: "Croatia", name: "Zagreb Airport", code: "ZAG-SKY" },
      { country: "Cyprus", name: "Larnaca Airport", code: "LCA-SKY" },
      { country: "Cyprus", name: "Paphos Airport", code: "PFO-SKY" },
      { country: "Czech Republic", name: "Brno Airport", code: "BRQ-SKY" },
      { country: "Czech Republic", name: "Prague Airport", code: "PRG-SKY" },
      { country: "Denmark", name: "Aalborg Airport", code: "AAL-SKY" },
      { country: "Denmark", name: "Aarhus Airport", code: "AAR-SKY" },
      { country: "Denmark", name: "Billund Airport", code: "BLL-SKY" },
      { country: "Denmark", name: "Copenhagen Airport", code: "CPH-SKY" },
      { country: "Denmark", name: "Vágar Airport", code: "FAE-SKY" },
      { country: "Estonia", name: "Tallinn Airport", code: "TLL-SKY" },
      { country: "Finland", name: "Helsinki Airport", code: "HEL-SKY" },
      { country: "Finland", name: "Oulu Airport", code: "OUL-SKY" },
      { country: "Finland", name: "Rovaniemi Airport", code: "RVN-SKY" },
      { country: "Finland", name: "Tampere Airport", code: "TMP-SKY" },
      { country: "Finland", name: "Turku Airport", code: "TKU-SKY" },
      { country: "Finland", name: "Vaasa Airport", code: "VAA-SKY" },
      { country: "France", name: "Ajaccio Airport", code: "AJA-SKY" },
      { country: "France", name: "Bastia Airport", code: "BIA-SKY" },
      { country: "France", name: "Bergerac Airport", code: "EGC-SKY" },
      { country: "France", name: "Biarritz Airport", code: "BIQ-SKY" },
      { country: "France", name: "Bordeaux Airport", code: "BOD-SKY" },
      { country: "France", name: "Brest Bretagne Airport", code: "BES-SKY" },
      {
        country: "France",
        name: "Figari South Corsica Airport",
        code: "FSC-SKY",
      },
      { country: "France", name: "Lille Airport", code: "LIL-SKY" },
      {
        country: "France",
        name: "Lyon-Saint Exupéry Airport",
        code: "LYS-SKY",
      },
      { country: "France", name: "Marseille Airport", code: "MRS-SKY" },
      { country: "France", name: "Montpellier Airport", code: "MPL-SKY" },
      { country: "France", name: "Nantes Airport", code: "NTE-SKY" },
      { country: "France", name: "Nice Airport", code: "NCE-SKY" },
      { country: "France", name: "Paris Beauvais Airport", code: "BVA-SKY" },
      {
        country: "France",
        name: "Paris Charles de Gaulle Airport",
        code: "CDG-SKY",
      },
      { country: "France", name: "Paris Orly Airport", code: "ORY-SKY" },
      { country: "France", name: "Strasbourg Airport", code: "SXB-SKY" },
      { country: "France", name: "Rennes Bretagne Airport", code: "RNS-SKY" },
      {
        country: "France",
        name: "Réunion Roland Garros Airport",
        code: "RUN-SKY",
      },
      { country: "France", name: "Toulon-Hyères Airport", code: "TLN-SKY" },
      {
        country: "France",
        name: "Toulouse Blagnac Airport",
        code: "TLS-SKY",
      },
      { country: "Georgia", name: "Kutaisi Airport", code: "KUT-SKY" },
      { country: "Georgia", name: "Tbilisi Airport", code: "TBS-SKY" },
      {
        country: "Germany",
        name: "Allgäu Airport Memmingen",
        code: "FMM-SKY",
      },
      {
        country: "Germany",
        name: "Berlin Brandenburg Airport",
        code: "BER-SKY",
      },
      {
        country: "Germany",
        name: "Berlin Schönefeld Airport",
        code: "SXF-SKY",
      },
      { country: "Germany", name: "Berlin Tegel Airport", code: "TXL-SKY" },
      { country: "Germany", name: "Bremen Airport", code: "BRE-SKY" },
      { country: "Germany", name: "Cologne Bonn Airport", code: "CGN-SKY" },
      { country: "Germany", name: "Dortmund Airport", code: "DTM-SKY" },
      { country: "Germany", name: "Dresden Airport", code: "DRS-SKY" },
      { country: "Germany", name: "Düsseldorf Airport", code: "DUS-SKY" },
      { country: "Germany", name: "Frankfurt Airport", code: "FRA-SKY" },
      { country: "Germany", name: "Frankfurt-Hahn Airport", code: "HHN-SKY" },
      {
        country: "Germany",
        name: "Friedrichshafen Airport",
        code: "FDH-SKY",
      },
      { country: "Germany", name: "Hamburg Airport", code: "HAM-SKY" },
      { country: "Germany", name: "Hanover Airport", code: "HAJ-SKY" },
      {
        country: "Germany",
        name: "Karlsruhe Baden-Baden Airport",
        code: "FKB-SKY",
      },
      { country: "Germany", name: "Leipzig Halle Airport", code: "LEJ-SKY" },
      { country: "Germany", name: "Munich Airport", code: "MUC-SKY" },
      {
        country: "Germany",
        name: "Münster Osnabrück Airport",
        code: "FMO-SKY",
      },
      { country: "Germany", name: "Nuremberg Airport", code: "NUE-SKY" },
      {
        country: "Germany",
        name: "Paderborn Lippstadt Airport",
        code: "PAD-SKY",
      },
      { country: "Germany", name: "Stuttgart Airport", code: "STR-SKY" },
      { country: "Germany", name: "Weeze Airport", code: "NRN-SKY" },
      { country: "Greece", name: "Athens Airport", code: "ATH-SKY" },
      { country: "Greece", name: "Chania Airport", code: "CHQ-SKY" },
      { country: "Greece", name: "Corfu Airport", code: "CFU-SKY" },
      { country: "Greece", name: "Heraklion Airport", code: "HER-SKY" },
      { country: "Greece", name: "Kos Airport", code: "KGS-SKY" },
      { country: "Greece", name: "Mykonos Airport", code: "JMK-SKY" },
      { country: "Greece", name: "Rhodes Airport", code: "RHO-SKY" },
      { country: "Greece", name: "Santorini Airport", code: "JTR-SKY" },
      { country: "Greece", name: "Thessaloniki Airport", code: "SKG-SKY" },
      { country: "Greece", name: "Zante Airport", code: "ZTH-SKY" },
      { country: "Hungary", name: "Budapest Airport", code: "BUD-SKY" },
      { country: "Hungary", name: "Debrecen Airport", code: "DEB-SKY" },
      { country: "Iceland", name: "Keflavik Airport", code: "KEF-SKY" },
      { country: "Ireland", name: "Cork Airport", code: "ORK-SKY" },
      { country: "Ireland", name: "Dublin Airport", code: "DUB-SKY" },
      {
        country: "Ireland",
        name: "Ireland West Airport Knock",
        code: "NOC-SKY",
      },
      { country: "Ireland", name: "Kerry Airport", code: "KIR-SKY" },
      { country: "Ireland", name: "Shannon Airport", code: "SNN-SKY" },
      { country: "Italy", name: "Alghero Airport", code: "AHO-SKY" },
      { country: "Italy", name: "Ancona Airport", code: "AOI-SKY" },
      { country: "Italy", name: "Bari Airport", code: "BRI-SKY" },
      { country: "Italy", name: "Bergamo Airport", code: "BGY-SKY" },
      { country: "Italy", name: "Bologna Airport", code: "BLQ-SKY" },
      { country: "Italy", name: "Brindisi Airport", code: "BDS-SKY" },
      { country: "Italy", name: "Cagliari Airport", code: "CAG-SKY" },
      {
        country: "Italy",
        name: "Catania Fontanarossa Airport",
        code: "CTA-SKY",
      },
      { country: "Italy", name: "Comiso Airport", code: "CIY-SKY" },
      { country: "Italy", name: "Florence Airport", code: "FLR-SKY" },
      { country: "Italy", name: "Genoa Airport", code: "GOA-SKY" },
      { country: "Italy", name: "Lamezia Terme Airport", code: "SUF-SKY" },
      { country: "Italy", name: "Milan Linate Airport", code: "LIN-SKY" },
      { country: "Italy", name: "Milan Malpensa Airport", code: "MXP-SKY" },
      { country: "Italy", name: "Naples Airport", code: "NAP-SKY" },
      {
        country: "Italy",
        name: "Olbia Costa Smeralda Airport",
        code: "OLB-SKY",
      },
      { country: "Italy", name: "Palermo Airport", code: "PMO-SKY" },
      { country: "Italy", name: "Perugia Airport", code: "PEG-SKY" },
      { country: "Italy", name: "Pescara Airport", code: "PSR-SKY" },
      { country: "Italy", name: "Pisa Airport", code: "PSA-SKY" },
      { country: "Italy", name: "Rome Ciampino Airport", code: "CIA-SKY" },
      { country: "Italy", name: "Rome Fiumicino Airport", code: "FCO-SKY" },
      { country: "Italy", name: "Trapani Airport", code: "TPS-SKY" },
      { country: "Italy", name: "Treviso Airport", code: "TSF-SKY" },
      { country: "Italy", name: "Turin Airport", code: "TRN-SKY" },
      { country: "Italy", name: "Venice Airport", code: "VCE-SKY" },
      { country: "Italy", name: "Verona Airport", code: "VRN-SKY" },
      { country: "Kazakhstan", name: "Almaty Airport", code: "ALA-SKY" },
      { country: "Kazakhstan", name: "Astana Airport", code: "TSE-SKY" },
      { country: "Kosovo", name: "Pristina Airport", code: "PRN-SKY" },
      { country: "Latvia", name: "Riga Airport", code: "RIX-SKY" },
      { country: "Lithuania", name: "Kaunas Airport", code: "KUN-SKY" },
      { country: "Lithuania", name: "Vilnius Airport", code: "VNO-SKY" },
      { country: "Luxembourg", name: "Luxembourg Airport", code: "LUX-SKY" },
      { country: "Malta", name: "Malta Airport", code: "MLA-SKY" },
      { country: "Moldova", name: "Chisinau Airport", code: "KIV-SKY" },
      { country: "Montenegro", name: "Podgorica Airport", code: "TGD-SKY" },
      { country: "Montenegro", name: "Tivat Airport", code: "TIV-SKY" },
      {
        country: "Netherlands",
        name: "Amsterdam Airport Schiphol",
        code: "AMS-SKY",
      },
      { country: "Netherlands", name: "Eindhoven Airport", code: "EIN-SKY" },
      {
        country: "Netherlands",
        name: "Groningen Airport Eelde",
        code: "GRQ-SKY",
      },
      {
        country: "Netherlands",
        name: "Maastricht Aachen Airport",
        code: "MST-SKY",
      },
      {
        country: "Netherlands",
        name: "Rotterdam The Hague Airport",
        code: "RTM-SKY",
      },
      { country: "North Macedonia", name: "Skopje Airport", code: "SKP-SKY" },
      { country: "Norway", name: "Ålesund Airport", code: "AES-SKY" },
      { country: "Norway", name: "Bergen Airport", code: "BGO-SKY" },
      { country: "Norway", name: "Bodø Airport", code: "BOO-SKY" },
      { country: "Norway", name: "Haugesund Airport", code: "HAU-SKY" },
      { country: "Norway", name: "Kristiansand Airport", code: "KRS-SKY" },
      { country: "Norway", name: "Oslo Airport", code: "OSL-SKY" },
      { country: "Norway", name: "Sandefjord Airport Torp", code: "TRF-SKY" },
      { country: "Norway", name: "Stavanger Airport", code: "SVG-SKY" },
      { country: "Norway", name: "Tromsø Airport", code: "TOS-SKY" },
      { country: "Norway", name: "Trondheim Airport", code: "TRD-SKY" },
      { country: "Poland", name: "Gdansk Airport", code: "GDN-SKY" },
      { country: "Poland", name: "Katowice Airport", code: "KTW-SKY" },
      { country: "Poland", name: "Kraków Airport", code: "KRK-SKY" },
      { country: "Poland", name: "Poznan Airport", code: "POZ-SKY" },
      {
        country: "Poland",
        name: "Szczecin-Goleniów Airport",
        code: "SZZ-SKY",
      },
      { country: "Poland", name: "Warsaw Airport", code: "WAW-SKY" },
      { country: "Poland", name: "Warsaw Modlin Airport", code: "WMI-SKY" },
      { country: "Poland", name: "Wroclaw Airport", code: "WRO-SKY" },
      { country: "Portugal", name: "Faro Airport", code: "FAO-SKY" },
      { country: "Portugal", name: "Lisbon Airport", code: "LIS-SKY" },
      { country: "Portugal", name: "Madeira Airport", code: "FNC-SKY" },
      { country: "Portugal", name: "Ponta Delgada Airport", code: "PDL-SKY" },
      { country: "Portugal", name: "Porto Airport", code: "OPO-SKY" },
      {
        country: "Romania",
        name: "Bucharest Henri Coanda Airport",
        code: "OTP-SKY",
      },
      { country: "Romania", name: "Cluj-Napoca Airport", code: "CLJ-SKY" },
      { country: "Romania", name: "Iasi Airport", code: "IAS-SKY" },
      { country: "Romania", name: "Timisoara Airport", code: "TSR-SKY" },
      { country: "Russia", name: "Koltsovo Airport", code: "SVX-SKY" },
      { country: "Russia", name: "Krasnodar Airport", code: "KRR-SKY" },
      {
        country: "Russia",
        name: "Moscow Domodedovo Airport",
        code: "DME-SKY",
      },
      {
        country: "Russia",
        name: "Moscow Sheremetyevo Airport",
        code: "SVO-SKY",
      },
      { country: "Russia", name: "Moscow Vnukovo Airport", code: "VKO-SKY" },
      {
        country: "Russia",
        name: "Moscow Zhukovsky Airport",
        code: "ZIA-SKY",
      },
      {
        country: "Russia",
        name: "Novosibirsk Tolmachevo Airport",
        code: "OVB-SKY",
      },
      {
        country: "Russia",
        name: "Saint Petersburg Pulkovo Airport",
        code: "LED-SKY",
      },
      { country: "Russia", name: "Sochi Airport", code: "AER-SKY" },
      {
        country: "Serbia",
        name: "Belgrade Nikola Tesla Airport",
        code: "BEG-SKY",
      },
      { country: "Serbia", name: "Niš Airport", code: "INI-SKY" },
      { country: "Slovakia", name: "Bratislava Airport", code: "BTS-SKY" },
      { country: "Slovakia", name: "Košice Airport", code: "KSC-SKY" },
      { country: "Slovenia", name: "Ljubljana Airport", code: "LJU-SKY" },
      { country: "Spain", name: "Alicante Airport", code: "ALC-SKY" },
      { country: "Spain", name: "Almeria Airport", code: "LEI-SKY" },
      { country: "Spain", name: "Asturias Airport", code: "OVD-SKY" },
      { country: "Spain", name: "Barcelona Airport", code: "BCN-SKY" },
      { country: "Spain", name: "Bilbao Airport", code: "BIO-SKY" },
      { country: "Spain", name: "Fuerteventura Airport", code: "FUE-SKY" },
      { country: "Spain", name: "Girona Airport", code: "GRO-SKY" },
      { country: "Spain", name: "Gran Canaria Airport", code: "LPA-SKY" },
      { country: "Spain", name: "Granada-Jaén Airport", code: "GRX-SKY" },
      { country: "Spain", name: "Ibiza Airport", code: "IBZ-SKY" },
      { country: "Spain", name: "Jerez Airport", code: "XRY-SKY" },
      { country: "Spain", name: "La Palma Airport", code: "SPC-SKY" },
      { country: "Spain", name: "Lanzarote Airport", code: "ACE-SKY" },
      { country: "Spain", name: "Madrid Barajas Airport", code: "MAD-SKY" },
      { country: "Spain", name: "Malaga Airport", code: "AGP-SKY" },
      { country: "Spain", name: "Menorca Airport", code: "MAH-SKY" },
      {
        country: "Spain",
        name: "Palma de Mallorca Airport",
        code: "PMI-SKY",
      },
      { country: "Spain", name: "Región de Murcia Airport", code: "RMU-SKY" },
      { country: "Spain", name: "Reus Airport", code: "REU-SKY" },
      { country: "Spain", name: "Santander Airport", code: "SDR-SKY" },
      {
        country: "Spain",
        name: "Santiago de Compostela Airport",
        code: "SCQ-SKY",
      },
      { country: "Spain", name: "Seville Airport", code: "SVQ-SKY" },
      { country: "Spain", name: "Tenerife North Airport", code: "TFN-SKY" },
      { country: "Spain", name: "Tenerife South Airport", code: "TFS-SKY" },
      { country: "Spain", name: "Valencia Airport", code: "VLC-SKY" },
      { country: "Spain", name: "Zaragoza Airport", code: "ZAZ-SKY" },
      {
        country: "Sweden",
        name: "Gothenburg Landvetter Airport",
        code: "GOT-SKY",
      },
      { country: "Sweden", name: "Malmö Airport", code: "MMX-SKY" },
      {
        country: "Sweden",
        name: "Stockholm Arlanda Airport",
        code: "ARN-SKY",
      },
      {
        country: "Sweden",
        name: "Stockholm Bromma Airport",
        code: "BMA-SKY",
      },
      {
        country: "Sweden",
        name: "Stockholm Skavsta Airport",
        code: "NYO-SKY",
      },
      {
        country: "Sweden",
        name: "Stockholm Västerås Airport",
        code: "VST-SKY",
      },
      {
        country: "Switzerland",
        name: "Basel Mulhouse Freiburg Airport",
        code: "BSL-SKY",
      },
      { country: "Switzerland", name: "Bern Airport", code: "BRN-SKY" },
      { country: "Switzerland", name: "Geneva Airport", code: "GVA-SKY" },
      { country: "Switzerland", name: "Zurich Airport", code: "ZRH-SKY" },
      { country: "Turkey", name: "Adana Airport", code: "ADA-SKY" },
      { country: "Turkey", name: "Ankara Esenboga Airport", code: "ESB-SKY" },
      { country: "Turkey", name: "Antalya Airport", code: "AYT-SKY" },
      { country: "Turkey", name: "Dalaman Airport", code: "DLM-SKY" },
      { country: "Turkey", name: "Istanbul New Airport", code: "IST-SKY" },
      {
        country: "Turkey",
        name: "Istanbul Sabiha Gökcen Airport",
        code: "SAW-SKY",
      },
      {
        country: "Turkey",
        name: "Izmir Adnan Menderes Airport",
        code: "ADB-SKY",
      },
      { country: "Turkey", name: "Milas-Bodrum Airport", code: "BJV-SKY" },
      { country: "Turkey", name: "Trabzon Airport", code: "TZX-SKY" },
      { country: "Ukraine", name: "Kharkiv Airport", code: "HRK-SKY" },
      { country: "Ukraine", name: "Kiev Boryspil Airport", code: "KBP-SKY" },
      { country: "Ukraine", name: "Kiev Zhuliany Airport", code: "IEV-SKY" },
      { country: "Ukraine", name: "Lviv Airport", code: "LWO-SKY" },
      { country: "Ukraine", name: "Odessa Airport", code: "ODS-SKY" },
      {
        country: "United Kingdom",
        name: "Aberdeen Airport",
        code: "ABZ-SKY",
      },
      {
        country: "United Kingdom",
        name: "Belfast City Airport",
        code: "BHD-SKY",
      },
      {
        country: "United Kingdom",
        name: "Belfast International Airport",
        code: "BFS-SKY",
      },
      {
        country: "United Kingdom",
        name: "Birmingham Airport",
        code: "BHX-SKY",
      },
      { country: "United Kingdom", name: "Bristol Airport", code: "BRS-SKY" },
      { country: "United Kingdom", name: "Cardiff Airport", code: "CWL-SKY" },
      {
        country: "United Kingdom",
        name: "Doncaster Sheffield Airport",
        code: "DSA-SKY",
      },
      {
        country: "United Kingdom",
        name: "East Midlands Airport",
        code: "EMA-SKY",
      },
      {
        country: "United Kingdom",
        name: "Edinburgh Airport",
        code: "EDI-SKY",
      },
      { country: "United Kingdom", name: "Exeter Airport", code: "EXT-SKY" },
      { country: "United Kingdom", name: "Glasgow Airport", code: "GLA-SKY" },
      {
        country: "United Kingdom",
        name: "Glasgow Prestwick Airport",
        code: "PIK-SKY",
      },
      {
        country: "United Kingdom",
        name: "Humberside Airport",
        code: "HUY-SKY",
      },
      { country: "United Kingdom", name: "Jersey Airport", code: "JER-SKY" },
      {
        country: "United Kingdom",
        name: "Leeds Bradford Airport",
        code: "LBA-SKY",
      },
      {
        country: "United Kingdom",
        name: "Liverpool Airport",
        code: "LPL-SKY",
      },
      {
        country: "United Kingdom",
        name: "London City Airport",
        code: "LCY-SKY",
      },
      {
        country: "United Kingdom",
        name: "London Gatwick Airport",
        code: "LGW-SKY",
      },
      {
        country: "United Kingdom",
        name: "London Heathrow Airport",
        code: "LHR-SKY",
      },
      {
        country: "United Kingdom",
        name: "London Luton Airport",
        code: "LTN-SKY",
      },
      {
        country: "United Kingdom",
        name: "London Southend Airport",
        code: "SEN-SKY",
      },
      {
        country: "United Kingdom",
        name: "London Stansted Airport",
        code: "STN-SKY",
      },
      {
        country: "United Kingdom",
        name: "Manchester Airport",
        code: "MAN-SKY",
      },
      {
        country: "United Kingdom",
        name: "Newcastle Airport",
        code: "NCL-SKY",
      },
      {
        country: "United Kingdom",
        name: "Southampton Airport",
        code: "SOU-SKY",
      },
    ];
    return IATA_codes;
  };
}
