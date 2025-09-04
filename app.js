// Application data
const appData = {
  sampleStudentNames: ["Aarav Mehta", "Vihaan Patel", "Riya Bansal", "Ananya Singh", "Karan Gupta", "Saanvi Sharma", "Arjun Kumar", "Ishita Agarwal", "Diya Patel", "Aryan Singh", "Kavya Sharma", "Reyansh Kumar", "Aanya Gupta", "Vivaan Agarwal", "Myra Bansal", "Kiaan Mehta", "Zara Singh", "Advait Patel", "Navya Sharma", "Atharv Kumar"],
  parentNames: ["Aarav Sharma", "Arjun Sharma", "Saanvi Bansal", "Priya Singh", "Rajesh Gupta", "Meera Patel", "Suresh Kumar", "Kavita Agarwal", "Ramesh Mehta", "Sunita Bansal", "Vinod Singh", "Pooja Sharma", "Anil Patel", "Deepa Kumar", "Manoj Gupta", "Ritu Agarwal"],
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
    brazil: ["João Silva", "Maria Santos", "Pedro Oliveira", "Ana Costa", "Carlos Pereira", "Juliana Ferreira", "Rafael Rodrigues", "Camila Almeida", "Lucas Carvalho", "Beatriz Lima", "Gabriel Ribeiro", "Letícia Gomes", "Mateus Barbosa", "Larissa Cardoso", "Felipe Martins", "Isabela Rocha", "Bruno Alves", "Fernanda Dias", "Thiago Nascimento", "Mariana Correia"]
  },
  defaultAmount: 12500,
  academicYear: "2024-2025",
  bulkGenerationSettings: {
    maxInvoices: 50,
    defaultCount: 10,
    dateRangeStart: "2025-01-01",
    dateRangeEnd: "2025-05-31",
    outputFormat: "JPG"
  }
};

// Global variables for image storage
let currentImages = {
  logo: null,
  stamp: null,
  signature: null
};

let bulkInvoices = [];
let customNamesList = [];

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

// Country name generation function
function generateCountryNames() {
  try {
    const countrySelect = document.getElementById('countrySelect');
    const customStudentNames = document.getElementById('customStudentNames');
    const selectedCountry = countrySelect.value;
    
    console.log('Generating names for country:', selectedCountry);
    
    if (selectedCountry === 'custom') {
      showNotification('Please select a country or enter custom names manually.');
      return;
    }
    
    const countryNames = appData.countryNames[selectedCountry];
    if (countryNames && countryNames.length > 0) {
      // Take first 10 names from the country list
      const namesToUse = countryNames.slice(0, 10);
      customStudentNames.value = namesToUse.join('\n');
      showNotification(`Generated ${namesToUse.length} names for ${selectedCountry.charAt(0).toUpperCase() + selectedCountry.slice(1)}`);
      console.log(`Generated names for ${selectedCountry}:`, namesToUse);
    } else {
      showNotification('No names available for the selected country.');
      console.error('No names found for country:', selectedCountry);
    }
  } catch (error) {
    console.error('Error generating country names:', error);
    showNotification('Error generating names. Please try again.');
  }
}

// Update country button text
function updateCountryButtonText() {
  try {
    const countrySelect = document.getElementById('countrySelect');
    const generateBtn = document.getElementById('generateCountryNamesBtn');
    const selectedCountry = countrySelect.value;
    
    if (selectedCountry === 'custom') {
      generateBtn.textContent = 'Generate Names for Custom Names';
    } else {
      const countryDisplayName = selectedCountry.charAt(0).toUpperCase() + selectedCountry.slice(1);
      generateBtn.textContent = `Generate Names for ${countryDisplayName}`;
    }
  } catch (error) {
    console.error('Error updating button text:', error);
  }
}

