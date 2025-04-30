// Storage keys
const STORAGE_KEYS = {
  BATCHES: 'batches_storage',
  SUBJECTS: 'subjects_storage',
  CHAPTERS: 'chapters_storage',
  VIDEOS: 'videos_storage',
  THEME: 'theme_preference'
};

const getData = () => {
    const batches = (localStorage.getItem(STORAGE_KEYS.BATCHES));
    const subjects = (localStorage.getItem(STORAGE_KEYS.SUBJECTS));
    const chapters = (localStorage.getItem(STORAGE_KEYS.CHAPTERS));
    const videos = (localStorage.getItem(STORAGE_KEYS.VIDEOS));

    
    const text = `Batches\n${batches}\n Subjects\n${subjects}\nChapters\n${chapters}\nvideos\n${videos}`
    
    /* setTimeout(() => { navigator.clipboard.writeText(text) }, 3000); */
}

const setData = () => {
    if(!localStorage.getItem(STORAGE_KEYS.BATCHES)) {
        const batches = [{"id":"_tf55sg64e","name":"Abhay","class":"9"}]
        localStorage.setItem(STORAGE_KEYS.BATCHES, JSON.stringify(batches))
        
        const subjects = [{"id":"_lqqtlmr6y","name":"Maths","batchId":"_tf55sg64e"},{"id":"_03hro96lw","name":"Science","batchId":"_tf55sg64e"},{"id":"_f5cthakgl","name":"History","batchId":"_tf55sg64e"},{"id":"_tdlloiydc","name":"Geography","batchId":"_tf55sg64e"},{"id":"_nd4oq62fx","name":"Political Science","batchId":"_tf55sg64e"},{"id":"_7s6pt32ek","name":"Economics","batchId":"_tf55sg64e"},{"id":"_dkxevaemo","name":"English (Beehive)","batchId":"_tf55sg64e"},{"id":"_4e6anys8d","name":"English (Moment)","batchId":"_tf55sg64e"},{"id":"_vn6wb97zj","name":"English (Grammar)","batchId":"_tf55sg64e"}]
        localStorage.setItem(STORAGE_KEYS.SUBJECTS, JSON.stringify(subjects))
        
        const chapters = [{"id":"_z22p5f5ao","name":"Number System","subjectId":"_lqqtlmr6y"},{"id":"_gnozycd0m","name":"Polynomials","subjectId":"_lqqtlmr6y"},{"id":"_bnjn0i3kf","name":"Coordinate Geometry","subjectId":"_lqqtlmr6y"},{"id":"_si8cnc900","name":"Linear Equation in Two Variables","subjectId":"_lqqtlmr6y"},{"id":"_zss2nkywf","name":"Euclid’s Geometry","subjectId":"_lqqtlmr6y"},{"id":"_uy1x7fit9","name":"Lines And Angles","subjectId":"_lqqtlmr6y"},{"id":"_c6xfnyubr","name":"Triangles","subjectId":"_lqqtlmr6y"},{"id":"_apj7b7oh9","name":"Quadrilaterals","subjectId":"_lqqtlmr6y"},{"id":"_ntbs1ok7w","name":"Circles","subjectId":"_lqqtlmr6y"},{"id":"_9t2bqdky7","name":"Herona's Formula","subjectId":"_lqqtlmr6y"},{"id":"_8guhcpm6j","name":"Surface Area And Volume","subjectId":"_lqqtlmr6y"},{"id":"_ewlesz642","name":"Statistics","subjectId":"_lqqtlmr6y"},{"id":"_nsqrku0ln","name":"Matters in Our Surroundings","subjectId":"_03hro96lw"},{"id":"_fe8h6rulw","name":"Is Matter Around Us Pure?","subjectId":"_03hro96lw"},{"id":"_a3fpkbarn","name":"Atom and Molecules","subjectId":"_03hro96lw"},{"id":"_e3pj7gjfg","name":"Structure of Atom","subjectId":"_03hro96lw"},{"id":"_xrgol09zs","name":"Tge Fundamental Unit of Life","subjectId":"_03hro96lw"},{"id":"_bxgtbbrb2","name":"Tissue","subjectId":"_03hro96lw"},{"id":"_hba0mzff5","name":"Motion","subjectId":"_03hro96lw"},{"id":"_0vhogplno","name":"Force And Laws of Motion","subjectId":"_03hro96lw"},{"id":"_axnfnd3ni","name":"Gravitation","subjectId":"_03hro96lw"},{"id":"_s6i8fosqb","name":"Work And Energy","subjectId":"_03hro96lw"},{"id":"_8ciat6rrc","name":"Sound","subjectId":"_03hro96lw"},{"id":"_73h4sci5w","name":"Improvement in Food Resources","subjectId":"_03hro96lw"}]
        localStorage.setItem(STORAGE_KEYS.CHAPTERS, JSON.stringify(chapters))
        
        const videos = [{"id":"_sezngsrm8","title":"Lecture 1","url":"https://www.youtube.com/live/n4eSPzaivrw?si=z-HMQICqi0A92W_k","description":"Number System Intro","duration":"100 min","chapterId":"_z22p5f5ao"},{"id":"_qo8eb88em","title":"Lecture 2","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4251377/173375116080771815381/index_3.m3u8","description":"Number System","duration":"92 min","chapterId":"_z22p5f5ao"},{"id":"_aolqmt0wh","title":"Lecture 3","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4252327/173383691221618296383/index_3.m3u8","description":"Number System & Polynomials","duration":"80 min","chapterId":"_z22p5f5ao"},{"id":"_jsiu6q9ut","title":"Lecture 1","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4255484/173410799833351097666/173410799833351097666_1097666.m3u8","description":"Polynomials","duration":"95 min","chapterId":"_gnozycd0m"},{"id":"_40w0yw51d","title":"Lecture 2","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4256107/173419593288961097666/173419593288961097666_1097666.m3u8","description":"Polynomials","duration":"125 min","chapterId":"_gnozycd0m"},{"id":"_h1vqrrq2h","title":"Lecture 1","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4256885/173435382082878296383/index_3.m3u8","description":"Coordinate Geometry","duration":"71 min","chapterId":"_bnjn0i3kf"},{"id":"_8y4krsjha","title":"Lecture 1","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4261742/173444164843561097666/index_3.m3u8","description":"Linear Equation in Two Variables","duration":"62 min","chapterId":"_si8cnc900"},{"id":"_y1g3b6kmd","title":"Lecture 1","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4264865/173471303034371097666/index_3.m3u8","description":"Euclid’s Geometry","duration":"92 min","chapterId":"_zss2nkywf"},{"id":"_vq3tesktx","title":"Lecture 1","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4265523/173479848021661097666/index_3.m3u8","description":"Lines And Angles","duration":"101 min","chapterId":"_uy1x7fit9"},{"id":"_vlowywnv8","title":"Lecture 2","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4266372/173496085411631097666/index_3.m3u8","description":"Lines And Angles","duration":"95 min","chapterId":"_uy1x7fit9"},{"id":"_xccpdhbu7","title":"Doubts Solving","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4267186/173504663185691097666/index_3.m3u8","description":"Lines And Angles","duration":"112 min","chapterId":"_uy1x7fit9"},{"id":"_wdg9g3cs5","title":"Lecture 1","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4269591/173531720472571097666/index_3.m3u8","description":"Triangles","duration":"87.5 min","chapterId":"_c6xfnyubr"},{"id":"_hustymaa3","title":"Lecture 2","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4270076/173540322468851097666/index_3.m3u8","description":"Triangles","duration":"81 min","chapterId":"_c6xfnyubr"},{"id":"_xpp8h2hki","title":"Lecture 1","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4270768/173556318575378296383/index_3.m3u8","description":"Quadrilaterals","duration":"96 min","chapterId":"_apj7b7oh9"},{"id":"_6n1c47z0x","title":"Lecture 2","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4271517/173565290321368296383/index_3.m3u8","description":"Quadrilaterals","duration":"84 min","chapterId":"_apj7b7oh9"},{"id":"_kglcrh3y2","title":"Lecture 3","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273635/173592036121211097666/index_3.m3u8","description":"Quadrilaterals","duration":"82 min","chapterId":"_apj7b7oh9"},{"id":"_fhrp2iufe","title":"Doubts Solving + Circle Lecture 1","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4274059/173600771246031097666/index_3.m3u8","description":"Quadrilaterals","duration":"87 min","chapterId":"_apj7b7oh9"},{"id":"_c8l6j79vx","title":"Doubts Solving+ Circle Lecture 1","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4274059/173600771246031097666/index_3.m3u8","description":"Circles","duration":"68 min","chapterId":"_ntbs1ok7w"},{"id":"_opbazzi2e","title":"Lecture 2","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4275112/173616877084008296383/index_3.m3u8","description":"Circles","duration":"89 min","chapterId":"_ntbs1ok7w"},{"id":"_ya9sz9w5z","title":"Lecture 3","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4276201/173625547873828296383/index_3.m3u8","description":"Circles","duration":"65 min","chapterId":"_ntbs1ok7w"},{"id":"_iu1morndp","title":"Lecture 4","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4278995/173652395371371097666/index_3.m3u8","description":"Circles","duration":"69 min","chapterId":"_ntbs1ok7w"},{"id":"_zov2twav8","title":"Doubts Solving","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4279761/173661370564281097666/index_3.m3u8","description":"Circles","duration":"56 min","chapterId":"_ntbs1ok7w"},{"id":"_rwmadmu3f","title":"Lecture 1","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4280674/173677415568611097666/index_3.m3u8","description":"Herona's Formula","duration":"65 min","chapterId":"_9t2bqdky7"},{"id":"_saam3zdfa","title":"Lecture 1","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4281280/173686137246678296383/index_3.m3u8","description":"Surface Area And Volume","duration":"85 min","chapterId":"_8guhcpm6j"},{"id":"_m91isfscv","title":"Lecture 2","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4282046/173694543584968296383/index_3.m3u8","description":"Surface Area And Volume","duration":"65 min","chapterId":"_8guhcpm6j"},{"id":"_qj84jf68c","title":"Lecture 1","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4283068/173703198658798296383/index_3.m3u8","description":"Statistics","duration":"58 min","chapterId":"_ewlesz642"},{"id":"_zvpeo4nnh","title":"Lecture 1","url":"https://www.youtube.com/live/Ck9_9LflhyU?si=hCMLD2NS7p0aBrJl","description":"Matters in Our Surroundings","duration":"80 min","chapterId":"_nsqrku0ln"},{"id":"_p63lwbqkg","title":"Lecture 1","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4255350/173409514939528296383/173409514939528296383_8296383.m3u8","description":"Is Matter Around Us Pure?","duration":"95 min","chapterId":"_fe8h6rulw"},{"id":"_616puc5bp","title":"Lecture 1","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4272032/173573673323138296383/index_3.m3u8","description":"Atom and Molecules","duration":"112 min","chapterId":"_a3fpkbarn"},{"id":"_8aty6r76c","title":"Lecture 2","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4272611/173582243150658296383/index_1.m3u8","description":"Atoms and Molecules","duration":"65 min","chapterId":"_a3fpkbarn"},{"id":"_5kvpwsnvz","title":"Lecture 1","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273520/173590921458708296383/index_1.m3u8","description":"Structure of Atom","duration":"98 min","chapterId":"_e3pj7gjfg"},{"id":"_2jg632k2d","title":"Lecture 2","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4274004/173599632260408296383/index_1.m3u8","description":"Structure of Atom","duration":"56 min","chapterId":"_e3pj7gjfg"},{"id":"_n59mq2kyz","title":"Doubts Solving","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4277125/173634124082028296383/index_3.m3u8","description":"Structure of Atom","duration":"56 min","chapterId":"_e3pj7gjfg"},{"id":"_lbd0wexbd","title":"Lecture 1","url":"https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4251458/1733755755_8731784553298248/13027204.m3u8","description":"Cell","duration":"56 min","chapterId":"_xrgol09zs"},{"id":"_sles422hv","title":"Lecture 2","url":"https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4251460/1733755761_9636980166374504/13027206.m3u8","description":"Cell","duration":"86 min","chapterId":"_xrgol09zs"},{"id":"_k6uvpsi0u","title":"Lecture 1","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4264737/173469917741108296383/index_1.m3u8","description":"Tissue","duration":"58 min","chapterId":"_bxgtbbrb2"},{"id":"_jft3cn0zd","title":"Lecture 2","url":"https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4265460/173478570995698296383/index_1.m3u8","description":"Tissue","duration":"85 min","chapterId":"_bxgtbbrb2"}]
        localStorage.setItem(STORAGE_KEYS.VIDEOS, JSON.stringify(videos))
    }
}

