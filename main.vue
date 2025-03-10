<template>
  <div id="app">
    <!-- Left Sidebar -->
<div class="absolute shadow-lg flex flex-col justify-start items-center w-[30%] md:w-[25%] lg:w-[16.8%] h-screen top-0 left-0 bg-[#d96a6a]">
  <!-- Inner Box at Top of Sidebar -->
  <div class="w-full flex items-center px-4 h-[7%] bg-[#d9d9d9] border-[#2d2e4f]/35 transition-colors duration-300 ease-in-out flex-col justify-center">
    <img 
      src="@/assets/images/Ellipse1.png" 
      alt="Left Image" 
      class="w-[30px] h-[30px] -translate-x-[40px] md:-translate-x-[80px] translate-y-[15px]" 
    />
    <p class="text-[16px] md:text-[20px] font-light text-black translate-y-[-15px] whitespace-normal text-center max-w-[90%]">
      {{ fullname }}
    </p>
  </div>

  <!-- Customizable Boxes with Scroll -->
  <div class="absolute shadow-lg flex flex-col justify-start items-center overflow-y-auto w-full h-[93%] top-[7%] left-0 bg-white scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200">
    <!-- Boxes -->
    <div 
      v-for="(box, index) in boxes" 
      :key="box.id" 
      :id="`box-${box.id}`" 
      :data-index="index"
      class="w-[90%] flex items-center px-4 cursor-pointer my-2" 
      :style="{
        height: box.height,
        backgroundColor: box.backgroundColor || 'rgba(217, 217, 217, 0.9)',
        transition: 'border-color 0.3s ease',
        justifyContent: 'center',
        borderRadius: box.borderRadius,
        border: box.border,
        fontSize: box.fontSize || '16px',
      }" 
      @click="handleBoxClick(box)"
    >
      <!-- Logo Image on Left Side -->
      <img :src="box.logo" alt="Logo" :style="box.logoStyle" />
      <!-- Box Text -->
      <p class="font-light text-black mx-auto whitespace-normal" :style="box.textStyle">
        {{ box.name }}
      </p>
    </div>

    <!-- Horizontal Line -->
    <div class="w-[90%] h-[2px] bg-gray-500 my-4"></div>

    <p class="text-lg md:text-xl font-bold my-4 text-center">
      Explore More
    </p>

    <!-- Explore Boxes -->
    <div 
      v-for="(box, index) in explorebox" 
      :key="box.id" 
      :id="`box-${box.id}`" 
      :data-index="index"
      class="w-[90%] flex items-center px-4 cursor-pointer my-2" 
      :style="{
        height: box.height,
        backgroundColor: box.backgroundColor || 'rgba(217, 217, 217, 0.9)',
        transition: 'border-color 0.3s ease',
        justifyContent: 'center',
        borderRadius: box.borderRadius,
        fontSize: box.fontSize || '16px',
      }" 
      @click="handleBoxClick(box)"
    >
      <!-- Logo Image on Left Side -->
      <img :src="box.logo" alt="Logo" :style="box.logoStyle" />
      <!-- Box Text -->
      <p class="font-light text-black mx-auto whitespace-normal" :style="box.textStyle">
        {{ box.name }}
      </p>
    </div>
  </div>
</div>

      <!-- Top Bar -->
      <div class="absolute shadow-lg flex flex-col justify-center items-center w-[82.58%] h-[7%] top-0 left-[17.42%] bg-[#d9d9d9]">

<!-- Logo -->
<img src="@/assets/images/logo.png" alt="Vertically Centered Image" class="object-contain max-h-[80%] absolute top-1/2 left-[80px] -translate-y-1/2" />