// Image handling functions - Fixed implementation
function handleImageUpload(event, imageType) {
  try {
    const file = event.target.files[0];
    const fileStatus = event.target.parentElement.querySelector('.file-status');
    let formPreview, invoicePreview;
    
    console.log(`Handling ${imageType} upload:`, file ? file.name : 'No file');
    
    // Get the appropriate preview elements
    if (imageType === 'logo') {
      formPreview = document.getElementById('logoFormPreview');
      invoicePreview = document.getElementById('logoPreview');
    } else if (imageType === 'stamp') {
      formPreview = document.getElementById('stampFormPreview');
      invoicePreview = document.getElementById('stampImagePreview');
    } else if (imageType === 'signature') {
      formPreview = document.getElementById('signatureFormPreview');
      invoicePreview = document.getElementById('signatureImagePreview');
    }
    
    if (file) {
      if (fileStatus) {
        fileStatus.textContent = file.name;
        console.log(`Updated file status to: ${file.name}`);
      }
      
      const reader = new FileReader();
      reader.onload = function(e) {
        const imageSrc = e.target.result;
        currentImages[imageType] = imageSrc;
        console.log(`Image data loaded for ${imageType}`);
        
        // Show form preview
        if (formPreview) {
          formPreview.src = imageSrc;
          formPreview.classList.remove('hidden');
          console.log(`Form preview updated for ${imageType}`);
        }
        
        // Show invoice preview
        if (invoicePreview) {
          invoicePreview.src = imageSrc;
          invoicePreview.classList.remove('hidden');
          console.log(`Invoice preview updated for ${imageType}`);
          
          // Hide placeholder text for stamp
          if (imageType === 'stamp') {
            const placeholderText = document.getElementById('previewStampText');
            if (placeholderText) {
              placeholderText.style.display = 'none';
              console.log('Stamp placeholder text hidden');
            }
          }
        }
        
        showNotification(`${imageType.charAt(0).toUpperCase() + imageType.slice(1)} uploaded successfully!`);
      };
      
      reader.onerror = function(error) {
        console.error(`Error reading ${imageType} file:`, error);
        showNotification(`Error reading ${imageType} file. Please try again.`);
      };
      
      reader.readAsDataURL(file);
    } else {
      console.log(`No file selected for ${imageType}`);
      if (fileStatus) {
        const defaultText = imageType === 'logo' ? 'No file chosen' : 
                           imageType === 'stamp' ? 'No stamp chosen' : 'No signature chosen';
        fileStatus.textContent = defaultText;
      }
      
      currentImages[imageType] = null;
      
      if (formPreview) formPreview.classList.add('hidden');
      if (invoicePreview) {
        invoicePreview.classList.add('hidden');
        
        // Show placeholder text for stamp
        if (imageType === 'stamp') {
          const placeholderText = document.getElementById('previewStampText');
          if (placeholderText) placeholderText.style.display = 'block';
        }
      }
    }
  } catch (error) {
    console.error(`Error handling ${imageType} upload:`, error);
    showNotification(`Error uploading ${imageType}. Please try again.`);
  }
}

