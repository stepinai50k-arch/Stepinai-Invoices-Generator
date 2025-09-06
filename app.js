// Complete Application data with all countries and social media integration
const appData = {
  sampleStudentNames: ["Aarav Mehta", "Vihaan Patel", "Riya Bansal", "Ananya Singh", "Karan Gupta", "Saanvi Sharma", "Arjun Kumar", "Ishita Agarwal", "Diya Patel", "Aryan Singh", "Kavya Sharma", "Reyansh Kumar", "Aanya Gupta", "Vivaan Agarwal", "Myra Bansal", "Kiaan Mehta", "Zara Singh", "Advait Patel", "Navya Sharma", "Atharv Kumar"],
  classes: ["6th", "7th", "8th", "9th", "10th", "11th", "12th"],
  sections: ["A", "B", "C", "D", "E"],
  banks: ["SBI Bank", "HDFC Bank", "ICICI Bank", "PNB Bank", "Canara Bank", "BOI Bank", "Axis Bank", "Union Bank", "Indian Bank", "Central Bank"],
  paymentModes: ["Cheque", "Cash", "Online Transfer", "Debit/Credit Card"],
  signatoryTitles: [
    "Dr. Rajesh Kumar - Principal",
    "Mrs. Priya Sharma - Accountant", 
    "Mr. Suresh Patel - Finance Officer",
    "Dr. Meera Singh - Administrative Head",
    "Prof. Anil Gupta - Dean",
    "Ms. Kavita Agarwal - Accounts Manager",
    "Mr. Vinod Kumar - Bursar",
    "Dr. Sunita Bansal - Vice Principal",
    "Prof. Manoj Gupta - Finance Head",
    "Mrs. Ritu Singh - Chief Accountant"
  ],
  defaultSchoolInfo: {
    name: "KALINGA INSTITUTE OF INDUSTRIAL TECHNOLOGY",
    address: "KIIT Rd, Patia, Bhubaneswar, Odisha 751024, India",
    phone: "+91 80807 35735",
    email: "info@kiit.ac.in"
  },
  countryNames: {
    india: ["Aarav Mehta", "Vihaan Patel", "Riya Bansal", "Ananya Singh", "Karan Gupta", "Saanvi Sharma", "Arjun Kumar", "Ishita Agarwal", "Diya Sharma", "Kavya Patel", "Reyansh Gupta", "Aanya Mehta", "Vivaan Singh", "Myra Sharma", "Kiaan Patel", "Zara Bansal", "Advait Kumar", "Navya Singh", "Atharv Sharma", "Isha Gupta"],
    usa: ["John Smith", "Emily Johnson", "Michael Brown", "Sarah Davis", "David Wilson", "Jessica Martinez", "Christopher Garcia", "Ashley Rodriguez", "Matthew Anderson", "Amanda Taylor", "Daniel Jackson", "Stephanie White", "Kevin Harris", "Nicole Martin", "Ryan Thompson", "Lauren Clark", "Brandon Lewis", "Megan Walker", "Tyler Hall", "Brittany Allen"],
    uk: ["James Wilson", "Emma Thompson", "Oliver Davies", "Sophie Clarke", "Harry Evans", "Charlotte Roberts", "George Taylor", "Amelia Jones", "William Brown", "Olivia Smith", "Jack Miller", "Grace Johnson", "Thomas Davis", "Lily Wilson", "Joshua Evans", "Chloe Taylor", "Alexander Brown", "Mia Davies", "Benjamin Clark", "Isabella Roberts"],
    australia: ["Liam O'Connor", "Chloe Murphy", "Noah Campbell", "Zoe Mitchell", "Mason Stewart", "Ruby Walker", "Lucas Hughes", "Isla Bennett", "Ethan King", "Mia Cooper", "Cooper Ryan", "Sienna Clarke", "Hunter Walsh", "Ava Sullivan", "Oscar Murphy", "Charlotte O'Brien", "Archer Campbell", "Harper Mitchell", "Felix Stewart", "Willow Hughes"],
    canada: ["Aiden MacDonald", "Sophia Martin", "Logan Thompson", "Grace Wilson", "Owen Clarke", "Emma Fraser", "Nathan Ross", "Ava Campbell", "Hunter Scott", "Lily Anderson", "Carter MacDonald", "Maya Thompson", "Caleb Wilson", "Zoe Clarke", "Ethan Fraser", "Chloe Ross", "Noah Campbell", "Ella Scott", "Liam Anderson", "Sarah Martin"],
    germany: ["Maximilian Müller", "Emma Schmidt", "Felix Weber", "Lena Fischer", "Paul Wagner", "Sophie Bauer", "Leon Hoffmann", "Marie Schulz", "David Klein", "Anna Wolf", "Lukas Meyer", "Mia Richter", "Jonas Koch", "Lea Becker", "Finn Fuchs", "Lara Hartmann", "Tim Neumann", "Nele Braun", "Jan Krüger", "Maja Zimmermann"],
    france: ["Louis Martin", "Emma Dubois", "Gabriel Leroy", "Chloé Moreau", "Arthur Simon", "Manon Bernard", "Hugo Petit", "Léa Durand", "Nathan Robert", "Jade Rousseau", "Théo Michel", "Camille Lefevre", "Maxime Garnier", "Sarah Martinez", "Antoine Girard", "Inès Roux", "Alexandre Lambert", "Julie Fontaine", "Clément Chevalier", "Anaïs Moreau"],
    japan: ["Hiroshi Tanaka", "Sakura Suzuki", "Takeshi Sato", "Yuki Watanabe", "Kenji Ito", "Ayumi Yamamoto", "Ryota Nakamura", "Hana Kobayashi", "Daiki Kato", "Rina Yoshida", "Kenta Inoue", "Miki Kimura", "Shota Hayashi", "Ai Ishikawa", "Yuto Yamazaki", "Mei Mori", "Ryo Abe", "Nana Okada", "Sota Fujita", "Yui Matsumoto"],
    china: ["Wei Zhang", "Li Wang", "Ming Liu", "Xia Chen", "Jun Yang", "Mei Zhou", "Bin Wu", "Hua Xu", "Gang Sun", "Yu Li", "Feng Zhao", "Jing Huang", "Hao Zheng", "Yan Wu", "Lei Zhou", "Min Wang", "Qiang Li", "Hong Zhang", "Ping Liu", "Fang Chen"],
    brazil: ["João Silva", "Maria Santos", "Pedro Oliveira", "Ana Costa", "Carlos Pereira", "Juliana Ferreira", "Rafael Rodrigues", "Camila Almeida", "Lucas Carvalho", "Beatriz Lima", "Gabriel Ribeiro", "Letícia Gomes", "Mateus Barbosa", "Larissa Cardoso", "Felipe Martins", "Isabela Rocha", "Bruno Alves", "Fernanda Dias", "Thiago Nascimento", "Mariana Correia"],
    cambodia: ["Sophea Chan", "Rotha Kim", "Sreypov Ly", "Chandara Ouk", "Pisach Som", "Sreyleak Tan", "Kosal Vong", "Mealea Yem", "Sinath Chhay", "Sreypich Heng", "Visal Khem", "Bopha Mao", "Rithy Orn", "Sreynich Prak", "Dara Ros", "Chanlina Seng", "Vicheka Thong", "Sreymom Uy", "Ponlok Vann", "Chenda Yim"]
  },
  defaultAmount: 12500,
  academicYear: "2024-2025",
  socialMedia: {
    youtube: {
      icon: "🎬",
      text: "YouTube",
      url: "https://youtube.com"
    },
    tiktok: {
      icon: "🎵",
      text: "TikTok", 
      url: "https://tiktok.com"
    },
    telegram: {
      icon: "💬",
      text: "Telegram",
      url: "https://t.me/stepinai"
    },
    github: {
      icon: "💻",
      text: "GitHub",
      url: "https://github.com/stepinai"
    }
  },
  bulkGenerationSettings: {
    maxInvoices: 50,
    defaultCount: 10,
    dateRangeStart: "2025-01-01",
    dateRangeEnd: "2025-05-31"
  }
};

