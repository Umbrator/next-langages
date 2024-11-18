export const courseList = [
    {
      title: 'General French',
      description: 'Build a strong foundation in reading, writing, listening, and speaking skills.',
      image: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Flearn-french-language-online-education-concept.jpg?alt=media&token=429c5302-c283-4690-afbd-1bba4108a041',
    },
    {
      title: 'Business French',
      description: 'Enhance your business communication and professional skills in French.',
      image: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fpencil-sharpener-notepad-books%20(1).jpg?alt=media&token=30676f52-3dcd-449c-9ab0-92c5ae66243b',
    },
    {
      title: 'DELF Exam Preparation',
      description: 'Prepare for French proficiency exams with focused practice and strategies.',
      image: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fhigh-angle-man-holding-notebook%20(1).jpg?alt=media&token=e024c3d8-f24a-4265-a056-cfae4d015578',
    },
    {
      title: 'French for Kids',
      description: 'Fun and interactive lessons designed for young learners to grasp French skills.',
      image: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fbook-3089857_1280%20(1).jpg?alt=media&token=3964006d-a85b-4b24-984f-a079c34e9bc3',
    },
    {
      title: 'Private French Lessons',
      description: 'Personalized lessons tailored to individual learning styles and goals.',
      image: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Frow-various.jpg?alt=media&token=dd0a1fc1-616b-48e5-b6de-40b33f6a394d',
    },
    {
      title: 'Self-study French Courses',
      description: 'Flexible and self-paced courses for independent learners.',
      image: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Flivres-francais-recommander-debutants.jpg?alt=media&token=706ba5ed-5489-4874-94db-ceb356df370d',
    },
  ];
  export const faqData = [
    {
      question: "What levels of French courses do you offer?",
      answer:
        "We offer French courses for all proficiency levels, from beginner to advanced. Our courses are designed to cater to learners with various language abilities.",
    },
    {
      question: "Are your instructors certified and experienced?",
      answer:
        "Yes, all our instructors are highly certified and have years of experience in teaching French, ensuring you receive quality education.",
    },
    {
      question: "What teaching methods and materials do you use?",
      answer:
        "We combine traditional and modern teaching methods, including interactive materials, online resources, and practical case studies to provide a comprehensive learning experience.",
    },
    {
      question: "Can I join a French course if I have a busy schedule?",
      answer:
        "Absolutely! We offer flexible scheduling options, including weekend and evening classes, to accommodate your busy lifestyle.",
    },
    {
      question: "Is there any age restriction for enrolling in French courses?",
      answer:
        "No, we welcome learners of all ages. Whether you are a student, professional, or retiree, we have a course tailored to your needs.",
    },
  ];


  export const courseData = {
    "general-french": {
      title: "Français Général",
      description: "Notre cours de français général est conçu pour bâtir une base solide dans les compétences fondamentales : lecture, écriture, écoute, et expression orale.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Ftravel-france-learn-foreign-language-surprised-teen-girl-hold-french-flag-workbook-horizontal-isolated-poster-school-girl-student-banner-header-portrait-schoolgirl-copy-space_545934-68763.jpg?alt=media&token=2bdd5401-8081-4966-9164-46b2b4c8fd52",
      levels: [
        {
          level: 'Niveau Débutant',
          description: 'Se concentre sur la grammaire de base et le vocabulaire. Vous apprendrez à tenir des conversations simples et à rédiger des textes de base.',
          topics: [
            'Introduction à la grammaire de base et au vocabulaire quotidien',
            'Dialogues simples et conversations',
            'Rédaction et réponse aux messages de base',
            'Pratique des phrases courantes dans les contextes quotidiens',
          ],
        },
      ],
      objectives: [
        'Atteindre la fluidité et la confiance en communication quotidienne',
        'Développer des compétences d’écoute à travers des scénarios réels',
        'Élargir le vocabulaire pour divers contextes',
      ],
      schedule: [
        { day: "Lundi - Jeudi", session: "Session du Matin", time: "10:00 - 12:00" },
        { day: "Lundi - Jeudi", session: "Session du Soir", time: "18:00 - 20:00" },
      ],
      fee: 300,
      prerequisites: "Aucun prérequis spécifique pour le niveau débutant. Les étudiants des niveaux supérieurs doivent avoir une connaissance de base de la grammaire et du vocabulaire français.",
      faq: [
        { question: 'Quels matériaux sont fournis ?', answer: 'Un manuel complet, des supports de cours et des ressources en ligne.' },
        { question: 'Puis-je changer entre les cours du matin et du soir ?', answer: 'Oui, en nous contactant une semaine à l’avance.' },
        { question: 'Y a-t-il un certificat après la fin du cours ?', answer: 'Oui, un certificat sera délivré après avoir réussi l’évaluation finale.' },
      ],
    },
    "business-french": {
      title: "Français des Affaires",
      description: "Améliorez vos compétences en communication professionnelle en français grâce à notre cours dédié aux affaires.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Ftravel-france-learn-foreign-language-surprised-teen-girl-hold-french-flag-workbook-horizontal-isolated-poster-school-girl-student-banner-header-portrait-schoolgirl-copy-space_545934-68763.jpg?alt=media&token=2bdd5401-8081-4966-9164-46b2b4c8fd52",
      levels: [
        {
          level: 'Niveau Débutant',
          description: 'Apprenez le vocabulaire et la grammaire nécessaires pour des situations professionnelles. Vous apprendrez à écrire des e-mails et à participer à des réunions.',
          topics: [
            'Introduction à la grammaire professionnelle et au vocabulaire',
            'Dialogues et conversations en entreprise',
            'Rédaction et réponse à des e-mails professionnels',
            'Pratique des phrases courantes dans des contextes professionnels',
          ],
        },
      ],
      objectives: [
        'Atteindre la fluidité et la confiance en communication professionnelle en français',
        'Développer des compétences d’écoute à travers des scénarios d’affaires réels',
        'Élargir le vocabulaire pour les événements professionnels et les réseaux',
      ],
      schedule: [
        { day: "Lundi - Vendredi", session: "Session du Matin", time: "9:00 - 11:00" },
        { day: "Lundi - Vendredi", session: "Session de l’Après-midi", time: "13:00 - 15:00" },
      ],
      fee: 400,
      prerequisites: "Connaissance de base de la grammaire et du vocabulaire français requise pour les niveaux supérieurs.",
      faq: [
        { question: 'Quels matériaux sont fournis ?', answer: 'Un manuel personnalisé, des documents de cours et des ressources en ligne.' },
        { question: 'Puis-je ajuster mon emploi du temps ?', answer: 'Oui, en nous contactant à l’avance, vous pouvez ajuster votre emploi du temps.' },
        { question: 'Un certificat est-il fourni après le cours ?', answer: 'Oui, un certificat est fourni après la réussite de l’évaluation finale.' },
      ],
    },
    "delf-exam-preparation": {
      title: "Exam Preparation",
      description: "Our Private Lessons are tailored to meet your individual learning needs and objectives. We focus on the core areas of English with a personalized approach.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Ftravel-france-learn-foreign-language-surprised-teen-girl-hold-french-flag-workbook-horizontal-isolated-poster-school-girl-student-banner-header-portrait-schoolgirl-copy-space_545934-68763.jpg?alt=media&token=2bdd5401-8081-4966-9164-46b2b4c8fd52",
      levels: [
        {
          level: 'Beginner Level',
          description: 'Focuses on basic grammar and vocabulary. You will learn how to have simple conversations and write basic texts.',
          topics: [
            'Introduction to basic grammar and everyday vocabulary',
            'Simple dialogues and conversations',
            'Writing and responding to basic messages',
            'Practicing common phrases used in everyday settings',
          ],
        },
        // ... other levels
      ],
      objectives: [
        'Achieve fluency and confidence in daily English communication',
        'Develop listening skills through personalized lessons',
        'Expand vocabulary for various contexts',
      ],
      schedule: [
        { day: "Monday - Thursday", session: "Morning Session", time: "9:00 AM - 11:00 AM" },
        { day: "Monday - Thursday", session: "Afternoon Session", time: "1:00 PM - 3:00 PM" },
      ],
      fee: 350,
      prerequisites: "No specific prerequisites for beginners. Intermediate and advanced students should have a basic understanding of English grammar.",
      faq: [
        { question: 'What materials are provided?', answer: 'A personalized course plan, handouts, and access to online resources.' },
        { question: 'Can I schedule lessons at different times?', answer: 'Yes, by contacting us in advance, you can adjust your schedule.' },
        { question: 'Is there a certification after completion?', answer: 'Yes, upon successful completion, a certificate is provided.' },
      ],
    },
    "french-for-kids": {
      title: "English For Kids",
      description: "Our Private Lessons are tailored to meet your individual learning needs and objectives. We focus on the core areas of English with a personalized approach.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Ftravel-france-learn-foreign-language-surprised-teen-girl-hold-french-flag-workbook-horizontal-isolated-poster-school-girl-student-banner-header-portrait-schoolgirl-copy-space_545934-68763.jpg?alt=media&token=2bdd5401-8081-4966-9164-46b2b4c8fd52",
      levels: [
        {
          level: 'Beginner Level',
          description: 'Focuses on basic grammar and vocabulary. You will learn how to have simple conversations and write basic texts.',
          topics: [
            'Introduction to basic grammar and everyday vocabulary',
            'Simple dialogues and conversations',
            'Writing and responding to basic messages',
            'Practicing common phrases used in everyday settings',
          ],
        },
        // ... other levels
      ],
      objectives: [
        'Achieve fluency and confidence in daily English communication',
        'Develop listening skills through personalized lessons',
        'Expand vocabulary for various contexts',
      ],
      schedule: [
        { day: "Monday - Thursday", session: "Morning Session", time: "9:00 AM - 11:00 AM" },
        { day: "Monday - Thursday", session: "Afternoon Session", time: "1:00 PM - 3:00 PM" },
      ],
      fee: 350,
      prerequisites: "No specific prerequisites for beginners. Intermediate and advanced students should have a basic understanding of English grammar.",
      faq: [
        { question: 'What materials are provided?', answer: 'A personalized course plan, handouts, and access to online resources.' },
        { question: 'Can I schedule lessons at different times?', answer: 'Yes, by contacting us in advance, you can adjust your schedule.' },
        { question: 'Is there a certification after completion?', answer: 'Yes, upon successful completion, a certificate is provided.' },
      ],
    },
    "private-french-lessons": {
      title: "Private Lessons",
      description: "Our Private Lessons are tailored to meet your individual learning needs and objectives. We focus on the core areas of English with a personalized approach.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Ftravel-france-learn-foreign-language-surprised-teen-girl-hold-french-flag-workbook-horizontal-isolated-poster-school-girl-student-banner-header-portrait-schoolgirl-copy-space_545934-68763.jpg?alt=media&token=2bdd5401-8081-4966-9164-46b2b4c8fd52",
      levels: [
        {
          level: 'Beginner Level',
          description: 'Focuses on basic grammar and vocabulary. You will learn how to have simple conversations and write basic texts.',
          topics: [
            'Introduction to basic grammar and everyday vocabulary',
            'Simple dialogues and conversations',
            'Writing and responding to basic messages',
            'Practicing common phrases used in everyday settings',
          ],
        },
        // ... other levels
      ],
      objectives: [
        'Achieve fluency and confidence in daily English communication',
        'Develop listening skills through personalized lessons',
        'Expand vocabulary for various contexts',
      ],
      schedule: [
        { day: "Monday - Thursday", session: "Morning Session", time: "9:00 AM - 11:00 AM" },
        { day: "Monday - Thursday", session: "Afternoon Session", time: "1:00 PM - 3:00 PM" },
      ],
      fee: 350,
      prerequisites: "No specific prerequisites for beginners. Intermediate and advanced students should have a basic understanding of English grammar.",
      faq: [
        { question: 'What materials are provided?', answer: 'A personalized course plan, handouts, and access to online resources.' },
        { question: 'Can I schedule lessons at different times?', answer: 'Yes, by contacting us in advance, you can adjust your schedule.' },
        { question: 'Is there a certification after completion?', answer: 'Yes, upon successful completion, a certificate is provided.' },
      ],
    },
    "self-study-french-courses": {
      title: "self Study Courses",
      description: "Our Private Lessons are tailored to meet your individual learning needs and objectives. We focus on the core areas of English with a personalized approach.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Ftravel-france-learn-foreign-language-surprised-teen-girl-hold-french-flag-workbook-horizontal-isolated-poster-school-girl-student-banner-header-portrait-schoolgirl-copy-space_545934-68763.jpg?alt=media&token=2bdd5401-8081-4966-9164-46b2b4c8fd52",
      levels: [
        {
          level: 'Beginner Level',
          description: 'Focuses on basic grammar and vocabulary. You will learn how to have simple conversations and write basic texts.',
          topics: [
            'Introduction to basic grammar and everyday vocabulary',
            'Simple dialogues and conversations',
            'Writing and responding to basic messages',
            'Practicing common phrases used in everyday settings',
          ],
        },
        // ... other levels
      ],
      objectives: [
        'Achieve fluency and confidence in daily English communication',
        'Develop listening skills through personalized lessons',
        'Expand vocabulary for various contexts',
      ],
      schedule: [
        { day: "Monday - Thursday", session: "Morning Session", time: "9:00 AM - 11:00 AM" },
        { day: "Monday - Thursday", session: "Afternoon Session", time: "1:00 PM - 3:00 PM" },
      ],
      fee: 350,
      prerequisites: "No specific prerequisites for beginners. Intermediate and advanced students should have a basic understanding of English grammar.",
      faq: [
        { question: 'What materials are provided?', answer: 'A personalized course plan, handouts, and access to online resources.' },
        { question: 'Can I schedule lessons at different times?', answer: 'Yes, by contacting us in advance, you can adjust your schedule.' },
        { question: 'Is there a certification after completion?', answer: 'Yes, upon successful completion, a certificate is provided.' },
      ],
    },
  };