// Form update functions
function updateInvoicePreview() {
  try {
    // Update school information
    const schoolName = document.getElementById('schoolName').value;
    const schoolAddress = document.getElementById('schoolAddress').value;
    const contactInfo = document.getElementById('contactInfo').value;
    
    const previewSchoolName = document.getElementById('previewSchoolName');
    const previewSchoolAddress = document.getElementById('previewSchoolAddress');
    const previewContactInfo = document.getElementById('previewContactInfo');
    
    if (previewSchoolName) previewSchoolName.textContent = schoolName || 'KALINGA INSTITUTE OF INDUSTRIAL TECHNOLOGY';
    if (previewSchoolAddress) previewSchoolAddress.textContent = schoolAddress || 'KIIT Rd, Patia, Bhubaneswar, Odisha 751024, India';
    if (previewContactInfo) {
      // Handle the email as mailto link
      let contactText = contactInfo || 'Phone: +91 80807 35735\nEmail: info@kiit.ac.in';
      contactText = contactText.replace(/Email:\s*([\w\.-]+@[\w\.-]+)/g, 'Email: <a href="mailto:$1">$1</a>');
      previewContactInfo.innerHTML = contactText.replace(/\n/g, '<br>');
    }
    
    // Update student information
    const studentName = document.getElementById('studentName').value;
    const studentClass = document.getElementById('studentClass').value;
    const section = document.getElementById('section').value;
    const rollNumber = document.getElementById('rollNumber').value;
    const parentName = document.getElementById('parentName').value;
    
    const previewElements = {
      previewStudentName: studentName || '-',
      previewStudentClass: studentClass || '-',
      previewSection: section || '-',
      previewRollNumber: rollNumber || '-',
      previewParentName: parentName || '-'
    };
    
    Object.entries(previewElements).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (element) element.textContent = value;
    });
    
    // Update payment information
    const paymentDate = document.getElementById('paymentDate').value;
    const academicYear = document.getElementById('academicYear').value;
    const amount = document.getElementById('amount').value;
    const paymentMode = document.getElementById('paymentMode').value;
    const paymentDetails = document.getElementById('paymentDetails').value;
    
    const previewPaymentDate = document.getElementById('previewPaymentDate');
    const previewInvoiceDate = document.getElementById('previewInvoiceDate');
    const previewDueDate = document.getElementById('previewDueDate');
    const previewAcademicYear = document.getElementById('previewAcademicYear');
    const previewPeriod = document.getElementById('previewPeriod');
    const previewAmount = document.getElementById('previewAmount');
    const previewTotalAmount = document.getElementById('previewTotalAmount');
    const previewPaymentMode = document.getElementById('previewPaymentMode');
    const previewPaymentDetails = document.getElementById('previewPaymentDetails');
    
    if (previewPaymentDate) previewPaymentDate.textContent = paymentDate ? formatDate(paymentDate) : '-';
    if (previewInvoiceDate) previewInvoiceDate.textContent = paymentDate ? formatDate(paymentDate) : '-';
    if (previewDueDate && paymentDate) {
      const dueDate = new Date(new Date(paymentDate).getTime() + 30 * 24 * 60 * 60 * 1000);
      previewDueDate.textContent = formatDate(dueDate);
    }
    if (previewAcademicYear) previewAcademicYear.textContent = academicYear || '2024-2025';
    if (previewPeriod) previewPeriod.textContent = academicYear || '2024-2025';
    if (previewAmount) previewAmount.textContent = amount ? parseInt(amount).toLocaleString() : '0';
    if (previewTotalAmount) previewTotalAmount.textContent = amount ? parseInt(amount).toLocaleString() : '0';
    if (previewPaymentMode) previewPaymentMode.textContent = paymentMode || '-';
    if (previewPaymentDetails) previewPaymentDetails.textContent = paymentDetails || '-';
    
    // Update amount in words
    const amountNum = parseInt(amount) || 0;
    const amountInWords = document.getElementById('amountInWords');
    if (amountInWords) amountInWords.textContent = numberToWords(amountNum);
    
    // Update signatory
    const authorizedSignatory = document.getElementById('authorizedSignatory').value;
    const previewSignatory = document.getElementById('previewSignatory');
    if (previewSignatory) previewSignatory.textContent = authorizedSignatory || '-';
    
  } catch (error) {
    console.error('Error updating invoice preview:', error);
  }
}