const removeData = () => {
  localStorage.removeItem(STORAGE_KEYS.BATCHES);
  localStorage.removeItem(STORAGE_KEYS.SUBJECTS);
  localStorage.removeItem(STORAGE_KEYS.CHAPTERS);
  localStorage.removeItem(STORAGE_KEYS.VIDEOS);
  localStorage.removeItem(STORAGE_KEYS.THEME);
}

// setData()

// getData()

removeData()

// App state
const state = {
  mode: 'user', // 'user' or 'admin'
  currentLevel: 'batch', // 'batch', 'subject', 'chapter', 'video'
  currentBatchId: null,
  currentSubjectId: null,
  currentChapterId: null,
  breadcrumbData: [], // Tracks the navigation path
  searchQuery: '',
  modalType: null // 'batch', 'subject', 'chapter', 'video', 'edit'
};

// DOM Elements
const elements = {
  appTitle: document.getElementById('appTitle'),
  switchModeBtn: document.getElementById('switchModeBtn'),
  themeSwitch: document.getElementById('themeSwitch'),
  content: document.getElementById('content'),
  breadcrumb: document.getElementById('breadcrumb'),
  modal: document.getElementById('modal'),
  modalTitle: document.getElementById('modalTitle'),
  passwordModal: document.getElementById('passwordModal'),
  adminPassword: document.getElementById('adminPassword'),
  itemName: document.getElementById('itemName'),
  itemClass: document.getElementById('itemClass'),
  itemUrl: document.getElementById('itemUrl'),
  itemDesc: document.getElementById('itemDesc'),
  itemDuration: document.getElementById('itemDuration'),
  saveBtn: document.getElementById('saveBtn'),
  cancelBtn: document.getElementById('cancelBtn'),
  loginBtn: document.getElementById('loginBtn'),
  cancelLoginBtn: document.getElementById('cancelLoginBtn'),
  classContainer: document.getElementById('classContainer'),
  urlContainer: document.getElementById('urlContainer'),
  descContainer: document.getElementById('descContainer'),
  durationContainer: document.getElementById('durationContainer'),
  searchInput: document.getElementById('searchInput'),
  searchBtn: document.getElementById('searchBtn'),
  homeBreadcrumb: document.getElementById('homeBreadcrumb')
};

