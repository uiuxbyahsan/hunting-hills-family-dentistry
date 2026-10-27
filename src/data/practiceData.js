export const PRACTICE_INFO = {
  name: "Hunting Hills Family Dentistry",
  shortName: "Hunting Hills Dentistry",
  tagline: "Healthy smiles start with exceptional care.",
  phone: "(540) 769-5020",
  phoneRaw: "5407695020",
  email: "rsmithdds1@yahoo.com",
  address: {
    street: "4572 Franklin Rd SW",
    city: "Roanoke",
    state: "VA",
    zip: "24014-5144",
    country: "US",
    full: "4572 Franklin Rd SW, Roanoke, VA 24014-5144, US",
    mapUrl: "https://maps.google.com/?q=Hunting+Hills+Family+Dentistry+4572+Franklin+Rd+SW+Roanoke+VA+24014-5144"
  },
  hours: [
    { day: "Monday", open: "7:00 AM", close: "7:00 PM", isOpen: true },
    { day: "Tuesday", open: "7:00 AM", close: "7:00 PM", isOpen: true },
    { day: "Wednesday", open: "7:00 AM", close: "7:00 PM", isOpen: true },
    { day: "Thursday", open: "7:00 AM", close: "7:00 PM", isOpen: true },
    { day: "Friday", open: "7:00 AM", close: "4:00 PM", isOpen: true },
    { day: "Saturday", open: "Closed", close: "Closed", isOpen: false },
    { day: "Sunday", open: "Closed", close: "Closed", isOpen: false }
  ]
};

export const HERO_SLIDES = [
  {
    id: 1,
    image: "/assets/hero/hero-slide-1.webp",
    eyebrow: "FAMILY DENTISTRY IN ROANOKE, VA",
    headline: "Healthy smiles start with exceptional care.",
    description: "Modern, personalized dentistry designed around your comfort, your goals, and your long-term oral health.",
    primaryCta: { text: "Request an Appointment", action: "appointment" },
    secondaryCta: { text: "Explore Services", target: "#services" },
    trust: {
      stars: 5,
      label: "Trusted local dental care",
      sub: "Voted Best of Roanoke 5+ Consecutive Years"
    }
  },
  {
    id: 2,
    image: "/assets/hero/hero-slide-2.webp",
    headline: "A calmer, more comfortable dental experience.",
    description: "Thoughtful dentistry, clear communication and personalized care from your first visit onward.",
    primaryCta: { text: "Schedule Your Visit", action: "appointment" },
    secondaryCta: { text: "Meet Our Doctors", target: "#team" }
  },
  {
    id: 3,
    image: "/assets/hero/hero-slide-3.webp",
    eyebrow: "ADVANCED RESTORATIVE & IMPLANTS",
    headline: "Permanent, natural-looking tooth replacement.",
    description: "Certified TeethXpress® and Dental Implants restore full bite strength, speech, and radiant confidence in as little as one day.",
    primaryCta: { text: "Explore Dental Implants", target: "#implants-feature" },
    secondaryCta: { text: "Request Consultation", action: "appointment" },
    trust: {
      stars: 5,
      label: "Certified TeethXpress® Center",
      sub: "State-of-the-art restorative precision"
    }
  },
  {
    id: 4,
    image: "/assets/hero/hero-slide-austin-3.webp",
    eyebrow: "SMILES FOR EVERY STAGE OF LIFE",
    headline: "Complete care for you and your family.",
    description: "Explore comprehensive dental services designed around your long-term oral health and comfort.",
    primaryCta: { text: "Explore Our Services", target: "#services" },
    secondaryCta: { text: "Book an Appointment", action: "appointment" },
    trust: {
      stars: 5,
      label: "Whole-family wellness",
      sub: "Dedicated care from pediatric to senior smiles"
    }
  }
];

