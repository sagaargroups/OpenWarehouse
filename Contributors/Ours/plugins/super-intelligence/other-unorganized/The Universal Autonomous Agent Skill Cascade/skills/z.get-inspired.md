only for context  


next task is clear db gerted shma sql and remove shma that our code no longer support   done 

cheking for email seding enagine and tampltes and the tables              done

making pages unreachable and only rechable page for user that have accses 
acceslevel 
public pages 
devlpoer pages 
admin pages 
trail user pages
marketplace user pages





note note note note ntoenotenote ntoentoenote tneonteo ntoeneo ntoe ntoe note note notenote notenote 


payout is not indepedendlty it is requsted by devlepr on thier product wise and admin catn edite mark paid in db table devlper see paymnt requst approved  

removeeng test user instanitly from db record and first removing thier user dabta if craeted for product is  tried by him and then remove it from user table 











""<!DOCTYPE html>
<html lang="en" class="dark">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UltSync v8 | Supreme</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet">
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: { sans: ['Inter', 'sans-serif'], mono: ['JetBrains Mono', 'monospace'] },
                    colors: {
                        background: '#000000', // True Black
                        surface: '#020602',    // Dark Emerald Black
                        border: '#064e3b',     // Emerald 900
                        accent: '#ecfdf5',     // Emerald 50
                        muted: '#065f46',      // Emerald 800
                        primary: '#10b981',    // Emerald 500
                    }
                }
            }
        }
    </script>
    <style>
        body {
            background-color: #000000;
            color: theme('colors.accent');
        }

        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }

        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }

        ::-webkit-scrollbar-thumb {
            background: #064e3b;
            border-radius: 4px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        /* Removed glass effect for solid black */
        .glass {
            background: #000000;
            border: 1px solid theme('colors.border');
        }
    </style>
</head>

<body class="h-screen flex flex-col overflow-hidden text-sm selection:bg-primary/20">

    <!-- APP SHELL -->
    <div id="app" class="flex-1 flex flex-col max-w-[1920px] mx-auto w-full p-0.5 gap-1">

        <!-- HEADER -->
        <header
            class="flex flex-col md:flex-row justify-between items-start md:items-center p-2 rounded-xl border border-border bg-black gap-2 shrink-0">
            <!-- BRAND -->
            <div class="flex items-center gap-3">
                <div
                    class="w-8 h-8 rounded-lg bg-emerald-950/30 flex items-center justify-center border border-emerald-900 shadow-inner">
                    <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                            d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <div>
                    <h1 class="font-bold text-base tracking-tight text-white leading-none">UltraSync <span
                            class="text-[10px] text-zinc-500 font-medium border border-zinc-800 px-1 rounded ml-1">v8</span>
                    </h1>
                    <p id="deviceIdDisplay" class="text-[10px] text-zinc-500 font-mono mt-1">ID: ...</p>
                </div>
            </div>

            <!-- STATS CONTAINER (Grouped) -->
            <div
                class="flex items-center gap-4 bg-black border border-zinc-800 rounded-xl p-3 shadow-sm overflow-x-auto">
                <!-- Status Badge -->
                <div class="flex flex-col items-start min-w-[100px] border-r border-zinc-900 pr-4">
                    <span class="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">Status</span>
                    <div class="flex items-center gap-2 mt-0.5">
                        <span id="statusDot" class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span id="systemStatus" class="font-bold text-sm text-zinc-200">Ready</span>
                    </div>
                </div>

                <!-- Speed -->
                <div class="flex flex-col items-start min-w-[90px] border-r border-zinc-800 pr-4 pl-2">
                    <span class="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">Speed</span>
                    <span id="globalSpeed" class="font-mono font-bold text-lg text-white leading-none mt-0.5">0.0 <span
                            class="text-zinc-600 text-[10px] font-sans font-normal">MB/s</span></span>
                </div>

                <!-- Progress -->
                <div class="flex flex-col items-start min-w-[110px] border-r border-zinc-800 pr-4 pl-2">
                    <span class="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">Progress</span>
                    <span id="globalProgress" class="font-mono font-bold text-lg text-white leading-none mt-0.5">0<span
                            class="text-zinc-600 text-sm mx-1">/</span>0</span>
                </div>

                <!-- ETA -->
                <div class="flex flex-col items-start min-w-[80px] pl-2">
                    <span class="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">Est. Time</span>
                    <span id="etaDisplay"
                        class="font-mono font-bold text-lg text-blue-400 leading-none mt-0.5">--:--</span>
                </div>
            </div>
    </div>
    </header>

    <!-- CONTENT -->
    <main class="flex-1 flex flex-col md:flex-row gap-1 min-h-0">

        <!-- SIDEBAR: Controls & Log -->
        <div class="w-full md:w-[350px] flex flex-col gap-1 shrink-0">

            <!-- DESTINATION SELECTOR (New v8) -->
            <div class="bg-black border border-border rounded-xl p-2 flex flex-col gap-1 relative z-20">
                <label class="text-[10px] uppercase text-white font-bold tracking-wider">Destination</label>
                <div class="relative">
                    <button onclick="toggleDestDropdown()" id="destBtn"
                        class="w-full flex justify-between items-center bg-zinc-900/30 border border-emerald-900/50 hover:border-emerald-500/50 text-left px-3 py-2 rounded-lg text-xs transition-colors group">
                        <span id="currentDestName" class="truncate text-emerald-400 font-medium">My
                            Drive (Root)</span>
                        <svg class="w-3 h-3 text-emerald-700 group-hover:text-emerald-500 transition-colors" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <!-- Dropdown -->
                    <div id="destDropdown"
                        class="hidden absolute top-full left-0 w-full mt-1 bg-black border border-zinc-800 rounded-lg shadow-xl z-50 p-2 max-h-60 overflow-y-auto">

                        <!-- Create New Action -->
                        <div onclick="engine.createNewFolder()"
                            class="flex items-center gap-2 px-2 py-2 mb-2 bg-zinc-900 hover:bg-zinc-800 rounded cursor-pointer border border-zinc-800 text-blue-400 group transition-colors">
                            <div
                                class="w-4 h-4 rounded bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20">
                                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                            <span class="text-xs font-bold">Create New Folder</span>
                        </div>

                        <input type="text" id="destSearch" onkeyup="engine.searchDestinations(this.value)"
                            placeholder="Search folders..."
                            class="w-full bg-zinc-900 border border-zinc-800 rounded px-2 py-1.5 text-xs focus:outline-none focus:border-blue-500 mb-2">
                        <div id="destList" class="flex flex-col gap-1">
                            <!-- Items Injected -->
                        </div>
                    </div>
                </div>
            </div>

            <!-- DROP ZONE -->
            <div id="dropZone"
                class="flex-1 bg-surface border-2 border-dashed border-emerald-900/40 hover:border-emerald-500/50 hover:bg-emerald-950/10 transition-all rounded-xl flex flex-col items-center justify-center p-6 text-center group cursor-pointer"
                onclick="document.getElementById('folderInput').click()">
                <input type="file" id="folderInput" webkitdirectory directory multiple class="hidden"
                    onchange="engine.handleBrowse(this)">

                <div
                    class="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                </div>
                <h3 class="font-medium text-zinc-300">Drop Folder</h3>
                <p class="text-[10px] text-zinc-500 mt-1">or click to browse</p>
            </div>

            <!-- LOG -->
            <div class="h-48 md:h-[200px] bg-black border border-border rounded-xl p-2 flex flex-col">
                <div class="flex justify-between items-center mb-1">
                    <span class="text-[10px] font-bold text-white uppercase">System Events</span>
                    <button onclick="clearLog()"
                        class="text-[10px] text-zinc-500 hover:text-white transition-colors">CLEAR</button>
                </div>
                <div id="consoleLog" class="flex-1 overflow-y-auto font-mono text-[10px] space-y-0.5 text-zinc-400">
                </div>
            </div>
        </div>

        <!-- RIGHT: QUEUE (Virtual) -->
        <div class="flex-1 bg-black border border-border rounded-xl flex flex-col overflow-hidden relative">
            <div class="p-2 border-b border-border flex justify-between items-center bg-zinc-900/50">
                <div class="flex items-center gap-2">
                    <h2 class="font-bold text-sm text-white">Upload Queue</h2>
                    <span id="queueCount"
                        class="text-xs text-zinc-400 font-mono bg-black border border-zinc-800 px-1.5 rounded">0</span>
                </div>
                <!-- Actions -->
                <div class="flex gap-2">
                    <button onclick="engine.refreshQueueFromDB()"
                        class="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 rounded text-[10px] font-bold text-white transition-colors cursor-pointer shadow-sm">Reset</button>
                    <button onclick="engine.retryAll()"
                        class="px-2 py-1 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-400 rounded text-[10px] font-medium transition-colors">Retry</button>
                </div>
            </div>

            <!-- VIRTUAL CONTAINER -->
            <div id="virtualListContainer" class="flex-1 overflow-y-auto relative bg-black">
                <div id="virtualListHeight" class="absolute top-0 left-0 w-full z-0"></div>
                <div id="virtualListContent" class="absolute top-0 left-0 w-full z-10"></div>

                <!-- Empty State -->
                <div id="emptyState" class="absolute inset-0 flex flex-col items-center justify-center text-zinc-700">
                    <svg class="w-12 h-12 mb-2 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    <p class="text-xs">No active uploads</p>
                </div>
            </div>
        </div>
    </main>
    </div>

    <!-- SCRIPTS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dexie/3.2.4/dexie.min.js"></script>
    <script>
        // --- 1. CONFIG ---
        const UTILS = {
            uuid: () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
                const r = Math.random() * 16 | 0; return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            }),
            hash: (str) => {
                let hash = 0;
                for (let i = 0; i < str.length; i++) hash = ((hash << 5) - hash) + str.charCodeAt(i) | 0;
                return (hash >>> 0).toString(16).toUpperCase();
            },
            fmtSize: (b) => (b / 1024 / 1024).toFixed(2)
        };

        // --- 2. STORAGE ---
        const db = new Dexie('UltraSyncDB_v7');
        db.version(1).stores({
            files: 'uid, signature, pathHash, status, deviceId',
            folders: 'path, id',
            keyval: 'key'
        });

        // --- 3. UI HELPERS ---
        function toggleDestDropdown() {
            document.getElementById('destDropdown').classList.toggle('hidden');
            if (!document.getElementById('destDropdown').classList.contains('hidden')) {
                document.getElementById('destSearch').focus();
                engine.searchDestinations(''); // Load defaults
            }
        }

        function setDestination(id, name) {
            engine.targetRootId = id;
            document.getElementById('currentDestName').innerText = name;
            toggleDestDropdown();
            log(`Target set to: ${name}`, 'info');
        }

        // --- 4. STATE MANAGER (v8 Logic) ---
        class StateManager {
            constructor() {
                this.deviceId = localStorage.getItem('us_device_id') || UTILS.uuid();
                localStorage.setItem('us_device_id', this.deviceId);
                this.targetRootId = null; // Will default to backend root

                this.localIndex = new Set();
                this.authToken = null;
                this.uploadQueue = [];
                this.isProcessing = false;
                this.isResolving = false; // LOCK to prevent parallel folder creation storms

                // Advanced Stats
                this.stats = {
                    startTime: 0,
                    totalBytesInitial: 0, // Total bytes of queued files
                    bytesUploadedSession: 0,
                    lastBytesSnapshot: 0,
                    lastTimeSnapshot: 0
                };

                document.getElementById('deviceIdDisplay').innerText = `ID: ${this.deviceId.substr(0, 6)}`;
            }

            async init() {
                log('Initializing v8 Engine...', 'dim');
                try {
                    // Timeout wrap
                    const race = Promise.race([
                        runGoogle('getDeviceStartupData', this.deviceId),
                        new Promise((_, r) => setTimeout(() => r(new Error('Backend Timeout')), 10000))
                    ]);
                    const data = await race;

                    if (data.status === 'success') {
                        // Load Index
                        data.fileIndex.forEach(sig => this.localIndex.add(sig));

                        // Set Root
                        this.targetRootId = data.rootFolderId;

                        document.getElementById('systemStatus').innerText = 'Idling';
                        document.getElementById('statusDot').className = 'w-1.5 h-1.5 rounded-full bg-zinc-500';
                        log(`Loaded ${this.localIndex.size} indexed files`, 'success');
                    } else {
                        throw new Error(data.message);
                    }
                } catch (e) {
                    log('Init Error: ' + e.message, 'error');
                    alert('Connection Failed. Please check Backend Deployment.');
                }

                this.refreshAuth();
                setInterval(() => this.refreshAuth(), 45 * 60 * 1000);
                await this.refreshQueueFromDB();
            }

            async refreshAuth() {
                try {
                    const res = await runGoogle('getAuthToken');
                    this.authToken = res.token;
                } catch (e) { console.error('Token Error', e); }
            }

            // --- DESTINATION LOGIC ---
            async createNewFolder() {
                const name = prompt("Enter name for new folder:");
                if (!name) return;

                // FIX: Do not destroy DOM structure
                const span = document.getElementById('currentDestName');
                const originalText = span.innerText;

                // UI State
                span.innerText = `Creating "${name}"...`;
                span.className = "truncate animate-pulse text-emerald-400";

                toggleDestDropdown(); // Close

                try {
                    const res = await runGoogle('createTargetFolder', { name: name, parentId: this.targetRootId });
                    if (res.status === 'success') {
                        setDestination(res.folder.id, res.folder.name);
                        log(`Created & Selected: ${res.folder.name}`, 'success');
                        // setDestination handles the UI update
                        span.className = "truncate";
                    } else {
                        alert('Error: ' + res.message);
                        span.innerText = originalText;
                        span.className = "truncate";
                    }
                } catch (e) {
                    alert('System Error: ' + e);
                    span.innerText = originalText;
                    span.className = "truncate";
                }
            }

            async searchDestinations(query) {
                const list = document.getElementById('destList');
                list.innerHTML = '<div class="text-[10px] text-zinc-500 p-2">Searching...</div>';
                try {
                    const res = await runGoogle('searchFolders', query);
                    if (res.status === 'success') {
                        list.innerHTML = '';
                        res.folders.forEach(f => {
                            const div = document.createElement('div');
                            div.className = 'px-2 py-1.5 hover:bg-zinc-800 rounded cursor-pointer text-xs text-zinc-300';
                            div.innerText = f.name;
                            div.onclick = () => setDestination(f.id, f.name);
                            list.appendChild(div);
                        });
                        if (res.folders.length === 0) list.innerHTML = '<div class="text-[10px] text-zinc-500 p-2">No folders found</div>';
                    }
                } catch (e) {
                    list.innerHTML = '<div class="text-[10px] text-red-500 p-2">Search Error</div>';
                }
            }

            // --- QUEUE LOGIC ---
            async processNewFiles(files) {
                log(`Hashing ${files.length} items...`, 'dim');
                const newItems = [];
                // Update Stats Total Bytes
                let addedBytes = 0;

                for (const { file, path } of files) {
                    const sig = UTILS.hash(file.name + file.size + file.lastModified);
                    if (this.localIndex.has(sig)) continue;

                    const clean = path.endsWith('/') ? path.slice(0, -1) : path;
                    const item = {
                        uid: UTILS.uuid(),
                        signature: sig,
                        name: file.name,
                        size: file.size,
                        path: clean,
                        parentId: (clean === '' || clean === '.') ? this.targetRootId : null, // If root, assign target immediately
                        fileObj: file,
                        status: 'PENDING',
                        deviceId: this.deviceId
                    };
                    newItems.push(item);
                    addedBytes += file.size;
                }

                if (newItems.length === 0) {
                    log('All duplicates.', 'success');
                } else {
                    log(`Queued ${newItems.length} files`, 'success');

                    // 1. Persist (No Blob)
                    const dbItems = newItems.map(i => { const c = { ...i }; delete c.fileObj; return c; });
                    await db.files.bulkPut(dbItems);

                    // 2. Memory
                    this.uploadQueue.push(...newItems);
                    this.stats.totalBytesInitial += addedBytes; // Add to global total

                    renderVirtualList();
                    this.startQueueProcessor();
                }
            }

            async refreshQueueFromDB() {
                const pending = await db.files.where('status').notEqual('COMPLETED').toArray();

                // Merge Blobs
                const memMap = new Map(this.uploadQueue.map(i => [i.uid, i]));
                this.uploadQueue = pending.map(dbItem => {
                    const memItem = memMap.get(dbItem.uid);
                    if (memItem && memItem.fileObj) dbItem.fileObj = memItem.fileObj;
                    return dbItem;
                });

                // Recalc Stats
                this.stats.totalBytesInitial = this.uploadQueue.reduce((acc, i) => acc + i.size, 0);

                renderVirtualList();
                if (this.uploadQueue.some(f => f.fileObj && f.status === 'PENDING')) this.startQueueProcessor();
            }

            async retryAll() {
                const failed = await db.files.where('status').anyOf('ERROR', 'MISSING').toArray();
                if (failed.length === 0) {
                    log('No failed items to retry.', 'dim');
                    return;
                }
                await db.transaction('rw', db.files, async () => {
                    for (const f of failed) await db.files.update(f.uid, { status: 'PENDING', error: '' });
                });
                log(`Retrying ${failed.length} items...`, 'info');
                await this.refreshQueueFromDB();
                this.startQueueProcessor();
            }

            // --- PROCESSOR ---
            startQueueProcessor() {
                if (this.isProcessing) return;
                this.isProcessing = true;
                this.stats.startTime = Date.now();
                this.stats.lastTimeSnapshot = Date.now();
                this.stats.bytesUploadedSession = 0;
                this.setStatus('Processing', 'bg-blue-500', 'text-blue-400');
                this.processNextBatch();
            }

            setStatus(text, dotColor, textColor) {
                document.getElementById('systemStatus').innerText = text;
                document.getElementById('systemStatus').className = `font-medium ${textColor}`;
                document.getElementById('statusDot').className = `w-1.5 h-1.5 rounded-full animate-pulse ${dotColor}`;
            }

            async processNextBatch() {
                // Priority 1: Folders (WITH LOCK)
                const needingFolder = this.uploadQueue.filter(f => !f.parentId && f.status !== 'COMPLETED');
                if (needingFolder.length > 0 && !this.isResolving) {
                    this.isResolving = true;
                    this.setStatus('Creating Folders', 'bg-amber-500', 'text-amber-400');
                    try {
                        await this.resolveFolders(needingFolder);
                    } finally {
                        this.isResolving = false;
                    }
                } else if (needingFolder.length > 0 && this.isResolving) {
                    // Already busy resolving, checking back later
                }

                // Priority 2: Uploads
                const active = this.uploadQueue.filter(f => f.status === 'UPLOADING').length;
                if (active < 5) {
                    const next = this.uploadQueue.find(f => f.status === 'PENDING' && f.parentId);
                    if (next) {
                        this.setStatus('Uploading', 'bg-emerald-500', 'text-emerald-400');
                        this.uploadFile(next);
                        setTimeout(() => this.processNextBatch(), 50);
                    } else {
                        // Check Completion
                        if (!this.uploadQueue.some(f => f.status === 'PENDING' || f.status === 'UPLOADING')) {
                            this.isProcessing = false;
                            this.setStatus('All Done', 'bg-zinc-500', 'text-zinc-400');
                            log('Queue Finished', 'success');
                        } else if (active > 0) {
                            setTimeout(() => this.processNextBatch(), 1000);
                        }
                    }
                } else {
                    setTimeout(() => this.processNextBatch(), 1000);
                }
            }

            async resolveFolders(files) {
                const paths = [...new Set(files.map(f => f.path))];
                const batch = paths.slice(0, 10);

                try {
                    // Pass Target Root ID to Backend!
                    // NOTE: We need to update backend to accept rootId override if we want full custom destination support
                    // For now, we rely on backend using CONFIG.ROOT_FOLDER_ID OR we pass it.
                    // Let's pass it in 'deviceId' payload or generic logic? 
                    // Currently backend doesn't support dyamic root in batchResolvePaths easily without mod.
                    // Workaround: We resolve relative to Root. 
                    // The frontend 'parentId' assignment handles the ROOT level (level 0).

                    // If path is empty, we already assigned targetRootId in processNewFiles.
                    // This is for subfolders (A/B).

                    const res = await runGoogle('batchResolvePaths', {
                        paths: batch,
                        deviceId: this.deviceId,
                        rootFolderId: this.targetRootId // Correctly pass dynamic root
                    });

                    if (res.status === 'success') {
                        const map = res.map;
                        await db.transaction('rw', db.files, async () => {
                            for (const f of files) {
                                if (map[f.path]) {
                                    // Update both DB and Memory
                                    f.parentId = map[f.path];
                                    await db.files.update(f.uid, { parentId: f.parentId });
                                }
                            }
                        });
                        renderVirtualList(); // Sync UI
                    } else {
                        log('Folder Fail: ' + res.message, 'error');
                    }
                } catch (e) { console.error(e); await new Promise(r => setTimeout(r, 3000)); }
            }

            async uploadFile(item) {
                if (!item.fileObj) {
                    item.status = 'MISSING';
                    await db.files.update(item.uid, { status: 'MISSING' });
                    updateItemStatus(item.uid, 'ERROR');
                    return;
                }
                if (!this.authToken) await this.refreshAuth();

                item.status = 'UPLOADING';
                updateItemStatus(item.uid, 'UPLOADING');
                await db.files.update(item.uid, { status: 'UPLOADING' });

                const uploader = new ChunkUploader(item, this.authToken);
                try {
                    await uploader.start();
                    item.status = 'COMPLETED';
                    this.localIndex.add(item.signature);
                    updateItemStatus(item.uid, 'COMPLETED');
                    await db.files.update(item.uid, { status: 'COMPLETED' });
                    runGoogle('logUploadTransaction', {
                        signature: item.signature, filename: item.name, deviceId: this.deviceId, status: 'COMPLETED', totalSize: item.size
                    });
                } catch (e) {
                    item.status = 'ERROR';
                    item.error = e.message;
                    updateItemStatus(item.uid, 'ERROR');
                    await db.files.update(item.uid, { status: 'ERROR', error: e.message });
                    log(`Error ${item.name}: ${e.message}`, 'error');
                }
                this.processNextBatch();
            }

            // --- STATS LOGIC (Byte Weighted) ---
            reportBytes(bytes) {
                this.stats.bytesUploadedSession += bytes;
                const now = Date.now();
                if (now - this.stats.lastTimeSnapshot > 1000) {
                    this.updateGlobalStats();
                    this.stats.lastTimeSnapshot = now;
                }
            }

            updateGlobalStats() {
                // 1. Progress
                const total = this.uploadQueue.length;
                const done = this.uploadQueue.filter(f => f.status === 'COMPLETED').length;
                document.getElementById('globalProgress').innerHTML = `${done}<span class="text-zinc-700 mx-1">/</span>${total}`;
                document.getElementById('queueCount').innerText = total;

                // 2. Speed (Moving Avg ideally, but Simple for now)
                const elapsed = (Date.now() - this.stats.startTime) / 1000;
                if (elapsed < 1 || this.stats.bytesUploadedSession === 0) return;

                const rate = this.stats.bytesUploadedSession / elapsed; // Bps
                document.getElementById('globalSpeed').innerHTML = `${(rate / 1024 / 1024).toFixed(1)} <span class="text-zinc-600 text-[10px]">MB/s</span>`;

                // 3. ETA (Byte Weighted)
                // Remaining Bytes = TotalBytesInitial - (UploadedBytesSession + PreviouslyUploaded?)
                // Rough calc:
                const pendingItems = this.uploadQueue.filter(f => f.status !== 'COMPLETED');
                const pendingBytes = pendingItems.reduce((acc, f) => acc + f.size, 0);

                if (rate > 0 && pendingBytes > 0) {
                    const secondsLeft = pendingBytes / rate;
                    const min = Math.floor(secondsLeft / 60);
                    const sec = Math.floor(secondsLeft % 60);
                    document.getElementById('etaDisplay').innerText = `~${min}m ${sec}s`;
                } else {
                    document.getElementById('etaDisplay').innerText = '--:--';
                }
            }

            handleBrowse(input) {
                if (input.files && input.files.length > 0) {
                    const files = Array.from(input.files).map(f => ({
                        file: f,
                        path: (f.webkitRelativePath || f.name).split('/').slice(0, -1).join('/') + '/'
                    }));
                    this.processNewFiles(files);
                }
            }
        }

        // --- 5. CHUNK UPLOADER ---
        class ChunkUploader {
            constructor(item, token) {
                this.item = item;
                this.token = token;
                this.chunkSize = 5 * 1024 * 1024;
            }
            async start() {
                let uri = this.item.uploadUri;
                if (!uri) {
                    uri = await this.initSession();
                    this.item.uploadUri = uri;
                    await db.files.update(this.item.uid, { uploadUri: uri });
                }
                let offset = await this.checkOffset(uri);
                while (offset < this.item.size) {
                    const end = Math.min(offset + this.chunkSize, this.item.size);
                    const chunk = this.item.fileObj.slice(offset, end);
                    await this.uploadChunk(uri, chunk, offset, this.item.size);
                    // Report real bytes
                    engine.reportBytes(end - offset);
                    offset = end;
                    updateItemProgress(this.item.uid, Math.round((offset / this.item.size) * 100));
                }
            }
            async initSession() {
                const meta = { name: this.item.name, parents: [this.item.parentId] };
                const res = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable', {
                    method: 'POST', headers: { 'Authorization': `Bearer ${this.token}`, 'Content-Type': 'application/json' }, body: JSON.stringify(meta)
                });
                if (!res.ok) throw new Error('Init Fail ' + res.status);
                return res.headers.get('Location');
            }
            async checkOffset(uri) {
                const res = await fetch(uri, { method: 'PUT', headers: { 'Content-Range': `bytes */${this.item.size}` } });
                if (res.status === 308) {
                    const range = res.headers.get('Range');
                    if (!range) return 0; // Fresh upload session
                    return parseInt(range.split('-')[1]) + 1;
                }
                if (res.status === 200 || res.status === 201) return this.item.size;
                return 0;
            }
            async uploadChunk(uri, chunk, offset, total) {
                return new Promise((resolve, reject) => {
                    const xhr = new XMLHttpRequest();
                    xhr.open('PUT', uri);
                    xhr.setRequestHeader('Content-Range', `bytes ${offset}-${offset + chunk.size - 1}/${total}`);
                    xhr.onload = () => xhr.status >= 200 && xhr.status < 400 ? resolve() : reject(new Error('Chunk ' + xhr.status));
                    xhr.send(chunk);
                });
            }
        }

        // --- 6. VIRTUAL LIST ---
        const ROW_HEIGHT = 50;
        function renderVirtualList() {
            const container = document.getElementById('virtualListContent');
            const heighter = document.getElementById('virtualListHeight');
            const scrollParent = document.getElementById('virtualListContainer');
            const list = engine.uploadQueue;

            heighter.style.height = (list.length * ROW_HEIGHT) + 'px';
            document.getElementById('emptyState').style.display = list.length ? 'none' : 'flex';

            const scrollTop = scrollParent.scrollTop;
            const viewportH = scrollParent.clientHeight;
            const start = Math.floor(scrollTop / ROW_HEIGHT);
            const end = Math.min(list.length, Math.ceil((scrollTop + viewportH) / ROW_HEIGHT));

            let html = '';
            for (let i = start; i < end; i++) {
                const item = list[i];
                const top = i * ROW_HEIGHT;
                let statusColor = 'text-zinc-500';
                if (item.status === 'UPLOADING') statusColor = 'text-blue-400 font-bold';
                if (item.status === 'COMPLETED') statusColor = 'text-emerald-500';
                if (item.status === 'ERROR') statusColor = 'text-red-400';

                html += `
                <div id="row-${item.uid}" class="absolute w-full px-2" style="top: ${top}px; height: ${ROW_HEIGHT}px">
                    <div class="h-[42px] bg-emerald-950/20 border border-emerald-900/40 rounded flex items-center px-3 gap-3 hover:bg-emerald-900/30 transition-colors">
                        <div class="w-24 text-[10px] text-emerald-600 truncate font-mono hidden md:block">${item.uid.substr(0, 4)}</div>
                        <div class="flex-1 min-w-0">
                             <div class="flex justify-between items-center">
                                 <span class="text-xs text-white truncate font-sans font-medium">${item.name}</span>
                                 <span class="text-[10px] font-bold ${statusColor}">${item.status}</span>
                             </div>
                             <div class="w-full bg-emerald-900/30 h-1 rounded-full mt-1.5 overflow-hidden">
                                 <div id="prog-${item.uid}" class="h-full bg-emerald-500 transition-all duration-300" style="width: 0%"></div>
                             </div>
                        </div>
                    </div>
                </div>
            `;
            }
            container.innerHTML = html;
            scrollParent.onscroll = () => requestAnimationFrame(renderVirtualList);
        }

        function updateItemStatus(uid) { renderVirtualList(); }
        function updateItemProgress(uid, pct) {
            const el = document.getElementById(`prog-${uid}`);
            if (el) el.style.width = pct + '%';
        }
        function clearLog() { document.getElementById('consoleLog').innerHTML = ''; }
        function log(msg, type = 'dim') {
            const d = document.createElement('div');
            d.className = type === 'error' ? 'text-red-400' : (type === 'success' ? 'text-emerald-400' : 'text-zinc-500');
            d.innerText = `> ${msg}`;
            document.getElementById('consoleLog').prepend(d);
        }
        function runGoogle(f, a) {
            return new Promise((resolve, reject) => {
                google.script.run.withSuccessHandler(resolve).withFailureHandler(reject)[f](a);
            });
        }

        const engine = new StateManager();
        window.onload = () => engine.init();

        // Protect against accidental close
        window.onbeforeunload = (e) => {
            if (engine.isProcessing || engine.uploadQueue.some(f => f.status === 'UPLOADING' || f.status === 'PENDING')) {
                e.preventDefault();
                e.returnValue = 'Uploads are in progress. Are you sure you want to leave?';
                return 'Uploads are in progress. Are you sure you want to leave?';
            }
        };

    </script>
</body>

</html>""