// Helper functions
function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

function getStorageItem(key, defaultValue = []) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
}

function setStorageItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function updateBreadcrumb() {
  // Clear all breadcrumbs except home
  elements.breadcrumb.innerHTML = '';
  elements.breadcrumb.appendChild(elements.homeBreadcrumb);
  
  // Add breadcrumbs based on current navigation
  state.breadcrumbData.forEach((item, index) => {
    // Add separator
    const separator = document.createElement('span');
    separator.className = 'separator';
    separator.textContent = ' > ';
    elements.breadcrumb.appendChild(separator);
    
    // Add breadcrumb item
    const breadcrumbItem = document.createElement('span');
    breadcrumbItem.textContent = item.name;
    breadcrumbItem.dataset.level = item.level;
    breadcrumbItem.dataset.id = item.id;
    
    // Make it clickable if it's not the last item
    if (index < state.breadcrumbData.length - 1) {
      breadcrumbItem.onclick = () => {
        // Navigate to this breadcrumb level
        navigateToBreadcrumb(index);
      };
    }
    
    elements.breadcrumb.appendChild(breadcrumbItem);
  });
}

function navigateToBreadcrumb(index) {
  // Trim breadcrumb data to this index
  state.breadcrumbData = state.breadcrumbData.slice(0, index + 1);
  const item = state.breadcrumbData[index];
  
  // Set current level and IDs
  state.currentLevel = item.level;
  
  if (item.level === 'subject') {
    state.currentBatchId = item.parentId;
    state.currentSubjectId = item.id;
    state.currentChapterId = null;
  } else if (item.level === 'chapter') {
    state.currentBatchId = state.breadcrumbData[0].id;
    state.currentSubjectId = item.parentId;
    state.currentChapterId = item.id;
  } else if (item.level === 'video') {
    state.currentBatchId = state.breadcrumbData[0].id;
    state.currentSubjectId = state.breadcrumbData[1].id;
    state.currentChapterId = item.parentId;
  } else {
    // Batch level
    state.currentBatchId = item.id;
    state.currentSubjectId = null;
    state.currentChapterId = null;
  }
  
  renderContent();
}

function resetToHome() {
  state.currentLevel = 'batch';
  state.currentBatchId = null;
  state.currentSubjectId = null;
  state.currentChapterId = null;
  state.breadcrumbData = [];
  state.searchQuery = '';
  elements.searchInput.value = '';
  renderContent();
}