// Global variables for bulk generation and images
let bulkInvoices = [];
let stampImageData = null;
let signatureImageData = null;
let logoImageData = null;
let generatedJPGImages = [];
let userBulkCount = 10;

// ============================================================================
// FIX 1: SECTION REORDERING - Move sections after DOM loads
// ============================================================================
function reorderSections() {
  try {
    console.log('APPLYING FIX 1: Reordering sections...');
    
    const customStudentNamesSection = document.getElementById('customStudentNamesSection');
    const bulkGenerationSection = document.getElementById('bulkGenerationSection');
    const studentInformationSection = document.getElementById('studentInformationSection');
    const formsColumn = document.querySelector('.forms-column');
    
    if (!customStudentNamesSection || !bulkGenerationSection || !studentInformationSection || !formsColumn) {
      console.error('Could not find required sections for reordering');
      return;
    }
    
    // Fix 1a: Move Custom Student Names section to appear AFTER Student Information
    if (studentInformationSection.nextElementSibling !== customStudentNamesSection) {
      console.log('Moving Custom Student Names after Student Information...');
      studentInformationSection.insertAdjacentElement('afterend', customStudentNamesSection);
    }
    
    // Fix 1b: Move Bulk Generation section to be LAST in the forms column
    console.log('Moving Bulk Generation to last position...');
    formsColumn.appendChild(bulkGenerationSection);
    
    console.log('✅ FIX 1 APPLIED: Section reordering completed successfully');
    
  } catch (error) {
    console.error('Error reordering sections:', error);
  }
}

// ============================================================================
// FIX 2: ENHANCED PAYMENT DETAILS GENERATION
// ============================================================================
function generatePaymentData(paymentMode) {
  try {
    const bank = getRandomElement(appData.banks);
    const chequeNumber = generateRandomNumber(100000, 999999);
    
    switch (paymentMode) {
      case 'Cheque':
        return `Cheque No: ${chequeNumber}\nBank: ${bank}\nDrawn on: ${bank}`;
      
      case 'Online Transfer':
        const transactionId = `TXN${generateRandomNumber(100000, 999999)}`;
        const utrNumber = `UTR${generateRandomNumber(100000000000, 999999999999)}`;
        return `Transaction ID: ${transactionId}\nBank: ${bank}\nUTR Number: ${utrNumber}`;
      
      case 'Debit/Credit Card':
        const cardEnding = generateRandomNumber(1000, 9999);
        const authCode = generateRandomNumber(100000, 999999);
        return `Card ending: ****${cardEnding}\nBank: ${bank}\nAuth Code: ${authCode}`;
      
      case 'Cash':
        const receiptNumber = `CR${generateRandomNumber(100000, 999999)}`;
        return `Cash Receipt No: ${receiptNumber}\nReceived by: Accounts Department\nCounter: Main Office`;
      
      default:
        return `Payment processed successfully\nReference: ${generateRandomNumber(100000, 999999)}`;
    }
  } catch (error) {
    console.error('Error generating payment data:', error);
    return 'Payment details will be updated automatically';
  }
}

// ============================================================================
// FIX 3: ENHANCED PAYMENT DETAILS IN PREVIEW WITH LINE BREAKS
// ============================================================================
function updatePaymentDetailsPreview() {
  try {
    const paymentDetailsTextarea = document.getElementById('paymentDetails');
    const previewPaymentDetails = document.getElementById('previewPaymentDetails');
    
    if (paymentDetailsTextarea && previewPaymentDetails) {
      const paymentDetailsText = paymentDetailsTextarea.value || '-';
      // Convert line breaks to HTML breaks for proper display in preview
      const paymentDetailsHTML = paymentDetailsText.replace(/\n/g, '<br>');
      previewPaymentDetails.innerHTML = paymentDetailsHTML;
      console.log('Payment details preview updated with line breaks');
    }
  } catch (error) {
    console.error('Error updating payment details preview:', error);
  }
}

// Unified Name Resolver
function getResolvedNames() {
  const customNames = getCustomStudentNames();
  
  if (customNames.length > 0) {
    return {
      source: 'custom',
      names: customNames,
      total: customNames.length
    };
  }
  
  const countrySelect = document.getElementById('countrySelect');
  const selectedCountry = countrySelect?.value;
  
  if (selectedCountry && selectedCountry !== 'custom' && appData.countryNames[selectedCountry]) {
    return {
      source: 'country',
      country: selectedCountry,
      names: appData.countryNames[selectedCountry],
      total: appData.countryNames[selectedCountry].length
    };
  }
  
  return {
    source: 'default',
    names: appData.sampleStudentNames,
    total: appData.sampleStudentNames.length
  };
}