export const DOCTORS = [
  {
    id: "smith",
    name: "Dr. Richard D. Smith II",
    prefix: "Dr.",
    role: "Doctor of Dental Surgery (DDS)",
    image: "/assets/doctors/dr-richard-smith.webp",
    education: "The Medical College of Virginia (VCU)",
    summary: "Dr. Smith is a Graduate of The Medical College of Virginia. He brings decades of specialized experience in cosmetic dentistry, dental implantology, and comprehensive family care.",
    bio: "Dr. Richard D. Smith II earned his doctorate from The Medical College of Virginia. With a passion for clinical excellence and patient comfort, Dr. Smith has spearheaded Hunting Hills Family Dentistry's reputation as one of the premier dental practices in Roanoke. His expertise spans advanced cosmetic reconstructions, porcelain veneers, dental implant rehabilitation, and certified TeethXpress® procedures. Dr. Smith is dedicated to listening carefully to each patient's goals, ensuring treatments are painless, transparent, and long-lasting.",
    highlights: ["Graduate of The Medical College of Virginia", "Certified TeethXpress® Provider", "Over 25 years of clinical practice in Roanoke Valley"]
  },
  {
    id: "hutchison",
    name: "Dr. Karen L. Hutchison",
    prefix: "Dr.",
    role: "Doctor of Dental Medicine (DMD)",
    image: "/assets/doctors/dr-karen-hutchison.webp",
    education: "University of Mississippi Medical Center",
    summary: "Dr. Hutchison is a graduate of the University of Mississippi Medical Center, known for her gentle touch, comprehensive exams, and patient-centered restorative dentistry.",
    bio: "Dr. Karen L. Hutchison graduated from the University of Mississippi Medical Center School of Dentistry. She is widely admired by Roanoke families for her warm chairside manner and meticulous approach to oral health. Dr. Hutchison focuses on preventive care, aesthetic restorations, periodontal therapy, and helping anxious patients feel completely at ease throughout their visits.",
    highlights: ["University of Mississippi Medical Center Graduate", "Preventive & Periodontal Care Specialist", "Gentle, anxiety-reducing chairside approach"]
  },
  {
    id: "simpson",
    name: "Dr. Hunter Simpson",
    prefix: "Dr.",
    role: "Doctor of Dental Surgery (DDS)",
    image: "/assets/doctors/dr-hunter-simpson.webp",
    education: "Southwest Virginia Native & Dental Graduate",
    summary: "Dr. Hunter Simpson grew up in a small town in southwest Virginia, committed to delivering compassionate, cutting-edge dentistry for patients of all ages.",
    bio: "Dr. Hunter Simpson was raised in southwest Virginia and brings deep regional roots and dedication to his community. Dr. Simpson focuses on modern digital dentistry, restorative treatments, Invisalign® clear aligner therapy, and family wellness. He takes pride in educating patients about oral health so they can make confident, informed decisions for their smiles.",
    highlights: ["Southwest Virginia Native", "Invisalign® Clear Aligner Provider", "Modern digital dentistry & family oral healthcare"]
  },
  {
    id: "vakay",
    name: "Dr. William Vakay",
    prefix: "Dr.",
    role: "Doctor of Dental Surgery (DDS)",
    image: "/assets/doctors/dr-william-vakay.webp",
    education: "James Madison University Graduate",
    summary: "Dr. Vakay graduated from James Madison University, emphasizing advanced restorative solutions, crown and bridge prosthetics, and patient comfort.",
    bio: "Dr. William Vakay brings rich clinical experience and rigorous training to Hunting Hills Family Dentistry. A graduate of James Madison University, Dr. Vakay has dedicated his career to delivering high-precision restorative dentistry, full-mouth rehabilitation, and durable aesthetic results. His focus is ensuring each patient receives individualized care that preserves natural tooth structure.",
    highlights: ["James Madison University Alumnus", "Precision crown & bridge restorations", "Focus on pain-free restorative therapies"]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "My experience with Dr. Smith and the office has been nothing but positive through my four years of visiting. I rate them excellent for 3 reasons — staff, dentist, and environment. The staff are extremely friendly and courteous from making appointments to teeth cleaning. Dr. Smith is also professional, personal, and knowledgeable. The environment feels welcoming as it is always clean and they have up-to-date equipment.",
    author: "Jason Koster",
    role: "Patient of 4 Years",
    rating: 5
  },
  {
    id: 2,
    quote: "Dr. Smith and his staff are very professional and have done an awesome job for my family of five. Best dentist we have ever had.",
    author: "Barry Clark",
    role: "Family Patient",
    rating: 5
  },
  {
    id: 3,
    quote: "Hunting Hills Family is truly a 'Family dentistry'. Both of my daughters are patients of Dr. Smith and he truly treats them like they are his family! I am personally a patient of Dr. Smith — him and his staff are top-notch and are very professional. If you and your family are looking for someone that really cares for you and your teeth, you should really give Dr. Smith and his staff at Hunting Hills Family Dentistry a call.",
    author: "Brad Boris",
    role: "Parent & Patient",
    rating: 5
  },
  {
    id: 4,
    quote: "I switched to Dr. Smith when my insurance changed and my other dentist couldn't accept my new insurance carrier. Dr. Smith took my wife and I (and now our two boys) in with open arms and worked with our insurance plan. We feel like we are at home here... everyone is so nice and addresses us all by name. The work performed is top notch and they are so good with our kids. The atmosphere is great and now I enjoy the time I spend at the dentist office. I would recommend Dr. Smith to my friends... and have.",
    author: "Coy Carter",
    role: "Family of 4 Patient",
    rating: 5
  },
  {
    id: 5,
    quote: "I have nothing but great things to say about Hunting Hills Family Dentistry. The dentists there have taken great care of me and my family. They have gone out of their way for my family when we had an emergency. I hope if you are looking for a dentist you will make them your family dentist.",
    author: "Robert Rice",
    role: "Emergency & Regular Patient",
    rating: 5
  }
];