function showModal(type, editItem = null) {
  state.modalType = type;
  const isEdit = !!editItem;
  
  // Set modal title
  elements.modalTitle.textContent = isEdit ? `Edit ${type}` : `Add new ${type}`;
  
  // Reset and show/hide form fields based on type
  elements.itemName.value = isEdit ? editItem.name : '';
  elements.classContainer.style.display = type === 'batch' ? 'block' : 'none';
  elements.itemClass.value = isEdit && type === 'batch' ? editItem.class : '';
  
  elements.urlContainer.style.display = type === 'video' ? 'block' : 'none';
  elements.descContainer.style.display = type === 'video' ? 'block' : 'none';
  elements.durationContainer.style.display = type === 'video' ? 'block' : 'none';
  
  if (isEdit && type === 'video') {
    elements.itemUrl.value = editItem.url || '';
    elements.itemDesc.value = editItem.description || '';
    elements.itemDuration.value = editItem.duration ? editItem.duration.replace(' min', '') : '';
  } else {
    elements.itemUrl.value = '';
    elements.itemDesc.value = '';
    elements.itemDuration.value = '';
  }
  
  // Store the item id if editing
  if (isEdit) {
    elements.saveBtn.dataset.editId = editItem.id;
  } else {
    delete elements.saveBtn.dataset.editId;
  }
  
  // Show modal
  elements.modal.style.display = 'flex';
}

function hideModal() {
  elements.modal.style.display = 'none';
}

function showPasswordModal() {
  elements.adminPassword.value = '';
  elements.passwordModal.style.display = 'flex';
}

function hidePasswordModal() {
  elements.passwordModal.style.display = 'none';
}

function saveData() {
  const name = elements.itemName.value.trim();
  if (!name) {
    alert('Name is required');
    return;
  }
  
  const isEdit = elements.saveBtn.hasAttribute('data-edit-id');
  const itemId = isEdit ? elements.saveBtn.dataset.editId : generateId();
  
  switch (state.modalType) {
    case 'batch':
      const classLevel = elements.itemClass.value.trim() || 'N/A';
      if (isEdit) {
        const batches = getStorageItem(STORAGE_KEYS.BATCHES);
        const index = batches.findIndex(b => b.id === itemId);
        if (index !== -1) {
          batches[index].name = name;
          batches[index].class = classLevel;
          setStorageItem(STORAGE_KEYS.BATCHES, batches);
        }
      } else {
        const batches = getStorageItem(STORAGE_KEYS.BATCHES);
        batches.push({ id: itemId, name, class: classLevel });
        setStorageItem(STORAGE_KEYS.BATCHES, batches);
      }
      break;
      
    case 'subject':
      if (isEdit) {
        const subjects = getStorageItem(STORAGE_KEYS.SUBJECTS);
        const index = subjects.findIndex(s => s.id === itemId);
        if (index !== -1) {
          subjects[index].name = name;
          setStorageItem(STORAGE_KEYS.SUBJECTS, subjects);
        }
      } else {
        const subjects = getStorageItem(STORAGE_KEYS.SUBJECTS);
        subjects.push({ id: itemId, name, batchId: state.currentBatchId });
        setStorageItem(STORAGE_KEYS.SUBJECTS, subjects);
      }
      break;
      
    case 'chapter':
      if (isEdit) {
        const chapters = getStorageItem(STORAGE_KEYS.CHAPTERS);
        const index = chapters.findIndex(c => c.id === itemId);
        if (index !== -1) {
          chapters[index].name = name;
          setStorageItem(STORAGE_KEYS.CHAPTERS, chapters);
        }
      } else {
        const chapters = getStorageItem(STORAGE_KEYS.CHAPTERS);
        chapters.push({ id: itemId, name, subjectId: state.currentSubjectId });
        setStorageItem(STORAGE_KEYS.CHAPTERS, chapters);
      }
      break;
      
    case 'video':
      const url = elements.itemUrl.value.trim();
      const description = elements.itemDesc.value.trim();
      const duration = elements.itemDuration.value ? `${elements.itemDuration.value} min` : '5 min';
      
      if (!url) {
        alert('Video URL is required');
        return;
      }
      
      if (isEdit) {
        const videos = getStorageItem(STORAGE_KEYS.VIDEOS);
        const index = videos.findIndex(v => v.id === itemId);
        if (index !== -1) {
          videos[index].title = name;
          videos[index].url = url;
          videos[index].description = description;
          videos[index].duration = duration;
          setStorageItem(STORAGE_KEYS.VIDEOS, videos);
        }
      } else {
        const videos = getStorageItem(STORAGE_KEYS.VIDEOS);
        videos.push({ 
          id: itemId, 
          title: name, 
          url, 
          description, 
          duration, 
          chapterId: state.currentChapterId 
        });
        setStorageItem(STORAGE_KEYS.VIDEOS, videos);
      }
      break;
  }
  
  hideModal();
  renderContent();
}

