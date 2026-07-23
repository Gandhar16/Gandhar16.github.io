export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Software Development",
    items: [
      "Python",
      "C++",
      "C",
      "SQL",
      "HTML",
      "CSS",
      "Bootstrap",
      "PostgreSQL",
      "Java",
      "Kotlin",
      "Object-Oriented Design",
      "System Design",
    ],
  },
  {
    category: "Machine Learning & AI",
    items: [
      "TensorFlow",
      "PyTorch",
      "Search Quality Evaluation",
      "Scikit-learn",
      "Hugging Face Transformers",
      "Keras",
      "LLM Prompt Engineering",
      "FAISS",
      "Annoy",
      "ScaNN",
      "BM25",
      "ColBERT",
      "LambdaMART",
      "XGBoost",
      "LightGBM",
    ],
  },
  {
    category: "Scalability & Deployment",
    items: ["Kubernetes", "TensorFlow Extended (TFX)", "TensorFlow Serving", "Apache Beam", "ONNX", "MLflow"],
  },
  {
    category: "Big Data & Cloud",
    items: [
      "Google Cloud (Vertex AI, BigQuery, Dataflow, TFX)",
      "AWS (SageMaker, Lambda, S3, ECS, DynamoDB)",
      "Apache Spark",
      "Docker",
      "CI/CD Pipelines",
      "Terraform",
      "CloudFormation",
    ],
  },
];