export const AWARDS = [
  {
    year: "2025",
    tier: "Platinum Winner",
    title: "Best Cosmetic & Family Dentist",
    image: "/assets/awards/2025platinum-1.png.webp"
  },
  {
    year: "2024",
    tier: "Platinum Winner",
    title: "Best Cosmetic Dentistry",
    image: "/assets/awards/2024platinum-1.jpg.webp"
  },
  {
    year: "2024",
    tier: "Gold Winner",
    title: "Best Dental Practice",
    image: "/assets/awards/2024gold-1.png.webp"
  },
  {
    year: "2024",
    tier: "Silver Winner",
    title: "Best Family Dentist",
    image: "/assets/awards/2024silver-1.png.webp"
  },
  {
    year: "2023",
    tier: "Platinum & Gold",
    title: "Top Dental Care",
    image: "/assets/awards/2023_PlatinumWEB.jpg.webp"
  },
  {
    year: "2022",
    tier: "Best of Roanoke",
    title: "Outstanding Patient Care",
    image: "/assets/awards/Best-of-2022web.jpg.webp"
  }
];

export const SERVICES = [
  {
    id: "preventive",
    number: "01",
    title: "Preventive Dentistry",
    badge: "Foundation Care",
    image: "/assets/hero/hero-slide-2.webp",
    shortDesc: "Comprehensive cleanings, digital low-radiation radiography, early cavity detection, and periodontal maintenance for lifelong wellness.",
    highlights: [
      "Gentle ultrasonic cleanings & plaque therapy",
      "Ultra-low radiation digital radiography",
      "Routine oral cancer & periodontal screenings"
    ],
    fullDesc: "Preventive care is the cornerstone of lifelong oral health. At Hunting Hills Family Dentistry, our gentle dental hygienists and experienced doctors utilize modern diagnostic tools, ultra-low radiation digital radiography, and thorough periodontal evaluations. We design individualized maintenance schedules that protect natural tooth enamel, prevent gum disease, and identify issues before they cause discomfort.",
    features: [
      "Gentle ultrasonic cleanings & polishing",
      "Low-radiation digital X-rays & intraoral cameras",
      "Oral cancer screenings at every visit",
      "Fluoride varnish & enamel protection",
      "Custom nightguards & athletic mouthguards"
    ]
  },
  {
    id: "cosmetic",
    number: "02",
    title: "Cosmetic Dentistry & Veneers",
    badge: "Aesthetic Excellence",
    image: "/assets/hero/hero-slide-4.webp",
    shortDesc: "Porcelain veneers, aesthetic bonding, and custom smile design to create radiant, natural-looking harmony.",
    highlights: [
      "Custom handcrafted porcelain veneers",
      "Minimally invasive composite resin bonding",
      "Professional in-office whitening protocols"
    ],
    fullDesc: "Your smile is one of your most valuable personal assets. Dr. Smith and our team provide masterfully crafted porcelain veneers and aesthetic bonding that match your facial aesthetics and personality. Whether correcting chipped enamel, stubborn discoloration, or gaps between teeth, our cosmetic treatments preserve natural structure while delivering a confident, camera-ready smile.",
    features: [
      "Custom ultra-thin porcelain veneers",
      "Minimally invasive composite bonding",
      "Professional in-office & take-home whitening",
      "Smile proportion analysis & digital preview",
      "Enamel recontouring & minor alignment"
    ]
  },
  {
    id: "implants",
    number: "03",
    title: "Dental Implants",
    badge: "Permanent Replacement",
    image: "/assets/brand/implants-treatment.webp",
    partnerLogo: null,
    shortDesc: "The gold standard for replacing missing teeth. Anchored securely into the jaw for lifetime stability, function, and aesthetic realism.",
    highlights: [
      "100% natural chewing strength restored",
      "Biocompatible titanium root osteointegration",
      "Prevents bone recession & facial sagging"
    ],
    fullDesc: "Before the development of dental implants, removable dentures or bridges were the only alternatives for missing teeth. Dental implants are biocompatible titanium posts that fuse with your jawbone, simulating the natural tooth root. They prevent bone resorption, preserve surrounding teeth without grinding them down, and restore 100% of your natural chewing power.",
    features: [
      "Single tooth replacement with custom ceramic crowns",
      "Multi-tooth implant-supported bridges",
      "Full-arch implant rehabilitation",
      "Preservation of facial structure and jawbone density",
      "No slippage, adhesives, or dietary restrictions"
    ]
  },
  {
    id: "invisalign",
    number: "04",
    title: "Invisalign® Clear Aligners",
    badge: "Discreet Orthodontics",
    image: "/assets/hero/hero-slide-5.webp",
    partnerLogo: "/assets/brand/Invisalign.png.webp",
    shortDesc: "A modern, fully digitized experience to achieve the straight smile you desire without metal brackets or wires.",
    highlights: [
      "Virtually invisible medical-grade SmartTrack®",
      "Removable for effortless eating & hygiene",
      "Predictable computerized 3D digital planning"
    ],
    fullDesc: "Invisalign® uses a series of virtually invisible, custom-molded clear aligners that gently shift your teeth into proper alignment over time. Utilizing digital 3D scans, we map out your exact treatment trajectory before you even begin. Aligners are completely removable for easy eating, brushing, and flossing, making them ideal for busy professionals and active teens.",
    features: [
      "Virtually invisible SmartTrack® material",
      "Removable for effortless eating and oral hygiene",
      "No painful metal brackets, wires, or emergency visits",
      "Digitally customized with 3D smile simulation",
      "Average treatment duration 6 to 18 months"
    ]
  },
  {
    id: "teethxpress",
    number: "05",
    title: "TeethXpress® Immediate Stability",
    badge: "Certified Provider",
    image: "/assets/hero/hero-slide-3.webp",
    partnerLogo: "/assets/brand/Certified-Provider-TeethXpress.png.webp",
    shortDesc: "Secure, natural-looking teeth in as little as one day. Eliminate loose dentures and restore confidence immediately.",
    highlights: [
      "Full-arch permanent teeth in a single visit",
      "No palate coverage — taste & speak naturally",
      "Completely eliminates denture adhesives"
    ],
    fullDesc: "As an officially certified TeethXpress® provider in Roanoke, Dr. Smith offers this revolutionary full-arch solution for patients suffering from failing teeth or loose dentures. Utilizing 4 to 6 strategically placed implants, a complete arch of lifelike teeth is firmly locked into place during a single outpatient appointment. Walk in with missing or loose teeth, and walk out the very same day with a secure, functional smile.",
    features: [
      "Same-day full-arch permanent teeth placement",
      "No palate coverage — taste food and speak naturally",
      "Eliminates painful denture slippage and adhesives",
      "Preserves long-term facial volume and jaw health",
      "Performed by certified clinical implant specialists"
    ]
  },
  {
    id: "restorative",
    number: "06",
    title: "Restorative Dentistry & Crowns",
    badge: "Durable Function",
    image: "/assets/hero/hero-slide-austin-3.webp",
    shortDesc: "Precision tooth-colored restorations, ceramic crowns, and custom prosthetics engineered for lasting comfort and durability.",
    highlights: [
      "Metal-free bio-compatible composite resins",
      "High-durability all-ceramic crowns & onlays",
      "Custom bridgework for gap restoration"
    ],
    fullDesc: "Restorative dentistry repairs the damage caused by decay, fracture, or wear. We use biocompatible, mercury-free composite resins and lifelike ceramic crowns that blend seamlessly with your natural dentition. Every restoration is designed for biological compatibility, structural endurance, and maximum chewing comfort.",
    features: [
      "Tooth-colored composite fillings (mercury-free)",
      "All-ceramic custom crowns and onlays",
      "Precision fixed bridges for missing spaces",
      "Gentle root canal therapy to preserve teeth",
      "Comfort-fit partial and complete dentures"
    ]
  }
];