// Consistent Student Data Generation
function generateStudentData(index = 0) {
  const resolvedNames = getResolvedNames();
  
  let studentName;
  if (resolvedNames.names.length > 0) {
    studentName = resolvedNames.names[index % resolvedNames.names.length];
  } else {
    studentName = getRandomElement(appData.sampleStudentNames);
  }
  
  return {
    studentName,
    studentClass: getRandomElement(appData.classes),
    section: getRandomElement(appData.sections),
    rollNumber: generateRandomNumber(1001, 9999),
    amount: generateRandomNumber(10000, 25000),
    paymentMode: getRandomElement(appData.paymentModes),
    signatoryTitle: getRandomElement(appData.signatoryTitles),
    nameSource: resolvedNames.source
  };
}

// Utility functions
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function generateInvoiceNumber() {
  const year = new Date().getFullYear();
  const randomNum = generateRandomNumber(10000, 99999);
  return `INV-${year}-${randomNum}`;
}

function generateRandomDate(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function numberToWords(num) {
  if (num === 0) return 'Zero Rupees Only';
  
  const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  
  function convertToWords(n) {
    if (n === 0) return '';
    if (n < 10) return ones[n];
    if (n < 20) return teens[n - 10];
    if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + ones[n % 10] : '');
    if (n < 1000) return ones[Math.floor(n / 100)] + ' Hundred' + (n % 100 !== 0 ? ' ' + convertToWords(n % 100) : '');
    if (n < 100000) return convertToWords(Math.floor(n / 1000)) + ' Thousand' + (n % 1000 !== 0 ? ' ' + convertToWords(n % 1000) : '');
    if (n < 10000000) return convertToWords(Math.floor(n / 100000)) + ' Lakh' + (n % 100000 !== 0 ? ' ' + convertToWords(n % 100000) : '');
    if (n < 1000000000) return convertToWords(Math.floor(n / 10000000)) + ' Crore' + (n % 10000000 !== 0 ? ' ' + convertToWords(n % 10000000) : '');
  }
  
  return convertToWords(num) + ' Rupees Only';
}

function showNotification(message) {
  const notification = document.getElementById('notification');
  const notificationText = document.getElementById('notification-text');
  
  if (notification && notificationText) {
    notificationText.textContent = message;
    notification.classList.remove('hidden');
    
    setTimeout(() => {
      notification.classList.add('hidden');
    }, 3000);
  }
}

// FIXED: Enhanced country name generation functionality with proper dropdown handling
function generateCountryNames() {
  try {
    const countrySelect = document.getElementById('countrySelect');
    const customNamesTextarea = document.getElementById('customStudentNames');
    
    if (!countrySelect || !customNamesTextarea) {
      console.error('Form elements not found:', { countrySelect: !!countrySelect, customNamesTextarea: !!customNamesTextarea });
      showNotification('Error: Form elements not found');
      return;
    }
    
    console.log('Country select found, current value:', countrySelect.value);
    
    const selectedCountry = countrySelect.value;
    
    if (selectedCountry === 'custom') {
      showNotification('Please select a country to generate names.');
      return;
    }
    
    const countryNames = appData.countryNames[selectedCountry];
    if (!countryNames || countryNames.length === 0) {
      console.error('No names available for country:', selectedCountry);
      showNotification('No names available for selected country.');
      return;
    }
    
    const namesToUse = [...countryNames];
    customNamesTextarea.value = namesToUse.join('\n');
    
    const countryDisplayNames = {
      india: 'India',
      usa: 'USA',
      uk: 'United Kingdom',
      australia: 'Australia',
      canada: 'Canada',
      germany: 'Germany',
      france: 'France',
      japan: 'Japan',
      china: 'China',
      brazil: 'Brazil',
      cambodia: 'Cambodia (Khmer)'
    };
    
    const countryName = countryDisplayNames[selectedCountry] || selectedCountry;
    console.log(`Generated ${namesToUse.length} names for ${countryName}`);
    showNotification(`Generated ${namesToUse.length} names for ${countryName}!`);
    
  } catch (error) {
    console.error('Error generating country names:', error);
    showNotification('Error generating names. Please try again.');
  }
}

// Custom student names functionality
function getCustomStudentNames() {
  const customNamesTextarea = document.getElementById('customStudentNames');
  if (!customNamesTextarea) return [];
  
  const customNames = customNamesTextarea.value
    .split('\n')
    .map(name => name.trim())
    .filter(name => name.length > 0);
  
  return customNames;
}

function getStudentNameForBulk(index, customNames) {
  if (customNames.length > 0) {
    return customNames[index % customNames.length];
  } else {
    return getRandomElement(appData.sampleStudentNames);
  }
}

// Auto-generate signatory functionality
function autoGenerateSignatory() {
  try {
    const randomSignatory = getRandomElement(appData.signatoryTitles);
    const signatoryTitleElement = document.getElementById('signatoryTitle');
    
    if (signatoryTitleElement) {
      signatoryTitleElement.value = randomSignatory;
      updateInvoicePreview();
      showNotification('Signatory name/title generated successfully!');
    }
  } catch (error) {
    console.error('Error generating signatory:', error);
    showNotification('Error generating signatory. Please try again.');
  }
}