<!-- Form Input Box -->
<input type="text" placeholder="Search File & Courses"
class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d9d9d9] text-[#d9d9d9] text-center w-[60%] h-[58%] leading-[2.5]" />

</div>


    <!-- Main Content Area with Scroll -->
    <div class="absolute shadow-lg flex flex-col justify-start items-center overflow-y-auto transition-all duration-100 w-[70%] md:w-[75%] lg:w-[82.58%] h-[93%] top-[7%] left-[30%] md:left-[25%] lg:left-[17.42%] bg-[#d9d9d9] scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200" :class="{ 'blur-sm': showContainer }">
      <!-- 'Create' Text -->
      <p class="text-[32px] md:text-[64px] font-medium text-[rgba(45,46,79,0.35)] font-inter max-w-[80%] max-h-[80%] cursor-pointer hover:opacity-80 mt-4" @click="performAction">
        Create
      </p>

      <!-- '||' Text -->
      <p class="text-[16px] md:text-[24px] font-medium text-[rgba(45,46,79,0.35)] font-inter">
        ||
      </p>

      <!-- Image -->
      <img 
        src="@/assets/images/createjoin.svg" 
        alt="Centered Image" 
        class="object-contain cursor-pointer hover:opacity-80 max-w-[80%] max-h-[80%] mt-4" 
       
      />

      <!-- Recent Files Section -->
      <p class="text-[16px] md:text-[20px] font-bold mt-4 mb-4 text-center">
        Recent files
      </p>

      <!-- Recent Files Boxes -->
      <div 
        v-for="(box, index) in recentbox" 
        :key="box.id" 
        :id="`box-${box.id}`" 
        :data-index="index"
        class="w-[85%] flex items-center justify-center px-4 cursor-pointer my-2" 
        :style="{
          height: box.height,
          backgroundColor: box.backgroundColor || 'rgba(217, 217, 217, 0.9)',
          transition: 'border-color 0.3s ease',
          borderRadius: box.borderRadius,
          border: box.border,
          fontSize: box.fontSize || '20px',
        }" 
        @click="handleBoxClick(box)"
      >
        <p class="font-light text-black mx-auto" :style="box.textStyle">
          {{ box.name }}
        </p>
      </div>

      <!-- UUID Input Container -->
      <div 
        v-if="visibleContainers[7]" 
        class="new-container absolute top-20 left-15 w-[90%] md:w-[450px] h-[80px] bg-[rgba(217,217,217,1)] rounded-md shadow-lg flex items-center justify-center z-50 transform translate-y-[300%]"
      >
        <div class="flex items-center justify-center w-full space-x-4">
          <!-- Input Box -->
          <input 
            type="text" 
            v-model="lastFileUuid"
            placeholder="Enter UUID" 
            class="w-[70%] md:w-[300px] h-[40px] p-2 rounded-md border-2 border-gray-300" 
          />
          <!-- Save Button -->
          <button 
            class="w-[30%] md:w-[100px] h-[40px] bg-[rgba(40,41,71,1)] text-white rounded-md hover:bg-[#797a9c]"
            @click="enterfile"
          >
            Enter
          </button>
          <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
        </div>
      </div>
    </div>

    <!-- Button to toggle container (Outside main content area) -->
    <button 
      @click="toggleContainer"
      class="absolute right-4 md:right-12 bg-[rgba(40,41,71,1)] text-white font-bold rounded-[7px] hover:opacity-90 focus:outline-none w-24 md:w-36 h-12 flex items-center justify-center transform translate-y-[10px]"
    >
      <div class="flex items-center space-x-2">
        <img src="@/assets/images/plus.svg" alt="Icon" class="w-6 h-6 rounded-full object-contain" />
        <span class="text-sm md:text-base">Create File</span>
      </div>
    </button>

    <!-- New Container (Outside main content area) -->
    <div 
      v-if="showContainer" 
      ref="containerRef"
      class="absolute top-20 right-4 md:right-12 w-[90%] md:w-[450px] h-[80px] bg-[rgba(217,217,217,1)] rounded-md shadow-lg flex items-center justify-center z-50 transform translate-y-2"
    >
      <div class="flex items-center justify-center w-full space-x-4">
        <!-- Input Box -->
        <input 
          type="text" 
          v-model="fileName" 
          placeholder="Enter file name" 
          class="w-[70%] md:w-[300px] h-[40px] p-2 rounded-md border-2 border-gray-300" 
        />
        <!-- Save Button -->
        <button 
          @click="saveFile"
          class="w-[30%] md:w-[100px] h-[40px] bg-[rgba(40,41,71,1)] text-white rounded-md hover:bg-[#797a9c]"
        >
          Save
        </button>
      </div>
    </div>
  </div>

  template>
  <!-- Projects Popup -->
  <div 
    v-if="showProjectPopup" 
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
  >
    <div class="bg-white rounded-lg shadow-lg w-[90%] md:w-[500px] p-6 relative">
      <!-- Close Button -->
      <button 
        @click="closePopup" 
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        ✖
      </button>

      <!-- Popup Title -->
      <h2 class="text-xl font-bold mb-4">Create New Course</h2>

      <!-- Project Name Input -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Course Name</label>
        <input 
          type="text" 
          v-model="projectName" 
          placeholder="Enter course name" 
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9d9d9]"
        />
      </div>

      <!-- Username Input (Uneditable) -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Username</label>
        <input 
          type="text" 
          :value="fullname" 
          disabled 
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
        />
      </div>

      <!-- Project Description Input -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Course Description</label>
        <textarea 
          v-model="projectDescription" 
          placeholder="Enter course description" 
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9d9d9]"
        ></textarea>
      </div>

      <!-- Buttons -->
      <div class="flex justify-between">
        <button 
          @click="closePopup" 
          class="bg-gray-300 text-black font-bold rounded-md px-4 py-2 hover:bg-gray-400 focus:outline-none"
        >
          Close
        </button>
        <button 
          @click="createProject" 
          class="bg-[rgba(40,41,71,1)] text-white font-bold rounded-md px-4 py-2 hover:bg-[#797a9c] focus:outline-none"
        >
          Create
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import plusLogo from '@/assets/images/plus.svg';
import Homelog from '@/assets/images/Homelog.svg';
import files from '@/assets/images/filess.svg';
import project from '@/assets/images/projects.svg';
import course from '@/assets/images/course.svg';
import profile from '@/assets/images/profile.svg';
import documentation from '@/assets/images/documentation.svg';
import settings from '@/assets/images/Settings.svg';
import help from '@/assets/images/Help.svg';