function deleteItem(type, id) {
  if (!confirm(`Are you sure you want to delete this ${type}?`)) {
    return;
  }
  
  switch (type) {
    case 'batch':
      const batches = getStorageItem(STORAGE_KEYS.BATCHES).filter(b => b.id !== id);
      setStorageItem(STORAGE_KEYS.BATCHES, batches);
      
      // Delete associated subjects, chapters, and videos
      const allSubjects = getStorageItem(STORAGE_KEYS.SUBJECTS);
      const batchSubjectIds = allSubjects.filter(s => s.batchId === id).map(s => s.id);
      
      const remainingSubjects = allSubjects.filter(s => s.batchId !== id);
      setStorageItem(STORAGE_KEYS.SUBJECTS, remainingSubjects);
      
      const allChapters = getStorageItem(STORAGE_KEYS.CHAPTERS);
      const subjectChapterIds = allChapters.filter(c => batchSubjectIds.includes(c.subjectId)).map(c => c.id);
      
      const remainingChapters = allChapters.filter(c => !batchSubjectIds.includes(c.subjectId));
      setStorageItem(STORAGE_KEYS.CHAPTERS, remainingChapters);
      
      const remainingVideos = getStorageItem(STORAGE_KEYS.VIDEOS).filter(v => !subjectChapterIds.includes(v.chapterId));
      setStorageItem(STORAGE_KEYS.VIDEOS, remainingVideos);
      break;
      
    case 'subject':
      const subjects = getStorageItem(STORAGE_KEYS.SUBJECTS).filter(s => s.id !== id);
      setStorageItem(STORAGE_KEYS.SUBJECTS, subjects);
      
      // Delete associated chapters and videos
      const subjectChapters = getStorageItem(STORAGE_KEYS.CHAPTERS);
      const chapterIds = subjectChapters.filter(c => c.subjectId === id).map(c => c.id);
      
      const subjectRemainingChapters = subjectChapters.filter(c => c.subjectId !== id);
      setStorageItem(STORAGE_KEYS.CHAPTERS, subjectRemainingChapters);
      
      const subjectRemainingVideos = getStorageItem(STORAGE_KEYS.VIDEOS).filter(v => !chapterIds.includes(v.chapterId));
      setStorageItem(STORAGE_KEYS.VIDEOS, subjectRemainingVideos);
      break;
      
    case 'chapter':
      const chapters = getStorageItem(STORAGE_KEYS.CHAPTERS).filter(c => c.id !== id);
      setStorageItem(STORAGE_KEYS.CHAPTERS, chapters);
      
      // Delete associated videos
      const chapterRemainingVideos = getStorageItem(STORAGE_KEYS.VIDEOS).filter(v => v.chapterId !== id);
      setStorageItem(STORAGE_KEYS.VIDEOS, chapterRemainingVideos);
      break;
      
    case 'video':
      const videos = getStorageItem(STORAGE_KEYS.VIDEOS).filter(v => v.id !== id);
      setStorageItem(STORAGE_KEYS.VIDEOS, videos);
      break;
  }
  
  renderContent();
}

function searchItems() {
  state.searchQuery = elements.searchInput.value.trim().toLowerCase();
  if (state.searchQuery) {
    renderSearchResults();
  } else {
    renderContent();
  }
}

function renderSearchResults() {
  const query = state.searchQuery;
  elements.content.innerHTML = '';
  let resultsFound = false;
  
  // Search batches
  const batches = getStorageItem(STORAGE_KEYS.BATCHES);
  const matchedBatches = batches.filter(b => 
    b.name.toLowerCase().includes(query) || 
    b.class.toString().toLowerCase().includes(query)
  );
  
  // Search subjects
  const subjects = getStorageItem(STORAGE_KEYS.SUBJECTS);
  const matchedSubjects = subjects.filter(s => 
    s.name.toLowerCase().includes(query)
  );
  
  // Search chapters
  const chapters = getStorageItem(STORAGE_KEYS.CHAPTERS);
  const matchedChapters = chapters.filter(c => 
    c.name.toLowerCase().includes(query)
  );
  
  // Search videos
  const videos = getStorageItem(STORAGE_KEYS.VIDEOS);
  const matchedVideos = videos.filter(v => 
    v.title.toLowerCase().includes(query) || 
    (v.description && v.description.toLowerCase().includes(query))
  );
  
  // Render search results sections
  if (matchedBatches.length > 0) {
    resultsFound = true;
    renderSearchSection('Batches', matchedBatches, 'batch');
  }
  
  if (matchedSubjects.length > 0) {
    resultsFound = true;
    renderSearchSection('Subjects', matchedSubjects, 'subject');
  }
  
  if (matchedChapters.length > 0) {
    resultsFound = true;
    renderSearchSection('Chapters', matchedChapters, 'chapter');
  }
  
  if (matchedVideos.length > 0) {
    resultsFound = true;
    renderSearchSection('Videos', matchedVideos, 'video');
  }
  
  if (!resultsFound) {
    elements.content.innerHTML = `<div class="no-results">No results found for "${query}"</div>`;
  }
  
  // Update breadcrumb for search
  state.breadcrumbData = [{ name: `Search: ${query}`, level: 'search', id: 'search' }];
  updateBreadcrumb();
}

function renderSearchSection(title, items, type) {
  const sectionHeading = document.createElement('h2');
  sectionHeading.textContent = title;
  sectionHeading.className = 'search-heading';
  elements.content.appendChild(sectionHeading);
  
  const sectionGrid = document.createElement('div');
  sectionGrid.className = 'grid-container';
  
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    
    let icon, name, additional = '';
    
    if (type === 'batch') {
      icon = '📚';
      name = item.name;
      additional = `<p>Class ${item.class}</p>`;
      card.onclick = () => openBatch(item.id, item.name);
    } else if (type === 'subject') {
      icon = '📘';
      name = item.name;
      // Find batch name for context
      const batch = getStorageItem(STORAGE_KEYS.BATCHES).find(b => b.id === item.batchId);
      if (batch) {
        additional = `<p>From: ${batch.name}</p>`;
      }
      card.onclick = () => openBatchThenSubject(item.batchId, item.id, item.name);
    } else if (type === 'chapter') {
      icon = '📝';
      name = item.name;
      // Find subject and batch for context
      const subject = getStorageItem(STORAGE_KEYS.SUBJECTS).find(s => s.id === item.subjectId);
      if (subject) {
        const batch = getStorageItem(STORAGE_KEYS.BATCHES).find(b => b.id === subject.batchId);
        if (batch && subject) {
          additional = `<p>From: ${batch.name} > ${subject.name}</p>`;
        }
      }
      card.onclick = () => openBatchThenSubjectThenChapter(item.id, item.name, item.subjectId);
    } else if (type === 'video') {
      icon = '🎬';
      name = item.title;
      // Find chapter, subject and batch for context
      const chapter = getStorageItem(STORAGE_KEYS.CHAPTERS).find(c => c.id === item.chapterId);
      if (chapter) {
        const subject = getStorageItem(STORAGE_KEYS.SUBJECTS).find(s => s.id === chapter.subjectId);
        if (subject) {
          additional = `<p>From: ${subject.name} > ${chapter.name}</p>`;
          if (item.description) {
            additional += `<p>${item.description.substring(0, 50)}${item.description.length > 50 ? '...' : ''}</p>`;
          }
          additional += `<p>Duration: ${item.duration}</p>`;
        }
      }
      
      // For videos we need a different approach to open directly to video view
      card.innerHTML = `
        <div class="card-content">
          <div class="card-icon">${icon}</div>
          <h3>${name}</h3>
          ${additional}
          <button class="btn-play" onclick="event.stopPropagation(); playVideo('${item.url}')">Play Video</button>
        </div>
      `;
      return sectionGrid.appendChild(card);
    }
    
    card.innerHTML = `
      <div class="card-content">
        <div class="card-icon">${icon}</div>
        <h3>${name}</h3>
        ${additional}
      </div>
    `;
    sectionGrid.appendChild(card);
  });
  
  elements.content.appendChild(sectionGrid);
}