function autoGenerateAllDetails() {
  try {
    console.log('Auto-generating details...');
    
    // Generate random student data
    const studentName = getRandomElement(appData.sampleStudentNames);
    const parentName = getRandomElement(appData.parentNames);
    const studentClass = getRandomElement(appData.classes);
    const section = getRandomElement(appData.sections);
    const rollNumber = generateRandomNumber(1001, 9999);
    
    // Generate random payment data
    const paymentMode = getRandomElement(appData.paymentModes);
    const bank = getRandomElement(appData.banks);
    const chequeNumber = generateRandomNumber(100000, 999999);
    const amount = generateRandomNumber(10000, 25000);
    
    // Generate random dates
    const today = new Date();
    const paymentDate = new Date(today.getTime() - generateRandomNumber(0, 30) * 24 * 60 * 60 * 1000);
    
    // Generate random signatory
    const signatory = getRandomElement(appData.signatoryTitles);
    
    // Fill form fields
    const fieldsToUpdate = [
      { id: 'studentName', value: studentName },
      { id: 'parentName', value: parentName },
      { id: 'studentClass', value: studentClass },
      { id: 'section', value: section },
      { id: 'rollNumber', value: rollNumber.toString() },
      { id: 'paymentDate', value: paymentDate.toISOString().split('T')[0] },
      { id: 'amount', value: amount.toString() },
      { id: 'paymentMode', value: paymentMode },
      { id: 'authorizedSignatory', value: signatory }
    ];
    
    fieldsToUpdate.forEach(({ id, value }) => {
      const element = document.getElementById(id);
      if (element) {
        element.value = value;
        console.log(`Set ${id} to: ${value}`);
      } else {
        console.warn(`Element with ID ${id} not found`);
      }
    });
    
    // Generate payment details based on payment mode
    let paymentDetails = '';
    if (paymentMode === 'Cheque') {
      paymentDetails = `Cheque Number: ${chequeNumber}\nBank: ${bank}\nBranch: Main Branch`;
    } else if (paymentMode === 'Online Transfer') {
      paymentDetails = `Transaction ID: TXN${generateRandomNumber(1000000, 9999999)}\nBank: ${bank}\nUTR: ${generateRandomNumber(100000000000, 999999999999)}`;
    } else if (paymentMode === 'Debit/Credit Card') {
      paymentDetails = `Card ending: ****${generateRandomNumber(1000, 9999)}\nTransaction ID: ${generateRandomNumber(1000000, 9999999)}\nBank: ${bank}`;
    } else {
      paymentDetails = `Cash received and deposited\nReceipt Number: RCP${generateRandomNumber(10000, 99999)}`;
    }
    
    const paymentDetailsElement = document.getElementById('paymentDetails');
    if (paymentDetailsElement) {
      paymentDetailsElement.value = paymentDetails;
    }
    
    // Generate new invoice number
    const invoiceNumberElement = document.getElementById('invoiceNumber');
    if (invoiceNumberElement) {
      invoiceNumberElement.textContent = generateInvoiceNumber();
    }
    
    // Update preview
    updateInvoicePreview();
    
    // Show success notification
    showNotification('All details have been auto-generated successfully!');
    console.log('Auto-generation completed successfully');
    
  } catch (error) {
    console.error('Error in auto-generation:', error);
    showNotification('Error generating details. Please try again.');
  }
}

function autoGenerateSignatory() {
  try {
    console.log('Auto-generating signatory...');
    const signatory = getRandomElement(appData.signatoryTitles);
    const signatoryField = document.getElementById('authorizedSignatory');
    
    if (signatoryField) {
      signatoryField.value = signatory;
      console.log(`Generated signatory: ${signatory}`);
      updateInvoicePreview();
      showNotification('Signatory name/title generated successfully!');
    } else {
      console.error('Signatory field not found');
      showNotification('Error: Signatory field not found.');
    }
  } catch (error) {
    console.error('Error generating signatory:', error);
    showNotification('Error generating signatory. Please try again.');
  }
}

// Get current custom names list
function getCurrentCustomNames() {
  const customStudentNames = document.getElementById('customStudentNames');
  if (customStudentNames && customStudentNames.value.trim()) {
    return customStudentNames.value.split('\n').map(name => name.trim()).filter(name => name.length > 0);
  }
  return [];
}

