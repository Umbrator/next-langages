export const courseList = [
    {
      title: 'General English',
      description: 'Build a strong foundation in reading, writing, listening, and speaking skills.',
      image: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Ffemale-student-posing-english-language-school_141192-1472.avif?alt=media&token=683d5e56-16ef-4df2-9ce4-4c7d37e572fd',
    },
    {
      title: 'Business English',
      description: 'Enhance your business communication and professional skills in English.',
      image: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Feconomy-finance-patriotism-freedom-independence-day-usa-american-education-reform-scho_265223-9612.jpg?alt=media&token=1f60957b-4d89-458f-a27e-410117ed92e2',
    },
    {
      title: 'Exam Preparation',
      description: 'Prepare for English proficiency exams with focused practice and strategies.',
      image: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fenglish-book-resting-table-working-space_23-2149429594.jpg?alt=media&token=61fa7f6f-12f2-4a56-aa25-1cd232e8d50f',
    },
    {
      title: 'English for Kids',
      description: 'Fun and interactive lessons designed for young learners to grasp English skills.',
      image: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Ffemale-blonde-english-teacher-reading-book-with-smart-kid-girl-language-child-studying-process-white-stylish-classroom_280538-4751.avif?alt=media&token=4b3667eb-1c06-415d-a9ec-bdbf190693be',
    },
    {
      title: 'Private Lessons',
      description: 'Personalized lessons tailored to individual learning styles and goals.',
      image: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fmixed-race-tutor-with-beard-sitting-table-nursery-room-explaining-rule-girl_622301-1187.jpg?alt=media&token=d736a292-54f0-4892-85c8-3d06735b8158',
    },
    {
      title: 'Self-study Courses',
      description: 'Flexible and self-paced courses for independent learners.',
      image: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fmedium-shot-woman-reading_23-2148882772.jpg?alt=media&token=62d7a261-7ed5-4b6c-b5b8-89d0961e523a',
    },
  ];

  export const courseData = {
    "general-english": {
      title: "General English",
      description: "Our Business English course is designed to build a strong foundation in the core areas of English: reading, writing, listening, and speaking.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fmedium-shot.jpg?alt=media&token=6c0b54f0-0f72-4386-a0ab-83e84d64a53a",
      levels: [
        {
          level: 'Beginner Level',
          description: 'Focuses on basic grammar and business-related vocabulary. You will learn how to conduct simple conversations and write basic emails.',
          topics: [
            'Introduction to basic grammar and professional vocabulary',
            'Simple business dialogues and phone conversations',
            'Writing and responding to basic emails',
            'Practicing common phrases used in business settings',
          ],
        },
      ],
      objectives: [
        'Achieve fluency and confidence in professional English communication',
        'Develop effective listening skills through real-life business scenarios',
        'Expand vocabulary for business, social, and networking events',
      ],
      schedule: [
        { day: "Monday - Thursday", session: "Morning Session", time: "10:00 AM - 12:00 PM" },
        { day: "Monday - Thursday", session: "Evening Session", time: "6:00 PM - 8:00 PM" },
      ],
      fee: 300,
      prerequisites: "There are no specific prerequisites for the beginner level. Students enrolling in higher levels should have a basic understanding of English grammar and vocabulary.",
      faq: [
        { question: 'What materials are provided?', answer: 'A comprehensive coursebook, handouts, and online resources.' },
        { question: 'Can I switch between morning and evening classes?', answer: 'Yes, by contacting us one week in advance.' },
        { question: 'Is there a certificate upon completion?', answer: 'Yes, you will receive a certificate upon passing the final assessment.' },
      ],
    },
    "business-english": {
      title: "Business English",
      description: "Our Private Lessons are tailored to meet your individual learning needs and objectives. We focus on the core areas of English with a personalized approach.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fmedium-shot.jpg?alt=media&token=6c0b54f0-0f72-4386-a0ab-83e84d64a53a",
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
    "exam-preparation": {
      title: "Exam Preparation",
      description: "Our Private Lessons are tailored to meet your individual learning needs and objectives. We focus on the core areas of English with a personalized approach.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fmedium-shot.jpg?alt=media&token=6c0b54f0-0f72-4386-a0ab-83e84d64a53a",
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
    "english-for-kids": {
      title: "English For Kids",
      description: "Our Private Lessons are tailored to meet your individual learning needs and objectives. We focus on the core areas of English with a personalized approach.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fmedium-shot.jpg?alt=media&token=6c0b54f0-0f72-4386-a0ab-83e84d64a53a",
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
    "private-lessons": {
      title: "Private Lessons",
      description: "Our Private Lessons are tailored to meet your individual learning needs and objectives. We focus on the core areas of English with a personalized approach.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fmedium-shot.jpg?alt=media&token=6c0b54f0-0f72-4386-a0ab-83e84d64a53a",
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
    "self-study-courses": {
      title: "self Study Courses",
      description: "Our Private Lessons are tailored to meet your individual learning needs and objectives. We focus on the core areas of English with a personalized approach.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fmedium-shot.jpg?alt=media&token=6c0b54f0-0f72-4386-a0ab-83e84d64a53a",
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