import { useRouter } from "vue-router";

const router = useRouter(); // Initialize the router instance

const navigateTo = (path) => {
  router.push(path); // Use the router instance to navigate
};
const fullname = ref('')

const fetchUserFullname = async () => {
  try {
    const response = await fetch('/api/method/codecampus.api.get_user_fullname', {
      method: 'GET',
      credentials: 'include', // Ensures session-based authentication
    })

    // Handle non-200 responses
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()

    if (data.message?.fullname) {
      fullname.value = data.message.fullname
    } else {
      fullname.value = 'User not found'
    }
  } catch (err) {
    console.error('Error fetching fullname:', err)
    fullname.value = 'Error loading data'
  }
}


// Dynamically managed boxes with custom styles
const boxes = ref([
{
    id: 1,
    name: 'Create File', // Button text
    logo: plusLogo, // Assuming `plusLogo` is imported
    height: '5%',
    width: '94%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    border: '1px solid rgba(45, 46, 79, 0.35)',
    borderRadius: '7px',
    position: 'relative',
    marginTop: '20px',
    fontSize: '20px',
    logoStyle: { width: '22px', height: '22px', marginRight: '15px', transform: 'translateY(0px) translateX(10px)' },
    textStyle: { transform: 'translateX(-20px)' }
  },
  
  {
    id: 3,
    name: 'Home',
    logo: Homelog,
    height: '4%',
    width: '37%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    //border: '1px solid rgba(45, 46, 79, 0.35)',
    borderRadius: '7px',
    position: 'relative',
    marginTop: '24px',
    fontSize: '20px',
    logoStyle: { width: '30px', height: '30px', marginRight: '10%', transform: 'translateX(-6.5px) translateY(-1.5px)' },
    transform: 'translateX(-93px)',
    textStyle: { transform: 'translateX(-6px)' }
  },
  {
    id: 4,
    name: 'Files',
    logo: files,
    height: '4%',
    width: '37%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: '7px',
    position: 'relative',
    marginTop: '24px',
    fontSize: '20px',
    logoStyle: { width: '30px', height: '30px', marginRight: '15px', transform: 'translateX(-8px) translateY(0px)' },
    transform: 'translateX(-93px)',
    textStyle: { transform: 'translateX(-17.5px)' }
    
  },
  {
    id: 5,
    name: 'Projects',
    logo: project,
    height: '4%',
    width: '37%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: '7px',
    position: 'relative',
    marginTop: '24px',
    fontSize: '20px',
    logoStyle: { width: '30px', height: '30px', marginRight: '15px', transform: 'translateX(5px) translateY(0px)' },
    transform: 'translateX(-93px)',
    textStyle: { transform: 'translateX(0px)' }
  },
  {
    id: 6,
    name: 'Courses',
    logo: course,
    height: '4%',
    width: '37%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: '7px',
    position: 'relative',
    marginTop: '24px',
    fontSize: '20px',
    logoStyle: { width: '30px', height: '30px', marginRight: '15px', transform: 'translateX(5px) translateY(0px)' },
    transform: 'translateX(-93px)',
    textStyle: { transform: 'translateX(0px)' }
  },
  {
    id: 7,
    name: 'UUID',
    logo: profile,
    height: '4%',
    width: '37%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: '7px',
    position: 'relative',
    marginTop: '24px',
    fontSize: '20px',
    logoStyle: { width: '30px', height: '30px', marginRight: '15px', transform: 'translateX(-3px) translateY(0px)' },
    transform: 'translateX(-93px)',
    textStyle: { transform: 'translateX(-7.5px)' }
  },
]);

