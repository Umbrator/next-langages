export const courseList = [
    {
      title: 'General German',
      description: 'Build a strong foundation in reading, writing, listening, and speaking skills.',
      image: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Feducation-learning-people-concept-group-smiling-students-with-folders-school-bags-german-flag-background_380164-112354.jpg?alt=media&token=a27f44c2-9855-4832-bc54-e7962e976047',
    },
    {
      title: 'Business German',
      description: 'Enhance your business communication and professional skills in German.',
      image: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fnavigating-higher-education-germany-insights-from-female-student_1233840-349.jpg?alt=media&token=16e891e7-8814-4bcd-9b7e-f386d7618354',
    },
    {
      title: 'Exam Preparation',
      description: 'Prepare for German proficiency exams with focused practice and strategies.',
      image: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fpeople-national-education-knowledge-graduation-concept-smiling-young-student-woman-mortarboard-eyeglasses-with-encyclopedia-book-german-flag-background_380164-135430.jpg?alt=media&token=dd462752-58e2-40b0-a184-56894faceaf9  ',
    },
    {
      title: 'German for Kids',
      description: 'Fun and interactive lessons designed for young learners to grasp German skills.',
      image: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Flittle-german-girl-holding-her-countrys-flag-stick_1270757-2005.jpg?alt=media&token=ab15b3fd-7b9c-4625-ba16-a7f6301e2360',
    },
    {
      title: 'Private Lessons',
      description: 'Personalized lessons tailored to individual learning styles and goals.',
      image: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fpeople-education-learning-school-concept-happy-student-girl-with-folders-pointing-finger-german-flag-background_380164-112358.jpg?alt=media&token=4dd56436-fb3a-475e-a7e6-51db6540b05f',
    },
    {
      title: 'Self-study Courses',
      description: 'Flexible and self-paced courses for independent learners.',
      image: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fhappy-teen-girl-hold-german-flag-yellow-background-showing-thumb-up-study-abroad_545934-11773.jpg?alt=media&token=c039b4a4-12b3-40ef-9b95-9c83619aa31d',
    },
  ];

  export const courseData = {
    "general-german": {
      title: "General German",
      description: "Our Business German course is designed to build a strong foundation in the core areas of German: reading, writing, listening, and speaking.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Feducation-foreign-school-teen-girl-football-fan-choose-direction-happy-child-pointing-finger_545934-19162.jpg?alt=media&token=c4abfbca-595c-48a1-b849-360ff3c2af32",
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
        'Achieve fluency and confidence in professional German communication',
        'Develop effective listening skills through real-life business scenarios',
        'Expand vocabulary for business, social, and networking events',
      ],
      schedule: [
        { day: "Monday - Thursday", session: "Morning Session", time: "10:00 AM - 12:00 PM" },
        { day: "Monday - Thursday", session: "Evening Session", time: "6:00 PM - 8:00 PM" },
      ],
      fee: 300,
      prerequisites: "There are no specific prerequisites for the beginner level. Students enrolling in higher levels should have a basic understanding of German grammar and vocabulary.",
      faq: [
        { question: 'What materials are provided?', answer: 'A comprehensive coursebook, handouts, and online resources.' },
        { question: 'Can I switch between morning and evening classes?', answer: 'Yes, by contacting us one week in advance.' },
        { question: 'Is there a certificate upon completion?', answer: 'Yes, you will receive a certificate upon passing the final assessment.' },
      ],
    },
    "business-german": {
      title: "Business German",
      description: "Our Private Lessons are tailored to meet your individual learning needs and objectives. We focus on the core areas of German with a personalized approach.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Feducation-foreign-school-teen-girl-football-fan-choose-direction-happy-child-pointing-finger_545934-19162.jpg?alt=media&token=c4abfbca-595c-48a1-b849-360ff3c2af32",
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
        'Achieve fluency and confidence in daily German communication',
        'Develop listening skills through personalized lessons',
        'Expand vocabulary for various contexts',
      ],
      schedule: [
        { day: "Monday - Thursday", session: "Morning Session", time: "9:00 AM - 11:00 AM" },
        { day: "Monday - Thursday", session: "Afternoon Session", time: "1:00 PM - 3:00 PM" },
      ],
      fee: 350,
      prerequisites: "No specific prerequisites for beginners. Intermediate and advanced students should have a basic understanding of German grammar.",
      faq: [
        { question: 'What materials are provided?', answer: 'A personalized course plan, handouts, and access to online resources.' },
        { question: 'Can I schedule lessons at different times?', answer: 'Yes, by contacting us in advance, you can adjust your schedule.' },
        { question: 'Is there a certification after completion?', answer: 'Yes, upon successful completion, a certificate is provided.' },
      ],
    },
    "exam-preparation": {
      title: "Exam Preparation",
      description: "Our Private Lessons are tailored to meet your individual learning needs and objectives. We focus on the core areas of German with a personalized approach.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Feducation-foreign-school-teen-girl-football-fan-choose-direction-happy-child-pointing-finger_545934-19162.jpg?alt=media&token=c4abfbca-595c-48a1-b849-360ff3c2af32",
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
        'Achieve fluency and confidence in daily German communication',
        'Develop listening skills through personalized lessons',
        'Expand vocabulary for various contexts',
      ],
      schedule: [
        { day: "Monday - Thursday", session: "Morning Session", time: "9:00 AM - 11:00 AM" },
        { day: "Monday - Thursday", session: "Afternoon Session", time: "1:00 PM - 3:00 PM" },
      ],
      fee: 350,
      prerequisites: "No specific prerequisites for beginners. Intermediate and advanced students should have a basic understanding of German grammar.",
      faq: [
        { question: 'What materials are provided?', answer: 'A personalized course plan, handouts, and access to online resources.' },
        { question: 'Can I schedule lessons at different times?', answer: 'Yes, by contacting us in advance, you can adjust your schedule.' },
        { question: 'Is there a certification after completion?', answer: 'Yes, upon successful completion, a certificate is provided.' },
      ],
    },
    "english-for-kids": {
      title: "German For Kids",
      description: "Our Private Lessons are tailored to meet your individual learning needs and objectives. We focus on the core areas of German with a personalized approach.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Feducation-foreign-school-teen-girl-football-fan-choose-direction-happy-child-pointing-finger_545934-19162.jpg?alt=media&token=c4abfbca-595c-48a1-b849-360ff3c2af32",
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
        'Achieve fluency and confidence in daily German communication',
        'Develop listening skills through personalized lessons',
        'Expand vocabulary for various contexts',
      ],
      schedule: [
        { day: "Monday - Thursday", session: "Morning Session", time: "9:00 AM - 11:00 AM" },
        { day: "Monday - Thursday", session: "Afternoon Session", time: "1:00 PM - 3:00 PM" },
      ],
      fee: 350,
      prerequisites: "No specific prerequisites for beginners. Intermediate and advanced students should have a basic understanding of German grammar.",
      faq: [
        { question: 'What materials are provided?', answer: 'A personalized course plan, handouts, and access to online resources.' },
        { question: 'Can I schedule lessons at different times?', answer: 'Yes, by contacting us in advance, you can adjust your schedule.' },
        { question: 'Is there a certification after completion?', answer: 'Yes, upon successful completion, a certificate is provided.' },
      ],
    },
    "private-lessons": {
      title: "Private Lessons",
      description: "Our Private Lessons are tailored to meet your individual learning needs and objectives. We focus on the core areas of German with a personalized approach.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Feducation-foreign-school-teen-girl-football-fan-choose-direction-happy-child-pointing-finger_545934-19162.jpg?alt=media&token=c4abfbca-595c-48a1-b849-360ff3c2af32",
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
        'Achieve fluency and confidence in daily German communication',
        'Develop listening skills through personalized lessons',
        'Expand vocabulary for various contexts',
      ],
      schedule: [
        { day: "Monday - Thursday", session: "Morning Session", time: "9:00 AM - 11:00 AM" },
        { day: "Monday - Thursday", session: "Afternoon Session", time: "1:00 PM - 3:00 PM" },
      ],
      fee: 350,
      prerequisites: "No specific prerequisites for beginners. Intermediate and advanced students should have a basic understanding of German grammar.",
      faq: [
        { question: 'What materials are provided?', answer: 'A personalized course plan, handouts, and access to online resources.' },
        { question: 'Can I schedule lessons at different times?', answer: 'Yes, by contacting us in advance, you can adjust your schedule.' },
        { question: 'Is there a certification after completion?', answer: 'Yes, upon successful completion, a certificate is provided.' },
      ],
    },
    "self-study-courses": {
      title: "self Study Courses",
      description: "Our Private Lessons are tailored to meet your individual learning needs and objectives. We focus on the core areas of German with a personalized approach.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Feducation-foreign-school-teen-girl-football-fan-choose-direction-happy-child-pointing-finger_545934-19162.jpg?alt=media&token=c4abfbca-595c-48a1-b849-360ff3c2af32",
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
        'Achieve fluency and confidence in daily German communication',
        'Develop listening skills through personalized lessons',
        'Expand vocabulary for various contexts',
      ],
      schedule: [
        { day: "Monday - Thursday", session: "Morning Session", time: "9:00 AM - 11:00 AM" },
        { day: "Monday - Thursday", session: "Afternoon Session", time: "1:00 PM - 3:00 PM" },
      ],
      fee: 350,
      prerequisites: "No specific prerequisites for beginners. Intermediate and advanced students should have a basic understanding of German grammar.",
      faq: [
        { question: 'What materials are provided?', answer: 'A personalized course plan, handouts, and access to online resources.' },
        { question: 'Can I schedule lessons at different times?', answer: 'Yes, by contacting us in advance, you can adjust your schedule.' },
        { question: 'Is there a certification after completion?', answer: 'Yes, upon successful completion, a certificate is provided.' },
      ],
    },
  };