export const PATIENT_STEPS = [
  {
    step: "01",
    title: "Listen",
    desc: "We begin every relationship by sitting down and understanding your specific dental goals, past experiences, and concerns. We never rush or judge.",
    icon: "HeartHandshake"
  },
  {
    step: "02",
    title: "Plan",
    desc: "Using high-definition digital imaging, we visually demonstrate the health of your smile and present clear, personalized options with upfront pricing and insurance coordination.",
    icon: "ClipboardCheck"
  },
  {
    step: "03",
    title: "Care",
    desc: "Receive treatment delivered with gentle precision in a serene, modern setting. From heated blankets to gentle anesthesia, your comfort is always guaranteed.",
    icon: "Sparkles"
  }
];

export const FAQS = [
  {
    question: "Do you accept my dental insurance?",
    answer: "Yes! Hunting Hills Family Dentistry works with most major PPO dental insurance plans. Our front desk team will happily verify your benefits, submit claims on your behalf, and help you maximize your annual coverage before any procedure."
  },
  {
    question: "What makes TeethXpress® different from conventional dentures?",
    answer: "Conventional dentures rest on gum tissue, frequently slip, require adhesives, and cover the roof of your mouth, diminishing taste. TeethXpress® locks a full arch of natural-looking teeth onto 4–6 dental implants in as little as one day. You never have to remove them at night or worry about them slipping."
  },
  {
    question: "Are your office hours accommodating for working schedules?",
    answer: "Absolutely. We are open Monday through Thursday from 7:00 AM to 7:00 PM, and Friday from 7:00 AM to 4:00 PM. This allows you and your family to schedule routine cleanings or procedures before or after work and school."
  },
  {
    question: "How long does the initial appointment request take to confirm?",
    answer: "When you request an appointment through our online form, our scheduling coordinator will review your preferred date and time and reach out to you within one business day via phone or email to confirm your time slot."
  },
  {
    question: "What should I do in a dental emergency?",
    answer: "If you are experiencing severe tooth pain, facial swelling, or dental trauma, call our office immediately at (540) 769-5020. We prioritize same-day emergency appointments for established and new patients alike."
  }
];