// Functions to handle search result navigation
function openBatch(batchId, batchName) {
  state.currentBatchId = batchId;
  state.currentSubjectId = null;
  state.currentChapterId = null;
  state.currentLevel = 'subject';
  state.breadcrumbData = [{ name: batchName, level: 'batch', id: batchId }];
  state.searchQuery = '';
  elements.searchInput.value = '';
  renderContent();
}

function openBatchThenSubject(batchId, subjectId, subjectName) {
  const batch = getStorageItem(STORAGE_KEYS.BATCHES).find(b => b.id === batchId);
  if (!batch) return;
  
  state.currentBatchId = batchId;
  state.currentSubjectId = subjectId;
  state.currentChapterId = null;
  state.currentLevel = 'chapter';
  state.breadcrumbData = [
    { name: batch.name, level: 'batch', id: batchId },
    { name: subjectName, level: 'subject', id: subjectId, parentId: batchId }
  ];
  state.searchQuery = '';
  elements.searchInput.value = '';
  renderContent();
}

function openBatchThenSubjectThenChapter(chapterId, chapterName, subjectId) {
  const subject = getStorageItem(STORAGE_KEYS.SUBJECTS).find(s => s.id === subjectId);
  if (!subject) return;
  
  const batch = getStorageItem(STORAGE_KEYS.BATCHES).find(b => b.id === subject.batchId);
  if (!batch) return;
  
  state.currentBatchId = batch.id;
  state.currentSubjectId = subjectId;
  state.currentChapterId = chapterId;
  state.currentLevel = 'video';
  state.breadcrumbData = [
    { name: batch.name, level: 'batch', id: batch.id },
    { name: subject.name, level: 'subject', id: subjectId, parentId: batch.id },
    { name: chapterName, level: 'chapter', id: chapterId, parentId: subjectId }
  ];
  state.searchQuery = '';
  elements.searchInput.value = '';
  renderContent();
}

/* function playVideo(url) {
  if (!url) {
    alert('Video URL not available');
    return;
  }
  
  if(url.includes("youtube")) {
      window.open(url, '_blank');
  }
  
  const videoPlayerModal = document.getElementById("videoPlayerModal");
  
 const videoPlayer = document.getElementById("videoPlayer");
  
  videoPlayerModal.style.display = "flex";
  videoPlayer.src = url;
  
  videoPlayerModal.onclick = (e) => {
      if(e.target != videoPlayerModal) return
      
      videoPlayerModal.style.display = "none"
        videoPlayer.src = "";
  }
  
  console.log("")
  
  
  // window.open(url, '_blank');
} */

function playVideo(url) {
  if (!url) {
    alert('Video URL not available');
    return;
  }

  const videoPlayerModal = document.getElementById("videoPlayerModal");
  const videoPlayer = document.getElementById("videoPlayer");

  // Close any previous hls instance
  if (window.hlsPlayer) {
    window.hlsPlayer.destroy();
    window.hlsPlayer = null;
  }

  videoPlayer.pause();
  videoPlayer.src = "";

  if (url.includes("youtube")) {
    // Open YouTube links in a new tab
    window.open(url, '_blank');
    return;
  }

  if (Hls.isSupported() && url.endsWith(".m3u8")) {
    // Create new hls.js instance for .m3u8 streaming
    window.hlsPlayer = new Hls({
      maxBufferLength: 30,
      maxMaxBufferLength: 60,
      lowLatencyMode: true,
      enableWorker: true,
      backBufferLength: 90,
    });

    window.hlsPlayer.loadSource(url);
    window.hlsPlayer.attachMedia(videoPlayer);

    window.hlsPlayer.on(Hls.Events.MANIFEST_PARSED, function () {
      videoPlayer.play();
    });

    window.hlsPlayer.on(Hls.Events.ERROR, function (event, data) {
      if (data.fatal) {
        switch (data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            console.warn("Network error. Attempting to recover...");
            window.hlsPlayer.startLoad();
            break;
          case Hls.ErrorTypes.MEDIA_ERROR:
            console.warn("Media error. Attempting to recover...");
            window.hlsPlayer.recoverMediaError();
            break;
          default:
            console.error("Fatal error. Destroying hls...");
            window.hlsPlayer.destroy();
            break;
        }
      }
    });
  } else if (videoPlayer.canPlayType('application/vnd.apple.mpegurl')) {
    // Native support (Safari and iOS devices)
    videoPlayer.src = url;
    videoPlayer.addEventListener('loadedmetadata', () => {
      videoPlayer.play();
    }, { once: true });
  } else {
    // Normal MP4 or other direct video files
    videoPlayer.src = url;
    videoPlayer.addEventListener('loadedmetadata', () => {
      videoPlayer.play();
    }, { once: true });
  }

  videoPlayerModal.style.display = "flex";

  // Click outside to close
  videoPlayerModal.onclick = (e) => {
    if (e.target !== videoPlayerModal) return;

    if (window.hlsPlayer) {
      window.hlsPlayer.destroy();
      window.hlsPlayer = null;
    }

    videoPlayer.pause();
    videoPlayer.src = "";
    videoPlayerModal.style.display = "none";
  }
}


