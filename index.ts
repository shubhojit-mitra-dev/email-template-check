export const WELCOME_EMAIL_TEMPLATE = (
  userName: string,
  fullName: string,
  email: string,
  location: string,
  profilePicture: string,
  skills: string,
  experience: string,
  hourlyRate: number,
  bio: string,
  resume: string,
  primaryCategory: string,
  phoneNumber?: string,
  availableHours?: number,
  subCategories?: string,
  projectTypes?: string,
  linkedin?: string,
  github?: string,
  twitter?: string,
) =>
`paste your template here 
`;

// Function to generate HTML file with sample data
export function generateEmailPreview(): void {
  const fs = require('fs');
  const path = require('path');
  
  // Sample data for the email template
  const sampleData = {
    userName: 'John Doe',
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '+1-555-0123',
    location: 'New York, NY',
    profilePicture: 'https://example.com/profile.jpg',
    skills: 'JavaScript, React, Node.js, TypeScript',
    experience: '5 years',
    hourlyRate: 2500,
    availableHours: 40,
    bio: 'Experienced full-stack developer with expertise in modern web technologies.',
    resume: 'https://example.com/resume.pdf',
    primaryCategory: 'Web Development',
    subCategories: 'Frontend, Backend, Full-stack',
    projectTypes: 'Web applications, E-commerce, SaaS',
    linkedin: 'https://linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe',
    twitter: 'https://twitter.com/johndoe'
  };
  
  // Generate the HTML content
  const htmlContent = WELCOME_EMAIL_TEMPLATE(
    sampleData.userName,
    sampleData.fullName,
    sampleData.email,
    sampleData.location,
    sampleData.profilePicture,
    sampleData.skills,
    sampleData.experience,
    sampleData.hourlyRate,
    sampleData.bio,
    sampleData.resume,
    sampleData.primaryCategory,
    sampleData.phoneNumber,
    sampleData.availableHours,
    sampleData.subCategories,
    sampleData.projectTypes,
    sampleData.linkedin,
    sampleData.github,
    sampleData.twitter
  );
  
  // Write the HTML file
  const outputPath = path.join(process.cwd(), 'index.html');
  fs.writeFileSync(outputPath, htmlContent, 'utf8');
  
  console.log(`Email template has been generated and saved to: ${outputPath}`);
  console.log('You can now open index.html in your browser to view the email template.');
}

// If this file is being run directly, generate the preview
if (require.main === module) {
  generateEmailPreview();
}