export const SMILE_GALLERY_CASES = [
  {
    id: "case-100",
    title: "Full Smile Reconstruction & Porcelain Veneers",
    category: "Cosmetic Veneers",
    compositeImage: "/assets/gallery/case-100.webp",
    beforeImage: "/assets/gallery/case-100-before.webp",
    afterImage: "/assets/gallery/case-100-after.webp",
    procedure: "Porcelain Veneers & Gum Recontouring",
    description: "Correction of extensive anterior incisal wear, chips, and irregular tooth alignment with custom handcrafted porcelain veneers.",
    tag: "Aesthetic Makeover"
  },
  {
    id: "case-200",
    title: "Anterior Enamel Restoration & Diastema Closure",
    category: "Cosmetic Veneers",
    compositeImage: "/assets/gallery/case-200.webp",
    beforeImage: "/assets/gallery/case-200-before.webp",
    afterImage: "/assets/gallery/case-200-after.webp",
    procedure: "Porcelain Laminate Veneers",
    description: "Closing uneven central spaces, correcting enamel shade disharmony, and creating seamless facial symmetry.",
    tag: "Spacing & Alignment"
  },
  {
    id: "case-300",
    title: "Invisalign® Clear Orthodontic Alignment",
    category: "Invisalign®",
    compositeImage: "/assets/gallery/case-300.webp",
    beforeImage: "/assets/gallery/case-300-before.webp",
    afterImage: "/assets/gallery/case-300-after.webp",
    procedure: "Invisalign® Clear Aligners & Enamel Polishing",
    description: "Complete correction of overlapping anterior teeth, rotated lateral incisors, and deep bite without metal braces.",
    tag: "Clear Aligners"
  },
  {
    id: "case-400",
    title: "TeethXpress® Full-Arch Immediate Stability",
    category: "TeethXpress® & Implants",
    compositeImage: "/assets/gallery/case-400.webp",
    beforeImage: "/assets/gallery/case-400-before.webp",
    afterImage: "/assets/gallery/case-400-after.webp",
    procedure: "TeethXpress® Immediate Implant Fixed Arch",
    description: "Same-day replacement of severely compromised dentition with a permanently anchored full-arch restoration.",
    tag: "Same-Day Teeth"
  },
  {
    id: "case-500",
    title: "All-Ceramic Aesthetic Crown Replacement",
    category: "Restorative Crowns",
    compositeImage: "/assets/gallery/case-500.webp",
    beforeImage: "/assets/gallery/case-500-before.webp",
    afterImage: "/assets/gallery/case-500-after.webp",
    procedure: "Metal-Free All-Ceramic Crowns",
    description: "Replacement of aged, discolored restorations with modern metal-free ceramic crowns that emulate natural enamel translucency.",
    tag: "Metal-Free Restorations"
  },
  {
    id: "case-600",
    title: "Minimally Invasive Cosmetic Composite Bonding",
    category: "Cosmetic Veneers",
    compositeImage: "/assets/gallery/case-600.webp",
    beforeImage: "/assets/gallery/case-600-before.webp",
    afterImage: "/assets/gallery/case-600-after.webp",
    procedure: "Direct Composite Bonding & Whitening",
    description: "Restoring broken incisal edges and eliminating intrinsic enamel discoloration in a single comfortable visit.",
    tag: "Enamel Repair"
  },
  {
    id: "case-700",
    title: "Dental Implant Single Tooth Replacement",
    category: "TeethXpress® & Implants",
    compositeImage: "/assets/gallery/case-700.webp",
    beforeImage: "/assets/gallery/case-700-before.webp",
    afterImage: "/assets/gallery/case-700-after.webp",
    procedure: "Titanium Implant & Custom Zirconia Abutment",
    description: "Seamless permanent replacement of a fractured anterior incisor, restoring 100% natural bite strength and gum contour.",
    tag: "Dental Implant"
  },
  {
    id: "case-800",
    title: "Comprehensive Restorative Smile Makeover",
    category: "Restorative Crowns",
    compositeImage: "/assets/gallery/case-800.webp",
    beforeImage: "/assets/gallery/case-800-before.webp",
    afterImage: "/assets/gallery/case-800-after.webp",
    procedure: "Comprehensive Ceramic Rehabilitation",
    description: "Full occlusal balance re-establishment with lifelike porcelain crowns restoring chewing comfort, speech, and youthful smile lines.",
    tag: "Full Rehabilitation"
  },
  {
    id: "case-900",
    title: "Aesthetic Diastema & Fracture Repair",
    category: "Cosmetic Veneers",
    compositeImage: "/assets/gallery/case-900.webp",
    beforeImage: "/assets/gallery/case-900-before.webp",
    afterImage: "/assets/gallery/case-900-after.webp",
    procedure: "Porcelain Veneers & Smile Architecture",
    description: "Closing wide anterior gaps and restoring chipped teeth to deliver a naturally balanced, confident smile.",
    tag: "Smile Design"
  }
];