// Bulk invoice generation functions
function generateBulkInvoices() {
  try {
    const bulkCount = parseInt(document.getElementById('bulkCount').value) || 10;
    const maxCount = appData.bulkGenerationSettings.maxInvoices;
    
    if (bulkCount > maxCount) {
      showNotification(`Maximum ${maxCount} invoices allowed at once.`);
      return;
    }
    
    // Show progress
    const progressContainer = document.querySelector('.progress-container');
    const generateBtn = document.getElementById('generateBulkBtn');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    progressContainer.classList.remove('hidden');
    generateBtn.disabled = true;
    
    // Clear previous bulk invoices
    bulkInvoices = [];
    
    // Get custom names if available
    const customNames = getCurrentCustomNames();
    let namesToUse = customNames.length > 0 ? customNames : appData.sampleStudentNames;
    
    console.log('Using names for bulk generation:', namesToUse.slice(0, 5), '... (showing first 5)');
    
    // Generate invoices data
    for (let i = 0; i < bulkCount; i++) {
      const studentName = namesToUse.length > 0 ? 
        namesToUse[i % namesToUse.length] : 
        getRandomElement(appData.sampleStudentNames);
      const parentName = getRandomElement(appData.parentNames);
      const studentClass = getRandomElement(appData.classes);
      const section = getRandomElement(appData.sections);
      const rollNumber = generateRandomNumber(1001, 9999);
      const amount = generateRandomNumber(10000, 25000);
      const paymentMode = getRandomElement(appData.paymentModes);
      const bank = getRandomElement(appData.banks);
      const signatory = getRandomElement(appData.signatoryTitles);
      
      // Generate random date within range
      const startDate = new Date(appData.bulkGenerationSettings.dateRangeStart);
      const endDate = new Date(appData.bulkGenerationSettings.dateRangeEnd);
      const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
      const paymentDate = new Date(randomTime);
      
      // Generate payment details
      let paymentDetails = '';
      const chequeNumber = generateRandomNumber(100000, 999999);
      if (paymentMode === 'Cheque') {
        paymentDetails = `Cheque Number: ${chequeNumber}\nBank: ${bank}\nBranch: Main Branch`;
      } else if (paymentMode === 'Online Transfer') {
        paymentDetails = `Transaction ID: TXN${generateRandomNumber(1000000, 9999999)}\nBank: ${bank}\nUTR: ${generateRandomNumber(100000000000, 999999999999)}`;
      } else if (paymentMode === 'Debit/Credit Card') {
        paymentDetails = `Card ending: ****${generateRandomNumber(1000, 9999)}\nTransaction ID: ${generateRandomNumber(1000000, 9999999)}\nBank: ${bank}`;
      } else {
        paymentDetails = `Cash received and deposited\nReceipt Number: RCP${generateRandomNumber(10000, 99999)}`;
      }
      
      bulkInvoices.push({
        studentName,
        parentName,
        studentClass,
        section,
        rollNumber,
        amount,
        paymentMode,
        paymentDetails,
        paymentDate: paymentDate.toISOString().split('T')[0],
        invoiceNumber: generateInvoiceNumber(),
        signatory
      });
      
      // Update progress
      const progress = ((i + 1) / bulkCount) * 100;
      progressFill.style.width = progress + '%';
      progressText.textContent = `Generated ${i + 1} of ${bulkCount} invoices...`;
    }
    
    // Show download button
    setTimeout(() => {
      progressText.textContent = 'Bulk invoices generated successfully!';
      const downloadBtn = document.getElementById('downloadBulkBtn');
      downloadBtn.classList.remove('hidden');
      generateBtn.disabled = false;
      showNotification(`${bulkCount} invoices generated successfully!`);
    }, 500);
    
  } catch (error) {
    console.error('Error generating bulk invoices:', error);
    showNotification('Error generating bulk invoices. Please try again.');
  }
}