function renderContent() {
  elements.content.innerHTML = '';
  
  // Update breadcrumb
  updateBreadcrumb();
  
  // If we're searching, render search results instead
  if (state.searchQuery) {
    renderSearchResults();
    return;
  }
  
  // Render appropriate content based on current level
  switch (state.currentLevel) {
    case 'batch':
      renderBatches();
      break;
    case 'subject':
      renderSubjects();
      break;
    case 'chapter':
      renderChapters();
      break;
    case 'video':
      renderVideos();
      break;
  }
}

function renderBatches() {
  const batches = getStorageItem(STORAGE_KEYS.BATCHES);
  
  batches.forEach(batch => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-content">
        <div class="card-icon">📚</div>
        <h3>${batch.name}</h3>
        <p>Class ${batch.class}</p>
      </div>
    `;
    
    // Add delete button if in admin mode
    if (state.mode === 'admin') {
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn-delete';
      deleteBtn.innerHTML = '×';
      deleteBtn.title = 'Delete batch';
      deleteBtn.onclick = (e) => {
        e.stopPropagation();
        deleteItem('batch', batch.id);
      };
      card.appendChild(deleteBtn);
      
      // Add edit functionality
      card.ondblclick = (e) => {
        e.stopPropagation();
        showModal('batch', batch);
      };
    }
    
    // Navigate to subjects on click
    card.onclick = () => {
      state.currentBatchId = batch.id;
      state.currentLevel = 'subject';
      state.breadcrumbData = [{ name: batch.name, level: 'batch', id: batch.id }];
      renderContent();
    };
    
    elements.content.appendChild(card);
  });
  
  // Add "Add batch" card if in admin mode
  if (state.mode === 'admin') {
    const addCard = document.createElement('div');
    addCard.className = 'card add-card';
    addCard.innerHTML = `
      <div class="card-content">
        <div class="card-icon">+</div>
        <h3>Add Batch</h3>
      </div>
    `;
    addCard.onclick = () => showModal('batch');
    elements.content.appendChild(addCard);
  }
}

function renderSubjects() {
  const subjects = getStorageItem(STORAGE_KEYS.SUBJECTS).filter(subject => subject.batchId === state.currentBatchId);
  
  subjects.forEach(subject => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-content">
        <div class="card-icon">📘</div>
        <h3>${subject.name}</h3>
      </div>
    `;
    
    // Add delete button if in admin mode
    if (state.mode === 'admin') {
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn-delete';
      deleteBtn.innerHTML = '×';
      deleteBtn.title = 'Delete subject';
      deleteBtn.onclick = (e) => {
        e.stopPropagation();
        deleteItem('subject', subject.id);
      };
      card.appendChild(deleteBtn);
      
      // Add edit functionality
      card.ondblclick = (e) => {
        e.stopPropagation();
        showModal('subject', subject);
      };
    }
    
    // Navigate to chapters on click
    card.onclick = () => {
      state.currentSubjectId = subject.id;
      state.currentLevel = 'chapter';
      
      // Add subject to breadcrumb
      const batch = getStorageItem(STORAGE_KEYS.BATCHES).find(b => b.id === state.currentBatchId);
      state.breadcrumbData = [
        { name: batch.name, level: 'batch', id: batch.id },
        { name: subject.name, level: 'subject', id: subject.id, parentId: batch.id }
      ];
      
      renderContent();
    };
    
    elements.content.appendChild(card);
  });
  
  // Add "Add subject" card if in admin mode
  if (state.mode === 'admin') {
    const addCard = document.createElement('div');
    addCard.className = 'card add-card';
    addCard.innerHTML = `
      <div class="card-content">
        <div class="card-icon">+</div>
        <h3>Add Subject</h3>
      </div>
    `;
    addCard.onclick = () => showModal('subject');
    elements.content.appendChild(addCard);
  }
}

function renderChapters() {
  const chapters = getStorageItem(STORAGE_KEYS.CHAPTERS).filter(chapter => chapter.subjectId === state.currentSubjectId);
  
  chapters.forEach(chapter => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-content">
        <div class="card-icon">📝</div>
        <h3>${chapter.name}</h3>
      </div>
    `;
    
    // Add delete button if in admin mode
    if (state.mode === 'admin') {
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn-delete';
      deleteBtn.innerHTML = '×';
      deleteBtn.title = 'Delete chapter';
      deleteBtn.onclick = (e) => {
        e.stopPropagation();
        deleteItem('chapter', chapter.id);
      };
      card.appendChild(deleteBtn);
      
      // Add edit functionality
      card.ondblclick = (e) => {
        e.stopPropagation();
        showModal('chapter', chapter);
      };
    }
    
    // Navigate to videos on click
    card.onclick = () => {
      state.currentChapterId = chapter.id;
      state.currentLevel = 'video';
      
      // Add chapter to breadcrumb
      const subject = getStorageItem(STORAGE_KEYS.SUBJECTS).find(s => s.id === state.currentSubjectId);
      const batch = getStorageItem(STORAGE_KEYS.BATCHES).find(b => b.id === subject.batchId);
      
      state.breadcrumbData = [
        { name: batch.name, level: 'batch', id: batch.id },
        { name: subject.name, level: 'subject', id: subject.id, parentId: batch.id },
        { name: chapter.name, level: 'chapter', id: chapter.id, parentId: subject.id }
      ];
      
      renderContent();
    };
    
    elements.content.appendChild(card);
  });
  
  // Add "Add chapter" card if in admin mode
  if (state.mode === 'admin') {
    const addCard = document.createElement('div');
    addCard.className = 'card add-card';
    addCard.innerHTML = `
      <div class="card-content">
        <div class="card-icon">+</div>
        <h3>Add Chapter</h3>
      </div>
    `;
    addCard.onclick = () => showModal('chapter');
    elements.content.appendChild(addCard);
  }
}

function renderVideos() {
  const videos = getStorageItem(STORAGE_KEYS.VIDEOS).filter(video => video.chapterId === state.currentChapterId);
  
  videos.forEach(video => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-content">
        <div class="card-icon">🎬</div>
        <h3>${video.title}</h3>
        ${video.description ? `<p>${video.description}</p>` : ''}
        <p>Duration: ${video.duration}</p>
        <button class="btn-play" onclick="playVideo('${video.url}')">Play Video</button>
      </div>
    `;
    
    // Add delete button if in admin mode
    if (state.mode === 'admin') {
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn-delete';
      deleteBtn.innerHTML = '×';
      deleteBtn.title = 'Delete video';
      deleteBtn.onclick = (e) => {
        e.stopPropagation();
        deleteItem('video', video.id);
      };
      card.appendChild(deleteBtn);
      
      // Add edit functionality
      card.ondblclick = (e) => {
        e.stopPropagation();
        showModal('video', video);
      };
    }
    
    elements.content.appendChild(card);
  });
  
  // Add "Add video" card if in admin mode
  if (state.mode === 'admin') {
    const addCard = document.createElement('div');
    addCard.className = 'card add-card';
    addCard.innerHTML = `
      <div class="card-content">
        <div class="card-icon">+</div>
        <h3>Add Video</h3>
      </div>
    `;
    addCard.onclick = () => showModal('video');
    elements.content.appendChild(addCard);
  }
}