// Image handling functions
function handleImageUpload(event, previewId, placeholderId, invoiceImgId, invoicePlaceholderId) {
  try {
    const file = event.target.files[0];
    const fileStatus = event.target.parentElement.querySelector('.file-status');
    const previewImg = document.getElementById(previewId);
    const placeholder = document.getElementById(placeholderId);
    const invoiceImg = document.getElementById(invoiceImgId);
    const invoicePlaceholder = document.getElementById(invoicePlaceholderId);
    
    if (file) {
      if (fileStatus) fileStatus.textContent = file.name;
      
      const reader = new FileReader();
      reader.onload = function(e) {
        const imageData = e.target.result;
        
        // Store image data globally
        if (event.target.id === 'stampImage') {
          stampImageData = imageData;
        } else if (event.target.id === 'signatureImage') {
          signatureImageData = imageData;
        } else if (event.target.id === 'schoolLogo') {
          logoImageData = imageData;
        }
        
        // Update preview in form
        if (previewImg && placeholder) {
          previewImg.src = imageData;
          previewImg.classList.remove('hidden');
          if (placeholder) placeholder.classList.add('hidden');
        }
        
        // Update preview in invoice
        if (invoiceImg && invoicePlaceholder) {
          invoiceImg.src = imageData;
          invoiceImg.classList.remove('hidden');
          if (invoicePlaceholder) invoicePlaceholder.classList.add('hidden');
        }
        
        // Special handling for logo in invoice header
        if (event.target.id === 'schoolLogo') {
          const logoPreview = document.getElementById('logoPreview');
          if (logoPreview) {
            logoPreview.src = imageData;
            logoPreview.classList.remove('hidden');
          }
        }
      };
      reader.readAsDataURL(file);
      
      showNotification('Image uploaded successfully!');
    } else {
      if (fileStatus) fileStatus.textContent = 'No file chosen';
      
      // Clear image data
      if (event.target.id === 'stampImage') {
        stampImageData = null;
      } else if (event.target.id === 'signatureImage') {
        signatureImageData = null;
      } else if (event.target.id === 'schoolLogo') {
        logoImageData = null;
      }
      
      // Hide preview in form
      if (previewImg && placeholder) {
        previewImg.classList.add('hidden');
        if (placeholder) placeholder.classList.remove('hidden');
      }
      
      // Hide preview in invoice
      if (invoiceImg && invoicePlaceholder) {
        invoiceImg.classList.add('hidden');
        if (invoicePlaceholder) invoicePlaceholder.classList.remove('hidden');
      }
      
      // Special handling for logo in invoice header
      if (event.target.id === 'schoolLogo') {
        const logoPreview = document.getElementById('logoPreview');
        if (logoPreview) {
          logoPreview.classList.add('hidden');
        }
      }
    }
  } catch (error) {
    console.error('Error handling image upload:', error);
    showNotification('Error uploading image. Please try again.');
  }
}

// ENHANCED form update functions with email mailto links
function updateInvoicePreview() {
  try {
    console.log('Updating invoice preview...');
    
    // Update school information
    const schoolName = document.getElementById('schoolName')?.value || '';
    const schoolAddress = document.getElementById('schoolAddress')?.value || '';
    const contactInfo = document.getElementById('contactInfo')?.value || '';
    
    const previewSchoolName = document.getElementById('previewSchoolName');
    const previewSchoolAddress = document.getElementById('previewSchoolAddress');
    const previewContactInfo = document.getElementById('previewContactInfo');
    
    if (previewSchoolName) previewSchoolName.textContent = schoolName || 'KALINGA INSTITUTE OF INDUSTRIAL TECHNOLOGY';
    if (previewSchoolAddress) previewSchoolAddress.textContent = schoolAddress || 'KIIT Rd, Patia, Bhubaneswar, Odisha 751024, India';
    if (previewContactInfo) {
      let contactWithLinks = contactInfo || 'Phone: +91 80807 35735<br>Email: info@kiit.ac.in';
      contactWithLinks = contactWithLinks.replace(
        /Email:\s*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gi,
        'Email: <a href="mailto:$1" class="email-link">$1</a>'
      );
      previewContactInfo.innerHTML = contactWithLinks;
    }
    
    // Enhanced student information handling
    const studentName = document.getElementById('studentName')?.value || '';
    const studentClass = document.getElementById('studentClass')?.value || '';
    const section = document.getElementById('section')?.value || '';
    const rollNumber = document.getElementById('rollNumber')?.value || '';
    
    const previewStudentName = document.getElementById('previewStudentName');
    const previewStudentClass = document.getElementById('previewStudentClass');
    const previewSection = document.getElementById('previewSection');
    const previewRollNumber = document.getElementById('previewRollNumber');
    
    if (previewStudentName) previewStudentName.textContent = studentName || '-';
    if (previewStudentClass) previewStudentClass.textContent = studentClass || '-';
    if (previewSection) previewSection.textContent = section || '-';
    if (previewRollNumber) previewRollNumber.textContent = rollNumber || '-';
    
    // Hide parent name in invoice preview
    const previewParentNameElement = document.getElementById('previewParentName');
    if (previewParentNameElement) {
      previewParentNameElement.style.display = 'none';
      const parentLine = previewParentNameElement.closest('p');
      if (parentLine) {
        parentLine.style.display = 'none';
      }
    }
    
    // Update payment information
    const paymentDate = document.getElementById('paymentDate')?.value || '';
    const academicYear = document.getElementById('academicYear')?.value || '2024-2025';
    const amount = document.getElementById('amount')?.value || '0';
    const paymentMode = document.getElementById('paymentMode')?.value || '';
    
    const previewPaymentDate = document.getElementById('previewPaymentDate');
    const previewInvoiceDate = document.getElementById('previewInvoiceDate');
    const previewDueDate = document.getElementById('previewDueDate');
    const previewAcademicYear = document.getElementById('previewAcademicYear');
    const previewPeriod = document.getElementById('previewPeriod');
    const previewAmount = document.getElementById('previewAmount');
    const previewTotalAmount = document.getElementById('previewTotalAmount');
    const previewPaymentMode = document.getElementById('previewPaymentMode');
    
    if (previewPaymentDate) previewPaymentDate.textContent = paymentDate ? formatDate(paymentDate) : '-';
    if (previewInvoiceDate) previewInvoiceDate.textContent = paymentDate ? formatDate(paymentDate) : '-';
    if (previewDueDate && paymentDate) {
      const dueDate = new Date(new Date(paymentDate).getTime() + 30 * 24 * 60 * 60 * 1000);
      previewDueDate.textContent = formatDate(dueDate);
    }
    if (previewAcademicYear) previewAcademicYear.textContent = academicYear;
    if (previewPeriod) previewPeriod.textContent = academicYear;
    
    // Enhanced amount handling
    const numericAmount = parseInt(amount) || 0;
    const formattedAmount = numericAmount.toLocaleString();
    
    if (previewAmount) previewAmount.textContent = formattedAmount;
    if (previewTotalAmount) previewTotalAmount.textContent = formattedAmount;
    if (previewPaymentMode) previewPaymentMode.textContent = paymentMode || '-';
    
    // FIX 3: Update payment details with proper line break formatting
    updatePaymentDetailsPreview();
    
    // Update amount in words
    const amountInWords = document.getElementById('amountInWords');
    if (amountInWords) {
      const wordsText = numberToWords(numericAmount);
      amountInWords.textContent = wordsText;
    }
    
    // Update signatory title
    const signatoryTitle = document.getElementById('signatoryTitle')?.value || '';
    const previewSignatoryTitle = document.getElementById('previewSignatoryTitle');
    if (previewSignatoryTitle) previewSignatoryTitle.textContent = signatoryTitle || '-';
    
  } catch (error) {
    console.error('Error updating invoice preview:', error);
    showNotification('Error updating preview. Please refresh the page.');
  }
}