async function downloadBulkZip() {
  try {
    if (!window.JSZip || !window.html2canvas) {
      showNotification('Required libraries not loaded. Please refresh and try again.');
      return;
    }
    
    const zip = new JSZip();
    const downloadBtn = document.getElementById('downloadBulkBtn');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    downloadBtn.disabled = true;
    progressText.textContent = 'Converting invoices to JPG...';
    
    // Store current form data
    const currentFormData = {
      studentName: document.getElementById('studentName').value,
      parentName: document.getElementById('parentName').value,
      studentClass: document.getElementById('studentClass').value,
      section: document.getElementById('section').value,
      rollNumber: document.getElementById('rollNumber').value,
      amount: document.getElementById('amount').value,
      paymentDate: document.getElementById('paymentDate').value,
      paymentMode: document.getElementById('paymentMode').value,
      paymentDetails: document.getElementById('paymentDetails').value,
      authorizedSignatory: document.getElementById('authorizedSignatory').value
    };
    
    // Process each invoice
    for (let i = 0; i < bulkInvoices.length; i++) {
      const invoice = bulkInvoices[i];
      
      // Update form fields with invoice data
      document.getElementById('studentName').value = invoice.studentName;
      document.getElementById('parentName').value = invoice.parentName;
      document.getElementById('studentClass').value = invoice.studentClass;
      document.getElementById('section').value = invoice.section;
      document.getElementById('rollNumber').value = invoice.rollNumber;
      document.getElementById('amount').value = invoice.amount;
      document.getElementById('paymentDate').value = invoice.paymentDate;
      document.getElementById('paymentMode').value = invoice.paymentMode;
      document.getElementById('paymentDetails').value = invoice.paymentDetails;
      document.getElementById('authorizedSignatory').value = invoice.signatory;
      document.getElementById('invoiceNumber').textContent = invoice.invoiceNumber;
      
      // Update preview
      updateInvoicePreview();
      
      // Wait a moment for DOM to update
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Capture invoice as image
      const invoiceElement = document.querySelector('.invoice-container');
      const canvas = await html2canvas(invoiceElement, {
        backgroundColor: '#ffffff',
        scale: 2,
        logging: false,
        allowTaint: true,
        useCORS: true
      });
      
      // Convert to JPG
      const jpegBlob = await new Promise(resolve => {
        canvas.toBlob(resolve, 'image/jpeg', 0.9);
      });
      
      // Add to ZIP
      const fileName = `Invoice_${invoice.invoiceNumber.replace(/[^a-zA-Z0-9]/g, '_')}_${invoice.studentName.replace(/[^a-zA-Z0-9]/g, '_')}.jpg`;
      zip.file(fileName, jpegBlob);
      
      // Update progress
      const progress = ((i + 1) / bulkInvoices.length) * 100;
      progressFill.style.width = progress + '%';
      progressText.textContent = `Converting invoice ${i + 1} of ${bulkInvoices.length} to JPG...`;
    }
    
    // Restore original form data
    Object.entries(currentFormData).forEach(([key, value]) => {
      const element = document.getElementById(key);
      if (element) element.value = value;
    });
    updateInvoicePreview();
    
    // Generate and download ZIP
    progressText.textContent = 'Creating ZIP file...';
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    
    // Create download link
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(zipBlob);
    downloadLink.download = `KIIT_Bulk_Invoices_${new Date().toISOString().split('T')[0]}.zip`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    // Clean up
    URL.revokeObjectURL(downloadLink.href);
    
    progressText.textContent = 'ZIP file downloaded successfully!';
    downloadBtn.disabled = false;
    showNotification('Bulk invoices ZIP downloaded successfully!');
    
  } catch (error) {
    console.error('Error downloading bulk ZIP:', error);
    showNotification('Error creating ZIP file. Please try again.');
    document.getElementById('downloadBulkBtn').disabled = false;
  }
}

