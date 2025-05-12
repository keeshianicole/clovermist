export interface City {
  name: string;
  slug: string;
  county: string;
  description?: string;
  floodRisk?: string;
  commonIssues?: string[];
  landmarks?: string[];
  waterTable?: string;
  outboundLinks?: {
    title: string;
    url: string;
    description: string;
  }[];
}

export const bergenCountyCities: City[] = [
  {
    name: "Allendale",
    slug: "allendale",
    county: "Bergen",
    description: "A suburban community with historic homes and extensive residential developments requiring reliable basement protection",
    floodRisk: "Moderate, particularly near Allendale Brook and the Ho-Ho-Kus Brook watershed",
    commonIssues: [
      "Aging sump pump systems in historic homes",
      "Spring thaw flooding concerns",
      "High water table in areas near brooks"
    ],
    landmarks: ["Crestwood Lake", "Allendale Train Station", "West Crescent Avenue Historic District"],
    waterTable: "Variable, with higher levels near water bodies",
    outboundLinks: [
      {
        title: "Borough of Allendale Official Website",
        url: "https://www.allendalenj.gov/",
        description: "Official municipal website with local regulations and community information"
      },
      {
        title: "Allendale Chamber of Commerce",
        url: "https://www.allendalecc.com/",
        description: "Local business community and events"
      },
      {
        title: "FEMA Flood Map Service - Allendale",
        url: "https://msc.fema.gov/portal/search?AddressQuery=allendale%20nj",
        description: "Official flood zone information for Allendale properties"
      }
    ]
  },
  {
    name: "Alpine",
    slug: "alpine",
    county: "Bergen",
    description: "An affluent community with luxury homes featuring complex basement waterproofing needs",
    floodRisk: "Low to moderate, with specific concerns along the Palisades cliffs",
    commonIssues: [
      "Multi-pump systems in large estates",
      "Complex drainage requirements",
      "Cliff-side water management"
    ],
    landmarks: ["Palisades Interstate Park", "Alpine Boat Basin", "The Cloisters"],
    waterTable: "Deep due to elevation, but surface water management critical",
    outboundLinks: [
      {
        title: "Alpine, New Jersey Official Site",
        url: "https://www.alpinenj07620.org/",
        description: "Municipal website with local ordinances and community updates"
      },
      {
        title: "Palisades Interstate Park Commission",
        url: "https://www.njpalisades.org/",
        description: "Information about the Palisades region and local geography"
      },
      {
        title: "Alpine Environmental Commission",
        url: "https://www.alpinenj07620.org/ec",
        description: "Local environmental resources and regulations"
      }
    ]
  },
  {
    name: "Bergenfield",
    slug: "bergenfield",
    county: "Bergen",
    description: "A densely populated suburban area with diverse housing stock and varying basement waterproofing needs",
    floodRisk: "Moderate to high, especially near Cooper's Pond and the Hackensack River watershed",
    commonIssues: [
      "Older sump pump systems needing upgrades",
      "Storm-related flooding",
      "Multiple pump configurations in split-level homes"
    ],
    landmarks: ["Cooper's Pond", "Foster Village Shopping Center", "Bergenfield Museum"],
    waterTable: "High in eastern sections near water bodies",
    outboundLinks: [
      {
        title: "Borough of Bergenfield",
        url: "https://www.bergenfield.com/",
        description: "Official town website with community resources"
      },
      {
        title: "Bergenfield Public Library",
        url: "https://www.bergenfieldlibrary.org/",
        description: "Local history and community information"
      },
      {
        title: "Bergen County Soil Conservation District",
        url: "https://www.bergenscd.org/",
        description: "Soil and water management resources for the region"
      }
    ]
  },
  {
    name: "Bogota",
    slug: "bogota",
    county: "Bergen",
    description: "A riverside community with unique water management challenges due to its proximity to the Hackensack River",
    floodRisk: "High, especially in areas near the Hackensack River",
    commonIssues: [
      "River-related flooding concerns",
      "High water table management",
      "Storm surge protection"
    ],
    landmarks: ["Bogota Golf Center", "Hackensack River", "Oscar E. Olsen Park"],
    waterTable: "High due to riverside location",
    outboundLinks: [
      {
        title: "Borough of Bogota Official Website",
        url: "https://www.bogotaonline.org/",
        description: "Official municipal website with local regulations and flood information"
      },
      {
        title: "Bergen County Office of Emergency Management",
        url: "https://www.co.bergen.nj.us/emergency-management",
        description: "County-level emergency management and flood response resources"
      },
      {
        title: "USGS Water Data - Hackensack River",
        url: "https://waterdata.usgs.gov/nj/nwis/",
        description: "Real-time water level data for the Hackensack River"
      }
    ]
  },
  {
    name: "Carlstadt",
    slug: "carlstadt",
    county: "Bergen",
    description: "An industrial and residential community with unique water management needs due to its location in the Meadowlands region",
    floodRisk: "High, particularly in areas near the Hackensack River and meadowlands",
    commonIssues: [
      "Industrial building sump systems",
      "Meadowlands flooding impact",
      "High water table challenges"
    ],
    landmarks: ["Meadowlands Sports Complex", "Carlstadt Industrial Park", "Berry's Creek"],
    waterTable: "High due to meadowlands location",
    outboundLinks: [
      {
        title: "Borough of Carlstadt Official Website",
        url: "https://www.carlstadtnj.us/",
        description: "Official municipal website with local regulations and flood information"
      },
      {
        title: "NJSEA - New Jersey Sports and Exposition Authority",
        url: "https://www.njsea.com/",
        description: "Regional planning and environmental protection agency for the Meadowlands District"
      },
      {
        title: "Bergen County Soil Conservation District",
        url: "https://www.bergenscd.org/",
        description: "Local soil and water conservation resources"
      }
    ]
  },
  {
    name: "Cliffside Park",
    slug: "cliffside-park",
    county: "Bergen",
    description: "A hillside community with unique drainage challenges due to its elevation changes",
    floodRisk: "Moderate, with specific concerns on steep slopes",
    commonIssues: [
      "Multi-level drainage systems",
      "Cliff-side water management",
      "Storm runoff challenges"
    ],
    landmarks: ["Palisades Cliffs", "Anderson Park", "Cliffside Park Town Centre"],
    waterTable: "Variable due to elevation differences",
    outboundLinks: [
      {
        title: "Borough of Cliffside Park",
        url: "https://www.cliffsideparknj.gov/",
        description: "Municipal website with community information and local regulations"
      },
      {
        title: "Palisades Interstate Park Commission",
        url: "https://www.njpalisades.org/",
        description: "Information about the Palisades region geology and water management"
      },
      {
        title: "Bergen County Division of Planning",
        url: "https://www.co.bergen.nj.us/planning-and-engineering",
        description: "County-level planning and engineering resources"
      }
    ]
  },
  {
    name: "Closter",
    slug: "closter",
    county: "Bergen",
    description: "A historic borough with established residential areas requiring comprehensive basement protection",
    floodRisk: "Moderate, particularly in areas near brooks and streams",
    commonIssues: [
      "Historic home drainage systems",
      "Seasonal groundwater fluctuations",
      "Storm runoff management"
    ],
    landmarks: ["Closter Nature Center", "Closter Plaza", "Historic Railroad Station"],
    waterTable: "Variable, with seasonal fluctuations",
    outboundLinks: [
      {
        title: "Borough of Closter Official Site",
        url: "https://www.closternj.us/",
        description: "Municipal website with local ordinances and community information"
      },
      {
        title: "Closter Nature Center",
        url: "https://www.closternaturecenter.org/",
        description: "Local environmental education and watershed information"
      },
      {
        title: "Bergen County Historical Society",
        url: "https://www.bergencountyhistory.org/",
        description: "Historical information about Closter and Bergen County"
      }
    ]
  },
  {
    name: "Cresskill",
    slug: "cresskill",
    county: "Bergen",
    description: "A suburban community with diverse housing stock and varying elevation challenges",
    floodRisk: "Moderate to high in low-lying areas",
    commonIssues: [
      "Multi-level drainage requirements",
      "Spring thaw concerns",
      "Storm surge protection"
    ],
    landmarks: ["Cresskill Public Library", "Cresskill Municipal Complex", "Cresskill Community Center"],
    waterTable: "Varies by elevation",
    outboundLinks: [
      {
        title: "Borough of Cresskill",
        url: "https://www.cresskillboro.com/",
        description: "Official municipal website with community resources"
      },
      {
        title: "Cresskill Environmental Commission",
        url: "https://www.cresskillboro.com/bc-environmental-commission",
        description: "Local environmental protection and water management information"
      },
      {
        title: "Bergen County Utilities Authority",
        url: "https://www.bcua.org/",
        description: "Regional water management and environmental services"
      }
    ]
  },
  {
    name: "Demarest",
    slug: "demarest",
    county: "Bergen",
    description: "An established community with historic homes and modern developments requiring comprehensive water management",
    floodRisk: "Moderate, with specific concerns near waterways",
    commonIssues: [
      "Historic property drainage",
      "Modern system integration",
      "Watershed management"
    ],
    landmarks: ["Demarest Nature Center", "Duck Pond", "Demarest Train Station"],
    waterTable: "Moderate with seasonal variations",
    outboundLinks: [
      {
        title: "Borough of Demarest",
        url: "https://www.demarestnj.net/",
        description: "Official borough website with local regulations and resources"
      },
      {
        title: "Demarest Nature Center",
        url: "https://www.demarestnaturecenter.org/",
        description: "Local environmental education and watershed information"
      },
      {
        title: "Bergen County Parks Department",
        url: "https://www.co.bergen.nj.us/parks",
        description: "County parks and recreation areas information"
      }
    ]
  },
  {
    name: "Dumont",
    slug: "dumont",
    county: "Bergen",
    description: "A residential community with diverse housing stock and varying basement protection needs",
    floodRisk: "Moderate to high in certain neighborhoods",
    commonIssues: [
      "Aging infrastructure",
      "Storm drainage capacity",
      "Basement flooding prevention"
    ],
    landmarks: ["Twin-Boro Field", "Dumont Senior Center", "Memorial Park"],
    waterTable: "Variable throughout borough",
    outboundLinks: [
      {
        title: "Borough of Dumont",
        url: "https://www.dumontnj.gov/",
        description: "Municipal website with community information"
      },
      {
        title: "Dumont Public Library",
        url: "https://www.dumont.bccls.org/",
        description: "Community resources and local history"
      },
      {
        title: "Bergen County Soil Conservation District",
        url: "https://www.bergenscd.org/",
        description: "Soil and water management resources"
      }
    ]
  },
  {
    name: "East Rutherford",
    slug: "east-rutherford",
    county: "Bergen",
    description: "A dynamic community in the Meadowlands region with complex water management needs",
    floodRisk: "High, particularly in the Meadowlands area",
    commonIssues: [
      "Meadowlands flooding impact",
      "Commercial property protection",
      "Sports complex area drainage"
    ],
    landmarks: ["MetLife Stadium", "American Dream Mall", "Meadowlands Arena"],
    waterTable: "High due to meadowlands location",
    outboundLinks: [
      {
        title: "Borough of East Rutherford",
        url: "https://www.eastrutherfordnj.net/",
        description: "Official municipal website with community information"
      },
      {
        title: "New Jersey Sports and Exposition Authority",
        url: "https://www.njsea.com/",
        description: "Regional development and environmental management"
      },
      {
        title: "Bergen County Division of Planning",
        url: "https://www.co.bergen.nj.us/planning-and-engineering",
        description: "County planning and flood management resources"
      }
    ]
  },
  {
    name: "Edgewater",
    slug: "edgewater",
    county: "Bergen",
    description: "A waterfront community with unique challenges due to its Hudson River location",
    floodRisk: "High, particularly in areas near the Hudson River",
    commonIssues: [
      "Waterfront property protection",
      "High water table management",
      "Storm surge concerns"
    ],
    landmarks: ["Hudson River Waterfront", "Edgewater Marina", "Veterans Field"],
    waterTable: "High due to riverfront location",
    outboundLinks: [
      {
        title: "Borough of Edgewater Official Website",
        url: "https://www.edgewaternj.org/",
        description: "Municipal website with local regulations and flood information"
      },
      {
        title: "Hudson River Waterfront Conservancy",
        url: "https://www.hudsonriverwaterfront.org/",
        description: "Information about waterfront management and conservation"
      },
      {
        title: "FEMA Flood Map Service - Edgewater",
        url: "https://msc.fema.gov/portal/search?AddressQuery=edgewater%20nj",
        description: "Official flood zone information for Edgewater properties"
      }
    ]
  },
  {
    name: "Elmwood Park",
    slug: "elmwood-park",
    county: "Bergen",
    description: "A riverside community with significant flood protection needs due to Passaic River proximity",
    floodRisk: "High, especially near the Passaic River",
    commonIssues: [
      "River flooding concerns",
      "Multiple pump configurations",
      "Power outage protection"
    ],
    landmarks: ["Passaic River", "River Drive", "Borough Hall"],
    waterTable: "High in areas near the river",
    outboundLinks: [
      {
        title: "Borough of Elmwood Park",
        url: "https://www.elmwoodparknj.gov/",
        description: "Official municipal website with community resources"
      },
      {
        title: "Passaic River Coalition",
        url: "https://www.passaicriver.org/",
        description: "River management and flood prevention information"
      },
      {
        title: "Bergen County Office of Emergency Management",
        url: "https://www.co.bergen.nj.us/emergency-management",
        description: "County-level emergency management resources"
      }
    ]
  },
  {
    name: "Emerson",
    slug: "emerson",
    county: "Bergen",
    description: "A suburban community with varied terrain and diverse water management needs",
    floodRisk: "Moderate, with specific concerns near Oradell Reservoir",
    commonIssues: [
      "Reservoir impact management",
      "Storm drainage systems",
      "Seasonal water table changes"
    ],
    landmarks: ["Oradell Reservoir", "Emerson Public Library", "Soldier Hill Golf Club"],
    waterTable: "Variable, higher near reservoir",
    outboundLinks: [
      {
        title: "Borough of Emerson",
        url: "https://www.emersonnj.org/",
        description: "Municipal website with local information and resources"
      },
      {
        title: "Suez Water New Jersey",
        url: "https://www.mysuezwater.com/new-jersey",
        description: "Water management and reservoir information"
      },
      {
        title: "Bergen County Utilities Authority",
        url: "https://www.bcua.org/",
        description: "Regional water management resources"
      }
    ]
  },
  {
    name: "Englewood",
    slug: "englewood",
    county: "Bergen",
    description: "A diverse city with varying elevation and comprehensive water management needs",
    floodRisk: "Moderate to high in low-lying areas",
    commonIssues: [
      "Multi-level drainage requirements",
      "Historic infrastructure updates",
      "Commercial property protection"
    ],
    landmarks: ["Englewood Hospital", "Bergen Performing Arts Center", "Flat Rock Brook Nature Center"],
    waterTable: "Varies by location and elevation",
    outboundLinks: [
      {
        title: "City of Englewood",
        url: "https://www.cityofenglewood.org/",
        description: "Official city website with municipal services information"
      },
      {
        title: "Flat Rock Brook Nature Center",
        url: "https://www.flatrockbrook.org/",
        description: "Local environmental education and watershed information"
      },
      {
        title: "Bergen County Planning Board",
        url: "https://www.co.bergen.nj.us/planning-board",
        description: "County-level planning and development resources"
      }
    ]
  },
  {
    name: "Englewood Cliffs",
    slug: "englewood-cliffs",
    county: "Bergen"
  },
  {
    name: "Fair Lawn",
    slug: "fair-lawn",
    county: "Bergen",
    description: "A vibrant suburban community with diverse housing stock and specific water management needs",
    floodRisk: "Moderate to high, particularly near the Passaic River and Saddle River",
    commonIssues: [
      "River-proximity flooding",
      "Multiple pump configurations",
      "Storm surge protection"
    ],
    landmarks: ["Fair Lawn Municipal Building", "Saddle River County Park", "Memorial Park"],
    waterTable: "High in areas near rivers",
    outboundLinks: [
      {
        title: "Borough of Fair Lawn Official Website",
        url: "https://www.fairlawn.org/",
        description: "Municipal website with local regulations and flood information"
      },
      {
        title: "USGS Water Data - Passaic River at Fair Lawn",
        url: "https://waterdata.usgs.gov/nwis/uv?site_no=01389500",
        description: "Real-time water level data for the Passaic River"
      },
      {
        title: "Bergen County Office of Emergency Management",
        url: "https://www.co.bergen.nj.us/emergency-management",
        description: "County-level emergency management resources"
      }
    ]
  },
  {
    name: "Fairview",
    slug: "fairview",
    county: "Bergen",
    description: "A densely populated borough with unique drainage challenges due to its hillside location",
    floodRisk: "Moderate, with specific concerns on steep slopes",
    commonIssues: [
      "Multi-level drainage systems",
      "Hillside water management",
      "Storm runoff control"
    ],
    landmarks: ["Fairview Borough Hall", "Fairview Public Library", "Bergen County Vocational School"],
    waterTable: "Variable due to elevation differences",
    outboundLinks: [
      {
        title: "Borough of Fairview",
        url: "https://www.fairviewborough.com/",
        description: "Official municipal website with community information"
      },
      {
        title: "Bergen County Soil Conservation District",
        url: "https://www.bergenscd.org/",
        description: "Soil and water management resources"
      },
      {
        title: "NJ DEP Division of Water Quality",
        url: "https://www.nj.gov/dep/dwq/",
        description: "State water quality regulations and resources"
      }
    ]
  },
  {
    name: "Fort Lee",
    slug: "fort-lee",
    county: "Bergen",
    description: "A dynamic urban community with complex water management needs due to its location near the Hudson River and Palisades",
    floodRisk: "Moderate to high, varying by elevation and proximity to water",
    commonIssues: [
      "High-rise building systems",
      "Cliff-side drainage",
      "Urban flooding prevention"
    ],
    landmarks: ["Fort Lee Historic Park", "George Washington Bridge", "Constitution Park"],
    waterTable: "Variable, affected by Hudson River and elevation",
    outboundLinks: [
      {
        title: "Borough of Fort Lee",
        url: "https://www.fortleenj.org/",
        description: "Official borough website with local regulations"
      },
      {
        title: "Palisades Interstate Park Commission",
        url: "https://www.njpalisades.org/",
        description: "Information about local geology and water management"
      },
      {
        title: "Port Authority of NY & NJ",
        url: "https://www.panynj.gov/",
        description: "Regional infrastructure and environmental information"
      }
    ]
  },
  {
    name: "Franklin Lakes",
    slug: "franklin-lakes",
    county: "Bergen",
    description: "An upscale suburban community with extensive lakefront properties and unique water management challenges",
    floodRisk: "Moderate, particularly near Franklin Lake and Indian Lake",
    commonIssues: [
      "Lakefront property protection",
      "Estate-size system design",
      "Natural spring management"
    ],
    landmarks: ["Franklin Lake", "Indian Lake", "Franklin Lakes Nature Preserve"],
    waterTable: "High near lakes and natural springs",
    outboundLinks: [
      {
        title: "Borough of Franklin Lakes",
        url: "https://www.franklinlakes.org/",
        description: "Municipal website with community resources"
      },
      {
        title: "Franklin Lakes Environmental Commission",
        url: "https://www.franklinlakes.org/environmental-commission",
        description: "Local environmental protection information"
      },
      {
        title: "NJDEP Bureau of Dam Safety",
        url: "https://www.nj.gov/dep/damsafety/",
        description: "State regulations for lake and dam management"
      }
    ]
  },
  {
    name: "Garfield",
    slug: "garfield",
    county: "Bergen",
    description: "A diverse urban community with varying water management challenges",
    floodRisk: "High, particularly in areas near the Passaic River",
    commonIssues: [
      "Urban flooding concerns",
      "Aging infrastructure",
      "River-related water management"
    ],
    landmarks: ["Garfield City Hall", "Passaic River", "20th Century Park"],
    waterTable: "High near river, variable elsewhere",
    outboundLinks: [
      {
        title: "City of Garfield Official Website",
        url: "https://www.garfieldnj.org/",
        description: "Municipal website with community information"
      },
      {
        title: "Passaic Valley Water Commission",
        url: "https://www.pvwc.com/",
        description: "Regional water management information"
      },
      {
        title: "Bergen County Utilities Authority",
        url: "https://www.bcua.org/",
        description: "County water and utilities information"
      }
    ]
  },
  {
    name: "Glen Rock",
    slug: "glen-rock",
    county: "Bergen",
    description: "A well-established suburban community with unique topographical challenges",
    floodRisk: "Moderate, with specific concerns in valley areas",
    commonIssues: [
      "Elevation-related drainage",
      "Storm water management",
      "Spring thaw concerns"
    ],
    landmarks: ["Glen Rock Borough Hall", "Glen Rock Duck Pond", "Glen Rock Arboretum"],
    waterTable: "Varies by elevation",
    outboundLinks: [
      {
        title: "Borough of Glen Rock",
        url: "https://www.glenrocknj.net/",
        description: "Official borough website with local information"
      },
      {
        title: "Glen Rock Environmental Commission",
        url: "https://www.glenrocknj.net/ec",
        description: "Local environmental resources"
      },
      {
        title: "Bergen County Watershed Management",
        url: "https://www.co.bergen.nj.us/watershed-management",
        description: "County watershed information"
      }
    ]
  },
  {
    name: "Hackensack",
    slug: "hackensack",
    county: "Bergen",
    description: "The county seat with diverse residential and commercial properties requiring comprehensive water management",
    floodRisk: "High, especially near the Hackensack River",
    commonIssues: [
      "River flooding impact",
      "Commercial building systems",
      "Urban drainage challenges"
    ],
    landmarks: ["Bergen County Courthouse", "Hackensack University Medical Center", "The Green"],
    waterTable: "High throughout most areas",
    outboundLinks: [
      {
        title: "City of Hackensack",
        url: "https://www.hackensack.org/",
        description: "Official city website with municipal services"
      },
      {
        title: "Hackensack Riverkeeper",
        url: "https://www.hackensackriverkeeper.org/",
        description: "River conservation and water quality information"
      },
      {
        title: "Bergen County Administration",
        url: "https://www.co.bergen.nj.us/",
        description: "County government resources"
      }
    ]
  },
  {
    name: "Harrington Park",
    slug: "harrington-park",
    county: "Bergen",
    description: "A residential community with unique water management challenges near the Oradell Reservoir",
    floodRisk: "Moderate, particularly near the reservoir and local streams",
    commonIssues: [
      "Reservoir proximity concerns",
      "Storm water management",
      "Seasonal flooding prevention"
    ],
    landmarks: ["Harrington Park Borough Hall", "Highland Field", "Beechwood Park"],
    waterTable: "Variable, higher near water bodies",
    outboundLinks: [
      {
        title: "Borough of Harrington Park",
        url: "https://www.harringtonparknj.gov/",
        description: "Official borough website with community information and local regulations"
      },
      {
        title: "Harrington Park Environmental Commission",
        url: "https://www.harringtonparknj.gov/ec",
        description: "Local environmental protection and water management resources"
      },
      {
        title: "Bergen County Watershed Management",
        url: "https://www.co.bergen.nj.us/watershed-management",
        description: "County watershed and flood prevention information"
      }
    ]
  },
  {
    name: "Hasbrouck Heights",
    slug: "hasbrouck-heights",
    county: "Bergen",
    description: "A well-established community with diverse residential areas requiring comprehensive basement protection",
    floodRisk: "Moderate, with specific concerns during heavy rainfall",
    commonIssues: [
      "Storm drainage management",
      "Aging sump pump systems",
      "Power outage protection"
    ],
    landmarks: ["Hasbrouck Heights Municipal Building", "Depken Field", "Boulevard Business District"],
    waterTable: "Variable throughout borough",
    outboundLinks: [
      {
        title: "Borough of Hasbrouck Heights",
        url: "https://www.hasbrouck-heights.nj.us/",
        description: "Official municipal website with local regulations and community information"
      },
      {
        title: "Hasbrouck Heights Chamber of Commerce",
        url: "https://www.heightschamber.org/",
        description: "Local business directory and community events"
      },
      {
        title: "Bergen County Division of Planning",
        url: "https://www.co.bergen.nj.us/planning-and-engineering",
        description: "County planning and development resources"
      }
    ]
  },
  {
    name: "Haworth",
    slug: "haworth",
    county: "Bergen",
    description: "A charming suburban community with unique water management needs",
    floodRisk: "Moderate, particularly near Haworth Brook",
    commonIssues: [
      "Brook-related flooding",
      "Seasonal water table fluctuations",
      "Storm water management"
    ],
    landmarks: ["Haworth Country Club", "Haworth Public Library", "White Beeches Golf Course"],
    waterTable: "Variable, higher near water bodies",
    outboundLinks: [
      {
        title: "Borough of Haworth",
        url: "https://www.haworthnj.org/",
        description: "Official borough website with community resources"
      },
      {
        title: "Haworth Environmental Commission",
        url: "https://www.haworthnj.org/environmental-commission",
        description: "Local environmental protection and water management"
      },
      {
        title: "Bergen County Soil Conservation District",
        url: "https://www.bergenscd.org/",
        description: "Soil and water management resources"
      }
    ]
  },
  {
    name: "Hillsdale",
    slug: "hillsdale",
    county: "Bergen",
    description: "A residential community with varying elevation and water management challenges",
    floodRisk: "Moderate to high, especially near Pascack Brook",
    commonIssues: [
      "Brook flooding concerns",
      "Elevation-related drainage",
      "Storm water control"
    ],
    landmarks: ["Hillsdale Train Station", "Beechwood Park", "Veterans Memorial Park"],
    waterTable: "Varies by location and elevation",
    outboundLinks: [
      {
        title: "Borough of Hillsdale",
        url: "https://www.hillsdalenj.org/",
        description: "Official municipal website with community information"
      },
      {
        title: "Hillsdale Chamber of Commerce",
        url: "https://www.hillsdalechamber.org/",
        description: "Local business community and events"
      },
      {
        title: "Pascack Valley Regional Chamber",
        url: "https://www.pascackvalleyregionalchamber.org/",
        description: "Regional business and community resources"
      }
    ]
  },
  {
    name: "Ho-Ho-Kus",
    slug: "ho-ho-kus",
    county: "Bergen",
    description: "A historic borough with unique water management requirements",
    floodRisk: "Moderate,  particularly near Ho-Ho-Kus Brook",
    commonIssues: [
      "Historic property drainage",
      "Brook-related flooding",
      "Storm water management"
    ],
    landmarks: ["The Hermitage", "Ho-Ho-Kus Inn", "Worth-Packer Mansion"],
    waterTable: "Variable, higher near brook",
    outboundLinks: [
      {
        title: "Borough of Ho-Ho-Kus",
        url: "https://www.ho-ho-kusboro.com/",
        description: "Official borough website with local information"
      },
      {
        title: "The Hermitage Museum",
        url: "https://www.thehermitage.org/",
        description: "Historic landmark and local history"
      },
      {
        title: "Bergen County Historical Society",
        url: "https://www.bergencountyhistory.org/",
        description: "County historical resources and preservation"
      }
    ]
  },
  {
    name: "Leonia",
    slug: "leonia",
    county: "Bergen",
    description: "A diverse community with comprehensive water management needs",
    floodRisk: "Moderate, with specific areas of concern",
    commonIssues: [
      "Urban drainage systems",
      "Aging infrastructure",
      "Storm water control"
    ],
    landmarks: ["Leonia Borough Hall", "Wood Park", "Leonia Public Library"],
    waterTable: "Variable throughout borough",
    outboundLinks: [
      {
        title: "Borough of Leonia",
        url: "https://www.leonianj.gov/",
        description: "Official municipal website with community resources"
      },
      {
        title: "Leonia Public Library",
        url: "https://www.leonia.bccls.org/",
        description: "Community information and local history"
      },
      {
        title: "Bergen County Parks Department",
        url: "https://www.co.bergen.nj.us/parks",
        description: "County parks and recreation information"
      }
    ]
  },
  {
    name: "Little Ferry",
    slug: "little-ferry",
    county: "Bergen",
    description: "A riverside community with unique flood protection needs due to its location near the Hackensack River",
    floodRisk: "High, particularly during storm surges and heavy rainfall",
    commonIssues: [
      "River flooding concerns",
      "Storm surge protection",
      "High water table management"
    ],
    landmarks: ["Little Ferry Borough Hall", "Indian Lake", "Losen Slote Creek Park"],
    waterTable: "High due to riverside location",
    outboundLinks: [
      {
        title: "Borough of Little Ferry",
        url: "https://www.littleferrynj.org/",
        description: "Official municipal website with flood zone information and local regulations"
      },
      {
        title: "New Jersey Meadowlands Commission",
        url: "https://www.njsea.com/",
        description: "Regional environmental protection and flood management resources"
      },
      {
        title: "Bergen County Flood Control",
        url: "https://www.co.bergen.nj.us/flood-control",
        description: "County flood control resources and emergency management"
      }
    ]
  },
  {
    name: "Lodi",
    slug: "lodi",
    county: "Bergen",
    description: "An urban community with comprehensive water management requirements",
    floodRisk: "High, especially near the Saddle River",
    commonIssues: [
      "Urban flooding prevention",
      "River proximity challenges",
      "Storm water management"
    ],
    landmarks: ["Lodi Borough Hall", "Saddle River County Park", "Kennedy Park"],
    waterTable: "High in areas near the river",
    outboundLinks: [
      {
        title: "Borough of Lodi",
        url: "https://www.lodi-nj.org/",
        description: "Official borough website with municipal services information"
      },
      {
        title: "Bergen County Watershed Management",
        url: "https://www.co.bergen.nj.us/watershed-management",
        description: "County watershed and flood prevention resources"
      },
      {
        title: "NJ DEP Flood Mapper",
        url: "https://www.nj.gov/dep/floodresilience/",
        description: "State flood mapping and resilience planning tools"
      }
    ]
  },
  {
    name: "Lyndhurst",
    slug: "lyndhurst",
    county: "Bergen",
    description: "A Meadowlands community with unique water management challenges",
    floodRisk: "High, particularly in low-lying areas near the Passaic River",
    commonIssues: [
      "Meadowlands flooding",
      "River-related concerns",
      "Industrial area drainage"
    ],
    landmarks: ["Medieval Times", "DeKorte Park", "Lyndhurst Town Hall"],
    waterTable: "High throughout most areas",
    outboundLinks: [
      {
        title: "Township of Lyndhurst",
        url: "https://www.lyndhurstnj.org/",
        description: "Official township website with community resources"
      },
      {
        title: "Meadowlands Environmental Center",
        url: "https://www.njsea.com/meadowlands-environment-center/",
        description: "Local environmental education and research center"
      },
      {
        title: "Passaic River Coalition",
        url: "https://www.passaicriver.org/",
        description: "River conservation and flood management resources"
      }
    ]
  },
  {
    name: "Mahwah",
    slug: "mahwah",
    county: "Bergen",
    description: "A diverse township with varying elevation and water management needs",
    floodRisk: "Moderate to high, especially near the Ramapo River",
    commonIssues: [
      "Mountain runoff management",
      "River flooding concerns",
      "Estate property drainage"
    ],
    landmarks: ["Ramapo College", "Campgaw Mountain", "Mahwah Municipal Building"],
    waterTable: "Varies by elevation and proximity to river",
    outboundLinks: [
      {
        title: "Township of Mahwah",
        url: "https://www.mahwahtwp.org/",
        description: "Official township website with local regulations"
      },
      {
        title: "Ramapo Valley County Reservation",
        url: "https://www.co.bergen.nj.us/parks-recreation/ramapo-valley-county-reservation",
        description: "County park system and watershed information"
      },
      {
        title: "Mahwah Environmental Volunteers Organization",
        url: "https://www.mahwahevo.org/",
        description: "Local environmental protection and education resources"
      }
    ]
  },
  {
    name: "Maywood",
    slug: "maywood",
    county: "Bergen",
    description: "A residential community with established water management infrastructure",
    floodRisk: "Moderate, with specific concerns during heavy rainfall",
    commonIssues: [
      "Storm water management",
      "Aging infrastructure",
      "Basement protection"
    ],
    landmarks: ["Memorial Park", "Maywood Station Museum", "Maywood Public Library"],
    waterTable: "Variable throughout borough",
    outboundLinks: [
      {
        title: "Borough of Maywood",
        url: "https://www.maywoodboro.org/",
        description: "Official borough website with community information"
      },
      {
        title: "Bergen County Utilities Authority",
        url: "https://www.bcua.org/",
        description: "County water management and infrastructure resources"
      },
      {
        title: "Maywood Historical Committee",
        url: "https://www.maywoodboro.org/historical",
        description: "Local history and community development information"
      }
    ]
  },
  {
    name: "Midland Park",
    slug: "midland-park",
    county: "Bergen",
    description: "A suburban community with diverse water management requirements",
    floodRisk: "Moderate, with specific areas of concern",
    commonIssues: [
      "Storm water control",
      "Residential drainage",
      "Spring thaw management"
    ],
    landmarks: ["Wortendyke Dutch Barn", "Midland Park Borough Hall", "Veterans Memorial Park"],
    waterTable: "Variable throughout borough",
    outboundLinks: [
      {
        title: "Borough of Midland Park",
        url: "https://www.midlandparknj.org/",
        description: "Official borough website with community resources"
      },
      {
        title: "Bergen County Historical Society",
        url: "https://www.bergencountyhistory.org/",
        description: "County historical preservation and development information"
      },
      {
        title: "Northwest Bergen County Utilities Authority",
        url: "https://www.nbcua.com/",
        description: "Regional water management and infrastructure resources"
      }
    ]
  },
  {
    name: "Montvale",
    slug: "montvale",
    county: "Bergen",
    description: "An upscale community with comprehensive water management needs",
    floodRisk: "Moderate, with attention to specific areas",
    commonIssues: [
      "Corporate campus drainage",
      "Residential system maintenance",
      "Storm water management"
    ],
    landmarks: ["Montvale Corporate Campus", "Memorial Drive", "Fieldstone Middle School"],
    waterTable: "Variable by location",
    outboundLinks: [
      {
        title: "Borough of Montvale",
        url: "https://www.montvale.org/",
        description: "Official borough website with community information"
      },
      {
        title: "Pascack Valley Chamber of Commerce",
        url: "https://www.pascackvalleyregionalchamber.org/",
        description: "Regional business and community development resources"
      },
      {
        title: "Bergen County Planning Board",
        url: "https://www.co.bergen.nj.us/planning-board",
        description: "County planning and development information"
      }
    ]
  },
  {
    name: "Moonachie",
    slug: "moonachie",
    county: "Bergen",
    description: "A Meadowlands community with significant flood protection requirements",
    floodRisk: "High, especially during storm surges and heavy rainfall",
    commonIssues: [
      "Meadowlands flooding impact",
      "Storm surge protection",
      "Industrial area drainage"
    ],
    landmarks: ["Moonachie Borough Hall", "Robert L. Craig School", "Teterboro Airport"],
    waterTable: "High throughout borough",
    outboundLinks: [
      {
        title: "Borough of Moonachie",
        url: "https://www.moonachie.us/",
        description: "Official municipal website with flood zone information"
      },
      {
        title: "New Jersey Sports and Exposition Authority",
        url: "https://www.njsea.com/",
        description: "Regional development and environmental management in the Meadowlands"
      },
      {
        title: "Bergen County Office of Emergency Management",
        url: "https://www.co.bergen.nj.us/emergency-management",
        description: "County emergency management and flood response resources"
      }
    ]
  },
  {
    name: "New Milford",
    slug: "new-milford",
    county: "Bergen",
    description: "A riverside community with comprehensive flood protection needs",
    floodRisk: "High, particularly near the Hackensack River",
    commonIssues: [
      "River flooding concerns",
      "Storm water management",
      "Residential basement protection"
    ],
    landmarks: ["New Milford Borough Hall", "Kennedy Field", "Hackensack River"],
    waterTable: "High near river, variable elsewhere",
    outboundLinks: [
      {
        title: "Borough of New Milford",
        url: "https://www.newmilfordboro.com/",
        description: "Official borough website with community resources"
      },
      {
        title: "Hackensack Riverkeeper",
        url: "https://www.hackensackriverkeeper.org/",
        description: "River conservation and water quality information"
      },
      {
        title: "Bergen County Utilities Authority",
        url: "https://www.bcua.org/",
        description: "County water management and infrastructure resources"
      }
    ]
  },
  {
    name: "North Arlington",
    slug: "north-arlington",
    county: "Bergen",
    description: "A Meadowlands community with unique water management challenges",
    floodRisk: "High, especially in areas near the Passaic River",
    commonIssues: [
      "River proximity flooding",
      "Meadowlands impact",
      "Storm surge protection"
    ],
    landmarks: ["Riverside County Park", "Holy Cross Cemetery", "North Arlington Borough Hall"],
    waterTable: "High throughout borough",
    outboundLinks: [
      {
        title: "Borough of North Arlington",
        url: "https://www.northarlington.org/",
        description: "Official municipal website with community information"
      },
      {
        title: "Passaic River Coalition",
        url: "https://www.passaicriver.org/",
        description: "River management and flood prevention resources"
      },
      {
        title: "Bergen County Parks Department",
        url: "https://www.co.bergen.nj.us/parks",
        description: "County parks and recreation information"
      }
    ]
  },
  {
    name: "Northvale",
    slug: "northvale",
    county: "Bergen",
    description: "A suburban community with diverse water management needs",
    floodRisk: "Moderate, with specific areas of concern",
    commonIssues: [
      "Storm water control",
      "Residential drainage",
      "Commercial property protection"
    ],
    landmarks: ["Northvale Public Library", "Veterans Memorial Park", "Hogan Park"],
    waterTable: "Variable throughout borough",
    outboundLinks: [
      {
        title: "Borough of Northvale",
        url: "https://www.northvalenj.org/",
        description: "Official borough website with local regulations"
      },
      {
        title: "Northern Valley Regional Chamber",
        url: "https://www.northernvalleychamber.com/",
        description: "Regional business and community resources"
      },
      {
        title: "Bergen County Soil Conservation",
        url: "https://www.bergenscd.org/",
        description: "Soil and water management resources"
      }
    ]
  },
  {
    name: "Norwood",
    slug: "norwood",
    county: "Bergen",
    description: "A residential community with comprehensive water management requirements",
    floodRisk: "Moderate, with attention to specific areas",
    commonIssues: [
      "Storm water management",
      "Residential drainage",
      "Spring thaw concerns"
    ],
    landmarks: ["Norwood Public Library", "Kennedy Field", "Fox Hill Nature Preserve"],
    waterTable: "Variable by location",
    outboundLinks: [
      {
        title: "Borough of Norwood",
        url: "https://www.norwoodboro.org/",
        description: "Official borough website with community information"
      },
      {
        title: "Norwood Environmental Commission",
        url: "https://www.norwoodboro.org/environmental-commission",
        description: "Local environmental protection resources"
      },
      {
        title: "Bergen County Planning Board",
        url: "https://www.co.bergen.nj.us/planning-board",
        description: "County planning and development information"
      }
    ]
  },
  {
    name: "Oakland",
    slug: "oakland",
    county: "Bergen",
    description: "A suburban community with unique water management challenges due to its location near the Ramapo River and various lakes",
    floodRisk: "Moderate to high, particularly near the Ramapo River and local lakes",
    commonIssues: [
      "River flooding concerns",
      "Lake property protection",
      "Mountain runoff management"
    ],
    landmarks: ["Great Oak Park", "Ramapo Valley County Reservation", "Crystal Lake"],
    waterTable: "Variable, higher near water bodies",
    outboundLinks: [
      {
        title: "Borough of Oakland",
        url: "https://www.oakland-nj.org/",
        description: "Official municipal website with community information and local regulations"
      },
      {
        title: "Oakland Environmental Commission",
        url: "https://www.oakland-nj.org/environmental-commission",
        description: "Local environmental protection and water management resources"
      },
      {
        title: "Ramapo River Watershed",
        url: "https://www.nynjtc.org/park/ramapo-valley-county-reservation",
        description: "Information about the local watershed and conservation efforts"
      }
    ]
  },
  {
    name: "Old Tappan",
    slug: "old-tappan",
    county: "Bergen",
    description: "A residential community with unique water management needs due to its proximity to the Hackensack River watershed",
    floodRisk: "Moderate, with specific concerns near the Old Tappan Reservoir",
    commonIssues: [
      "Reservoir area drainage",
      "Residential system maintenance",
      "Storm water management"
    ],
    landmarks: ["Old Tappan Golf Course", "Old Tappan Reservoir", "Stone Point Park"],
    waterTable: "Variable, higher near reservoir",
    outboundLinks: [
      {
        title: "Borough of Old Tappan",
        url: "https://www.oldtappan.net/",
        description: "Official borough website with community information and local regulations"
      },
      {
        title: "Old Tappan Environmental Commission",
        url: "https://www.oldtappan.net/environmental-commission",
        description: "Local environmental protection and water management resources"
      },
      {
        title: "Suez Water New Jersey",
        url: "https://www.mysuezwater.com/new-jersey",
        description: "Water management and reservoir information for the Old Tappan area"
      }
    ]
  },
  {
    name: "Oradell",
    slug: "oradell",
    county: "Bergen",
    description: "A historic borough with unique water management challenges due to its proximity to the Oradell Reservoir",
    floodRisk: "Moderate to high, particularly near the Oradell Reservoir and Hackensack River",
    commonIssues: [
      "Reservoir-related water table fluctuations",
      "Historic home drainage systems",
      "Storm surge protection needs"
    ],
    landmarks: ["Oradell Reservoir", "Oradell Public Library", "Van Steuben House", "Blauvelt Mansion"],
    waterTable: "High due to reservoir proximity",
    outboundLinks: [
      {
        title: "Borough of Oradell Official Website",
        url: "https://www.oradell.org/",
        description: "Official municipal website with local regulations and community information"
      },
      {
        title: "Oradell Historical Committee",
        url: "https://www.oradell.org/historical-committee",
        description: "Local history and preservation resources"
      },
      {
        title: "Suez Water New Jersey",
        url: "https://www.mysuezwater.com/new-jersey",
        description: "Information about the Oradell Reservoir and water management"
      }
    ]
  },
  {
    name: "Palisades Park",
    slug: "palisades-park",
    county: "Bergen",
    description: "A diverse urban community with unique water management challenges due to its hillside location",
    floodRisk: "Moderate, with specific concerns on steep slopes",
    commonIssues: [
      "Multi-level drainage systems",
      "Hillside water management",
      "Urban flooding prevention"
    ],
    landmarks: ["Palisades Park Municipal Complex", "Veterans Park", "Metropolitan Center"],
    waterTable: "Variable due to elevation differences",
    outboundLinks: [
      {
        title: "Borough of Palisades Park",
        url: "https://www.palisadesparknj.gov/",
        description: "Official borough website with community information and local regulations"
      },
      {
        title: "Palisades Park Environmental Commission",
        url: "https://www.palisadesparknj.gov/environmental-commission",
        description: "Local environmental protection and water management resources"
      },
      {
        title: "Bergen County Planning Board",
        url: "https://www.co.bergen.nj.us/planning-board",
        description: "County planning and development information"
      }
    ]
  },
  {
    name: "Paramus",
    slug: "paramus",
    county: "Bergen",
    description: "A major commercial center with extensive development requiring sophisticated water management",
    floodRisk: "Moderate to high, particularly near the Saddle River",
    commonIssues: [
      "Commercial property protection",
      "Parking lot drainage",
      "River proximity concerns"
    ],
    landmarks: ["Garden State Plaza", "Bergen Community College", "Van Saun County Park"],
    waterTable: "Variable, higher near waterways",
    outboundLinks: [
      {
        title: "Borough of Paramus",
        url: "https://www.paramusborough.org/",
        description: "Official borough website with community information"
      },
      {
        title: "Paramus Environmental Commission",
        url: "https://www.paramusborough.org/environmental-commission",
        description: "Local environmental protection and water management"
      },
      {
        title: "Bergen County Parks Department",
        url: "https://www.co.bergen.nj.us/parks",
        description: "County parks and recreation information"
      }
    ]
  },
  {
    name: "Park Ridge",
    slug: "park-ridge",
    county: "Bergen"
  },
  {
    name: "Ramsey",
    slug: "ramsey",
    county: "Bergen"
  },
  {
    name: "Ridgefield",
    slug: "ridgefield",
    county: "Bergen"
  },
  {
    name: "Ridgefield Park",
    slug: "ridgefield-park",
    county: "Bergen"
  },
  {
    name: "Ridgewood",
    slug: "ridgewood",
    county: "Bergen"
  },
  {
    name: "River Edge",
    slug: "river-edge",
    county: "Bergen"
  },
  {
    name: "River Vale",
    slug: "river-vale",
    county: "Bergen"
  },
  {
    name: "Rochelle Park",
    slug: "rochelle-park",
    county: "Bergen"
  },
  {
    name: "Rockleigh",
    slug: "rockleigh",
    county: "Bergen"
  },
  {
    name: "Rutherford",
    slug: "rutherford",
    county: "Bergen"
  },
  {
    name: "Saddle Brook",
    slug: "saddle-brook",
    county: "Bergen"
  },
  {
    name: "Saddle River",
    slug: "saddle-river",
    county: "Bergen"
  },
  {
    name: "South Hackensack",
    slug: "south-hackensack",
    county: "Bergen"
  },
  {
    name: "Teaneck",
    slug: "teaneck",
    county: "Bergen"
  },
  {
    name: "Tenafly",
    slug: "tenafly",
    county: "Bergen"
  },
  {
    name: "Teterboro",
    slug: "teterboro",
    county: "Bergen"
  },
  {
    name: "Upper Saddle River",
    slug: "upper-saddle-river",
    county: "Bergen"
  },
  {
    name: "Waldwick",
    slug: "waldwick",
    county: "Bergen"
  },
  {
    name: "Wallington",
    slug: "wallington",
    county: "Bergen"
  },
  {
    name: "Washington Township",
    slug: "washington-township",
    county: "Bergen"
  },
  {
    name: "Westwood",
    slug: "westwood",
    county: "Bergen"
  },
  {
    name: "Woodcliff Lake",
    slug: "woodcliff-lake",
    county: "Bergen"
  },
  {
    name: "Wood-Ridge",
    slug: "wood-ridge",
    county: "Bergen"
  },
  {
    name: "Wyckoff",
    slug: "wyckoff",
    county: "Bergen"
  }
];

// Helper function to get a city by its slug
const getCityBySlug = (slug: string): City | undefined => {
  return bergenCountyCities.find(city => city.slug === slug);
};

// Helper function to get nearby cities
const getNearbyCities = (citySlug: string, limit: number): City[] => {
  return bergenCountyCities
    .filter(city => city.slug !== citySlug)
    .slice(0, limit);
};

export { getCityBySlug, getNearbyCities };