const explorebox = ref([
  {
    id: 1,
    name: 'Documentation',
    logo: documentation,
    height: '4%',
    width: '60%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: '7px',
    position: 'relative',
    marginTop: '24px',
    fontSize: '20px',
    logoStyle: { width: '30px', height: '30px', marginRight: '10px', transform: 'translateX(-2px) translateY(0px)' },
    transform: 'translateX(-55.0px)',
    textStyle: { transform: 'translateX(-3px)' }
  },
  {
    id: 4,
    name: 'Settings',
    logo: settings,
    height: '4%',
    width: '37%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: '7px',
    position: 'relative',
    marginTop: '24px',
    fontSize: '20px',
    logoStyle: { width: '30px', height: '30px', marginRight: '15px', transform: 'translateX(7.5px) translateY(0px)' },
    transform: 'translateX(-93px)',
    textStyle: { transform: 'translateX(1px)' }
  },
  {
    id: 5,
    name: 'Help',
    logo: help,
    height: '4%',
    width: '37%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: '7px',
    position: 'relative',
    marginTop: '24px',
    fontSize: '20px',
    transform: 'translateX(-93px)',
    logoStyle: { width: '30px', height: '30px', marginRight: '15px', transform: 'translateX(-5.5px) translateY(0px)' },
    textStyle: { transform: 'translateX(-15px)' }
  },
]);

const recentbox = ref([
  {
    id: 1,
    name: 'File 1',
    height: '5%',
    width: '85%',
    backgroundColor: 'rgba(217, 217, 217, 1)',
    border: '0.5px solid rgba(45, 46, 79, 0.35)',
    borderRadius: '14px',
    position: 'relative',
    marginTop: '24px',
    fontSize: '20px',
    textStyle: { textAlign: 'center' } // Center text within the box
  },
  {
    id: 2,
    name: 'File 2',
    height: '5%',
    width: '85%',
    backgroundColor: 'rgba(217, 217, 217, 1)',
    border: '0.5px solid rgba(45, 46, 79, 0.35)',
    borderRadius: '14px',
    position: 'relative',
    marginTop: '24px',
    fontSize: '20px',
    textStyle: { textAlign: 'center' } // Center text within the box
  },
  {
    id: 3,
    name: 'Course 1',
    height: '5%',
    width: '85%',
    backgroundColor: 'rgba(217, 217, 217, 1)',
    border: '0.5px solid rgba(45, 46, 79, 0.35)',
    borderRadius: '14px',
    position: 'relative',
    marginTop: '24px',
    fontSize: '20px',
    textStyle: { textAlign: 'center' } // Center text within the box
  },
  {
    id: 4,
    name: 'Course 2',
    height: '5%',
    width: '85%',
    backgroundColor: 'rgba(217, 217, 217, 1)',
    border: '0.5px solid rgba(45, 46, 79, 0.35)',
    borderRadius: '14px',
    position: 'relative',
    marginTop: '24px',
    fontSize: '20px',
    textStyle: { textAlign: 'center' } // Center text within the box
  },
]);