// Initialize application
function initializeApp() {
  try {
    console.log('Initializing application...');
    
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
    
    // Add event listeners for real-time updates
    const formFields = [
      'schoolName', 'schoolAddress', 'contactInfo',
      'studentName', 'studentClass', 'section', 'rollNumber', 'parentName',
      'paymentDate', 'academicYear', 'amount', 'paymentMode', 'paymentDetails',
      'authorizedSignatory'
    ];
    
    formFields.forEach(fieldId => {
      const field = document.getElementById(fieldId);
      if (field) {
        field.addEventListener('input', updateInvoicePreview);
        field.addEventListener('change', updateInvoicePreview);
        console.log(`Added event listeners to ${fieldId}`);
      } else {
        console.warn(`Field ${fieldId} not found`);
      }
    });
    
    // Add country selection listener
    const countrySelect = document.getElementById('countrySelect');
    if (countrySelect) {
      countrySelect.addEventListener('change', updateCountryButtonText);
      console.log('Country select listener added');
    }
    
    // Add country name generation listener
    const generateCountryNamesBtn = document.getElementById('generateCountryNamesBtn');
    if (generateCountryNamesBtn) {
      generateCountryNamesBtn.addEventListener('click', function(e) {
        e.preventDefault();
        generateCountryNames();
      });
      console.log('Generate country names button listener added');
    }
    
    // Add auto-generate button listener
    const autoGenerateBtn = document.getElementById('autoGenerateBtn');
    if (autoGenerateBtn) {
      autoGenerateBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Auto-generate button clicked');
        autoGenerateAllDetails();
      });
      console.log('Auto-generate button listener added');
    } else {
      console.error('Auto-generate button not found');
    }
    
    // Add auto-generate signatory button listener
    const autoGenerateSignatoryBtn = document.getElementById('autoGenerateSignatory');
    if (autoGenerateSignatoryBtn) {
      autoGenerateSignatoryBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Auto-generate signatory button clicked');
        autoGenerateSignatory();
      });
      console.log('Auto-generate signatory button listener added successfully');
    } else {
      console.error('Auto-generate signatory button not found');
    }
    
    // Add file upload listeners
    const schoolLogoInput = document.getElementById('schoolLogo');
    const schoolLogoLabel = document.querySelector('label[for="schoolLogo"]');
    if (schoolLogoInput && schoolLogoLabel) {
      schoolLogoInput.addEventListener('change', function(e) {
        handleImageUpload(e, 'logo');
      });
      schoolLogoLabel.addEventListener('click', function(e) {
        e.preventDefault();
        schoolLogoInput.click();
      });
      console.log('School logo upload listeners added');
    }
    
    const stampUploadInput = document.getElementById('stampUpload');
    const stampUploadLabel = document.querySelector('label[for="stampUpload"]');
    if (stampUploadInput && stampUploadLabel) {
      stampUploadInput.addEventListener('change', function(e) {
        handleImageUpload(e, 'stamp');
      });
      stampUploadLabel.addEventListener('click', function(e) {
        e.preventDefault();
        stampUploadInput.click();
      });
      console.log('Stamp upload listeners added');
    }
    
    const signatureUploadInput = document.getElementById('signatureUpload');
    const signatureUploadLabel = document.querySelector('label[for="signatureUpload"]');
    if (signatureUploadInput && signatureUploadLabel) {
      signatureUploadInput.addEventListener('change', function(e) {
        handleImageUpload(e, 'signature');
      });
      signatureUploadLabel.addEventListener('click', function(e) {
        e.preventDefault();
        signatureUploadInput.click();
      });
      console.log('Signature upload listeners added');
    }
    
    // Add bulk generation listeners
    const generateBulkBtn = document.getElementById('generateBulkBtn');
    if (generateBulkBtn) {
      generateBulkBtn.addEventListener('click', function(e) {
        e.preventDefault();
        generateBulkInvoices();
      });
      console.log('Generate bulk button listener added');
    }
    
    const downloadBulkBtn = document.getElementById('downloadBulkBtn');
    if (downloadBulkBtn) {
      downloadBulkBtn.addEventListener('click', function(e) {
        e.preventDefault();
        downloadBulkZip();
      });
      console.log('Download bulk button listener added');
    }
    
    // Initialize button text and preview
    updateCountryButtonText();
    updateInvoicePreview();
    
    console.log('Application initialized successfully');
    
  } catch (error) {
    console.error('Error initializing application:', error);
  }
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app...');
  
  // Add a small delay to ensure all elements are rendered
  setTimeout(() => {
    initializeApp();
  }, 100);
});