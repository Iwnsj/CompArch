/**
 * CompArch Quiz — Question Bank
 * Sources: Chap-1, Chap-2, Chap-3 Part 1, Chap-3 Part 2
 * Format: Definition-based — question describes, answer is the term.
 *
 * Two pools:
 *   QUESTION_BANK        — Multiple-choice (4 choices)
 *   IDENTIFICATION_BANK  — Identification / fill-in (typed answer)
 *
 * Each MC question:   { chapter, question, choices[], answer (index) }
 * Each ID question:   { chapter, question, answer (string) }
 */

// =====================================================================
//  MULTIPLE CHOICE
// =====================================================================
const QUESTION_BANK = [

    // =================================================================
    // CHAPTER 1 — Computer Structure & Function (12 Questions)
    // =================================================================
    {
        chapter: 1,
        question: "This controls the operation of the computer and performs its data processing functions.",
        choices: ["Main Memory", "CPU", "I/O Module", "System Interconnection"],
        answer: 1
    },
    {
        chapter: 1,
        question: "This component stores data in a computer system.",
        choices: ["CPU", "Main Memory", "I/O Module", "ALU"],
        answer: 1
    },
    {
        chapter: 1,
        question: "This moves data between the computer and its external environment.",
        choices: ["Registers", "Control Unit", "I/O Module", "System Interconnection"],
        answer: 2
    },
    {
        chapter: 1,
        question: "This is a mechanism that provides communication among CPU, main memory, and I/O.",
        choices: ["System Interconnection", "ALU", "Control Unit", "Registers"],
        answer: 0
    },
    {
        chapter: 1,
        question: "This structural component of a processor controls the operation of the CPU.",
        choices: ["ALU", "Registers", "Control Unit", "CPU Interconnection"],
        answer: 2
    },
    {
        chapter: 1,
        question: "This performs the computer's data processing functions such as arithmetic and logic operations.",
        choices: ["Registers", "CPU Interconnection", "Control Unit", "ALU"],
        answer: 3
    },
    {
        chapter: 1,
        question: "This provides storage internal to the CPU.",
        choices: ["Registers", "Main Memory", "System Bus", "I/O Module"],
        answer: 0
    },
    {
        chapter: 1,
        question: "This provides a mechanism for communication among the control unit, ALU, and registers.",
        choices: ["CPU Interconnection", "System Bus", "I/O Channel", "Main Memory"],
        answer: 0
    },
    {
        chapter: 1,
        question: "CPU, Main Memory, I/O, and System Interconnection are the four main structural components of this.",
        choices: ["A Processor", "A Computer", "An Operating System", "A Network"],
        answer: 1
    },
    {
        chapter: 1,
        question: "Control Unit, ALU, Registers, and CPU Interconnection are the main structural components of this.",
        choices: ["A Computer", "An Operating System", "A Processor", "A Compiler"],
        answer: 2
    },
    {
        chapter: 1,
        question: "This field deals with hardware implementation details, while its counterpart deals with the programmer-visible interface.",
        choices: [
            "Computer Organization",
            "Computer Architecture",
            "Software Engineering",
            "Digital Design"
        ],
        answer: 0
    },
    {
        chapter: 1,
        question: "This refers to the operation of each individual component as part of the overall computer structure.",
        choices: ["Computer Structure", "Computer Function", "Computer Architecture", "Computer Organization"],
        answer: 1
    },

    // =================================================================
    // CHAPTER 2 — Introduction to Computer Architecture (9 Questions)
    //             (History / Generation questions excluded)
    // =================================================================
    {
        chapter: 2,
        question: "This is a device which processes information.",
        choices: ["A Monitor", "A Computer", "A Printer", "A Scanner"],
        answer: 1
    },
    {
        chapter: 2,
        question: "Chassis, cooling systems, and hard drive spindles are examples of this classification of computers by material.",
        choices: ["Electronics", "Biology", "Mechanics", "Optics"],
        answer: 2
    },
    {
        chapter: 2,
        question: "DNA computing and bioinformatics fall under this classification of computers.",
        choices: ["Mechanics", "Electronics", "Biology", "Embedded"],
        answer: 2
    },
    {
        chapter: 2,
        question: "This is a computer designed to process requests and deliver data to other computers over a network.",
        choices: ["Personal Computer", "Embedded Computer", "Server Computer", "Supercomputer"],
        answer: 2
    },
    {
        chapter: 2,
        question: "This is a specialized computer integrated into other devices, performing specific control functions.",
        choices: ["Server Computer", "Desktop Computer", "Embedded Computer", "Mainframe Computer"],
        answer: 2
    },
    {
        chapter: 2,
        question: "This abstraction level refers to the physical arrangement of circuits and components on a chip.",
        choices: ["ISA", "Layout", "Digital Design", "Operating System"],
        answer: 1
    },
    {
        chapter: 2,
        question: "This abstraction level focuses on designing digital components like logic gates that execute instructions.",
        choices: ["Layout", "Operating System", "Digital Design", "Compiler"],
        answer: 2
    },
    {
        chapter: 2,
        question: "This defines the basic commands that a processor can execute.",
        choices: [
            "Operating System",
            "ISA (Instruction Set Architecture)",
            "Compiler",
            "Layout"
        ],
        answer: 1
    },
    {
        chapter: 2,
        question: "This translates high-level programming languages into machine code.",
        choices: ["Assembler", "Compiler", "Linker", "Loader"],
        answer: 1
    },

    // =================================================================
    // CHAPTER 3 — Computer Memory & Storage (23 Questions)
    // =================================================================
    {
        chapter: 3,
        question: "This type of storage stores data in magnetic form.",
        choices: ["Optical Storage", "Semiconductor Storage", "Magnetic Storage", "Flash Storage"],
        answer: 2
    },
    {
        chapter: 3,
        question: "This storage type has high storage capacity and is affected by magnetic fields.",
        choices: ["Optical Storage", "Flash Storage", "Magnetic Storage", "ROM"],
        answer: 2
    },
    {
        chapter: 3,
        question: "This is an example of magnetic storage.",
        choices: ["CD-ROM", "SSD", "Hard Disk", "Flash Drive"],
        answer: 2
    },
    {
        chapter: 3,
        question: "This type of storage stores data optically and uses a laser to read/write.",
        choices: ["Magnetic Storage", "Flash Storage", "Optical Storage", "RAM"],
        answer: 2
    },
    {
        chapter: 3,
        question: "This is an example of optical storage.",
        choices: ["Hard Disk", "Floppy Disk", "CD-ROM", "Flash Drive"],
        answer: 2
    },
    {
        chapter: 3,
        question: "This stands for 'Solid State Drive'.",
        choices: ["SSD", "SDD", "SRD", "SMD"],
        answer: 0
    },
    {
        chapter: 3,
        question: "This is a type of memory storage that loses its data once power is cut off.",
        choices: ["Non-Volatile Memory", "Volatile Memory", "ROM", "Flash Memory"],
        answer: 1
    },
    {
        chapter: 3,
        question: "This is a type of memory that retains data even without power.",
        choices: ["Volatile Memory", "DRAM", "Non-Volatile Memory", "SRAM"],
        answer: 2
    },
    {
        chapter: 3,
        question: "This type of memory enables read/write of stored contents and is volatile.",
        choices: ["ROM", "RAM", "EPROM", "Flash Memory"],
        answer: 1
    },
    {
        chapter: 3,
        question: "This type of memory allows only read operations.",
        choices: ["RAM", "ROM", "DRAM", "SRAM"],
        answer: 1
    },
    {
        chapter: 3,
        question: "This technical indicator of memory refers to the number of storage units included in a memory.",
        choices: ["Access Time", "Storage Capacity", "Memory Bandwidth", "Cycle Time"],
        answer: 1
    },
    {
        chapter: 3,
        question: "This is defined as access time plus any additional recovery time before a second access can be made.",
        choices: ["Access Time", "Latency", "Memory Cycle Time", "Throughput"],
        answer: 2
    },
    {
        chapter: 3,
        question: "This is the basic element of a semiconductor memory.",
        choices: ["RAM Module", "Memory Cell", "Memory Bus", "Cache Line"],
        answer: 1
    },
    {
        chapter: 3,
        question: "RAM and ROM are the two main types of this kind of memory.",
        choices: ["Magnetic Memory", "Optical Memory", "Semiconductor Memory", "Virtual Memory"],
        answer: 2
    },
    {
        chapter: 3,
        question: "This stands for 'Dynamic Random-Access Memory'.",
        choices: ["DROM", "DRAM", "DRIM", "DRUM"],
        answer: 1
    },
    {
        chapter: 3,
        question: "This stands for 'Double Data Rate SDRAM'.",
        choices: ["DDR SRAM", "DDR SDRAM", "DDR DROM", "DDR EPROM"],
        answer: 1
    },
    {
        chapter: 3,
        question: "System software like BIOS that must be immediately accessible is typically stored in this type of memory.",
        choices: ["RAM", "Cache", "ROM", "Virtual Memory"],
        answer: 2
    },
    {
        chapter: 3,
        question: "This stands for 'Erasable Programmable Read-Only Memory'.",
        choices: ["EEPROM", "EPROM", "EEROM", "EDROM"],
        answer: 1
    },
    {
        chapter: 3,
        question: "This stands for 'Electrically Erasable Programmable Read-Only Memory'.",
        choices: ["EPROM", "EEROM", "EEPROM", "EDPROM"],
        answer: 2
    },
    {
        chapter: 3,
        question: "This type of memory combines the advantages of ROM and RAM — it is electronically erasable/programmable and retains data without power.",
        choices: ["SRAM", "DRAM", "Flash Memory", "Cache Memory"],
        answer: 2
    },
    {
        chapter: 3,
        question: "This is a permanent physical defect in semiconductor memory where cells cannot reliably store data.",
        choices: ["Soft Error", "Hard Failure", "Logic Error", "Buffer Overflow"],
        answer: 1
    },
    {
        chapter: 3,
        question: "This is a random, non-destructive event that alters the contents of memory without damaging it.",
        choices: ["Hard Failure", "Soft Error", "System Crash", "Memory Leak"],
        answer: 1
    },
    {
        chapter: 3,
        question: "This stands for 'Secure Digital Card'.",
        choices: ["SSD Card", "SD Card", "SC Card", "SM Card"],
        answer: 1
    }
];


