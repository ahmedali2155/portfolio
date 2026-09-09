import { Link } from "react-router-dom";
import { PaperHeader } from "@/components/research/PaperHeader";
import { PaperSection } from "@/components/research/PaperSection";
import { ResearchLayout } from "@/components/research/ResearchLayout";

export default function ResearchPaper() {
  return (
    <>
      <PaperHeader 
        title="Predicting High-Click Webpages Using Google Search Console Data: A Random Forest Classification Approach"
        githubUrl="https://github.com/ahmedali2155/flyrank-ml-internship" 
      />

      <ResearchLayout>
        {/* ========================= PAPER META ========================= */}
        
        <div className="mb-10 flex flex-col gap-4 border-b border-border-subtle pb-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-text-muted">
            <span className="font-semibold text-text-primary">Author:</span> Ahmed Ali <br className="sm:hidden" />
            <span className="hidden sm:inline"> • </span>
            September 2026
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/ahmedali2155/flyrank-ml-internship"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-accent-blue px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              View GitHub Repository
            </a>
            <a
              href="https://github.com/ahmedali2155/flyrank-ml-internship/blob/main/work/notebooks/capstone.ipynb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-border-subtle px-4 py-2 text-sm font-medium transition hover:bg-surface-card"
            >
              Open Notebook
            </a>
          </div>
        </div>

        {/* ========================= ABSTRACT ========================= */}

        <PaperSection
          id="abstract"
          title="Abstract"
          subtitle="Overview of the research objective and findings."
        >
          <p>
            This research investigates whether Google Search Console performance
            metrics can be used to predict whether a webpage is likely to receive
            search clicks. Using supervised machine learning techniques, the
            study develops a Random Forest classification model trained on the
            FlyRank ML Internship dataset. The objective is to evaluate whether
            search performance indicators provide meaningful predictive power
            while maintaining honest evaluation practices through grouped
            validation and feature leakage analysis.
          </p>

          <p className="mt-5">
            The project compares baseline approaches with a machine learning
            classifier, evaluates model performance using multiple validation
            strategies, and concludes with practical recommendations for content
            optimization workflows.
          </p>
        </PaperSection>

        {/* ========================= RESEARCH QUESTION ========================= */}

        <PaperSection
          id="research-question"
          title="Research Question"
          subtitle="Primary objective investigated throughout this study."
        >
          <p>
            Can Google Search Console performance metrics be used to accurately
            predict whether a webpage will receive search clicks while avoiding
            data leakage and maintaining realistic model evaluation?
          </p>

          <p className="mt-5">
            To answer this question, the study evaluates a Random Forest
            classifier using structured feature engineering, grouped validation,
            baseline comparisons, feature importance analysis, and multiple
            evaluation metrics.
          </p>
        </PaperSection>

        {/* ========================= INTRODUCTION ========================= */}

        <PaperSection
          id="introduction"
          title="Introduction"
          subtitle="Background, motivation, and problem statement."
        >
          <p>
            Search engines generate enormous amounts of performance data that can
            provide valuable insights into user behavior and content visibility.
            Understanding whether these signals can predict future search clicks
            has practical value for SEO professionals, publishers, and content
            teams seeking to prioritize optimization efforts.
          </p>

          <p className="mt-5">
            This project was completed as part of the FlyRank Machine Learning
            Internship (ML-11: Ship the Paper). It demonstrates an end-to-end
            machine learning workflow including exploratory analysis, feature
            engineering, model training, validation, evaluation, and responsible
            reporting of limitations.
          </p>
        </PaperSection>

        {/* ========================= DATA ========================= */}

        <PaperSection
          id="data"
          title="Data"
          subtitle="Dataset description and preparation."
        >
          <p>
            This study uses the dataset provided as part of the FlyRank Machine
            Learning Internship. The dataset contains Google Search Console
            performance metrics describing how webpages perform within search
            results.
          </p>

          <p className="mt-5">
            Before model training, the dataset underwent preprocessing to ensure
            consistency and quality. Missing values, invalid records, duplicate
            observations, and inconsistent feature types were examined prior to
            experimentation.
          </p>

          <div className="mt-8 overflow-x-auto rounded-card border border-border-subtle">
            <table className="w-full text-left">
              <thead className="bg-surface-card">
                <tr>
                  <th className="px-5 py-3">Category</th>
                  <th className="px-5 py-3">Description</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t border-border-subtle">
                  <td className="px-5 py-3 font-medium">Source</td>
                  <td className="px-5 py-3">
                    FlyRank Machine Learning Internship Dataset
                  </td>
                </tr>

                <tr className="border-t border-border-subtle">
                  <td className="px-5 py-3 font-medium">Domain</td>
                  <td className="px-5 py-3">
                    Google Search Console Performance Data
                  </td>
                </tr>

                <tr className="border-t border-border-subtle">
                  <td className="px-5 py-3 font-medium">Task</td>
                  <td className="px-5 py-3">
                    Binary Classification
                  </td>
                </tr>

                <tr className="border-t border-border-subtle">
                  <td className="px-5 py-3 font-medium">Target</td>
                  <td className="px-5 py-3">
                    high_clicks — 1 if gsc_clicks &gt; 0; 0 if gsc_clicks = 0
                  </td>
                </tr>
                
                <tr className="border-t border-border-subtle">
                  <td className="px-5 py-3 font-medium">Dataset Size</td>
                  <td className="px-5 py-3">
                    ≈100,000 Search Console records
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </PaperSection>

        {/* ========================= METHODOLOGY ========================= */}

        <PaperSection
          id="methodology"
          title="Methodology"
          subtitle="Machine learning workflow used throughout the study."
        >
          <p>
            The complete workflow follows a standard supervised machine learning
            pipeline beginning with data inspection, preprocessing, feature
            engineering, model training, validation, evaluation, and result
            interpretation.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-card border border-border-subtle bg-surface-card p-6">
              <h3 className="text-lg font-semibold text-text-primary">
                Dataset Preparation
              </h3>

              <ul className="mt-4 space-y-3 text-text-muted">
                <li>• Data inspection</li>
                <li>• Missing value analysis</li>
                <li>• Duplicate checking</li>
                <li>• Feature selection</li>
                <li>• Target construction</li>
              </ul>
            </div>

            <div className="rounded-card border border-border-subtle bg-surface-card p-6">
              <h3 className="text-lg font-semibold text-text-primary">
                Model Development
              </h3>

              <ul className="mt-4 space-y-3 text-text-muted">
                <li>• Random Forest Classifier</li>
                <li>• Baseline comparison</li>
                <li>• Grouped validation</li>
                <li>• Performance evaluation</li>
                <li>• Feature importance analysis</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-card border border-border-subtle bg-bg-secondary p-6">
            <h3 className="text-lg font-semibold text-text-primary">
              Validation Strategy
            </h3>

            <p className="mt-4 text-text-muted">
              Grouped validation was selected to reduce optimistic performance estimates 
              caused by related observations appearing in both training and evaluation sets. 
              This helps ensure that observations from related groups are not leaked 
              between training and evaluation datasets, producing a more honest assessment 
              of model performance.
            </p>
          </div>

          <div className="mt-8 rounded-card border border-border-subtle bg-bg-secondary p-6">
            <h3 className="text-lg font-semibold text-text-primary">
              Feature Engineering
            </h3>

            <p className="mt-4 text-text-muted">
              Input variables were inspected for relevance, redundancy, and
              leakage risk before model training. Features with meaningful
              predictive value were retained while preserving reproducibility and
              interpretability throughout the experimentation process.
            </p>
          </div>

          <div className="mt-8 rounded-card border border-border-subtle bg-bg-secondary p-6">
            <h3 className="text-lg font-semibold text-text-primary">
              Training Pipeline
            </h3>

            <p className="mt-4 text-text-muted">
              The workflow consisted of preprocessing, train-validation
              splitting, model fitting, grouped evaluation, prediction
              generation, metric computation, and interpretation of feature
              importance. Every stage was designed to be reproducible using the
              accompanying notebook.
            </p>
          </div>
        </PaperSection>

        {/* ========================= RESULTS ========================= */}

        <PaperSection
          id="results"
          title="Results"
          subtitle="Evaluation metrics, model performance, and comparative analysis."
        >
          <p>
            The Random Forest classifier demonstrated strong predictive performance
            across multiple evaluation strategies. The Random Forest Classifier was 
            evaluated using both random and grouped validation strategies. The results 
            below report the measured performance from the current ML-11 capstone analysis.
          </p>

          {/* Metric Cards */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Random Forest Accuracy",
                value: "94.13%",
                color: "text-green-400",
              },
              {
                title: "Grouped Validation",
                value: "95.63%",
                color: "text-accent-blue",
              },
              {
                title: "Baseline Accuracy",
                value: "82.5%",
                color: "text-orange-400",
              },
              {
                title: "Class 0 Precision",
                value: "98.0%",
                color: "text-cyan-400",
              },
            ].map((metric) => (
              <div
                key={metric.title}
                className="rounded-card border border-border-subtle bg-surface-card p-6"
              >
                <p className="text-sm text-text-muted">
                  {metric.title}
                </p>

                <h3 className={`mt-3 text-3xl font-bold ${metric.color}`}>
                  {metric.value}
                </h3>
              </div>
            ))}
          </div>

          {/* Performance Comparison */}
          <div className="mt-10 rounded-card border border-border-subtle overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-surface-card">
                <tr>
                  <th className="px-5 py-4">Model & Validation Strategy</th>
                  <th className="px-5 py-4 text-right">Accuracy</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border-subtle">
                  <td className="px-5 py-4 font-medium">Baseline (Majority Class)</td>
                  <td className="px-5 py-4 text-right">82.5%</td>
                </tr>
                <tr className="border-t border-border-subtle bg-bg-secondary/50">
                  <td className="px-5 py-4 font-semibold text-accent-blue">
                    Random Forest (Random Split)
                  </td>
                  <td className="px-5 py-4 text-right font-semibold">94.13%</td>
                </tr>
                <tr className="border-t border-border-subtle bg-bg-secondary/50">
                  <td className="px-5 py-4 font-semibold text-accent-blue">
                    Random Forest (Grouped Validation)
                  </td>
                  <td className="px-5 py-4 text-right font-semibold">95.63%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Feature Importance */}
          <div className="mt-10 rounded-card border border-border-subtle bg-surface-card p-7">
            <h3 className="text-xl font-semibold text-text-primary">
              Feature Importance
            </h3>

            <p className="mt-4 text-text-muted">
              Feature importance analysis identifies the variables that contributed
              most strongly to prediction performance.
            </p>

            <div className="mt-8 space-y-5">
              {[
                ["gsc_sum_position", 54.92],
                ["gsc_impressions", 45.08],
              ].map(([name, value]) => (
                <div key={name}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>{name}</span>
                    <span>{value}%</span>
                  </div>

                  <div className="h-2 rounded-full bg-bg-secondary">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-accent-blue to-cyan-400"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Classification Report */}
          <div className="mt-10 rounded-card border border-border-subtle bg-surface-card p-7">
            <h3 className="text-xl font-semibold text-text-primary">
              Classification Report (Grouped Validation)
            </h3>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="pb-4">Class</th>
                    <th className="pb-4">Precision</th>
                    <th className="pb-4">Recall</th>
                    <th className="pb-4">F1 Score</th>
                    <th className="pb-4">Support</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border-subtle">
                    <td className="py-4 font-medium">Class 0 (No Click)</td>
                    <td>0.98</td>
                    <td>0.98</td>
                    <td>0.98</td>
                    <td>—</td>
                  </tr>
                  <tr className="border-t border-border-subtle">
                    <td className="py-4 font-medium">Class 1 (Click)</td>
                    <td>0.43</td>
                    <td>0.41</td>
                    <td>0.42</td>
                    <td>—</td>
                  </tr>
                  <tr className="border-t border-border-subtle font-semibold">
                    <td className="py-4">Overall Accuracy</td>
                    <td>—</td>
                    <td>—</td>
                    <td>—</td>
                    <td>95.63%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </PaperSection>

        {/* ========================= LIMITATIONS ========================= */}

        <PaperSection
          id="limitations"
          title="Limitations & Honest Framing"
          subtitle="Responsible reporting of model constraints and evaluation boundaries."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-card border border-border-subtle bg-surface-card p-6">
              <h3 className="text-lg font-semibold text-text-primary">
                Key Limitations
              </h3>

              <ul className="mt-5 space-y-3 text-text-muted">
                <li>• Performance depends on dataset quality and preprocessing.</li>
                <li>• Results may not generalize across unrelated websites.</li>
                <li>• Search behaviour changes over time.</li>
                <li>• Model predictions should support—not replace—human judgement.</li>
              </ul>
            </div>

            <div className="rounded-card border border-border-subtle bg-surface-card p-6">
              <h3 className="text-lg font-semibold text-text-primary">
                Honest Framing
              </h3>

              <p className="mt-5 leading-7 text-text-muted">
                This research evaluates predictive performance under the provided
                dataset and experimental conditions. The reported results should be
                interpreted as evidence within this specific setting rather than a
                universal solution for SEO prediction. Continuous validation and
                monitoring remain essential before deployment in production.
              </p>
            </div>
          </div>
        </PaperSection>

        {/* ========================= RECOMMENDATIONS ========================= */}

        <PaperSection
          id="recommendations"
          title="Ranked Recommendations"
          subtitle="Actionable insights derived from the experimental findings."
        >
          {/* Executive Cards */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                rank: "1",
                title: "Prioritize High Opportunity Pages",
                desc: "Focus optimization efforts on pages predicted to have the highest click opportunity.",
              },
              {
                rank: "2",
                title: "Use Human Review",
                desc: "Review model recommendations before implementing SEO changes.",
              },
              {
                rank: "3",
                title: "Monitor Model Drift",
                desc: "Track performance as search behaviour evolves over time.",
              },
              {
                rank: "4",
                title: "Retrain Regularly",
                desc: "Refresh the model with newly collected Search Console data.",
              },
            ].map((card) => (
              <div
                key={card.rank}
                className="rounded-card border border-border-subtle bg-surface-card p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent-blue/15 text-lg font-bold text-accent-blue">
                  {card.rank}
                </div>

                <h3 className="font-semibold text-text-primary">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-text-muted">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Ranked Action Table */}
          <div className="mt-10 overflow-x-auto rounded-card border border-border-subtle">
            <table className="w-full text-left">
              <thead className="bg-surface-card">
                <tr>
                  <th className="px-5 py-4">Priority</th>
                  <th className="px-5 py-4">Recommendation</th>
                  <th className="px-5 py-4">Expected Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border-subtle">
                  <td className="px-5 py-4 font-semibold">High</td>
                  <td className="px-5 py-4">Optimize pages with highest predicted click opportunity.</td>
                  <td className="px-5 py-4">High</td>
                </tr>
                <tr className="border-t border-border-subtle">
                  <td className="px-5 py-4 font-semibold">High</td>
                  <td className="px-5 py-4">Validate recommendations manually.</td>
                  <td className="px-5 py-4">High</td>
                </tr>
                <tr className="border-t border-border-subtle">
                  <td className="px-5 py-4 font-semibold">Medium</td>
                  <td className="px-5 py-4">Monitor prediction confidence over time.</td>
                  <td className="px-5 py-4">Medium</td>
                </tr>
                <tr className="border-t border-border-subtle">
                  <td className="px-5 py-4 font-semibold">Low</td>
                  <td className="px-5 py-4">Retrain periodically using fresh data.</td>
                  <td className="px-5 py-4">Long-term</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Archetype Mapping */}
          <div className="mt-10 overflow-x-auto rounded-card border border-border-subtle bg-surface-card p-7">
            <h3 className="text-xl font-semibold text-text-primary">
              Archetype → Recommended Action
            </h3>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="pb-4 text-left">Content Archetype</th>
                    <th className="pb-4 text-left">Recommended Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border-subtle">
                    <td className="py-4">High Impression • Low Click</td>
                    <td>Improve title and meta description.</td>
                  </tr>
                  <tr className="border-t border-border-subtle">
                    <td className="py-4">Strong CTR • Low Visibility</td>
                    <td>Increase impressions through content expansion.</td>
                  </tr>
                  <tr className="border-t border-border-subtle">
                    <td className="py-4">High Performing</td>
                    <td>Maintain quality and monitor trends.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Human Review */}
          <div className="mt-10 rounded-card border border-border-subtle bg-bg-secondary p-7">
            <h3 className="text-xl font-semibold text-text-primary">
              Human Review Rules
            </h3>

            <ul className="mt-5 space-y-3 text-text-muted">
              <li>• Review all high-impact recommendations before deployment.</li>
              <li>• Validate predictions using domain expertise.</li>
              <li>• Investigate unusual prediction confidence.</li>
              <li>• Compare with current SEO strategy.</li>
            </ul>
          </div>

          {/* No-Go List */}
          <div className="mt-10 rounded-card border border-red-500/20 bg-red-500/5 p-7">
            <h3 className="text-xl font-semibold text-red-400">
              No-Go List
            </h3>

            <ul className="mt-5 space-y-3 text-text-muted">
              <li>• Do not automate content publication solely from model output.</li>
              <li>• Do not ignore uncertainty or prediction confidence.</li>
              <li>• Do not assume future search behaviour remains unchanged.</li>
              <li>• Do not replace expert judgement with ML predictions.</li>
            </ul>
          </div>

          {/* Monitoring */}
          <div className="mt-10 rounded-card border border-border-subtle bg-bg-secondary p-7">
            <h3 className="text-xl font-semibold text-text-primary">
              Monitoring & Retraining
            </h3>

            <p className="mt-5 leading-7 text-text-muted">
              After deployment, model performance should be monitored continuously.
              Retraining should occur whenever search behaviour changes significantly,
              new datasets become available, or evaluation metrics degrade beyond
              acceptable thresholds.
            </p>
          </div>
        </PaperSection>

        {/* ========================= REPRODUCIBILITY ========================= */}

        <PaperSection
          id="reproducibility"
          title="Reproducibility"
          subtitle="Resources required to reproduce the experiments."
        >
          <p>
            Reproducibility is an essential aspect of trustworthy machine learning
            research. The complete implementation—including data preprocessing,
            feature engineering, model training, validation, and evaluation—is
            available in the accompanying GitHub repository.
          </p>

          <div className="mt-8 rounded-card border border-border-subtle bg-surface-card p-7">
            <h3 className="text-xl font-semibold text-text-primary">
              Project Repository
            </h3>

            <p className="mt-4 leading-7 text-text-muted">
              The repository contains the notebook, preprocessing pipeline, training
              workflow, evaluation code, and documentation used throughout this study.
            </p>

            <a
              href="https://github.com/ahmedali2155/flyrank-ml-internship"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center rounded-lg bg-accent-blue px-5 py-3 font-medium text-white transition hover:opacity-90"
            >
              View GitHub Repository
            </a>
          </div>

          <div className="mt-8 rounded-card border border-border-subtle bg-bg-secondary p-7">
            <h3 className="text-xl font-semibold text-text-primary">
              Reproduction Checklist
            </h3>

            <ul className="mt-5 space-y-3 text-text-muted">
              <li>✅ Source notebook included</li>
              <li>✅ Feature engineering documented</li>
              <li>✅ Training pipeline available</li>
              <li>✅ Validation methodology documented</li>
              <li>✅ Evaluation metrics reproducible</li>
            </ul>
          </div>
        </PaperSection>

        {/* ========================= ACKNOWLEDGMENTS ========================= */}

        <PaperSection
          id="acknowledgments"
          title="Acknowledgments & Data Credit"
          subtitle="Recognition of supporting resources and dataset."
        >
          <div className="rounded-card border border-border-subtle bg-surface-card p-8">
            <p className="leading-8 text-text-muted">
              This project was completed as part of the
              <span className="font-semibold text-text-primary">
                {" "}FlyRank Machine Learning Internship (ML-11)
              </span>.
            </p>

            <p className="mt-5 leading-8 text-text-muted">
              Built on the FlyRank ML Internship dataset.
            </p>

            <a
              href="https://flyrank.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex text-accent-blue hover:underline"
            >
              https://flyrank.ai
            </a>

            <div className="mt-8 border-t border-border-subtle pt-6">
              <h3 className="text-lg font-semibold text-text-primary">
                Credits
              </h3>

              <ul className="mt-4 space-y-3 text-text-muted">
                <li>• FlyRank Machine Learning Internship</li>
                <li>• Google Search Console Performance Dataset</li>
                <li>• Random Forest Classification</li>
                <li>• React + TypeScript + Vite Portfolio</li>
              </ul>
            </div>
          </div>
        </PaperSection>

        {/* ========================= CONCLUSION ========================= */}

        <PaperSection
          id="conclusion"
          title="Conclusion"
          subtitle="Summary of findings and future work."
        >
          <p>
            The study demonstrates that Google Search Console performance metrics 
            provide useful predictive signals for identifying high-click webpages. 
            The Random Forest classifier achieved strong performance while grouped 
            validation ensured a more realistic estimate of generalization, 
            supporting the practical use of machine learning for SEO prioritization.
          </p>

          <div className="mt-10 rounded-card border border-accent-blue/20 bg-accent-blue/5 p-8">
            <h3 className="text-xl font-semibold text-text-primary">
              Future Work
            </h3>

            <ul className="mt-5 space-y-3 text-text-muted">
              <li>• Evaluate additional machine learning algorithms.</li>
              <li>• Explore explainable AI techniques.</li>
              <li>• Test larger datasets.</li>
              <li>• Investigate temporal model drift.</li>
              <li>• Deploy an automated prediction pipeline.</li>
            </ul>
          </div>
        </PaperSection>

        {/* ========================= PAPER FOOTER ========================= */}

        <section className="mt-20 border-t border-border-subtle py-12">
          <div className="flex flex-col items-center gap-5 text-center">
            <p className="text-sm text-text-muted">
              © 2026 Ahmed Ali • FlyRank ML Internship Research Paper
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/"
                className="rounded-lg border border-border-subtle px-5 py-3 text-sm font-medium hover:bg-surface-card"
              >
                ← Back to Portfolio
              </Link>

              <a
                href="https://github.com/ahmedali2155/flyrank-ml-internship"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-accent-blue px-5 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </section>
      </ResearchLayout>
    </>
  );
}