// FIX 2: Enhanced Auto-generate with proper payment details generation
function autoGenerateAllDetails() {
  try {
    console.log('APPLYING FIX 2: Auto-generating details with enhanced payment data...');
    
    // Use unified student data generation
    const studentData = generateStudentData(0);
    
    // Generate random dates
    const today = new Date();
    const paymentDate = new Date(today.getTime() - generateRandomNumber(0, 30) * 24 * 60 * 60 * 1000);
    
    // Fill form fields using consistent data
    const fieldsToUpdate = [
      { id: 'studentName', value: studentData.studentName },
      { id: 'studentClass', value: studentData.studentClass },
      { id: 'section', value: studentData.section },
      { id: 'rollNumber', value: studentData.rollNumber.toString() },
      { id: 'paymentDate', value: paymentDate.toISOString().split('T')[0] },
      { id: 'amount', value: studentData.amount.toString() },
      { id: 'paymentMode', value: studentData.paymentMode },
      { id: 'signatoryTitle', value: studentData.signatoryTitle }
    ];
    
    fieldsToUpdate.forEach(({ id, value }) => {
      const element = document.getElementById(id);
      if (element) {
        element.value = value;
        element.dispatchEvent(new Event('input', { bubbles: true }));
        element.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });
    
    // FIX 2: Generate and SET detailed payment details
    const paymentDetails = generatePaymentData(studentData.paymentMode);
    const paymentDetailsElement = document.getElementById('paymentDetails');
    if (paymentDetailsElement) {
      paymentDetailsElement.value = paymentDetails;
      console.log('Enhanced payment details generated:', paymentDetails);
      
      // Trigger change event for payment details
      paymentDetailsElement.dispatchEvent(new Event('input', { bubbles: true }));
      paymentDetailsElement.dispatchEvent(new Event('change', { bubbles: true }));
    }
    
    // Generate new invoice number
    const invoiceNumberElement = document.getElementById('invoiceNumber');
    if (invoiceNumberElement) {
      invoiceNumberElement.textContent = generateInvoiceNumber();
    }
    
    // Force update preview
    setTimeout(() => updateInvoicePreview(), 50);
    setTimeout(() => updateInvoicePreview(), 200);
    
    const nameSourceMsg = studentData.nameSource === 'custom' ? ' using custom names' : 
                         studentData.nameSource === 'country' ? ' using country-specific names' : '';
    showNotification(`✅ FIX 2 APPLIED: All details auto-generated with enhanced payment data${nameSourceMsg}!`);
    
  } catch (error) {
    console.error('Error in auto-generation:', error);
    showNotification('Error generating details. Please try again.');
  }
}

// Enhanced bulk invoice generation
function generateBulkInvoiceData(count) {
  const invoices = [];
  const resolvedNames = getResolvedNames();
  
  for (let i = 0; i < count; i++) {
    const studentData = generateStudentData(i);
    
    const paymentDate = generateRandomDate(
      appData.bulkGenerationSettings.dateRangeStart,
      appData.bulkGenerationSettings.dateRangeEnd
    );
    
    const paymentDetails = generatePaymentData(studentData.paymentMode);
    
    invoices.push({
      invoiceNumber: generateInvoiceNumber(),
      studentName: studentData.studentName,
      studentClass: studentData.studentClass,
      section: studentData.section,
      rollNumber: studentData.rollNumber,
      paymentDate: paymentDate.toISOString().split('T')[0],
      academicYear: appData.academicYear,
      amount: studentData.amount,
      paymentMode: studentData.paymentMode,
      paymentDetails,
      signatoryTitle: studentData.signatoryTitle,
      amountInWords: numberToWords(studentData.amount)
    });
  }
  
  return invoices;
}

function updateBulkProgress(current, total) {
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');
  
  if (progressFill && progressText) {
    const percentage = (current / total) * 100;
    progressFill.style.width = `${percentage}%`;
    
    if (total === 1) {
      progressText.textContent = `Generating single invoice...`;
    } else {
      progressText.textContent = `Generated ${current} of ${total} invoices...`;
    }
  }
}

// Enhanced bulk generation
function generateBulkInvoices() {
  try {
    const bulkCountInput = document.getElementById('bulkCount');
    const bulkCount = parseInt(bulkCountInput?.value) || 10;
    userBulkCount = bulkCount;
    
    const maxCount = appData.bulkGenerationSettings.maxInvoices;
    
    if (bulkCount > maxCount) {
      showNotification(`Maximum ${maxCount} invoices allowed at once.`);
      return;
    }
    
    const generateBtn = document.getElementById('generateBulkBtn');
    const downloadBtn = document.getElementById('downloadBulkBtn');
    const bulkProgress = document.getElementById('bulkProgress');
    
    generateBtn.disabled = true;
    
    if (bulkCount === 1) {
      generateBtn.textContent = 'Generating Single Invoice...';
    } else {
      generateBtn.textContent = 'Generating...';
    }
    
    downloadBtn.disabled = true;
    bulkProgress.classList.remove('hidden');
    
    setTimeout(() => {
      bulkInvoices = generateBulkInvoiceData(bulkCount);
      generatedJPGImages = [];
      
      let processed = 0;
      const batchSize = 5;
      
      function processBatch() {
        const remaining = Math.min(batchSize, bulkCount - processed);
        processed += remaining;
        
        updateBulkProgress(processed, bulkCount);
        
        if (processed < bulkCount) {
          setTimeout(processBatch, 100);
        } else {
          generateBtn.disabled = false;
          generateBtn.textContent = 'Generate Bulk Invoices';
          downloadBtn.disabled = false;
          bulkProgress.classList.add('hidden');
          
          if (bulkCountInput) {
            bulkCountInput.value = userBulkCount;
          }
          
          const resolvedNames = getResolvedNames();
          let message;
          
          if (bulkCount === 1) {
            message = resolvedNames.source === 'custom' 
              ? `Successfully generated 1 invoice using custom student names!`
              : resolvedNames.source === 'country'
              ? `Successfully generated 1 invoice using ${resolvedNames.country} names!`
              : `Successfully generated 1 invoice!`;
          } else {
            message = resolvedNames.source === 'custom' 
              ? `Successfully generated ${bulkCount} invoices using custom student names!`
              : resolvedNames.source === 'country'
              ? `Successfully generated ${bulkCount} invoices using ${resolvedNames.country} names!`
              : `Successfully generated ${bulkCount} invoices!`;
          }
          
          showNotification(message);
        }
      }
      
      processBatch();
    }, 100);
    
  } catch (error) {
    console.error('Error generating bulk invoices:', error);
    showNotification('Error generating invoices. Please try again.');
    
    const generateBtn = document.getElementById('generateBulkBtn');
    const downloadBtn = document.getElementById('downloadBulkBtn');
    const bulkProgress = document.getElementById('bulkProgress');
    const bulkCountInput = document.getElementById('bulkCount');
    
    generateBtn.disabled = false;
    generateBtn.textContent = 'Generate Bulk Invoices';
    downloadBtn.disabled = true;
    bulkProgress.classList.add('hidden');
    
    if (bulkCountInput) {
      bulkCountInput.value = userBulkCount;
    }
  }
}

// Enhanced download function for JPG images using html2canvas
async function downloadBulkInvoices() {
  try {
    if (bulkInvoices.length === 0) {
      showNotification('No invoices to download. Please generate invoices first.');
      return;
    }

    const downloadBtn = document.getElementById('downloadBulkBtn');
    downloadBtn.disabled = true;
    
    const isSingle = bulkInvoices.length === 1;
    downloadBtn.textContent = isSingle ? 'Creating JPG Image...' : 'Creating JPG Images...';
    
    showNotification(isSingle ? 'Creating high-quality JPG image...' : 'Creating high-quality JPG images and ZIP file...');
    
    // Load html2canvas and JSZip from CDN
    if (!window.html2canvas) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
      document.head.appendChild(script);
      await new Promise(resolve => script.onload = resolve);
    }
    
    if (!window.JSZip) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
      document.head.appendChild(script);
      await new Promise(resolve => script.onload = resolve);
    }
    
    const zip = new JSZip();
    const invoiceContainer = document.querySelector('.invoice-container');
    
    // Store original form values
    const originalValues = {
      schoolName: document.getElementById('schoolName')?.value || '',
      schoolAddress: document.getElementById('schoolAddress')?.value || '',
      contactInfo: document.getElementById('contactInfo')?.value || ''
    };
    
    for (let i = 0; i < bulkInvoices.length; i++) {
      const invoice = bulkInvoices[i];
      
      updateBulkProgress(i + 1, bulkInvoices.length);
      
      if (isSingle) {
        downloadBtn.textContent = `Creating JPG image...`;
      } else {
        downloadBtn.textContent = `Creating JPG ${i + 1}/${bulkInvoices.length}...`;
      }
      
      updateInvoiceWithData(invoice, originalValues);
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const canvas = await html2canvas(invoiceContainer, {
        backgroundColor: '#ffffff',
        scale: 3,
        useCORS: true,
        allowTaint: true,
        letterRendering: true,
        logging: false,
        width: invoiceContainer.offsetWidth,
        height: invoiceContainer.offsetHeight
      });
      
      const jpgBlob = await new Promise(resolve => {
        canvas.toBlob(resolve, 'image/jpeg', 0.95);
      });
      
      const cleanInvoiceNumber = invoice.invoiceNumber.replace(/[^a-zA-Z0-9]/g, '_');
      const fileName = `invoice_${cleanInvoiceNumber}_${invoice.studentName.replace(/[^a-zA-Z0-9]/g, '_')}.jpg`;
      zip.file(fileName, jpgBlob);
    }
    
    if (isSingle) {
      downloadBtn.textContent = 'Downloading JPG...';
      const invoice = bulkInvoices[0];
      const cleanInvoiceNumber = invoice.invoiceNumber.replace(/[^a-zA-Z0-9]/g, '_');
      const fileName = `invoice_${cleanInvoiceNumber}_${invoice.studentName.replace(/[^a-zA-Z0-9]/g, '_')}.jpg`;
      
      const jpgFiles = await zip.generateAsync({ type: 'blob' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(jpgFiles);
      
      link.setAttribute('href', url);
      link.setAttribute('download', fileName.replace('.jpg', '.zip'));
      link.style.visibility = 'hidden';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } else {
      downloadBtn.textContent = 'Creating ZIP file...';
      const content = await zip.generateAsync({ 
        type: 'blob',
        compression: 'DEFLATE',
        compressionOptions: { level: 6 }
      });
      
      const link = document.createElement('a');
      const url = URL.createObjectURL(content);
      
      link.setAttribute('href', url);
      link.setAttribute('download', `KIIT_Bulk_Invoices_${new Date().toISOString().split('T')[0]}.zip`);
      link.style.visibility = 'hidden';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
    
    const bulkCountInput = document.getElementById('bulkCount');
    downloadBtn.disabled = false;
    downloadBtn.textContent = 'Download Bulk ZIP';
    
    if (bulkCountInput) {
      bulkCountInput.value = userBulkCount;
    }
    
    const successMsg = isSingle 
      ? `Successfully downloaded 1 high-quality JPG invoice!`
      : `Successfully downloaded ${bulkInvoices.length} high-quality JPG invoices in ZIP file!`;
    
    showNotification(successMsg);
    
  } catch (error) {
    console.error('Error downloading bulk invoices:', error);
    showNotification('Error creating JPG images. Please try again or check your browser permissions.');
    
    const downloadBtn = document.getElementById('downloadBulkBtn');
    const bulkCountInput = document.getElementById('bulkCount');
    downloadBtn.disabled = false;
    downloadBtn.textContent = 'Download Bulk ZIP';
    
    if (bulkCountInput) {
      bulkCountInput.value = userBulkCount;
    }
  }
}

// Update invoice with data
function updateInvoiceWithData(invoiceData, originalValues) {
  try {
    const elements = {
      'invoiceNumber': invoiceData.invoiceNumber,
      'previewStudentName': invoiceData.studentName,
      'previewStudentClass': invoiceData.studentClass,
      'previewSection': invoiceData.section,
      'previewRollNumber': invoiceData.rollNumber,
      'previewPaymentDate': formatDate(invoiceData.paymentDate),
      'previewInvoiceDate': formatDate(invoiceData.paymentDate),
      'previewAcademicYear': invoiceData.academicYear,
      'previewPeriod': invoiceData.academicYear,
      'previewAmount': invoiceData.amount.toLocaleString(),
      'previewTotalAmount': invoiceData.amount.toLocaleString(),
      'previewPaymentMode': invoiceData.paymentMode,
      'previewSignatoryTitle': invoiceData.signatoryTitle,
      'amountInWords': invoiceData.amountInWords
    };
    
    // Update school info with original form values
    const schoolElements = {
      'previewSchoolName': originalValues.schoolName || 'KALINGA INSTITUTE OF INDUSTRIAL TECHNOLOGY',
      'previewSchoolAddress': originalValues.schoolAddress || 'KIIT Rd, Patia, Bhubaneswar, Odisha 751024, India'
    };
    
    Object.entries(schoolElements).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = value;
      }
    });
    
    // Handle contact info with email links
    const previewContactInfo = document.getElementById('previewContactInfo');
    if (previewContactInfo) {
      let contactWithLinks = originalValues.contactInfo || 'Phone: +91 80807 35735<br>Email: info@kiit.ac.in';
      contactWithLinks = contactWithLinks.replace(
        /Email:\s*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gi,
        'Email: <a href="mailto:$1" class="email-link">$1</a>'
      );
      previewContactInfo.innerHTML = contactWithLinks;
    }
    
    Object.entries(elements).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = value;
      }
    });
    
    // FIX 3: Handle payment details with line breaks in bulk generation
    const previewPaymentDetails = document.getElementById('previewPaymentDetails');
    if (previewPaymentDetails && invoiceData.paymentDetails) {
      const paymentDetailsHTML = invoiceData.paymentDetails.replace(/\n/g, '<br>');
      previewPaymentDetails.innerHTML = paymentDetailsHTML;
    }
    
    // Hide parent name element
    const previewParentNameElement = document.getElementById('previewParentName');
    if (previewParentNameElement) {
      previewParentNameElement.style.display = 'none';
      const parentLine = previewParentNameElement.closest('p');
      if (parentLine) {
        parentLine.style.display = 'none';
      }
    }
    
    // Set due date
    const dueDate = new Date(new Date(invoiceData.paymentDate).getTime() + 30 * 24 * 60 * 60 * 1000);
    const previewDueDate = document.getElementById('previewDueDate');
    if (previewDueDate) {
      previewDueDate.textContent = formatDate(dueDate);
    }
    
  } catch (error) {
    console.error('Error updating invoice with data:', error);
  }
}

