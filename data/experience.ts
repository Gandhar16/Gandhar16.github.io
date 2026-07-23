export interface ExperienceRole {
  company: string;
  title: string;
  dates: string;
  location: string;
  bullets: string[];
}

export const experience: ExperienceRole[] = [
  {
    company: "Amazon Web Services (AWS)",
    title: "Software Development Engineer",
    dates: "May 2025 – Present",
    location: "Washington, DC, US",
    bullets: [
      "System Design & Implementation: Designed and implemented a new scalable backend service for the EC2 Metering team — a critical organization driving $42 billion in annual revenue — using Java, Kotlin, and cloud services.",
      "Region Build-Out: Built out the Auckland region for the EC2 Metering service.",
      "Cloud Architecture & Observability: Architected a containerized, fault-tolerant system using Docker images and Amazon ECS for orchestration, with SQS for asynchronous messaging and DynamoDB/S3 for storage. Integrated Grafana and CloudWatch to build comprehensive dashboards for real-time system monitoring and observability.",
      "Infrastructure & Pipelines: Automated infrastructure provisioning via CloudFormation (IaC) and managed production CI/CD pipelines, proactively resolving deployment blockages to ensure rapid, reliable feature delivery.",
      "Operational Excellence: Served as a key on-call engineer, resolving 70+ Sev2 production incidents and acting as the technical point of contact for cross-team queries to maintain high availability. Authored agent skills/automation so recurring issues are resolved without manual intervention, and used Grafana to track service API availability.",
    ],
  },
  {
    company: "Neptune Technologies LLC",
    title: "Machine Learning Engineer",
    dates: "September 2024 – November 2024",
    location: "US, Remote",
    bullets: [
      "Developed and deployed ML models for financial risk assessment using TensorFlow, PyTorch, and cloud platforms like AWS, integrating them into production-ready backend services with REST APIs.",
      "Built scalable ML pipelines with Airflow, Spark, and Beam, ensuring high-throughput processing and system reliability.",
      "Designed real-time fraud detection systems using Autoencoders and Isolation Forest, integrated with BigQuery and Dataflow for live analytics.",
      "Managed deployments via AWS CLI, with unit testing, CI/CD, and system diagnostics for robust ops.",
      "Integrated FAISS, ColBERT, and ScaNN for vector search APIs; built LLM-based search evaluation pipelines for relevance tuning.",
      "Applied HMMs, LSTMs, XGBoost, and GNNs for predictive analytics, time-series modeling, and anomaly detection.",
      "Collaborated with cross-functional teams in an agile environment to deliver scalable, production-grade AI features.",
    ],
  },
  {
    company: "Performigence",
    title: "Machine Learning Intern",
    dates: "June 2023 – May 2024",
    location: "Los Angeles, CA",
    bullets: [
      "Developed ML models to detect fraudulent activities and abusive behavior within online communities, improving security measures by 30%, while incorporating Fairness Indicators and SHAP for bias detection and explainability.",
      "Developed NLP-based search query models using BERT, SBERT, and ColBERT, and fine-tuned LLM prompts for query understanding and ranking evaluation, improving text retrieval accuracy in content moderation.",
      "Engineered LLM prompts and evaluation workflows to assess the relevance of search results, enhancing AI-driven moderation search systems for better precision and reliability.",
      "Designed LambdaMART-based ranking models for prioritizing flagged abusive content, optimizing search ranking by 20%, while utilizing FairRank and adversarial debiasing techniques to ensure equitable ranking outcomes.",
    ],
  },
  {
    company: "International Food Policy Research Institute",
    title: "Data Analyst Intern",
    dates: "September 2023 – Present",
    location: "Fairfax, VA",
    bullets: [
      "Led climate risk assessments focused on climate-related hazards and their impacts on agriculture in Africa and globally using Python and R for data analysis.",
      "Conducted deep-dive data analyses to improve operational efficiency utilizing Pandas, NumPy, and SQL for data manipulation and processing.",
      "Performed qualitative and quantitative analysis of operational functions, workflows, and processes with Excel, Tableau, and Power BI for visualization and reporting.",
      "Collaborated with data engineers and data scientists to ensure data integrity and quality using Git for version control and AWS S3 for data storage.",
      "Designed and documented dashboards, reports, and thresholds using Tableau and Power BI to monitor business status and fluctuations effectively.",
    ],
  },
  {
    company: "Department of Chemistry & Biology, George Mason University",
    title: "Research Assistant (ML)",
    dates: "May 2023 – Present",
    location: "Fairfax, VA",
    bullets: [
      "Conducted DFT simulations using Gaussian16 software to analyze electronic structure properties of metalloporphyrin.",
      "Developed and implemented a Python-based Graph Neural Network (GNN) model to predict and optimize molecular properties of porphyrin-based compounds. Optimized existing models to enhance performance and accuracy.",
      "Worked on neural networks for protein peptides and clustering/alignment of peptides for mouse, human, and alligator.",
      "Collaborated closely with the Biology department to understand and apply key biological concepts to machine learning models.",
    ],
  },
  {
    company: "Subhash",
    title: "Software Developer",
    dates: "June 2020 – June 2022",
    location: "Mumbai, India",
    bullets: [
      "Designed and developed software solutions for defect detection in construction materials using computer vision models (TensorFlow, CNNs) integrated into production pipelines.",
      "Built backend systems and optimization tools for resource allocation using Python and PyTorch, improving efficiency in materials and equipment usage.",
      "Developed and maintained scalable data pipelines to process real-time data from IoT sensors and devices, leveraging AWS (EC2, S3) for storage and compute scalability.",
      "Collaborated with cross-functional teams (engineers, managers) to deploy software solutions on-site, ensuring seamless integration with existing workflows and enhancing overall project efficiency.",
    ],
  },
  {
    company: "Siemens Pvt Ltd",
    title: "Python Developer",
    dates: "July 2021 – August 2021",
    location: "Mumbai, India",
    bullets: [
      "Led a machine learning project using TensorFlow, Keras, and image visualization to recognize face masks, face shields, and gloves.",
      "Acquired diversified experience addressing machine breakdowns and overseeing Human-Machine Interface (HMI) tasks. Participated in design reviews to select the best technologies and solutions.",
    ],
  },
];
