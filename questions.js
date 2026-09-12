/**
 * CompArch Quiz — Question Bank (50 Items)
 * Sources: Chap-1, Chap-2, Chap-3 Part 1, Chap-3 Part 2
 * Each question: { chapter, question, choices[], answer (index) }
 */

const QUESTION_BANK = [

    // =====================================================================
    // CHAPTER 1 — Computer Structure & Function (12 Questions)
    // =====================================================================
    {
        chapter: 1,
        question: "Which component controls the operation of the computer and performs its data processing functions?",
        choices: ["Main Memory", "CPU", "I/O Module", "System Interconnection"],
        answer: 1
    },
    {
        chapter: 1,
        question: "What is the primary function of Main Memory in a computer system?",
        choices: ["Processes data", "Stores data", "Moves data to external devices", "Controls CPU operations"],
        answer: 1
    },
    {
        chapter: 1,
        question: "What does the I/O component do in a computer system?",
        choices: ["Stores data permanently", "Controls the CPU", "Moves data between the computer and its external environment", "Performs arithmetic calculations"],
        answer: 2
    },
    {
        chapter: 1,
        question: "What is System Interconnection?",
        choices: [
            "A mechanism that provides communication among CPU, main memory, and I/O",
            "The physical layout of the motherboard",
            "A type of storage device",
            "An operating system component"
        ],
        answer: 0
    },
    {
        chapter: 1,
        question: "Which structural component of a processor controls the operation of the CPU?",
        choices: ["ALU", "Registers", "Control Unit", "CPU Interconnection"],
        answer: 2
    },
    {
        chapter: 1,
        question: "What does the Arithmetic and Logic Unit (ALU) do?",
        choices: [
            "Stores data internally in the CPU",
            "Provides communication among CPU components",
            "Controls memory allocation",
            "Performs the computer's data processing functions"
        ],
        answer: 3
    },
    {
        chapter: 1,
        question: "What is the function of Registers in a processor?",
        choices: [
            "Provide storage internal to the CPU",
            "Manage I/O operations",
            "Control the system bus",
            "Execute machine language instructions"
        ],
        answer: 0
    },
    {
        chapter: 1,
        question: "What does CPU Interconnection provide?",
        choices: [
            "A mechanism for communication among the control unit, ALU, and registers",
            "Connection between the CPU and external peripherals",
            "Internet connectivity",
            "Power supply to all components"
        ],
        answer: 0
    },
    {
        chapter: 1,
        question: "What are the four main structural components of a computer?",
        choices: [
            "CPU, Main Memory, I/O, System Interconnection",
            "ALU, Control Unit, Registers, Cache",
            "Motherboard, Power Supply, HDD, RAM",
            "Monitor, Keyboard, Mouse, Printer"
        ],
        answer: 0
    },
    {
        chapter: 1,
        question: "What are the main structural components of a processor?",
        choices: [
            "CPU, Memory, I/O, Bus",
            "Hard Drive, SSD, RAM, ROM",
            "Control Unit, ALU, Registers, CPU Interconnection",
            "Compiler, Assembler, Linker, Loader"
        ],
        answer: 2
    },
    {
        chapter: 1,
        question: "Computer Organization deals with _____, while Computer Architecture deals with _____.",
        choices: [
            "Hardware implementation details; the programmer-visible interface",
            "Software design; hardware design",
            "Input devices; output devices",
            "Memory management; process management"
        ],
        answer: 0
    },
    {
        chapter: 1,
        question: "Which of the following best describes 'Computer Function'?",
        choices: [
            "The physical layout of internal components",
            "The operation of each individual component as part of the structure",
            "The brand of the computer",
            "The cost of the computer"
        ],
        answer: 1
    },

    // =====================================================================
    // CHAPTER 2 — History & Introduction to Computer Architecture (15 Questions)
    // =====================================================================
    {
        chapter: 2,
        question: "What is a computer?",
        choices: [
            "A device which processes information",
            "A device that only stores data",
            "A device used exclusively for gaming",
            "A device that only displays images"
        ],
        answer: 0
    },
    {
        chapter: 2,
        question: "Under the classification 'Essential of the material — Mechanics', which of the following is an example?",
        choices: [
            "CPU and GPU",
            "DNA computing",
            "Chassis, cooling systems, hard drive spindles",
            "Web browsers"
        ],
        answer: 2
    },

    {
        chapter: 2,
        question: "Which classification of computers includes DNA computing and bioinformatics?",
        choices: ["Mechanics", "Electronics", "Biology", "Embedded"],
        answer: 2
    },
    {
        chapter: 2,
        question: "What is a Server Computer?",
        choices: [
            "A personal computer for home use",
            "A portable computer for travel",
            "A computer designed to process requests and deliver data to other computers over a network",
            "A gaming console"
        ],
        answer: 2
    },
    {
        chapter: 2,
        question: "What is an Embedded Computer?",
        choices: [
            "A large mainframe computer",
            "A desktop computer with extra features",
            "A specialized computer integrated into other devices, performing specific control functions",
            "A computer used only for web browsing"
        ],
        answer: 2
    },
    {
        chapter: 2,
        question: "In computer system abstraction levels, what does 'Layout' refer to?",
        choices: [
            "The operating system interface",
            "Physical arrangement of circuits and components on a chip",
            "The programming language used",
            "The user interface design"
        ],
        answer: 1
    },
    {
        chapter: 2,
        question: "What does 'Digital Design' abstraction level focus on?",
        choices: [
            "Designing web pages",
            "Managing databases",
            "Designing digital components like logic gates that execute instructions",
            "Creating multimedia content"
        ],
        answer: 2
    },
    {
        chapter: 2,
        question: "What does ISA (Instruction Set Architecture) define?",
        choices: [
            "The physical layout of the motherboard",
            "The basic commands that a processor can execute",
            "The graphical user interface",
            "The network protocols"
        ],
        answer: 1
    },
    {
        chapter: 2,
        question: "What does a Compiler do?",
        choices: [
            "Manages hardware resources",
            "Translates high-level programming languages into machine code",
            "Provides a user interface",
            "Stores data permanently"
        ],
        answer: 1
    },
    {
        chapter: 2,
        question: "The 0th Generation of computers (before 1900) was characterized by which technology?",
        choices: ["Vacuum Tubes", "Transistors", "Mechanics", "Microprocessors"],
        answer: 2
    },
    {
        chapter: 2,
        question: "The 1st Generation of computers (1900–1957) used which technology?",
        choices: ["Integrated Circuits", "Vacuum Tubes", "Microprocessors", "Transistors"],
        answer: 1
    },
    {
        chapter: 2,
        question: "The 2nd Generation of computers (1957–1965) was characterized by which technology?",
        choices: ["Mechanics", "Vacuum Tubes", "Transistors", "Artificial Intelligence"],
        answer: 2
    },
    {
        chapter: 2,
        question: "The 3rd Generation of computers (1966–1980) used which technology?",
        choices: ["Vacuum Tubes", "Integrated Circuits", "Microprocessors", "Mechanics"],
        answer: 1
    },
    {
        chapter: 2,
        question: "The 4th Generation of computers (1981–Present) is characterized by which technology?",
        choices: ["Transistors", "Integrated Circuits", "Vacuum Tubes", "Microprocessors"],
        answer: 3
    },
    {
        chapter: 2,
        question: "The 5th Generation of computers (Present–Future) is associated with which technology?",
        choices: ["Mechanics", "Vacuum Tubes", "Artificial Intelligence", "Transistors"],
        answer: 2
    },

    // =====================================================================
    // CHAPTER 3 — Computer Memory & Storage (23 Questions)
    // =====================================================================
    {
        chapter: 3,
        question: "Which type of storage stores data in magnetic form?",
        choices: ["Optical Storage", "Semiconductor Storage", "Magnetic Storage", "Flash Storage"],
        answer: 2
    },
    {
        chapter: 3,
        question: "Which of the following is a characteristic of Magnetic Storage?",
        choices: [
            "Uses laser to read/write data",
            "Not affected by magnetic fields",
            "Has high storage capacity and is affected by magnetic fields",
            "Always volatile"
        ],
        answer: 2
    },
    {
        chapter: 3,
        question: "Which of the following is an example of Magnetic Storage?",
        choices: ["CD-ROM", "SSD", "Hard Disk", "Flash Drive"],
        answer: 2
    },
    {
        chapter: 3,
        question: "What type of storage stores data optically and uses a laser to read/write?",
        choices: ["Magnetic Storage", "Flash Storage", "Optical Storage", "RAM"],
        answer: 2
    },
    {
        chapter: 3,
        question: "Which of the following is an example of Optical Storage?",
        choices: ["Hard Disk", "Floppy Disk", "CD-ROM", "Flash Drive"],
        answer: 2
    },
    {
        chapter: 3,
        question: "SSD stands for:",
        choices: ["Solid State Drive", "Super Speed Disk", "System Storage Device", "Static Semiconductor Drive"],
        answer: 0
    },

    {
        chapter: 3,
        question: "What is Volatile Memory?",
        choices: [
            "Memory that retains data even without power",
            "Memory storage that loses its data once power is cut off",
            "Memory that is permanently written",
            "Memory used only for long-term storage"
        ],
        answer: 1
    },
    {
        chapter: 3,
        question: "What is Non-Volatile Memory?",
        choices: [
            "Memory that loses data when power is turned off",
            "Memory that only reads data",
            "Memory that retains data even without power",
            "Memory that requires constant refreshing"
        ],
        answer: 2
    },
    {
        chapter: 3,
        question: "RAM (Random Access Memory) enables:",
        choices: [
            "Only reading of stored contents",
            "Only writing of new contents",
            "Read/Write of stored contents",
            "Permanent storage of data"
        ],
        answer: 2
    },
    {
        chapter: 3,
        question: "ROM (Read Only Memory) allows:",
        choices: [
            "Both Read and Write operations",
            "Only Read operation",
            "Only Write operation",
            "Neither Read nor Write"
        ],
        answer: 1
    },
    {
        chapter: 3,
        question: "What does 'Storage Capacity' refer to as a technical indicator of memory?",
        choices: [
            "The speed of data access",
            "The number of storage units included in a memory",
            "The reliability of the memory",
            "The voltage required"
        ],
        answer: 1
    },
    {
        chapter: 3,
        question: "Memory Cycle Time is defined as:",
        choices: [
            "Access time only",
            "Recovery time only",
            "Access time plus any additional recovery time before a second access",
            "The time to manufacture a memory chip"
        ],
        answer: 2
    },
    {
        chapter: 3,
        question: "What is a Memory Cell?",
        choices: [
            "A complete RAM module",
            "The basic element of a semiconductor memory",
            "A type of battery",
            "An operating system process"
        ],
        answer: 1
    },
    {
        chapter: 3,
        question: "What are the two main types of Semiconductor Memory?",
        choices: [
            "SSD and HDD",
            "Magnetic and Optical",
            "Random Access Memory (RAM) and Read-Only Memory (ROM)",
            "Cache and Virtual Memory"
        ],
        answer: 2
    },
    {
        chapter: 3,
        question: "DRAM stands for:",
        choices: [
            "Direct Random Access Memory",
            "Dynamic Random-Access Memory",
            "Dual Read Access Module",
            "Digital Resource Allocation Memory"
        ],
        answer: 1
    },

    {
        chapter: 3,
        question: "DDR SDRAM stands for:",
        choices: [
            "Dual Data Rate SDRAM",
            "Double Data Rate SDRAM",
            "Direct Data Read SDRAM",
            "Dynamic Dual Rate SDRAM"
        ],
        answer: 1
    },
    {
        chapter: 3,
        question: "What is ROM typically used to store?",
        choices: [
            "Temporary user files",
            "System software like BIOS that must be immediately accessible",
            "Downloaded movies and music",
            "Spreadsheet data"
        ],
        answer: 1
    },
    {
        chapter: 3,
        question: "EPROM stands for:",
        choices: [
            "Electronic Programmable ROM",
            "Erasable Programmable Read-Only Memory",
            "Extended Parallel ROM",
            "Enhanced Processing ROM"
        ],
        answer: 1
    },
    {
        chapter: 3,
        question: "EEPROM stands for:",
        choices: [
            "Enhanced Erasable Programmable ROM",
            "Electronic External PROM",
            "Electrically Erasable Programmable Read-Only Memory",
            "Extended Electronic Processing ROM"
        ],
        answer: 2
    },
    {
        chapter: 3,
        question: "What does Flash Memory combine?",
        choices: [
            "The advantages of HDD and SSD",
            "The advantages of ROM and RAM — electronically erasable/programmable and retains data without power",
            "The features of optical and magnetic storage",
            "The speed of a network and storage"
        ],
        answer: 1
    },
    {
        chapter: 3,
        question: "What is a Hard Failure in semiconductor memory?",
        choices: [
            "A temporary error that corrects itself",
            "A permanent physical defect where cells cannot reliably store data",
            "A software bug",
            "Slow read/write speed"
        ],
        answer: 1
    },
    {
        chapter: 3,
        question: "What is a Soft Error in semiconductor memory?",
        choices: [
            "A permanent defect in the memory cell",
            "A random, non-destructive event that alters contents without damaging the memory",
            "A physical crack in the chip",
            "A virus in the firmware"
        ],
        answer: 1
    },
    {
        chapter: 3,
        question: "SD Card stands for:",
        choices: ["Super Data Card", "Secure Digital Card", "System Disk Card", "Standard Drive Card"],
        answer: 1
    }
];