// Initial setup and event listeners
function initializeApp() {
  // Set up theme toggle
  const currentTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  elements.themeSwitch.checked = currentTheme === 'dark';
  
  // Create initial data if not exists
  if (!localStorage.getItem(STORAGE_KEYS.BATCHES)) {
    // Create Neev Batch for Class 9
    // const batchId = generateId();
    // const neevBatch = { id: batchId, name: 'Neev Batch', class: 9 };
    // setStorageItem(STORAGE_KEYS.BATCHES, [neevBatch]);
    
    // Create subjects for Neev Batch
    /* const subjects = [
      { id: generateId(), name: 'Mathematics', batchId },
      { id: generateId(), name: 'Physics', batchId },
      { id: generateId(), name: 'Chemistry', batchId },
      { id: generateId(), name: 'Biology', batchId },
      { id: generateId(), name: 'English', batchId },
      { id: generateId(), name: 'Social Science', batchId }
    ];
    setStorageItem(STORAGE_KEYS.SUBJECTS, subjects); */
    
    // Create example chapters for Mathematics
    /* const mathId = subjects[0].id;
    const chapters = [
      { id: generateId(), name: 'Number Systems', subjectId: mathId },
      { id: generateId(), name: 'Polynomials', subjectId: mathId },
      { id: generateId(), name: 'Coordinate Geometry', subjectId: mathId },
      { id: generateId(), name: 'Linear Equations', subjectId: mathId }
    ];
    setStorageItem(STORAGE_KEYS.CHAPTERS, chapters); */
    
    // Create example videos for Number Systems
    /* const chapterId = chapters[0].id;
    const videos = [
      { 
        id: generateId(), 
        title: 'Introduction to Real Numbers', 
        url: 'https://www.youtube.com/watch?v=example1', 
        description: 'Learn about rational and irrational numbers', 
        duration: '12 min', 
        chapterId 
      },
      { 
        id: generateId(), 
        title: 'Decimal Expansion', 
        url: 'https://www.youtube.com/watch?v=example2', 
        description: 'Understanding decimal representation of real numbers', 
        duration: '15 min', 
        chapterId 
      }
    ];
    setStorageItem(STORAGE_KEYS.VIDEOS, videos); */
  }
  
  // Set up event listeners
  elements.switchModeBtn.addEventListener('click', () => {
    if (state.mode === 'user') {
      showPasswordModal();
    } else {
      state.mode = 'user';
      elements.appTitle.textContent = 'EduVidHub - User Mode';
      elements.switchModeBtn.textContent = 'Switch to Admin';
      renderContent();
    }
  });
  
  elements.themeSwitch.addEventListener('change', () => {
    if (elements.themeSwitch.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem(STORAGE_KEYS.THEME, 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem(STORAGE_KEYS.THEME, 'light');
    }
  });
  
  elements.homeBreadcrumb.addEventListener('click', resetToHome);
  
  elements.saveBtn.addEventListener('click', saveData);
  elements.cancelBtn.addEventListener('click', hideModal);
  
  elements.loginBtn.addEventListener('click', () => {
    const password = elements.adminPassword.value;
    if (password === 'admin121') {
      state.mode = 'admin';
      elements.appTitle.textContent = 'EduVidHub - Admin Mode';
      elements.switchModeBtn.textContent = 'Switch to User';
      hidePasswordModal();
      renderContent();
    } else {
      alert('Incorrect password. Try again.');
    }
  });
  
  elements.cancelLoginBtn.addEventListener('click', hidePasswordModal);
  
  document.querySelector('.close-modal').addEventListener('click', hideModal);
  
  elements.searchBtn.addEventListener('click', searchItems);
  elements.searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      searchItems();
    }
  });
  
  // Initial render
  renderContent();
}

// Initialize the application
initializeApp();


document.addEventListener('DOMContentLoaded', function() {
  const videoElement = document.querySelector('video');
  
  if (!videoElement) return;

  let startY = 0;
  const minSlideDistance = 100; // Minimum vertical distance (px) to trigger fullscreen

  // Touch event listeners
  videoElement.addEventListener('touchstart', handleTouchStart, { passive: false });
  videoElement.addEventListener('touchmove', handleTouchMove, { passive: false });
  videoElement.addEventListener('touchend', handleTouchEnd, { passive: false });

  function handleTouchStart(e) {
    startY = e.touches[0].clientY;
  }

  function handleTouchMove(e) {
    e.preventDefault(); // Prevent scrolling if sliding up on video
  }

  function handleTouchEnd(e) {
    const endY = e.changedTouches[0].clientY;
    const deltaY = startY - endY; // Positive if sliding up

    if (deltaY > minSlideDistance) {
      toggleFullscreen();
    }
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.webkitRequestFullscreen) { /* Safari */
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) { /* IE11 */
        videoElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
    }
  }
});
