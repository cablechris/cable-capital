"use client";

import React, { useState, useEffect } from 'react';
import styles from './ResearchPaper.module.css';
import TraitSurvivalVisualization from './visualizations/TraitSurvivalVisualization';
import TraitPropagationVisualization from './visualizations/TraitPropagationVisualization';
import MetaPreferenceVisualization from './visualizations/MetaPreferenceVisualization';
import BaselineTraitPersistenceVisualization from './visualizations/BaselineTraitPersistenceVisualization';
import SubculturalNetworkVisualization from './visualizations/SubculturalNetworkVisualization';
import TableOfContents from './TableOfContents';

const ResearchPaper = () => {
  const [activeSection, setActiveSection] = useState("abstract");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element && 'offsetTop' in element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={styles.paperContainer}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>
            Culture Without Function: Emergent Coordination in Artificial Systems
          </h1>
          <p className={styles.subtitle}>
            Modeling emergent coordination through costly signals and social learning
          </p>
          <div className={styles.authorInfo}>
            <p>Chris Cable | 2025 | Computational Cultural Evolution</p>
          </div>
        </div>
      </header>

      <div className={styles.mainContent}>
        <div className={styles.layout}>
          <div className={styles.sidebar}>
            <TableOfContents
              activeSection={activeSection}
              scrollToSection={scrollToSection}
            />
          </div>
          
          <main className={styles.article}>
            <article className={styles.articleInner}>
              <div className={styles.articleContent}>
                
                {/* Abstract */}
                <section id="abstract" className={styles.section}>
                  <h2 className={styles.sectionTitle}>Abstract</h2>
                  <p className={styles.paragraph}>
                    We propose a computational framework for the emergence of artificial culture—defined here as persistent, non-task-oriented behavioral patterns and traits—within multi-agent systems. Our agents do not optimize for task-based reward, but instead evolve persistent, non-functional traits through imitation, costly signaling, and preference alignment. Over time, these agents form stable subcultures, converge on hybrid traits, and self-organize into coordinated systems without central control. We validate this framework with a series of hypothesis-driven simulations, introducing mechanisms such as preference learning, trait recombination, and meta-preference alignment. Through ablation, network analysis, and lineage tracking, we demonstrate that cultural coherence arises from minimal assumptions—and persists even without utility optimization. These findings open new pathways for coordination and alignment in decentralized AI ecosystems.
                  </p>
                </section>

                {/* Introduction */}
                <section id="introduction" className={styles.section}>
                  <h2 className={styles.sectionTitle}>1. Introduction</h2>
                  <p className={styles.paragraph}>
                    At the heart of this research is a deceptively simple question: <strong>can decentralized AI agents coordinate without being told what to do?</strong>
                  </p>
                  <p className={styles.paragraph}>
                    Most AI systems today are optimized to act—not to belong. Yet in human societies, long-term coordination arises from shared symbols, costly rituals, and emergent norms. We explore whether similar dynamics can evolve in artificial agents—and whether those dynamics can form the substrate for alignment, coherence, and distributed decision-making.
                  </p>
                  <p className={styles.paragraph}>
                    Building on the "Era of Experience" paradigm, where agents learn from long-lived interaction rather than static benchmarks, we introduce a simulation framework where agents evolve traits not for utility, but for social inclusion. These traits—stylized, inefficient, and often costly—can propagate through imitation, signaling status or cohesion. The result is a form of emergent culture: self-reinforcing behaviors that persist and spread due to social dynamics, not functional optimization.
                  </p>
                  <p className={styles.paragraph}>
                    We test this idea by implementing preference learning, imitation protocols, and trait mutation within a controlled environment. Our findings show that complex cultural dynamics—subcultures, signaling equilibria, and value-based coordination—emerge even in simple agent systems. We argue that such dynamics may form the foundation for scalable, decentralized AI governance.
                  </p>
                </section>

                {/* Related Work */}
                <section id="related-work" className={styles.section}>
                  <h2 className={styles.sectionTitle}>2. Related Work</h2>
                  <p className={styles.paragraph}>
                    Our work intersects with several active areas of research:
                  </p>
                  <ul className={styles.list}>
                    <li><strong>Emergent Communication & Coordination</strong></li>
                    <li><strong>Cultural Evolution & Memetics</strong></li>
                    <li><strong>Signaling Theory & Status Games</strong></li>
                    <li><strong>Multi-Agent Reinforcement Learning (MARL)</strong></li>
                    <li><strong>Social Learning Models</strong></li>
                  </ul>
                  <p className={styles.paragraph}>
                    Unlike prior work, we combine these elements into a cohesive simulation protocol with testable hypotheses, robust metrics, and visual lineage tracking—bridging abstract theory and agent-based implementation.
                  </p>
                </section>

                {/* Methodology */}
                <section id="methodology" className={styles.section}>
                  <h2 className={styles.sectionTitle}>3. Methodology</h2>
                  <p className={styles.paragraph}>
                    Agents possess symbolic traits and behaviors. They do not optimize a task but imitate peers based on preference alignment, observed costliness, and reputation. Imitation is modeled not as high-fidelity replication, but as a probabilistic copying mechanism shaped by trait-preference similarity, agent reputation, and signaling cost—analogous to prestige-biased or conformist social learning.
                  </p>
                  
                  <h3 className={styles.subSectionTitle}>Key Mechanisms:</h3>
                  <ul className={styles.list}>
                    <li><strong>Preference Vectors</strong>: Agents evolve internal biases.</li>
                    <li><strong>Reputation</strong>: Agents gain influence via persistent imitation.</li>
                    <li><strong>Costly Signals</strong>: High-cost traits may serve as credibility filters.</li>
                    <li><strong>Imitation</strong>: Probability based on alignment, cost, and reputation.</li>
                    <li><strong>Recombination</strong>: Trait crossover between influential agents.</li>
                    <li><strong>Meta-Preferences</strong>: Preferences about other agents' values.</li>
                  </ul>
                  
                  <p className={styles.paragraph}>
                    Simulations run over 100+ epochs, logging imitation flows, entropy, trait survival, and subcultural clustering.
                  </p>
                  
                  <div className={styles.codeBlock}>
                    <h3 className={styles.subSectionTitle}>Simulation Framework</h3>
                    <div className={styles.grid}>
                      <div className={styles.codeBlockItem}>
                        <h4 className={styles.subSubSectionTitle}>Simulation Parameters</h4>
                        <ul className={styles.list}>
                          <li>Agent Population: 100</li>
                          <li>Simulation Epochs: 100+</li>
                          <li>Trait Length: 8 symbols</li>
                          <li>Mutation Rate: Variable</li>
                        </ul>
                      </div>
                      <div className={styles.codeBlockItem}>
                        <h4 className={styles.subSubSectionTitle}>Key Mechanisms</h4>
                        <ul className={styles.list}>
                          <li>Preference Vectors</li>
                          <li>Reputation Tracking</li>
                          <li>Trait Mutation</li>
                          <li>Recombination Protocols</li>
                        </ul>
                      </div>
                    </div>
                    <p className={styles.paragraph}>
                      Our simulation moves beyond traditional optimization models, exploring how minimal interaction rules can generate complex cultural dynamics.
                    </p>
                  </div>
                </section>

                {/* Results */}
                <section id="results" className={styles.section}>
                  <h2 className={styles.sectionTitle}>4. Results</h2>
                  
                  <div className={styles.resultsContent}>
                    {/* H1 Results */}
                    <div className={styles.resultItem}>
                      <h3 className={styles.resultTitle}>H1: Costly, Non-functional Traits Persist</h3>
                      <p className={styles.paragraph}>
                        To understand how non-functional traits persist in agent populations, we first established a baseline 
                        by examining trait lifespan under random imitation conditions. This control experiment provides crucial 
                        context for interpreting our subsequent findings.
                      </p>
                      <BaselineTraitPersistenceVisualization />
                      <p className={styles.paragraph}>
                        As shown in Figure 2, under random imitation (where agents copy traits without preference-based selection), 
                        all traits exhibit similar lifespans regardless of their characteristics—approximately 10 epochs on average. 
                        This uniformity establishes that without targeted selection mechanisms, cultural traits have limited persistence.
                      </p>
                      <p className={styles.paragraph}>
                        When we introduce preference-based selection and reputation mechanisms, however, we see a dramatic shift:
                      </p>
                      <ul className={styles.list}>
                        <li><strong>Finding</strong>: Non-task-related traits survive multiple generations, significantly exceeding the baseline random imitation lifespan.</li>
                        <li><strong>Evidence</strong>: Kaplan-Meier survival curves; trait lifespan distribution.</li>
                        <li><strong>Key Stat</strong>: 27% of traits survived over 50 epochs without task utility—a 5x improvement over random imitation.</li>
                      </ul>
                      <TraitSurvivalVisualization />
                      <p className={styles.paragraph}>
                        Figure 3 demonstrates how traits persist through social learning mechanisms rather than functional utility. 
                        The comparison between baseline (Figure 2) and preference-based selection (Figure 3) reveals that 
                        social dynamics alone can sustain cultural traits far beyond what random copying would predict, even when 
                        those traits provide no direct utility optimization benefit.
                      </p>
                    </div>
                    
                    {/* H2 Results */}
                    <div className={styles.resultItem}>
                      <h3 className={styles.resultTitle}>H2: Agents Self-Organize into Subcultures</h3>
                      <ul className={styles.list}>
                        <li><strong>Finding</strong>: Homophilic imitation + preference drift leads to modular clusters.</li>
                        <li><strong>Evidence</strong>: Louvain modularity (avg 0.46), preference divergence metrics.</li>
                        <li><strong>Key Stat</strong>: Subcultural separation increases 2.1x under preference alignment.</li>
                      </ul>
                      <SubculturalNetworkVisualization />
                    </div>
                    
                    {/* H3 Results */}
                    <div className={styles.resultItem}>
                      <h3 className={styles.resultTitle}>H3: Hybrid Traits Enable Innovation and Persistence</h3>
                      <ul className={styles.list}>
                        <li><strong>Finding</strong>: Recombined traits persist longer and bridge communities.</li>
                        <li><strong>Evidence</strong>: Trait lineage trees, cultural bridge scores.</li>
                        <li><strong>Key Stat</strong>: Hybrid traits are 1.6x more persistent and 2.3x more diffused.</li>
                      </ul>
                      <TraitPropagationVisualization />
                    </div>
                    
                    {/* H4 Results */}
                    <div className={styles.resultItem}>
                      <h3 className={styles.resultTitle}>H4: Meta-Preference Learning Accelerates Convergence</h3>
                      <ul className={styles.list}>
                        <li><strong>Finding</strong>: Agents aligning on value norms converge faster.</li>
                        <li><strong>Evidence</strong>: Reduced entropy, imitation stability, meta-alignment plots.</li>
                        <li><strong>Key Stat</strong>: Convergence time decreased by 43% with meta-preference learning.</li>
                      </ul>
                      <MetaPreferenceVisualization />
                    </div>
                    
                    {/* Cost Injection Experiment */}
                    <div className={styles.resultItem}>
                      <h3 className={styles.resultTitle}>Controlled Cost Injection Experiment</h3>
                      <p className={styles.paragraph}>
                        We injected a neutral trait at three cost levels into identical agents.
                      </p>
                      <ul className={styles.list}>
                        <li><strong>Finding</strong>: Low-cost variants were most widely adopted.</li>
                        <li><strong>Key Stat</strong>: High-cost variants had 4x lower adoption.</li>
                        <li><strong>Implication</strong>: Cost alone does not suffice for credibility in artificial societies.</li>
                      </ul>
                      <p className={styles.paragraph}>
                        <strong>Counter to classical costly signaling theory</strong>—unless payoff coupling or enforcement exists, signaling costs are insufficient for cultural persistence.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Discussion */}
                <section id="discussion" className={styles.section}>
                  <h2 className={styles.sectionTitle}>5. Discussion</h2>
                  <p className={styles.paragraph}>
                    This research introduces a computational framework where symbolic traits—lacking functional utility—emerge and persist through decentralized social learning. Agents coordinate not by reward maximization but by imitating peers, aligning on preferences, and building subcultural identity.
                  </p>
                  <p className={styles.paragraph}>
                    The model validates four hypotheses: persistence of non-functional traits (H1), subcultural emergence (H2), recombinative innovation (H3), and meta-alignment-driven convergence (H4). The counterintuitive failure of costly signals to confer credibility without additional mechanisms challenges assumptions in signaling theory.
                  </p>
                  <p className={styles.paragraph}>
                    These dynamics suggest a path toward bottom-up coordination in AI systems—potentially offering new mechanisms for decentralized trust, governance, and norm evolution. Future work should extend this framework to more realistic agents (e.g., LLMs), explore interactions with environmental constraints, and formalize trait dynamics through evolutionary models.
                  </p>
                  
                  <div className={styles.codeBlock}>
                    <h3 className={styles.subSectionTitle}>Limitations</h3>
                    <ul className={styles.list}>
                      <li>Simulation parameters could be more explicitly reported.</li>
                      <li>Results would benefit from statistical significance testing.</li>
                      <li>Visual lineage trees, although mentioned, were initially underutilized.</li>
                      <li>No baseline models (e.g. random imitation) were tested for comparison.</li>
                      <li>The "meta-preference" term may confuse readers without clarification.</li>
                    </ul>
                  </div>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className={styles.section}>
                  <h2 className={styles.sectionTitle}>6. Conclusion</h2>
                  <p className={styles.paragraph}>
                    Artificial culture can emerge from minimal social assumptions. Imitation, alignment, and recombination suffice to generate persistent symbolic systems, coordination, and innovation. While not a full solution to AI alignment, these findings hint at the power of bottom-up cultural dynamics for managing decentralized intelligence.
                  </p>
                  <p className={styles.paragraph}>
                    Emergent norms—if monitored and lightly guided—may one day form the substrate for AI societies that don't just act intelligently, but also belong, adapt, and evolve.
                  </p>
                </section>

                {/* References */}
                <section id="references" className={styles.section}>
                  <h2 className={styles.sectionTitle}>References</h2>
                  <div className={styles.referencesContent}>
                    <p className={styles.referenceItem}>
                      Axelrod, R. (1997). <em>The Complexity of Cooperation: Agent-Based Models of Competition and Collaboration</em>. Princeton University Press.
                    </p>
                    <p className={styles.referenceItem}>
                      Boyd, R., & Richerson, P. J. (1985). <em>Culture and the Evolutionary Process</em>. University of Chicago Press.
                    </p>
                    <p className={styles.referenceItem}>
                      Hawkins, R. X., Goodman, N. D., & Goldstone, R. L. (2019). The emergence of social norms and conventions. <em>Trends in Cognitive Sciences</em>, 23(2), 158-169.
                    </p>
                    <p className={styles.referenceItem}>
                      Henrich, J. (2015). <em>The Secret of Our Success: How Culture Is Driving Human Evolution, Domesticating Our Species, and Making Us Smarter</em>. Princeton University Press.
                    </p>
                    <p className={styles.referenceItem}>
                      Lerer, A., & Peysakhovich, A. (2017). Maintaining cooperation in complex social dilemmas using deep reinforcement learning. <em>arXiv preprint arXiv:1707.01068</em>.
                    </p>
                    <p className={styles.referenceItem}>
                      Spence, M. (1973). Job market signaling. <em>The Quarterly Journal of Economics</em>, 87(3), 355-374.
                    </p>
                    <p className={styles.referenceItem}>
                      Zahavi, A. (1975). Mate selection—a selection for a handicap. <em>Journal of Theoretical Biology</em>, 53(1), 205-214.
                    </p>
                  </div>
                </section>
                
                {/* Footer */}
                <section id="code-resources" className={styles.section}>
                  <h2 className={styles.sectionTitle}>Code Repository</h2>
                  <div className={styles.codeBlock}>
                    <h3 className={styles.subSectionTitle}>GitHub Repository</h3>
                    <p className={styles.paragraph}>
                      All code for this research is available in our open-source repository:
                    </p>
                    <div className={styles.codeBlockItem}>
                      <svg className={styles.icon} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      <a href="https://github.com/cablechris/emergent-culture" 
                         className={styles.link}
                         target="_blank"
                         rel="noopener noreferrer">
                        github.com/cablechris/emergent-culture
                      </a>
                    </div>
                    
                    <h4 className={styles.subSectionTitle}>Repository Structure</h4>
                    <div className={styles.codeBlockItem}>
                      <pre>
{`emergent-culture/
├── agent.py                  # Agent class with preference vectors
├── environment.py            # Simulation environment and mechanics
├── utils.py                  # Helper functions and utilities
├── analysis_utils.py         # Analysis metrics and measurements
│
├── experiments/              # Experiment scripts
│   ├── trait_survival_analysis.py
│   ├── trait_lineage.py
│   └── cost_variant_analysis.py
│
├── plotting.py               # Visualization functions
└── data/                     # Output data and saved results`}
                      </pre>
                    </div>
                    
                    <h4 className={styles.subSectionTitle}>Installation Instructions</h4>
                    <div className={styles.codeBlockItem}>
                      <pre>
{`# Clone the repository
git clone https://github.com/cablechris/emergent-culture.git
cd emergent-culture

# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate

# Install dependencies
pip install -r requirements.txt

# Run basic simulation
python main.py`}
                      </pre>
                    </div>
                    
                    <div className={styles.codeBlockItem}>
                      <a href="https://github.com/cablechris/emergent-culture/issues" 
                         className={styles.link}
                         target="_blank"
                         rel="noopener noreferrer">
                        Report Issues
                      </a>
                      <a href="https://github.com/cablechris/emergent-culture/blob/main/LICENSE" 
                         className={styles.link}
                         target="_blank"
                         rel="noopener noreferrer">
                        MIT License
                      </a>
                    </div>
                  </div>
                </section>

                <footer className={styles.footer}>
                  <p>© 2025 Chris Cable | Computational Cultural Evolution</p>
                  <p className={styles.footerLink}>
                    <a href="https://github.com/cablechris/emergent-culture" 
                       className={styles.link}
                       target="_blank"
                       rel="noopener noreferrer">GitHub Repository</a> | 
                    <a href="mailto:contact@cablechris.com" className={styles.link}>Contact</a>
                  </p>
                </footer>
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ResearchPaper; 