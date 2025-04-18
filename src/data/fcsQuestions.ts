
export const fcsQuestions = {
  module1: {
    title: "Module 1: Computer Science Fundamentals & Linux Basics",
    questions: [
      // Definition & Classification
      { question: "Computer Science is primarily the study of:", options: { a: "Computers", b: "Problem Solving & Computation", c: "Software", d: "Hardware" }, answer: "b" },
      { question: "Which of the following is NOT a standard classification of computers based on size/power?", options: { a: "Microcomputer", b: "Nanocomputer", c: "Mainframe", d: "Supercomputer" }, answer: "b" },
      { question: "Personal computers like desktops and laptops fall under which classification?", options: { a: "Supercomputers", b: "Mainframes", c: "Minicomputers", d: "Microcomputers" }, answer: "d" },
      { question: "Computers designed for complex scientific calculations, like weather forecasting, are typically:", options: { a: "Microcomputers", b: "Minicomputers", c: "Mainframes", d: "Supercomputers" }, answer: "d" },
      { question: "Large organizations like banks often use which type of computer for processing high volumes of transactions?", options: { a: "Supercomputers", b: "Mainframes", c: "Minicomputers", d: "Microcomputers" }, answer: "b" },
      { question: "Computers integrated into devices like washing machines or cars are called:", options: { a: "Mainframes", b: "Supercomputers", c: "Embedded Systems", d: "Minicomputers" }, answer: "c" },
      // Building Blocks & Von Neumann
      { question: "The basic building blocks of a computer system typically include Input Unit, CPU, Memory Unit, and:", options: { a: "Network Unit", b: "Graphics Unit", c: "Output Unit", d: "Sound Unit" }, answer: "c" },
      { question: "The CPU (Central Processing Unit) consists of the Control Unit and:", options: { a: "Memory Unit", b: "Input Unit", c: "Arithmetic Logic Unit (ALU)", d: "Output Unit" }, answer: "c" },
      { question: "Which component is responsible for performing mathematical calculations and logical comparisons?", options: { a: "Control Unit", b: "Memory Unit", c: "ALU", d: "Input Unit" }, answer: "c" },
      { question: "Which component directs and coordinates most of the operations within the computer?", options: { a: "ALU", b: "Memory Unit", c: "Control Unit", d: "Output Unit" }, answer: "c" },
      { question: "RAM (Random Access Memory) is an example of:", options: { a: "Input Device", b: "Output Device", c: "Secondary Memory", d: "Primary Memory" }, answer: "d" },
      { question: "Which type of memory loses its contents when the power is turned off?", options: { a: "Secondary Memory", b: "Non-Volatile Memory", c: "Primary Memory (RAM)", d: "Read-Only Memory (ROM)" }, answer: "c" },
      { question: "Hard disk drives and SSDs are examples of:", options: { a: "Primary Memory", b: "Volatile Memory", c: "Secondary Memory", d: "Cache Memory" }, answer: "c" },
      { question: "The Von Neumann concept introduced the idea of:", options: { a: "Graphical User Interfaces", b: "Storing programs and data in the same memory", c: "Parallel Processing", d: "Network Communication" }, answer: "b" },
      // Hardware & Software
      { question: "Physical components of a computer system like the monitor, keyboard, and CPU are collectively known as:", options: { a: "Software", b: "Firmware", c: "Hardware", d: "Middleware" }, answer: "c" },
      { question: "Programs and instructions that tell the hardware what to do are called:", options: { a: "Hardware", b: "Firmware", c: "Software", d: "Drivers" }, answer: "c" },
      { question: "Software is broadly classified into System Software and:", options: { a: "Hardware Software", b: "Utility Software", c: "Application Software", d: "Firmware" }, answer: "c" },
      { question: "Which type of software manages the computer's hardware and provides a platform for other software?", options: { a: "Application Software", b: "Utility Software", c: "System Software", d: "Middleware" }, answer: "c" },
      { question: "Microsoft Word, a web browser, or a game are examples of:", options: { a: "System Software", b: "Operating System", c: "Firmware", d: "Application Software" }, answer: "d" },
      // Operating Systems
      { question: "The primary role of an Operating System (OS) is to:", options: { a: "Run applications only", b: "Manage hardware resources and provide user interface", c: "Design hardware", d: "Write programs" }, answer: "b" },
      { question: "Which is NOT a primary function of an Operating System?", options: { a: "Memory Management", b: "Process Management", c: "Hardware Design", d: "File Management" }, answer: "c" },
      { question: "An OS that processes jobs in groups without direct user interaction is called:", options: { a: "Real-time OS", b: "Time-sharing OS", c: "Batch OS", d: "Distributed OS" }, answer: "c" },
      { question: "Which feature allows multiple users to use a computer system concurrently?", options: { a: "Multitasking", b: "Multiuser", c: "Multiprocessing", d: "Multithreading" }, answer: "b" },
      { question: "Which feature allows an OS to run multiple programs seemingly simultaneously?", options: { a: "Multiuser", b: "Multitasking", c: "Batch Processing", d: "Real-time" }, answer: "b" },
      { question: "A key feature of Linux compared to some versions of Windows is that it is:", options: { a: "Closed Source", b: "Open Source", c: "Hardware", d: "Always GUI based" }, answer: "b" },
      // Linux Shell Commands
      { question: "In Linux, what is the command-line interface used to interact with the OS called?", options: { a: "Kernel", b: "GUI", c: "Shell", d: "Desktop Environment" }, answer: "c" },
      { question: "Which command is used to list files and directories in Linux?", options: { a: "cd", b: "list", c: "dir", d: "ls" }, answer: "d" },
      { question: "To see a detailed listing of files including permissions, owner, size, and modification date, which `ls` option is used?", options: { a: "ls -a", b: "ls -l", c: "ls -t", d: "ls -R" }, answer: "b" },
      { question: "Which command is used to change the current working directory?", options: { a: "pwd", b: "ls", c: "cd", d: "mkdir" }, answer: "c" },
      { question: "How do you change to your home directory using the `cd` command?", options: { a: "cd /", b: "cd ..", c: "cd ~ or cd", d: "cd home" }, answer: "c" },
      { question: "Which command displays the path of the current working directory?", options: { a: "cd", b: "path", c: "whereami", d: "pwd" }, answer: "d" },
      { question: "Which command is used to create a new directory?", options: { a: "mkfile", b: "crdir", c: "mkdir", d: "newdir" }, answer: "c" },
      { question: "Which command is used to remove an *empty* directory?", options: { a: "rm", b: "deldir", c: "rmdir", d: "erase" }, answer: "c" },
      { question: "Which command is used to copy files or directories?", options: { a: "mv", b: "cp", c: "copy", d: "duplicate" }, answer: "b" },
      { question: "To copy a directory and its contents recursively, which `cp` option is needed?", options: { a: "cp -c", b: "cp -d", c: "cp -r or cp -R", d: "cp -f" }, answer: "c" },
      { question: "Which command is used to move or rename files and directories?", options: { a: "mv", b: "cp", c: "rn", d: "move" }, answer: "a" },
      { question: "Which command is used to remove files (and directories with -r option)?", options: { a: "del", b: "rmdir", c: "erase", d: "rm" }, answer: "d" },
      { question: "To remove a file forcefully without prompting, which `rm` option is used?", options: { a: "rm -i", b: "rm -r", c: "rm -f", d: "rm -v" }, answer: "c" },
      { question: "Which command displays the contents of a file on the terminal?", options: { a: "ls", b: "display", c: "cat", d: "type" }, answer: "c" },
      { question: "How can you view the manual page for the `ls` command?", options: { a: "help ls", b: "ls --help", c: "man ls", d: "info ls" }, answer: "c" },
      { question: "Which command is used to change file permissions?", options: { a: "chown", b: "chgrp", c: "chmod", d: "perm" }, answer: "c" },
      { question: "What numeric permission allows the owner to read/write/execute, and group/others to read/execute?", options: { a: "644", b: "755", c: "777", d: "600" }, answer: "b" },
      { question: "Which command shows who is currently logged into the system?", options: { a: "id", b: "whoami", c: "who", d: "users" }, answer: "c" },
      { question: "Which command displays the username of the current user?", options: { a: "who", b: "id", c: "whoami", d: "user" }, answer: "c" },
      { question: "Which command is used to add a new user to the system?", options: { a: "adduser", b: "useradd", c: "newuser", d: "mkuser" }, answer: "b" }, // Note: adduser is often a friendlier script using useradd
      { question: "Which file typically contains user account information?", options: { a: "/etc/shadow", b: "/etc/group", c: "/etc/passwd", d: "/home" }, answer: "c" },
      { question: "Which command displays the Linux Kernel name?", options: { a: "kernel", b: "uname -k", c: "uname -s", d: "sysinfo" }, answer: "c" },
      { question: "Which command can be used to display information about memory usage?", options: { a: "mem", b: "cpuinfo", c: "df", d: "free" }, answer: "d" },
      { question: "The command `sudo apt update` is used to:", options: { a: "Install updates", b: "Update the list of available packages", c: "Update the user password", d: "Update the kernel" }, answer: "b" }
    ]
  },
  module2: {
    title: "Module 2: Database Management Systems (DBMS) & SQL",
    questions: [
      // Data vs Information, Data Types
      { question: "Raw facts, figures, or symbols with no inherent meaning are called:", options: { a: "Information", b: "Knowledge", c: "Data", d: "Schema" }, answer: "c" },
      { question: "Processed, organized data that is meaningful and useful is called:", options: { a: "Data", b: "Schema", c: "Information", d: "Metadata" }, answer: "c" },
      { question: "Which type of data lacks a predefined format or structure, like videos or emails?", options: { a: "Structured Data", b: "Semi-structured Data", c: "Unstructured Data", d: "Relational Data" }, answer: "c" },
      { question: "Data organized in a predefined manner, typically in rows and columns (like a spreadsheet), is:", options: { a: "Unstructured Data", b: "Semi-structured Data", c: "Metadata", d: "Structured Data" }, answer: "d" },
      { question: "HTML and XML files are common examples of which type of data?", options: { a: "Structured Data", b: "Semi-structured Data", c: "Unstructured Data", d: "Binary Data" }, answer: "b" },
      // DBMS Basics, Characteristics, Advantages
      { question: "What is a Database Management System (DBMS)?", options: { a: "A hardware device", b: "A collection of data", c: "Software to manage databases", d: "A network protocol" }, answer: "c" },
      { question: "Which DBMS characteristic hides the complexity of data storage from users?", options: { a: "Data Independence", b: "Data Integrity", c: "Data Abstraction", d: "Concurrency Control" }, answer: "c" },
      { question: "The ability to change the physical storage without affecting the logical structure is called:", options: { a: "Logical Data Independence", b: "Physical Data Independence", c: "Data Abstraction", d: "Normalization" }, answer: "b" },
      { question: "The ACID properties (Atomicity, Consistency, Isolation, Durability) ensure:", options: { a: "Data Security", b: "Data Independence", c: "Data Integrity", d: "Data Abstraction" }, answer: "c" },
      { question: "Which ACID property ensures that a transaction is either fully completed or not executed at all?", options: { a: "Atomicity", b: "Consistency", c: "Isolation", d: "Durability" }, answer: "a" },
      { question: "Which is a major advantage of using a DBMS?", options: { a: "Increased Data Redundancy", b: "Reduced Data Integrity", c: "Improved Data Security & Control", d: "Complexity in data access" }, answer: "c" },
      { question: "Reducing duplicate data in a database is primarily achieved through:", options: { a: "Data Abstraction", b: "Normalization", c: "Concurrency Control", d: "Backup & Recovery" }, answer: "b" },
      // Components & Users
      { question: "Which of the following is NOT a main component of a DBMS environment?", options: { a: "Hardware", b: "Software (DBMS)", c: "Data", d: "Network Router" }, answer: "d" }, // Users and Procedures/Language are also components
      { question: "Who is typically responsible for authorizing access, monitoring performance, and backup/recovery?", options: { a: "End User", b: "Application Developer", c: "Database Administrator (DBA)", d: "System Analyst" }, answer: "c" },
      // Data Models & Schema
      { question: "Which data model organizes data in a tree-like structure with one-to-many relationships?", options: { a: "Relational Model", b: "Network Model", c: "Hierarchical Model", d: "Object-Oriented Model" }, answer: "c" },
      { question: "Which data model allows many-to-many relationships using a graph structure?", options: { a: "Relational Model", b: "Network Model", c: "Hierarchical Model", d: "Flat File Model" }, answer: "b" },
      { question: "The most widely used data model today, representing data in tables, is the:", options: { a: "Hierarchical Model", b: "Network Model", c: "Relational Model", d: "Object Model" }, answer: "c" },
      { question: "The blueprint or structure of a database, defining tables, columns, data types, and relationships, is called the:", options: { a: "Data Model", b: "Instance", c: "Schema", d: "Query" }, answer: "c" },
      // Three-Schema Architecture
      { question: "The Three-Schema Architecture aims to provide:", options: { a: "Data Redundancy", b: "Data Independence", c: "Faster Queries", d: "Hardware Abstraction" }, answer: "b" },
      { question: "Which schema level in the Three-Schema Architecture defines how users view the data?", options: { a: "Internal Schema", b: "Conceptual Schema", c: "Physical Schema", d: "External Schema" }, answer: "d" },
      { question: "Which schema level represents the overall logical structure of the entire database?", options: { a: "External Schema", b: "Conceptual Schema", c: "Internal Schema", d: "View Schema" }, answer: "b" },
      { question: "Which schema level describes the physical storage details of the database?", options: { a: "External Schema", b: "Conceptual Schema", c: "Logical Schema", d: "Internal Schema" }, answer: "d" },
      // Database Languages & SQL
      { question: "SQL stands for:", options: { a: "Standard Query Language", b: "Structured Query Language", c: "Simple Query Language", d: "System Query Language" }, answer: "b" },
      { question: "Which category of SQL commands is used to define or modify the database structure (schema)?", options: { a: "DML (Data Manipulation Language)", b: "DCL (Data Control Language)", c: "TCL (Transaction Control Language)", d: "DDL (Data Definition Language)" }, answer: "d" },
      { question: "Which of the following is a DDL command?", options: { a: "SELECT", b: "INSERT", c: "UPDATE", d: "CREATE" }, answer: "d" },
      { question: "Which category of SQL commands is used to retrieve, insert, update, or delete data?", options: { a: "DDL", b: "DML", c: "DCL", d: "TCL" }, answer: "b" },
      { question: "Which of the following is a DML command?", options: { a: "ALTER", b: "GRANT", c: "SELECT", d: "DROP" }, answer: "c" },
      { question: "Which category of SQL commands manages user access permissions?", options: { a: "DDL", b: "DML", c: "DCL", d: "TCL" }, answer: "c" },
      { question: "The `GRANT` and `REVOKE` commands belong to which SQL category?", options: { a: "DDL", b: "DML", c: "DCL", d: "TCL" }, answer: "c" },
      { question: "Which category of SQL commands manages database transactions?", options: { a: "DDL", b: "DML", c: "DCL", d: "TCL" }, answer: "d" },
      { question: "The `COMMIT` and `ROLLBACK` commands belong to which SQL category?", options: { a: "DDL", b: "DML", c: "DCL", d: "TCL" }, answer: "d" },
      // SQL - Tables, Keys, Constraints
      { question: "In a relational database, data is stored in:", options: { a: "Files", b: "Objects", c: "Tables", d: "Graphs" }, answer: "c" },
      { question: "A column or set of columns that uniquely identifies each row in a table is called a:", options: { a: "Foreign Key", b: "Super Key", c: "Primary Key", d: "Candidate Key" }, answer: "c" },
      { question: "A column in one table that refers to the Primary Key of another table, enforcing relationships, is called a:", options: { a: "Primary Key", b: "Foreign Key", c: "Unique Key", d: "Super Key" }, answer: "b" },
      { question: "Which SQL constraint ensures that a column cannot contain NULL values?", options: { a: "UNIQUE", b: "PRIMARY KEY", c: "NOT NULL", d: "CHECK" }, answer: "c" },
      { question: "Which SQL constraint ensures that all values in a column (or group of columns) are distinct?", options: { a: "NOT NULL", b: "UNIQUE", c: "PRIMARY KEY", d: "FOREIGN KEY" }, answer: "b" },
      { question: "Which SQL command is used to add a new table to the database?", options: { a: "ADD TABLE", b: "INSERT TABLE", c: "CREATE TABLE", d: "MAKE TABLE" }, answer: "c" },
      { question: "Which SQL command is used to add new rows of data into a table?", options: { a: "ADD ROW", b: "INSERT INTO", c: "UPDATE", d: "CREATE ROW" }, answer: "b" },
      { question: "Which SQL command is used to modify existing data in a table?", options: { a: "MODIFY", b: "CHANGE", c: "ALTER", d: "UPDATE" }, answer: "d" },
      { question: "Which SQL command is used to remove rows from a table?", options: { a: "REMOVE FROM", b: "DROP ROW", c: "DELETE FROM", d: "ERASE FROM" }, answer: "c" },
      { question: "Which SQL command is used to remove an entire table (structure and data)?", options: { a: "DELETE TABLE", b: "REMOVE TABLE", c: "DROP TABLE", d: "ERASE TABLE" }, answer: "d" },
      // SQL - SELECT, WHERE, ORDER BY, LIKE
      { question: "Which SQL command is used to retrieve data from a database?", options: { a: "GET", b: "RETRIEVE", c: "SELECT", d: "FETCH" }, answer: "c" },
      { question: "Which clause in a SELECT statement is used to filter rows based on a specified condition?", options: { a: "FROM", b: "ORDER BY", c: "GROUP BY", d: "WHERE" }, answer: "d" },
      { question: "Which clause is used to sort the result set of a SELECT statement?", options: { a: "SORT BY", b: "GROUP BY", c: "ORDER BY", d: "ARRANGE BY" }, answer: "c" },
      { question: "Which operator is used in the WHERE clause for pattern matching?", options: { a: "MATCH", b: "LIKE", c: "REGEX", d: "SIMILAR" }, answer: "b" },
      { question: "In the LIKE operator, which wildcard character matches any sequence of zero or more characters?", options: { a: "_ (underscore)", b: "* (asterisk)", c: "? (question mark)", d: "% (percent)" }, answer: "d" },
      { question: "In the LIKE operator, which wildcard character matches exactly one character?", options: { a: "% (percent)", b: "* (asterisk)", c: "_ (underscore)", d: "# (hash)" }, answer: "c" },
      { question: "To select all columns from a table named 'Students', the syntax is:", options: { a: "SELECT Students", b: "GET * FROM Students", c: "SELECT ALL FROM Students", d: "SELECT * FROM Students" }, answer: "d" },
      { question: "To retrieve rows where the 'City' column is 'London' from the 'Customers' table, you would use:", options: { a: "SELECT * FROM Customers FILTER City='London'", b: "SELECT * FROM Customers WHERE City='London'", c: "SELECT * FROM Customers HAVING City='London'", d: "SELECT * FROM Customers IF City='London'" }, answer: "b" }
    ]
  },
  module3: {
    title: "Module 3: Computer Networks",
    questions: [
      // Definition, Advantages, Components, Categories
      { question: "A computer network is defined as:", options: { a: "A single powerful computer", b: "A set of devices connected by communication links", c: "A type of software", d: "A storage device" }, answer: "b" },
      { question: "Which is NOT a primary advantage of computer networks?", options: { a: "Resource Sharing", b: "Increased Reliability", c: "Increased Hardware Cost per User", d: "Communication" }, answer: "c" },
      { question: "The five components of data communication include Message, Sender, Receiver, Transmission Medium, and:", options: { a: "Network", b: "Router", c: "Protocol", d: "Server" }, answer: "c" },
      { question: "A set of rules that govern data communication is called a:", options: { a: "Medium", b: "Message", c: "Topology", d: "Protocol" }, answer: "d" },
      { question: "A network confined to a relatively small area, like a single building or campus, is a:", options: { a: "WAN", b: "MAN", c: "LAN", d: "Internet" }, answer: "c" },
      { question: "A network that covers a large geographical area, such as a country or continent, is a:", options: { a: "LAN", b: "MAN", c: "PAN", d: "WAN" }, answer: "d" },
      { question: "A network designed to cover an area like a city or a large campus is a:", options: { a: "LAN", b: "WAN", c: "MAN", d: "PAN" }, answer: "c" },
      // Transmission Modes
      { question: "In which transmission mode can communication occur in only one direction?", options: { a: "Simplex", b: "Half-duplex", c: "Full-duplex", d: "Multiplex" }, answer: "a" },
      { question: "Keyboard and traditional monitors are examples of which transmission mode?", options: { a: "Full-duplex", b: "Half-duplex", c: "Simplex", d: "Complex" }, answer: "c" },
      { question: "In which transmission mode can each station both transmit and receive, but not at the same time?", options: { a: "Simplex", b: "Half-duplex", c: "Full-duplex", d: "Uniplex" }, answer: "b" },
      { question: "Walkie-talkies are an example of which transmission mode?", options: { a: "Simplex", b: "Full-duplex", c: "Multiplex", d: "Half-duplex" }, answer: "d" },
      { question: "In which transmission mode can both stations transmit and receive simultaneously?", options: { a: "Simplex", b: "Half-duplex", c: "Full-duplex", d: "Duplexer" }, answer: "c" },
      { question: "A telephone network operates in which transmission mode?", options: { a: "Simplex", b: "Half-duplex", c: "Full-duplex", d: "Complex" }, answer: "c" },
      // Topology
      { question: "The physical or logical arrangement of nodes and connections in a network is called:", options: { a: "Protocol", b: "Medium", c: "Topology", d: "Architecture" }, answer: "c" },
      { question: "In which topology does every device have a dedicated point-to-point link to every other device?", options: { a: "Star", b: "Bus", c: "Ring", d: "Mesh" }, answer: "d" },
      { question: "Which topology offers high robustness because the failure of one link doesn't affect the entire network?", options: { a: "Bus", b: "Star", c: "Mesh", d: "Ring" }, answer: "c" },
      { question: "Which topology connects all devices to a central controller, like a hub or switch?", options: { a: "Mesh", b: "Bus", c: "Star", d: "Ring" }, answer: "c" },
      { question: "What is a major disadvantage of a Star topology?", options: { a: "Difficult to install", b: "Uses excessive cabling", c: "Dependency on the central hub/switch", d: "Slow transmission" }, answer: "c" },
      { question: "Which topology uses a single backbone cable to which all devices are connected via drop lines and taps?", options: { a: "Star", b: "Mesh", c: "Ring", d: "Bus" }, answer: "d" },
      { question: "A disadvantage of Bus topology is that:", options: { a: "It requires a central controller", b: "A break in the main cable can disable the network", c: "It is very expensive", d: "It is difficult to add new devices" }, answer: "b" },
      { question: "In which topology does each device connect to exactly two other devices, forming a circular pathway?", options: { a: "Bus", b: "Star", c: "Mesh", d: "Ring" }, answer: "d" },
      // Transmission Media
      { question: "Transmission media where signals are confined to a specific path using wires or cables are called:", options: { a: "Unguided Media", b: "Wireless Media", c: "Guided Media", d: "Air Media" }, answer: "c" },
      { question: "Twisted-Pair cable, Coaxial cable, and Fiber-Optic cable are examples of:", options: { a: "Unguided Media", b: "Wireless Media", c: "Satellite Links", d: "Guided Media" }, answer: "d" },
      { question: "Which guided medium consists of two insulated copper wires twisted together?", options: { a: "Coaxial Cable", b: "Fiber-Optic Cable", c: "Twisted-Pair Cable", d: "Waveguide" }, answer: "c" },
      { question: "UTP stands for:", options: { a: "Unshielded Transmission Path", b: "Universal Twisted Pair", c: "Unshielded Twisted-Pair", d: "Unified Transmission Protocol" }, answer: "c" },
      { question: "Which guided medium has a central core conductor surrounded by insulation, a metallic shield, and an outer cover?", options: { a: "Twisted-Pair Cable", b: "Fiber-Optic Cable", c: "Coaxial Cable", d: "UTP Cable" }, answer: "c" },
      { question: "Which guided medium transmits data as pulses of light?", options: { a: "Coaxial Cable", b: "Twisted-Pair Cable", c: "Fiber-Optic Cable", d: "Microwave Link" }, answer: "c" },
      { question: "Which medium offers the highest bandwidth and immunity to electromagnetic interference?", options: { a: "UTP Cable", b: "STP Cable", c: "Coaxial Cable", d: "Fiber-Optic Cable" }, answer: "d" },
      { question: "Transmission media that transport electromagnetic waves without a physical conductor (e.g., air) are called:", options: { a: "Guided Media", b: "Bounded Media", c: "Wired Media", d: "Unguided Media" }, answer: "d" },
      { question: "Radio waves, Microwaves, and Infrared are examples of:", options: { a: "Guided Media", b: "Unguided Media", c: "Coaxial Media", d: "Fiber Media" }, answer: "b" },
      // OSI & TCP/IP Models
      { question: "The OSI model consists of how many layers?", options: { a: "4", b: "5", c: "7", d: "6" }, answer: "c" },
      { question: "Which layer of the OSI model is responsible for the physical transmission of bits?", options: { a: "Data Link Layer", b: "Network Layer", c: "Physical Layer", d: "Transport Layer" }, answer: "c" },
      { question: "Which layer is responsible for framing, MAC addressing, and hop-to-hop delivery?", options: { a: "Physical Layer", b: "Data Link Layer", c: "Network Layer", d: "Transport Layer" }, answer: "b" },
      { question: "Which layer handles logical addressing (IP addresses) and routing of packets across networks?", options: { a: "Data Link Layer", b: "Transport Layer", c: "Session Layer", d: "Network Layer" }, answer: "d" },
      { question: "Which layer provides reliable process-to-process delivery, segmentation, and error control?", options: { a: "Network Layer", b: "Session Layer", c: "Transport Layer", d: "Presentation Layer" }, answer: "c" },
      { question: "Which layer manages dialogues (sessions) between computers?", options: { a: "Transport Layer", b: "Presentation Layer", c: "Session Layer", d: "Application Layer" }, answer: "c" },
      { question: "Which layer is responsible for data translation, encryption, and compression?", options: { a: "Session Layer", b: "Application Layer", c: "Presentation Layer", d: "Transport Layer" }, answer: "c" },
      { question: "Which layer provides the interface for user applications to access network services?", options: { a: "Presentation Layer", b: "Session Layer", c: "Transport Layer", d: "Application Layer" }, answer: "d" },
      { question: "The TCP/IP model combines the OSI Application, Presentation, and Session layers into which single layer?", options: { a: "Transport Layer", b: "Internet Layer", c: "Application Layer", d: "Network Access Layer" }, answer: "c" },
      { question: "The Network Layer in the OSI model corresponds roughly to which layer in the TCP/IP model?", options: { a: "Application Layer", b: "Transport Layer", c: "Internet Layer", d: "Network Access Layer" }, answer: "c" },
      // Networking Devices
      { question: "Which device operates at the Physical Layer and simply repeats signals to extend network distance?", options: { a: "Switch", b: "Router", c: "Bridge", d: "Repeater/Hub" }, answer: "d" }, // Hub also acts as a multi-port repeater
      { question: "Which device operates at the Data Link Layer and filters traffic based on MAC addresses to connect LAN segments?", options: { a: "Hub", b: "Router", c: "Bridge/Switch", d: "Repeater" }, answer: "c" }, // Switch is a multi-port bridge
      { question: "Which device operates at the Network Layer and makes routing decisions based on IP addresses to connect different networks?", options: { a: "Hub", b: "Switch", c: "Bridge", d: "Router" }, answer: "d" },
      { question: "Which device broadcasts incoming frames to all ports, operating at the Physical Layer?", options: { a: "Switch", b: "Router", c: "Hub", d: "Bridge" }, answer: "c" },
      { question: "Which device is more intelligent than a hub, forwarding frames only to the destination port based on MAC address?", options: { a: "Repeater", b: "Switch", c: "Router", d: "Modem" }, answer: "b" },
      // IP Address & Network Commands
      { question: "IPv4 addresses consist of how many bits?", options: { a: "16", b: "32", c: "64", d: "128" }, answer: "b" },
      { question: "IPv6 addresses consist of how many bits?", options: { a: "32", b: "48", c: "64", d: "128" }, answer: "d" },
      { question: "Which command is used to test network connectivity and measure latency to a host?", options: { a: "ipconfig", b: "traceroute", c: "ping", d: "netstat" }, answer: "c" },
      { question: "Which command (common on Windows) displays IP configuration details for network interfaces?", options: { a: "ping", b: "ipconfig", c: "ifconfig", d: "netstat" }, answer: "b" }, // Note: ifconfig is common on Linux/macOS, ip is newer Linux
      { question: "Which command (common on Linux/macOS) displays or configures network interface parameters?", options: { a: "ipconfig", b: "ping", c: "ifconfig / ip", d: "hostname" }, answer: "c" }, // Accept both legacy and modern
      { question: "Which command is used to trace the route packets take to a network host?", options: { a: "ping", b: "netstat", c: "traceroute / tracepath", d: "host" }, answer: "c" },
      { question: "Which command displays network connections, listening ports, and routing tables?", options: { a: "ping", b: "traceroute", c: "netstat / ss", d: "dig" }, answer: "c" } // ss is the modern replacement for netstat
    ]
  },
  module4: {
    title: "Module 4: WWW & HTML",
    questions: [
      // WWW Fundamentals
      { question: "WWW stands for:", options: { a: "World Wide Web", b: "Wide World Web", c: "Web World Wide", d: "World Web Wide" }, answer: "a" },
      { question: "The system that translates domain names (like www.google.com) into IP addresses is called:", options: { a: "URL", b: "HTTP", c: "DNS (Domain Name System)", d: "TCP/IP" }, answer: "c" },
      { question: "In the client-server model, the user's web browser typically acts as the:", options: { a: "Server", b: "Client", c: "Protocol", d: "DNS" }, answer: "b" },
      { question: "A web page that displays the same content to every user and doesn't change unless the source file is edited is called a:", options: { a: "Dynamic Web Page", b: "Static Web Page", c: "Scripted Web Page", d: "Database Web Page" }, answer: "b" },
      { question: "A web page whose content can change based on user interaction or real-time data, often using server-side scripting, is called a:", options: { a: "Static Web Page", b: "Fixed Web Page", c: "Dynamic Web Page", d: "HTML Web Page" }, answer: "c" },
      // HTML Basics
      { question: "HTML stands for:", options: { a: "HyperText Markup Language", b: "HighText Markup Language", c: "HyperText Machine Language", d: "Hyperlink Text Markup Language" }, answer: "a" },
      { question: "What is the fundamental purpose of HTML?", options: { a: "To style web pages", b: "To add interactivity", c: "To structure web page content", d: "To manage databases" }, answer: "c" },
      { question: "Which declaration defines the document type and HTML version?", options: { a: "<html>", b: "<head>", c: "<!DOCTYPE html>", d: "<body>" }, answer: "c" },
      { question: "Which element is the root element of an HTML page?", options: { a: "<head>", b: "<body>", c: "<title>", d: "<html>" }, answer: "d" },
      { question: "Which element contains meta-information about the HTML document (like title, scripts, styles)?", options: { a: "<body>", b: "<html>", c: "<head>", d: "<meta>" }, answer: "c" },
      { question: "Which element defines the title shown in the browser's title bar or page tab?", options: { a: "<head>", b: "<meta>", c: "<title>", d: "<h1>" }, answer: "c" },
      { question: "Which element contains the visible page content?", options: { a: "<head>", b: "<html>", c: "<meta>", d: "<body>" }, answer: "d" },
      { question: "Tags like `<p>` and `<div>` that enclose content are called:", options: { a: "Empty Tags", b: "Self-closing Tags", c: "Container Tags", d: "Attribute Tags" }, answer: "c" },
      { question: "Tags like `<img>` and `<br>` that do not enclose content are called:", options: { a: "Container Tags", b: "Block Tags", c: "Empty Tags / Self-closing Tags", d: "Inline Tags" }, answer: "c" },
      { question: "The basic building block of an HTML document, consisting of a start tag, content, and an end tag (usually), is an:", options: { a: "Attribute", b: "Element", c: "Tag", d: "Value" }, answer: "b" },
      { question: "Additional information provided within the start tag of an element is called an:", options: { a: "Element", b: "Value", c: "Attribute", d: "Content" }, answer: "c" },
      { question: "In `<a href='page.html'>Link</a>`, `href` is an example of an:", options: { a: "Element", b: "Tag", c: "Attribute", d: "Value" }, answer: "c" },
      // Text Formatting
      { question: "Which tag is used to define bold text?", options: { a: "<i>", b: "<b>", c: "<u>", d: "<em>" }, answer: "b" },
      { question: "Which tag is used to define italic text?", options: { a: "<b>", b: "<u>", c: "<i>", d: "<mark>" }, answer: "c" },
      { question: "Which tag is used to define underlined text?", options: { a: "<i>", b: "<b>", c: "<mark>", d: "<u>" }, answer: "d" },
      { question: "Which tag defines emphasized text (typically displayed as italics)?", options: { a: "<b>", b: "<i>", c: "<em>", d: "<mark>" }, answer: "c" },
      { question: "Which tag is used to highlight text (mark)?", options: { a: "<small>", b: "<highlight>", c: "<mark>", d: "<em>" }, answer: "c" },
      { question: "Which tag defines smaller text?", options: { a: "<small>", b: "<del>", c: "<sub>", d: "<sup>" }, answer: "a" },
      { question: "Which tag defines deleted text (often displayed with a strikethrough)?", options: { a: "<small>", b: "<del>", c: "<s>", d: "<sub>" }, answer: "b" }, // <s> is also strikethrough, but <del> is semantically for deleted text
      { question: "Which tag defines subscripted text?", options: { a: "<sup>", b: "<small>", c: "<sub>", d: "<subscript>" }, answer: "c" },
      { question: "Which tag defines superscripted text?", options: { a: "<sub>", b: "<sup>", c: "<super>", d: "<small>" }, answer: "b" },
      { question: "How do you add comments in HTML?", options: { a: "// Comment", b: "/* Comment */", c: "# Comment", d: "<!-- Comment -->" }, answer: "d" },
      { question: "Which tags define HTML headings, from largest to smallest?", options: { a: "<h6> to <h1>", b: "<head1> to <head6>", c: "<h1> to <h6>", d: "<h>1 to 6</h>" }, answer: "c" },
      { question: "Which tag defines a paragraph?", options: { a: "<para>", b: "<pg>", c: "<p>", d: "<par>" }, answer: "c" },
      { question: "In HTML5, how is text color typically set?", options: { a: "Using the <font> tag", b: "Using the color attribute directly", c: "Using CSS (e.g., style attribute or external stylesheet)", d: "Using the <textcolor> tag" }, answer: "c" },
      // Images
      { question: "Which tag is used to embed an image in an HTML page?", options: { a: "<image>", b: "<picture>", c: "<img>", d: "<src>" }, answer: "c" },
      { question: "Which attribute of the `<img>` tag specifies the path to the image file?", options: { a: "alt", b: "href", c: "link", d: "src" }, answer: "d" },
      { question: "Which attribute provides alternative text for an image if it cannot be displayed?", options: { a: "src", b: "title", c: "alt", d: "description" }, answer: "c" },
      { question: "Which image format typically supports transparency?", options: { a: "JPG", b: "GIF", c: "PNG", d: "BMP" }, answer: "c" }, // GIF also supports basic transparency
      // Links
      { question: "Which tag defines a hyperlink?", options: { a: "<link>", b: "<a>", c: "<href>", d: "<hyperlink>" }, answer: "b" },
      { question: "Which attribute specifies the destination URL for a hyperlink?", options: { a: "src", b: "link", c: "href", d: "url" }, answer: "c" },
      { question: "To make a link open in a new browser tab, which `target` attribute value is used?", options: { a: "target='_self'", b: "target='_new'", c: "target='_blank'", d: "target='_top'" }, answer: "c" },
      { question: "How do you create a link that sends an email?", options: { a: "<a href='email:user@example.com'>", b: "<a href='send:user@example.com'>", c: "<a href='mailto:user@example.com'>", d: "<a>email:user@example.com</a>" }, answer: "c" },
      { question: "How can you make an image act as a hyperlink?", options: { a: "Use <img href='...'>", b: "Nest the <img> tag inside an <a> tag", c: "Use <a src='...'>", d: "Set the image as background for <a>" }, answer: "b" },
      // Tables
      { question: "Which tag defines an HTML table?", options: { a: "<tab>", b: "<table>", c: "<tbl>", d: "<grid>" }, answer: "b" },
      { question: "Which tag defines a row in an HTML table?", options: { a: "<td>", b: "<th>", c: "<tr>", d: "<row>" }, answer: "c" },
      { question: "Which tag defines a standard data cell in an HTML table?", options: { a: "<tr>", b: "<th>", c: "<cell>", d: "<td>" }, answer: "d" },
      { question: "Which tag defines a header cell in an HTML table (usually bold and centered)?", options: { a: "<td>", b: "<tr>", c: "<th>", d: "<headcell>" }, answer: "c" },
      { question: "Which tag is used to add a caption to an HTML table?", options: { a: "<title>", b: "<caption>", c: "<legend>", d: "<header>" }, answer: "b" },
      // Lists
      { question: "Which tag defines an unordered list (bullet points)?", options: { a: "<ol>", b: "<li>", c: "<ul>", d: "<list>" }, answer: "c" },
      { question: "Which tag defines an ordered list (numbered/lettered)?", options: { a: "<ul>", b: "<ol>", c: "<li>", d: "<numlist>" }, answer: "b" },
      { question: "Which tag defines a list item within both ordered and unordered lists?", options: { a: "<item>", b: "<li>", c: "<dt>", d: "<dd>" }, answer: "b" },
      { question: "Which tag defines a description list?", options: { a: "<ul>", b: "<ol>", c: "<dl>", d: "<list>" }, answer: "c" },
      { question: "In a description list, which tag defines the term/name?", options: { a: "<dd>", b: "<dl>", c: "<term>", d: "<dt>" }, answer: "d" },
      { question: "In a description list, which tag defines the description/value of the term?", options: { a: "<dt>", b: "<dl>", c: "<dd>", d: "<desc>" }, answer: "c" },
      // Additional Formatting
      { question: "Which tag is typically used to define contact information (address)?", options: { a: "<contact>", b: "<info>", c: "<address>", d: "<p>" }, answer: "c" },
      { question: "Which tag (now deprecated) was used to create scrolling text?", options: { a: "<scroll>", b: "<marquee>", c: "<move>", d: "<slide>" }, answer: "b" },
      { question: "Which tag (now deprecated) was used to specify font face, size, and color?", options: { a: "<style>", b: "<text>", c: "<font>", d: "<format>" }, answer: "c" },
      { question: "A small icon displayed in the browser tab is often specified using a link tag with rel='icon'. This icon is commonly called a:", options: { a: "Logo", b: "Bookmark", c: "Favicon", d: "Tabicon" }, answer: "c" }
    ]
  },
  moduleX: { // Assuming Module X covers history/evolution
    title: "Module X: History and Evolution",
    questions: [
      // Early History
      { question: "Which early calculating device used beads on rods?", options: { a: "Pascaline", b: "Abacus", c: "Stepped Reckoner", d: "Difference Engine" }, answer: "b" },
      { question: "Who is credited with designing the first mechanical calculator, the Pascaline?", options: { a: "Charles Babbage", b: "Gottfried Leibniz", c: "Blaise Pascal", d: "Joseph Jacquard" }, answer: "c" },
      { question: "Gottfried Leibniz invented the Stepped Reckoner and also documented which important number system?", options: { a: "Decimal", b: "Hexadecimal", c: "Binary", d: "Octal" }, answer: "c" },
      { question: "Charles Babbage designed which two pioneering (though largely unbuilt) machines?", options: { a: "Abacus and Pascaline", b: "Difference Engine and Analytical Engine", c: "ENIAC and UNIVAC", d: "Harvard Mark I and Colossus" }, answer: "b" },
      { question: "The concept of using punched cards to control a machine, which influenced Babbage, came from the:", options: { a: "Stepped Reckoner", b: "Arithmometer", c: "Jacquard Loom", d: "Pascaline" }, answer: "c" },
      { question: "Who is often considered the first computer programmer for writing an algorithm for Babbage's Analytical Engine?", options: { a: "Charles Babbage", b: "Ada Lovelace", c: "John von Neumann", d: "Grace Hopper" }, answer: "b" },
      { question: "The word 'algorithm' is derived from the name of which Persian mathematician?", options: { a: "Euclid", b: "Archimedes", c: "Al-Khwarizmi", d: "Fibonacci" }, answer: "c" },
      // Von Neumann & Modern Era
      { question: "The 'stored-program concept' is most closely associated with:", options: { a: "Alan Turing", b: "John von Neumann", c: "Charles Babbage", d: "Howard Aiken" }, answer: "b" },
      { question: "Howard Aiken, inspired by Babbage, designed which electro-mechanical computer at Harvard?", options: { a: "ENIAC", b: "UNIVAC", c: "ASCC/Harvard Mark I", d: "Colossus" }, answer: "c" },
      { question: "What was a primary motivation for the development of ARPANET?", options: { a: "Commercial email", b: "Online shopping", c: "Connecting universities for research", d: "Creating the World Wide Web" }, answer: "c" },
      { question: "Who are often called the 'Fathers of the Internet' for their work on TCP/IP?", options: { a: "Bill Gates and Steve Jobs", b: "Tim Berners-Lee and Marc Andreessen", c: "Vint Cerf and Bob Kahn", d: "John von Neumann and Alan Turing" }, answer: "c" },
      // Evolution of CS
      { question: "Computer Science evolved from early calculating devices to a science focused on:", options: { a: "Building faster hardware", b: "Abstraction, algorithms, and computation", c: "Creating operating systems", d: "Designing websites" }, answer: "b" },
      { question: "The ability to represent a problem using the right model is a key aspect of which concept in Computer Science?", options: { a: "Algorithm", b: "Hardware", c: "Abstraction", d: "Networking" }, answer: "c" },
      // Evolution of OS
      { question: "Early computers often ran one program at a time. Which type of OS improved efficiency by grouping similar jobs?", options: { a: "Real-time OS", b: "Time-sharing OS", c: "Batch OS", d: "Embedded OS" }, answer: "c" },
      { question: "Modern operating systems like Linux and Windows allow multiple programs to run concurrently, a feature known as:", options: { a: "Batch processing", b: "Multitasking", c: "Single-tasking", d: "Real-time processing" }, answer: "b" },
      { question: "The development of graphical user interfaces (GUIs) made computers more accessible compared to earlier:", options: { a: "Batch interfaces", b: "Command-line interfaces (CLIs)", c: "Network interfaces", d: "Programming interfaces" }, answer: "b" },
      // Evolution of DBMS
      { question: "Before relational databases, which models were common but often complex to manage?", options: { a: "Object-Oriented and NoSQL", b: "Hierarchical and Network", c: "Flat File and Spreadsheet", d: "Cloud and Distributed" }, answer: "b" },
      { question: "The Relational Model, using tables, was proposed by:", options: { a: "Charles Babbage", b: "John von Neumann", c: "E.F. Codd", d: "Bill Gates" }, answer: "c" },
      { question: "The need to handle large volumes of unstructured and semi-structured data led to the development of:", options: { a: "Hierarchical Databases", b: "Network Databases", c: "Relational Databases", d: "NoSQL Databases" }, answer: "d" },
      // Evolution of Networks
      { question: "The precursor to the modern Internet was:", options: { a: "Ethernet", b: "ARPANET", c: "NSFNET", d: "WWW" }, answer: "b" },
      { question: "The transition from NCP to which protocol suite was crucial for the growth of the Internet?", options: { a: "HTTP/HTML", b: "OSI", c: "TCP/IP", d: "FTP/SMTP" }, answer: "c" },
      { question: "The World Wide Web (WWW), using HTML and HTTP, was invented by:", options: { a: "Vint Cerf", b: "Bob Kahn", c: "Tim Berners-Lee", d: "Marc Andreessen" }, answer: "c" },
      // Client-Side Scripting (Brief)
      { question: "While HTML structures a web page, what is often used to add interactivity and dynamic behavior *within the browser*?", options: { a: "Server-side scripting (like PHP)", b: "Database languages (like SQL)", c: "Client-side scripting (like JavaScript)", d: "Operating System commands" }, answer: "c" },
      // General History/Synthesis
      { question: "The Jacquard Loom used what technology to store patterns?", options: { a: "Magnetic Tape", b: "Vacuum Tubes", c: "Punched Cards", d: "Transistors" }, answer: "c" },
      { question: "Ada Lovelace Day celebrates:", options: { a: "The invention of the first computer", b: "The birth of Charles Babbage", c: "Women in STEM fields", d: "The launch of the Internet" }, answer: "c" },
      { question: "The primary difference between Babbage's Difference Engine and Analytical Engine was that the Analytical Engine was designed to be:", options: { a: "Smaller", b: "Faster", c: "Programmable", d: "Mechanical" }, answer: "c" },
      { question: "Which invention allowed computers to move beyond purely mechanical operations?", options: { a: "Punched Cards", b: "The Abacus", c: "Vacuum Tubes / Transistors", d: "The Slide Rule" }, answer: "c" }, // Represents electronic era
      { question: "The concept of layers (like in OSI or TCP/IP) helps manage complexity in:", options: { a: "Hardware design", b: "Network communication", c: "Database design", d: "Algorithm development" }, answer: "b" },
      { question: "Which is older, the OSI model or the TCP/IP protocol suite?", options: { a: "OSI model", b: "TCP/IP protocol suite", c: "They were developed simultaneously", d: "Neither is older" }, answer: "b" },
      { question: "The need for unique addresses for billions of devices connected to the internet drove the development of:", options: { a: "TCP", b: "HTTP", c: "IPv6", d: "DNS" }, answer: "c" },
      { question: "Early operating systems primarily focused on:", options: { a: "Graphical interfaces", b: "Running one job efficiently after another", c: "Network security", d: "Multimedia support" }, answer: "b" },
      { question: "The relational database model became dominant due to its:", options: { a: "Ability to handle unstructured data", b: "Simplicity and flexibility compared to earlier models", c: "Use of graphical links", d: "Direct hardware manipulation" }, answer: "b" },
      { question: "Computer Science as a formal academic discipline emerged primarily in which century?", options: { a: "18th Century", b: "19th Century", c: "20th Century", d: "21st Century" }, answer: "c" },
      { question: "The evolution from vacuum tubes to transistors to integrated circuits led to computers becoming:", options: { a: "Larger, slower, and more expensive", b: "Smaller, faster, and cheaper", c: "Mechanical only", d: "Less reliable" }, answer: "b" },
      { question: "Packet switching, fundamental to the Internet, involves:", options: { a: "Sending data in one continuous stream", b: "Breaking data into small pieces for transmission", c: "Using dedicated circuits for each connection", d: "Translating data between languages" }, answer: "b" },
      { question: "The development of high-level programming languages aimed to:", options: { a: "Make programming closer to machine code", b: "Make programming more human-readable and abstract", c: "Eliminate the need for operating systems", d: "Speed up hardware directly" }, answer: "b" },
      { question: "Which historical figure's work laid the theoretical foundations for computation and computability?", options: { a: "John von Neumann", b: "Alan Turing", c: "Charles Babbage", d: "Ada Lovelace" }, answer: "b" },
      { question: "The initial purpose of computer networks like ARPANET was primarily for:", options: { a: "Social media", b: "E-commerce", c: "Military and research communication", d: "Personal entertainment" }, answer: "c" },
      { question: "The shift from mainframes to personal computers represents a trend towards:", options: { a: "Centralization", b: "Decentralization and individual empowerment", c: "Increased complexity", d: "Reduced processing power" }, answer: "b" },
      { question: "The core idea behind the Von Neumann architecture bottleneck is the difference in speed between:", options: { a: "Input and Output devices", b: "CPU and Memory", c: "Hard drive and Network card", d: "ALU and Control Unit" }, answer: "b" },
      { question: "Which early computing device directly influenced the development of cash registers and adding machines?", options: { a: "Abacus", b: "Pascaline", c: "Jacquard Loom", d: "Arithmometer" }, answer: "b" }, // Pascal's influence was significant
      { question: "The concept of 'debugging' is famously (though perhaps apocryphally) associated with Grace Hopper finding what in a relay?", options: { a: "A syntax error", b: "A moth", c: "A loose wire", d: "A virus" }, answer: "b" },
      { question: "The evolution of storage media progressed from punched cards/tape to magnetic tape/disks to:", options: { a: "Vacuum tubes", b: "Abacus beads", c: "Solid State Drives (SSDs) and Cloud Storage", d: "Relays" }, answer: "c" },
      { question: "The primary goal of developing operating systems was to:", options: { a: "Make computers run faster", b: "Improve the efficiency of using computer hardware", c: "Develop new programming languages", d: "Design better user interfaces" }, answer: "b" },
      { question: "The Internet's architecture is designed to be:", options: { a: "Highly centralized and controlled", b: "Dependent on a single backbone", c: "Decentralized and resilient to single points of failure", d: "Optimized only for text communication" }, answer: "c" },
      { question: "The development of database systems aimed to solve problems associated with:", options: { a: "Slow processors", b: "Lack of network connectivity", c: "Managing large amounts of data in flat files", d: "Poor graphics capabilities" }, answer: "c" },
      { question: "Computer Science continues to evolve, with current trends focusing heavily on areas like:", options: { a: "Mechanical calculators", b: "Batch processing", c: "Artificial Intelligence, Big Data, and Cloud Computing", d: "Punched card readers" }, answer: "c" }
    ]
  }
};