const fileName = ref(""); // Holds the input file name
const showContainer = ref(false)
const containerRef = ref(null)
const saveError = ref(""); // Holds error messages

const toggleContainer = () => {
  showContainer.value = !showContainer.value
}

const handleClickOutside = (event) => {
  if (
    showContainer.value &&
    containerRef.value &&
    !containerRef.value.contains(event.target) &&
    !event.target.closest('button')
  ) {
    showContainer.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  fetchUserFullname()
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const saveFile = async () => {
  if (!fileName.value.trim()) {
    saveError.value = "Please enter a file name.";
    return;
  }

  // Determine the language based on the file extension
  const language = fileName.value.endsWith(".py") ? "Python" : "Unknown";

  try {
    const response = await fetch("http://codecampus.com:8080/api/method/codecampus.api.codingFiles", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        file_name: fileName.value,
        language: language,
        code: "", // Include code content if needed
      }),
    });

    const data = await response.json();
    console.log("Full API Response:", data);

    if (data.message) {
      alert(data.message.message); // Show success message
      console.log("User Document:", data.message.user);
      const lastFileUuid = data.message.user.codingfiles[data.message.user.codingfiles.length - 1].name;
      
      // Navigate to filecode with the UUID
      router.push(`/filecode/${lastFileUuid}`);
    } else {
      saveError.value = "An unexpected error occurred.";
    }
  } catch (error) {
    console.error("Save file error:", error);
    saveError.value = "Failed to save the file. Please try again.";
  }

  // Clear the file name input
  fileName.value = "";
};
const visibleContainers = ref({})

const handleBoxClick = (box) => {
 if (box.id === 7) {
   // Toggle container visibility
   visibleContainers.value[box.id] = !visibleContainers.value[box.id]
 }
 else if (box.id === 1) { // "Create File" button
 toggleContainer(); // Toggle the popup for entering a file name
};

}



const lastFileUuid = ref(""); // Store UUID from input
const errorMessage = ref(""); // Store error message


const enterfile = async () => {
  errorMessage.value = ""; // Reset error message

  if (!lastFileUuid.value.trim()) {
    errorMessage.value = "Please enter a valid UUID";
    return;
  }

  console.log("Sending UUID:", lastFileUuid.value); // ✅ Debugging

  try {
    const response = await fetch(
      `http://codecampus.com:8080/api/method/codecampus.api.findbyuuid?uuid=${encodeURIComponent(lastFileUuid.value)}`
    );

    console.log("Response status:", response.status); // ✅ Debugging

    if (!response.ok) {
      throw new Error("Server error. Please try again later.");
    }

    const result = await response.json();
    console.log("API Response:", result); // ✅ Debugging

    if (result.message) {
      router.push(`/filecode/${result.message}`);
    } else {
      errorMessage.value = "Invalid UUID. Please enter a valid one.";
    }
  } catch (error) {
    console.error("Fetch Error:", error);
    errorMessage.value = "Network error. Check your connection.";
  }
};


// Reactive variables
const showProjectPopup = ref(false);
const projectName = ref('');
const projectDescription = ref('');


// Function to show the popup
const performAction = () => {
  showProjectPopup.value = true;
};

// Function to close the popup
const closePopup = () => {
  showProjectPopup.value = false;
};

// Function to handle the Create button
const createProject = () => {
  if (!projectName.value.trim() || !projectDescription.value.trim()) {
    alert('Please fill in all fields.');
    return;
  }
  else{
    router.push({
    name: 'owner', // Ensure the route name is correct
    query: {
      courseName: projectName.value,
      courseDescription: projectDescription.value,
    },
  });


  console.log('Coursename:', projectName.value);
  console.log('Username:', fullname.value);
  console.log('Course Description:', projectDescription.value);

  // Reset form and close popup
  projectName.value = '';
  projectDescription.value = '';
  showProjectPopup.value = false;
};
</script>

<style scoped>
/* Apply Inter font to the entire component */
body {
  font-family: 'Inter', sans-serif;
}

/* Optional: Keep the .font-inter class if needed for specific overrides */
.font-inter {
  font-family: 'Inter', sans-serif;
}
</style>