// =====================================================================
//  IDENTIFICATION (type-your-answer)
//  answer field: the canonical answer string (matching is case-insensitive)
//  accept: optional array of alternative accepted answers
// =====================================================================
const IDENTIFICATION_BANK = [

    // =================================================================
    // CHAPTER 1 — Computer Structure & Function
    // =================================================================
    {
        chapter: 1,
        question: "This controls the operation of the computer and performs its data processing functions.",
        answer: "CPU",
        accept: ["Central Processing Unit", "Processor"]
    },
    {
        chapter: 1,
        question: "This component stores data in a computer system.",
        answer: "Main Memory",
        accept: ["Memory", "RAM"]
    },
    {
        chapter: 1,
        question: "This moves data between the computer and its external environment.",
        answer: "I/O Module",
        accept: ["I/O", "IO Module", "Input/Output Module", "Input Output Module"]
    },
    {
        chapter: 1,
        question: "This is a mechanism that provides communication among CPU, main memory, and I/O.",
        answer: "System Interconnection",
        accept: ["System Bus", "Interconnection"]
    },
    {
        chapter: 1,
        question: "This structural component of a processor controls the operation of the CPU.",
        answer: "Control Unit",
        accept: ["CU"]
    },
    {
        chapter: 1,
        question: "This performs the computer's data processing functions such as arithmetic and logic operations.",
        answer: "ALU",
        accept: ["Arithmetic and Logic Unit", "Arithmetic Logic Unit"]
    },
    {
        chapter: 1,
        question: "This provides storage internal to the CPU.",
        answer: "Registers",
        accept: ["Register"]
    },
    {
        chapter: 1,
        question: "This provides a mechanism for communication among the control unit, ALU, and registers.",
        answer: "CPU Interconnection",
        accept: ["Internal Bus", "CPU Bus"]
    },
    {
        chapter: 1,
        question: "This field deals with hardware implementation details such as control signals and memory technology.",
        answer: "Computer Organization",
        accept: ["Organization"]
    },
    {
        chapter: 1,
        question: "This field deals with the programmer-visible interface such as the instruction set and data types.",
        answer: "Computer Architecture",
        accept: ["Architecture"]
    },
    {
        chapter: 1,
        question: "This refers to the operation of each individual component as part of the overall computer structure.",
        answer: "Computer Function",
        accept: ["Function"]
    },
    {
        chapter: 1,
        question: "This refers to the way in which components are physically arranged and interconnected.",
        answer: "Computer Structure",
        accept: ["Structure"]
    },

    // =================================================================
    // CHAPTER 2 — Introduction to Computer Architecture
    //             (History / Generation questions excluded)
    // =================================================================
    {
        chapter: 2,
        question: "This is a device which processes information.",
        answer: "Computer",
        accept: ["A Computer"]
    },
    {
        chapter: 2,
        question: "Chassis, cooling systems, and hard drive spindles are examples of this classification of computers by material.",
        answer: "Mechanics",
        accept: ["Mechanical"]
    },
    {
        chapter: 2,
        question: "DNA computing and bioinformatics fall under this classification of computers.",
        answer: "Biology",
        accept: ["Biological"]
    },
    {
        chapter: 2,
        question: "This is a computer designed to process requests and deliver data to other computers over a network.",
        answer: "Server Computer",
        accept: ["Server"]
    },
    {
        chapter: 2,
        question: "This is a specialized computer integrated into other devices, performing specific control functions.",
        answer: "Embedded Computer",
        accept: ["Embedded System", "Embedded"]
    },
    {
        chapter: 2,
        question: "This abstraction level refers to the physical arrangement of circuits and components on a chip.",
        answer: "Layout",
        accept: ["Physical Layout"]
    },
    {
        chapter: 2,
        question: "This abstraction level focuses on designing digital components like logic gates that execute instructions.",
        answer: "Digital Design",
        accept: ["Digital Logic Design", "Logic Design"]
    },
    {
        chapter: 2,
        question: "This defines the basic commands that a processor can execute.",
        answer: "ISA",
        accept: ["Instruction Set Architecture"]
    },
    {
        chapter: 2,
        question: "This translates high-level programming languages into machine code.",
        answer: "Compiler",
        accept: []
    },

    // =================================================================
    // CHAPTER 3 — Computer Memory & Storage
    // =================================================================
    {
        chapter: 3,
        question: "This type of storage stores data in magnetic form and has high storage capacity.",
        answer: "Magnetic Storage",
        accept: ["Magnetic"]
    },
    {
        chapter: 3,
        question: "This type of storage stores data optically and uses a laser to read/write.",
        answer: "Optical Storage",
        accept: ["Optical"]
    },
    {
        chapter: 3,
        question: "A Hard Disk is an example of this type of storage.",
        answer: "Magnetic Storage",
        accept: ["Magnetic"]
    },
    {
        chapter: 3,
        question: "A CD-ROM is an example of this type of storage.",
        answer: "Optical Storage",
        accept: ["Optical"]
    },
    {
        chapter: 3,
        question: "SSD stands for this.",
        answer: "Solid State Drive",
        accept: ["SSD"]
    },
    {
        chapter: 3,
        question: "This is a type of memory that loses its data once power is cut off.",
        answer: "Volatile Memory",
        accept: ["Volatile"]
    },
    {
        chapter: 3,
        question: "This is a type of memory that retains data even without power.",
        answer: "Non-Volatile Memory",
        accept: ["Non Volatile Memory", "Nonvolatile Memory", "Non-Volatile"]
    },
    {
        chapter: 3,
        question: "This type of memory enables read and write of stored contents and is volatile.",
        answer: "RAM",
        accept: ["Random Access Memory"]
    },
    {
        chapter: 3,
        question: "This type of memory allows only read operations.",
        answer: "ROM",
        accept: ["Read Only Memory", "Read-Only Memory"]
    },
    {
        chapter: 3,
        question: "This technical indicator refers to the number of storage units included in a memory.",
        answer: "Storage Capacity",
        accept: ["Capacity"]
    },
    {
        chapter: 3,
        question: "This is defined as access time plus any additional recovery time before a second access can be made.",
        answer: "Memory Cycle Time",
        accept: ["Cycle Time"]
    },
    {
        chapter: 3,
        question: "This is the basic element of a semiconductor memory.",
        answer: "Memory Cell",
        accept: ["Cell"]
    },
    {
        chapter: 3,
        question: "RAM and ROM are the two main types of this kind of memory.",
        answer: "Semiconductor Memory",
        accept: ["Semiconductor"]
    },
    {
        chapter: 3,
        question: "DRAM stands for this.",
        answer: "Dynamic Random-Access Memory",
        accept: ["Dynamic Random Access Memory", "DRAM"]
    },
    {
        chapter: 3,
        question: "DDR SDRAM stands for this.",
        answer: "Double Data Rate SDRAM",
        accept: ["Double Data Rate Synchronous Dynamic Random-Access Memory", "DDR SDRAM"]
    },
    {
        chapter: 3,
        question: "System software like BIOS that must be immediately accessible is typically stored in this type of memory.",
        answer: "ROM",
        accept: ["Read Only Memory", "Read-Only Memory"]
    },
    {
        chapter: 3,
        question: "EPROM stands for this.",
        answer: "Erasable Programmable Read-Only Memory",
        accept: ["Erasable Programmable ROM", "EPROM"]
    },
    {
        chapter: 3,
        question: "EEPROM stands for this.",
        answer: "Electrically Erasable Programmable Read-Only Memory",
        accept: ["Electrically Erasable Programmable ROM", "EEPROM"]
    },
    {
        chapter: 3,
        question: "This type of memory combines the advantages of ROM and RAM — electronically erasable/programmable and retains data without power.",
        answer: "Flash Memory",
        accept: ["Flash"]
    },
    {
        chapter: 3,
        question: "This is a permanent physical defect in semiconductor memory where cells cannot reliably store data.",
        answer: "Hard Failure",
        accept: ["Hard Error", "Permanent Failure"]
    },
    {
        chapter: 3,
        question: "This is a random, non-destructive event that alters the contents of memory without damaging it.",
        answer: "Soft Error",
        accept: ["Soft Failure"]
    },
    {
        chapter: 3,
        question: "SD Card stands for this.",
        answer: "Secure Digital Card",
        accept: ["Secure Digital", "SD Card"]
    }
];
