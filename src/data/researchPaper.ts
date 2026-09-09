export const researchPaper = {
  title:
    "Predicting Content Click Opportunities Using Google Search Console Performance Data",

  subtitle:
    "An empirical machine learning study evaluating whether Google Search Console performance metrics can help identify content with a higher likelihood of receiving clicks and support content optimization decisions.",

  github:
    "https://github.com/ahmedali2155/flyrank-ml-internship",

  notebook:
    "https://github.com/ahmedali2155/flyrank-ml-internship/blob/main/work/notebooks/capstone.ipynb",

  author: "Ahmed Ali",

  internship: "FlyRank Machine Learning Internship (ML-11)",

  model: "Random Forest Classifier",

  dataset: "FlyRank ML Internship Dataset",

  date: "March 2026",

  tags: [
    "Machine Learning",
    "Random Forest",
    "Binary Classification",
    "Google Search Console",
    "Feature Engineering",
    "Grouped Validation",
    "Feature Leakage Audit",
    "Content Optimization",
  ],

  abstract: `
This research investigates whether Google Search Console performance metrics can be used to identify content that is more likely to receive clicks. The analysis was conducted using the FlyRank ML Internship dataset containing search performance data from March 2026.

A Random Forest Classifier was trained using search impressions and aggregate search position and compared with a simple rule-based baseline under consistent evaluation settings. The model was further evaluated using grouped validation by client and a feature leakage audit to improve the reliability of the results.

The findings provide observed and directional evidence that machine learning can support content optimization decisions, while emphasizing that the model should be used as a decision-support tool rather than a fully automated decision-making system.
`,

  researchQuestion: `
Can Google Search Console performance metrics be used to identify content with a higher likelihood of receiving clicks and support content optimization decisions?
`,

  introduction: `
Content teams often manage thousands of webpages but have limited time to review each one manually. Identifying which pages deserve optimization is an important but time-consuming task.

Search performance metrics collected through Google Search Console provide useful signals that may help prioritize these decisions. The objective of this project is to develop and evaluate a machine learning model that predicts whether a content item is likely to receive clicks using publicly safe search performance features.

The project compares a Random Forest Classifier with a simple rule-based baseline using the same dataset and evaluation methodology.

To improve the credibility of the results, the project includes grouped validation by client, a feature leakage audit, and careful interpretation of model performance.

The final outcome is a practical content action playbook that ranks optimization opportunities based on measured model outputs. These recommendations are intended to assist human reviewers and should be interpreted as observed evidence on the evaluated dataset rather than proof of future performance.
`,

  data: {
    datasetDescription: `
This project uses the FlyRank ML Internship dataset, which contains anonymized Google Search Console performance data collected from real-world websites. The analysis focuses on the March 2026 data release.

The dataset was accessed directly from the FlyRank Hugging Face repository using DuckDB, allowing efficient querying without downloading the complete dataset.
`,

    source: {
      dataset: "FlyRank ML Internship Dataset",
      platform: "Hugging Face",
      storageFormat: "Apache Parquet",
      queryEngine: "DuckDB",
      environment: "Google Colab",
      language: "Python",
    },

    records: "Approximately 100,000",

    features: [
      {
        name: "gsc_impressions",
        description:
          "Number of times a page appeared in Google Search results.",
      },
      {
        name: "gsc_sum_position",
        description:
          "Aggregate search position of the page.",
      },
    ],

    target: {
      name: "high_clicks",
      definition:
        "Binary label indicating whether a page received at least one search click.",
      rule: "1 if gsc_clicks > 0; 0 if gsc_clicks = 0",
    },

    preparation: [
      "Loaded approximately 100,000 records from the March 2026 dataset.",
      "Removed unnecessary columns that were not used for prediction.",
      "Created the binary target variable high_clicks.",
      "Selected only the required input features.",
      "Verified that no missing or invalid values affected the selected features.",
    ],

    exclusions: [
      "Client names",
      "Website domains",
      "URLs",
      "Search queries",
      "Credentials",
      "Personally identifiable information (PII)",
    ],

    limitations: `
This study analyzes one month of historical search performance data and therefore reflects only the conditions observed during that period. The dataset should not be considered representative of every website or future search environment. Conclusions should be interpreted as observed, measured, and directional rather than universal or causal findings.
`,
  },

  methodology: {
    objective: `
The objective is to evaluate whether Google Search Console performance metrics can be used to identify content that is more likely to receive search clicks. The model is intended to support content optimization decisions rather than replace human judgment.
`,

    targetVariable: {
      name: "high_clicks",
      type: "Binary classification",
      positiveClass: "1 when gsc_clicks > 0",
      negativeClass: "0 when gsc_clicks = 0",
    },

    features: [
      {
        name: "gsc_impressions",
        description:
          "Number of times a page appeared in Google Search results.",
      },
      {
        name: "gsc_sum_position",
        description:
          "Aggregate search position of the page.",
      },
    ],

    baseline: `
Before training a machine learning model, a simple rule-based baseline was created using manually defined thresholds. The Random Forest model was evaluated against this baseline using the same dataset so that the comparison would be fair and meaningful.
`,

    modelSelection: `
A Random Forest Classifier was selected because it performs well on structured tabular datasets, handles non-linear relationships, requires minimal preprocessing, and is straightforward to implement using Scikit-learn.
`,

    training: `
The model was trained using default parameters with a fixed random_state to ensure reproducibility.
`,

    validation: [
      {
        name: "Random Train/Test Split",
        description:
          "80% training data and 20% testing data.",
      },
      {
        name: "Grouped Validation",
        description:
          "Grouped validation using client_hash_id to prevent the same client from appearing in both training and testing sets.",
      },
    ],

    leakageAudit: [
      "gsc_clicks was used only to create the target label.",
      "No future information was included.",
      "No label-derived features were used as model inputs.",
      "Client identifiers were used only for grouped validation and never as predictive features.",
    ],

    metrics: [
      "Accuracy",
      "Precision",
      "Recall",
      "F1-score",
      "Classification Report",
    ],

    reproducibilityTools: [
      "Python",
      "Google Colab",
      "DuckDB",
      "Pandas",
      "Scikit-learn",
    ],
  },

  results: {
    randomForestAccuracy: "94.13%",
    groupedValidationAccuracy: "95.63%",

    summary: `
The Random Forest Classifier was evaluated using the same dataset as the baseline and was later re-evaluated using grouped validation to provide a more realistic estimate of generalization.
`,

    comparison: [
      {
        model: "Rule-Based Baseline",
        validationMethod: "Random Split",
        accuracy: "Lower than Random Forest",
      },
      {
        model: "Random Forest",
        validationMethod: "Random Split",
        accuracy: "94.13%",
      },
      {
        model: "Random Forest",
        validationMethod: "Grouped Split",
        accuracy: "95.63%",
      },
    ],

    classificationReport: [
      {
        metric: "Precision",
        class0: "0.98",
        class1: "0.43",
      },
      {
        metric: "Recall",
        class0: "0.98",
        class1: "0.41",
      },
      {
        metric: "F1-score",
        class0: "0.98",
        class1: "0.42",
      },
    ],

    overallAccuracy: "95.63%",

    featureImportance: [
      {
        feature: "gsc_sum_position",
        importance: 0.5492,
        percentage: "54.92%",
      },
      {
        feature: "gsc_impressions",
        importance: 0.4508,
        percentage: "45.08%",
      },
    ],

    interpretation: `
The Random Forest model achieved higher measured performance than the simple rule-based baseline under the evaluation settings used in this project.

Grouped validation ensured that observations from the same client did not appear in both the training and testing sets, providing a stronger estimate of performance on previously unseen clients.

Although overall accuracy was high, the positive class high_clicks = 1 showed weaker precision, recall, and F1-score than the negative class. This indicates that class imbalance should be considered when interpreting the model.
`,
  },

  limitations: [
    "The analysis focuses on one month of historical search performance data.",
    "Results reflect the conditions observed in the evaluated dataset.",
    "The dataset should not be assumed to represent every website or future search environment.",
    "Overall accuracy should not be interpreted without considering class-level precision, recall, and F1-score.",
    "Model outputs should support human decision-making rather than replace expert judgment.",
    "The findings are observed and directional rather than universal or causal.",
  ],

  recommendations: {
    ranked: [
      {
        rank: 1,
        action:
          "Prioritize content optimization opportunities using measured model outputs.",
        priority: "High",
      },
      {
        rank: 2,
        action:
          "Review model recommendations with human domain expertise before implementation.",
        priority: "High",
      },
      {
        rank: 3,
        action:
          "Monitor model performance as search behavior and content conditions change.",
        priority: "Medium",
      },
      {
        rank: 4,
        action:
          "Retrain and re-evaluate the model when new data becomes available or performance changes.",
        priority: "Medium",
      },
    ],

    archetypeMapping: [
      {
        archetype: "High-impression, low-click content",
        action:
          "Prioritize for human review and investigate opportunities for content and search-snippet improvement.",
      },
      {
        archetype: "Strong observed performance",
        action:
          "Maintain performance while monitoring future trends.",
      },
      {
        archetype: "Low-confidence or unusual prediction",
        action:
          "Escalate for manual review before taking action.",
      },
    ],

    humanReviewRules: [
      "Review high-impact recommendations before implementation.",
      "Validate predictions with domain expertise.",
      "Investigate unusual or low-confidence predictions.",
      "Compare recommendations with the broader SEO and content strategy.",
    ],

    noGoList: [
      "Do not treat model predictions as guaranteed future outcomes.",
      "Do not automate content decisions solely from model output.",
      "Do not ignore class-level performance and uncertainty.",
      "Do not assume historical search behavior will remain unchanged.",
      "Do not use client identifiers as predictive features.",
    ],

    monitoring: `
Model performance should be evaluated periodically as new search performance data becomes available. Monitoring should focus on changes in predictive quality, class-level performance, data characteristics, and the relevance of the recommendations.

Retraining should be considered when new representative data is available or when evaluation performance materially changes.
`,
  },

  reproducibility: {
    description: `
The project was implemented in Python using Google Colab, DuckDB, Pandas, and Scikit-learn. The notebook documents the data preparation, model workflow, validation methodology, and evaluation used for this study.
`,

    repositoryLabel: "FlyRank ML Internship Repository",

    repositoryUrl:
      "https://github.com/ahmedali2155/flyrank-ml-internship",

    notebookLabel: "Capstone Notebook",

    notebookUrl:
      "https://github.com/ahmedali2155/flyrank-ml-internship/blob/main/work/notebooks/capstone.ipynb",

    checklist: [
      "Source notebook available",
      "Feature selection documented",
      "Target construction documented",
      "Validation methodology documented",
      "Evaluation metrics documented",
      "Leakage audit documented",
    ],
  },

  acknowledgments: {
    text: "Built on the FlyRank ML Internship dataset.",

    flyrankUrl: "https://flyrank.ai",

    internship:
      "FlyRank Machine Learning Internship (ML-11: Ship the Paper)",
  },

  conclusion: `
This study evaluates whether Google Search Console performance metrics can support the identification of content with a higher likelihood of receiving search clicks.

The Random Forest Classifier achieved 94.13% accuracy under the random-split evaluation and 95.63% under grouped validation by client. Feature importance analysis showed that gsc_sum_position contributed 0.5492 of the model's feature importance, while gsc_impressions contributed 0.4508.

The results provide measured and directional evidence that machine learning can support content optimization workflows. However, the positive-class performance and dataset scope demonstrate why model outputs should be treated as decision-support signals rather than guaranteed predictions or fully automated decisions.
`,
};