// Hide Parent/Guardian Name field functionality
function hideParentGuardianField() {
  try {
    const parentNameField = document.getElementById('parentName');
    const parentNameLabel = document.querySelector('label[for="parentName"]');
    
    if (parentNameField) {
      parentNameField.style.display = 'none';
      parentNameField.required = false;
    }
    
    if (parentNameLabel) {
      parentNameLabel.style.display = 'none';
    }
    
    const formGroup = parentNameField?.closest('.form-group');
    if (formGroup) {
      formGroup.style.display = 'none';
    }
    
    const previewParentNameElement = document.getElementById('previewParentName');
    if (previewParentNameElement) {
      previewParentNameElement.style.display = 'none';
      const parentLine = previewParentNameElement.closest('p');
      if (parentLine) {
        parentLine.style.display = 'none';
      }
    }
    
  } catch (error) {
    console.error('Error hiding parent/guardian field:', error);
  }
}

// FIXED: Ensure input field accessibility with proper select element handling
function ensureInputFieldsAccessible() {
  try {
    const bulkCountInput = document.getElementById('bulkCount');
    if (bulkCountInput) {
      bulkCountInput.disabled = false;
      bulkCountInput.readOnly = false;
      bulkCountInput.style.pointerEvents = 'auto';
      bulkCountInput.removeAttribute('readonly');
      
      bulkCountInput.addEventListener('input', function(e) {
        let value = parseInt(e.target.value);
        if (isNaN(value) || value < 1) {
          e.target.value = 1;
        } else if (value > 50) {
          e.target.value = 50;
        }
        userBulkCount = parseInt(e.target.value) || 1;
      });
    }
    
    // Ensure all form inputs are accessible, especially dropdowns
    const formInputs = document.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
      input.disabled = false;
      input.style.pointerEvents = 'auto';
      input.removeAttribute('readonly');
      
      // Special handling for select elements
      if (input.tagName.toLowerCase() === 'select') {
        // Make sure select is fully functional
        input.style.webkitAppearance = '';
        input.style.appearance = '';
        console.log('Ensured accessibility for select element:', input.id);
      }
    });
    
    // Special fix for country select dropdown
    const countrySelect = document.getElementById('countrySelect');
    if (countrySelect) {
      countrySelect.disabled = false;
      countrySelect.style.pointerEvents = 'auto';
      countrySelect.style.webkitAppearance = 'menulist';
      countrySelect.style.appearance = 'menulist';
      countrySelect.removeAttribute('readonly');
      console.log('Country select dropdown accessibility ensured');
    }
    
    console.log('Input field accessibility ensured for all elements');
    
  } catch (error) {
    console.error('Error ensuring input field accessibility:', error);
  }
}

// ============================================================================
// MAIN INITIALIZATION WITH ALL FIXES APPLIED
// ============================================================================
function initializeApp() {
  try {
    console.log('🔧 Initializing KIIT Invoice Generator with ALL FIXES...');
    
    // APPLY FIX 1: Reorder sections after DOM loads
    reorderSections();
    
    // Hide Parent/Guardian Name field
    hideParentGuardianField();
    
    // Ensure input fields are accessible (FIXED for dropdown issue)
    ensureInputFieldsAccessible();
    
    // Set current date as default payment date
    const today = new Date();
    const paymentDateElement = document.getElementById('paymentDate');
    if (paymentDateElement) {
      paymentDateElement.value = today.toISOString().split('T')[0];
    }
    
    // Generate initial invoice number
    const invoiceNumberElement = document.getElementById('invoiceNumber');
    if (invoiceNumberElement) {
      invoiceNumberElement.textContent = generateInvoiceNumber();
    }
    
    // Set default amount
    const amountElement = document.getElementById('amount');
    if (amountElement) {
      amountElement.value = appData.defaultAmount;
    }
    
    // Initialize bulk count with user preference tracking
    const bulkCountElement = document.getElementById('bulkCount');
    if (bulkCountElement) {
      userBulkCount = parseInt(bulkCountElement.value) || 10;
      bulkCountElement.addEventListener('input', function(e) {
        userBulkCount = parseInt(e.target.value) || 10;
      });
      bulkCountElement.addEventListener('change', function(e) {
        userBulkCount = parseInt(e.target.value) || 10;
      });
    }
    
    // ENHANCED event listeners for all form fields
    const formFields = [
      'schoolName', 'schoolAddress', 'contactInfo',
      'studentName', 'studentClass', 'section', 'rollNumber',
      'paymentDate', 'academicYear', 'amount', 'paymentMode', 'paymentDetails',
      'signatoryTitle'
    ];
    
    formFields.forEach(fieldId => {
      const field = document.getElementById(fieldId);
      if (field) {
        const events = ['input', 'change', 'keyup', 'paste', 'blur'];
        
        events.forEach(eventType => {
          field.addEventListener(eventType, function(e) {
            setTimeout(() => {
              updateInvoicePreview();
            }, 10);
          });
        });
        console.log(`Added event listeners to ${fieldId}`);
      }
    });
    
    // FIXED: Add country select listener with proper debugging
    const countrySelect = document.getElementById('countrySelect');
    if (countrySelect) {
      countrySelect.addEventListener('change', function(e) {
        console.log('Country selection changed from', e.target.value, 'to', e.target.value);
        const selectedText = e.target.options[e.target.selectedIndex]?.text || e.target.value;
        showNotification(`Country selection changed to: ${selectedText}`);
      });
      
      // Add click listener to ensure dropdown functionality
      countrySelect.addEventListener('click', function(e) {
        console.log('Country select clicked, current value:', e.target.value);
      });
      
      console.log('Country select listeners added successfully');
    } else {
      console.error('Country select element not found!');
    }
    
    // Add auto-generate button listener
    const autoGenerateBtn = document.getElementById('autoGenerateBtn');
    if (autoGenerateBtn) {
      autoGenerateBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Auto-generate button clicked');
        autoGenerateAllDetails();
      });
      console.log('Auto-generate button listener added');
    }
    
    // Add auto-generate signatory button listener
    const autoGenerateSignatoryBtn = document.getElementById('autoGenerateSignatoryBtn');
    if (autoGenerateSignatoryBtn) {
      autoGenerateSignatoryBtn.addEventListener('click', function(e) {
        e.preventDefault();
        autoGenerateSignatory();
      });
      console.log('Auto-generate signatory button listener added');
    }
    
    // FIXED: Add country name generation button listener with enhanced debugging
    const generateCountryNamesBtn = document.getElementById('generateCountryNamesBtn');
    if (generateCountryNamesBtn) {
      generateCountryNamesBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Generate country names button clicked');
        generateCountryNames();
      });
      console.log('Generate country names button listener added');
    } else {
      console.error('Generate country names button not found!');
    }
    
    // Add bulk generation button listeners
    const generateBulkBtn = document.getElementById('generateBulkBtn');
    const downloadBulkBtn = document.getElementById('downloadBulkBtn');
    
    if (generateBulkBtn) {
      generateBulkBtn.addEventListener('click', function(e) {
        e.preventDefault();
        generateBulkInvoices();
      });
      console.log('Generate bulk button listener added');
    }
    
    if (downloadBulkBtn) {
      downloadBulkBtn.addEventListener('click', function(e) {
        e.preventDefault();
        downloadBulkInvoices();
      });
      console.log('Download bulk button listener added');
    }
    
    // Add file upload listeners
    const schoolLogoInput = document.getElementById('schoolLogo');
    const stampImageInput = document.getElementById('stampImage');
    const signatureImageInput = document.getElementById('signatureImage');
    
    if (schoolLogoInput) {
      schoolLogoInput.addEventListener('change', function(e) {
        handleImageUpload(e, 'logoPreviewForm', 'logoPlaceholder', 'logoPreview', null);
      });
      console.log('School logo upload listener added');
    }
    
    if (stampImageInput) {
      stampImageInput.addEventListener('change', function(e) {
        handleImageUpload(e, 'stampPreviewImg', 'stampPlaceholder', 'invoiceStampImg', 'invoiceStampPlaceholder');
      });
      console.log('Stamp image upload listener added');
    }
    
    if (signatureImageInput) {
      signatureImageInput.addEventListener('change', function(e) {
        handleImageUpload(e, 'signaturePreviewImg', 'signaturePlaceholder', 'invoiceSignatureImg', 'invoiceSignaturePlaceholder');
      });
      console.log('Signature image upload listener added');
    }
    
    // Force multiple preview updates to ensure everything initializes
    setTimeout(() => updateInvoicePreview(), 100);
    setTimeout(() => updateInvoicePreview(), 500);
    setTimeout(() => updateInvoicePreview(), 1000);
    
    console.log('✅ ALL FIXES APPLIED SUCCESSFULLY:');
    console.log('✅ Fix 1: Section Reordering - Custom Student Names after Student Info, Bulk Generation last');
    console.log('✅ Fix 2: Enhanced Payment Details Auto-Generation - Detailed payment info with proper formatting');
    console.log('✅ Fix 3: Payment Details Preview - Line breaks converted to HTML breaks, immediate updates');
    console.log('✅ BONUS FIX: Country Selection Dropdown - Enhanced accessibility and debugging');
    
    showNotification('🎉 ALL FIXES APPLIED! Section order ✅ Payment details auto-gen ✅ Payment details preview ✅ Dropdown fixed ✅');
    
  } catch (error) {
    console.error('Error initializing application:', error);
    showNotification('Error initializing application. Please refresh the page.');
  }
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, applying FIXES to KIIT Invoice Generator...');
  initializeApp();
});