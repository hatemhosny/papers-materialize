import { IArticle } from './article.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticleService {

  constructor() { }

  /* tslint:disable */

  getArticles(): [IArticle] {
    return [
  {
    "id": 4578,
    "title": "Association of Systolic Blood Pressure Variability With Mortality, Coronary Heart Disease, Stroke, and Renal Disease.",
    "journal": "Journal of the American College of Cardiology",
    "types": [
      {
        "publication_type": "Journal Article"
      }
    ],
    "duration": "00:02:50",
    "date": "//",
    "year": "2016",
    "month": "Sep",
    "abstract": [
      {
        "abstract_section": "BACKGROUND",
        "abstract_text": "<p>Intraindividual blood pressure (BP) fluctuates dynamically over time. Previous studies suggested an adverse link between greater visit-to-visit variability in systolic blood pressure (SBP) and various outcomes. However, these studies have significant limitations, such as a small size, inclusion of selected populations, and restricted outcomes.</p>\n"
      },
      {
        "abstract_section": "OBJECTIVES",
        "abstract_text": "<p>This study investigated the association of increased visit-to-visit variability and all-cause mortality, cardiovascular events, and end-stage renal disease (ESRD) in a large cohort of U.S. veterans.</p>\n"
      },
      {
        "abstract_section": "METHODS",
        "abstract_text": "<p>From among 3,285,684 U.S. veterans with and without hypertension and normal estimated glomerular filtration rates (eGFR) during 2005 and 2006, we identified 2,865,157 patients who had 8 or more outpatient BP measurements. Systolic blood pressure variability (SBPV) was measured using the SD of all SBP values (normally distributed) in 1 individual. Associations of SD quartiles (<10.3, 10.3 to 12.7, 12.7 to 15.6, and ≥15.6 mm Hg) with all-cause mortality, incident coronary heart disease (CHD), stroke, and ESRD was examined using Cox models adjusted for sociodemographic characteristics, baseline eGFR, comorbidities, body mass index, SBP, diastolic BP, and antihypertensive medication use.\n</p>\n"
      },
      {
        "abstract_section": "RESULTS",
        "abstract_text": "<p>Several sociodemographic variables (older age, male sex, African-American race, divorced or widowed status) and clinical characteristics (lower baseline eGFR, higher SBP and diastolic BP), and comorbidities (presence of diabetes, hypertension, cardiovascular disease, and lung disease) were all associated with higher intraindividual SBPV. The multivariable adjusted hazard ratios and 95% confidence intervals for SD quartiles 2 through 4 (compared with the first quartile) associated with all-cause mortality, CHD, stroke, and ESRD were incrementally higher.</p>\n"
      },
      {
        "abstract_section": "CONCLUSIONS",
        "abstract_text": "<p>Higher SBPV in individuals with and without hypertension was associated with increased risks of all-cause mortality, CHD, stroke, and ESRD. Further studies are needed to determine interventions that can lower SBPV and their impact on adverse health outcomes.</p>\n"
      }
    ]
  },
  {
    "id": 4577,
    "title": "Thromboembolic, Bleeding, and Mortality Risks of Rivaroxaban and Dabigatran in Asians With Nonvalvular Atrial Fibrillation.",
    "journal": "Journal of the American College of Cardiology",
    "types": [
      {
        "publication_type": "Journal Article"
      }
    ],
    "duration": "00:03:16",
    "date": "//",
    "year": "2016",
    "month": "Sep",
    "abstract": [
      {
        "abstract_section": "BACKGROUND",
        "abstract_text": "<p>It is unclear whether the non-vitamin K antagonist oral anticoagulant agents rivaroxaban and dabigatran are superior to warfarin for efficacy and safety outcomes in Asians with nonvalvular atrial fibrillation (NVAF).</p>\n"
      },
      {
        "abstract_section": "OBJECTIVES",
        "abstract_text": "<p>The aim of this study was to compare the risk for thromboembolic events, bleeding, and mortality associated with rivaroxaban and dabigatran versus warfarin in Asians with NVAF.</p>\n"
      },
      {
        "abstract_section": "METHODS",
        "abstract_text": "<p>A nationwide retrospective cohort study was conducted of consecutive patients with NVAF taking rivaroxaban (n = 3,916), dabigatran (n = 5,921), or warfarin (n = 5,251) using data collected from the Taiwan National Health Insurance Research Database between February 1, 2013 and December 31, 2013. The propensity score weighting method was used to balance covariates across study groups. Patients were followed until the first occurrence of any study outcome or the study end date (December 31, 2013).</p>\n"
      },
      {
        "abstract_section": "RESULTS",
        "abstract_text": "<p>A total of 3,425 (87%) and 5,301 (90%) patients were taking low-dose rivaroxaban (10 to 15 mg once daily) and dabigatran (110 mg twice daily), respectively. Compared with warfarin, both rivaroxaban and dabigatran significantly decreased the risk for ischemic stroke or systemic embolism (p = 0.0004 and p = 0.0006, respectively), intracranial hemorrhage (p = 0.0007 and p = 0.0005, respectively), and all-cause mortality (p < 0.0001 and p < 0.0001, respectively) during the short follow-up period. In comparing the 2 non-vitamin K antagonist oral anticoagulant agents with each other, no differences were found regarding risk for ischemic stroke or systemic embolism, intracranial hemorrhage, myocardial infarction, or mortality. Rivaroxaban carried a significantly higher risk for hospitalization for gastrointestinal bleeding than dabigatran (p = 0.0416), but on-treatment analysis showed that the risk for hospitalized gastrointestinal bleeding was similar between the 2 drugs (p = 0.5783).\n</p>\n"
      },
      {
        "abstract_section": "CONCLUSIONS",
        "abstract_text": "<p>In real-world practice among Asians with NVAF, both rivaroxaban and dabigatran were associated with reduced risk for ischemic stroke or systemic embolism, intracranial hemorrhage, and all-cause mortality without significantly increased risk for acute myocardial infarction or hospitalization for gastrointestinal bleeding compared with warfarin.</p>\n"
      }
    ]
  },
  {
    "id": 4575,
    "title": "Neutrophil Gelatinase-Associated Lipocalin for Acute Kidney Injury During Acute Heart Failure Hospitalizations: The AKINESIS Study.",
    "journal": "Journal of the American College of Cardiology",
    "types": [
      {
        "publication_type": "Journal Article"
      }
    ],
    "duration": "00:02:59",
    "date": "//",
    "year": "2016",
    "month": "Sep",
    "abstract": [
      {
        "abstract_section": "BACKGROUND",
        "abstract_text": "<p>Worsening renal function (WRF) often occurs during acute heart failure (AHF) and can portend adverse outcomes; therefore, early identification may help mitigate risk. Neutrophil gelatinase-associated lipocalin (NGAL) is a novel renal biomarker that may predict WRF in certain disorders, but its value in AHF is unknown.</p>\n"
      },
      {
        "abstract_section": "OBJECTIVES",
        "abstract_text": "<p>This study sought to determine whether NGAL is superior to creatinine for prediction and/or prognosis of WRF in hospitalized patients with AHF treated with intravenous diuretic agents.</p>\n"
      },
      {
        "abstract_section": "METHODS",
        "abstract_text": "<p>This was a multicenter, prospective cohort study enrolling patients presenting with AHF requiring intravenous diuretic agents. The primary outcome was whether plasma NGAL could predict the development of WRF, defined as a sustained increase in plasma creatinine of 0.5 mg/dl or ≥50% above first value or initiation of acute renal-replacement therapy, within the first 5 days of hospitalization. The main secondary outcome was in-hospital adverse events.</p>\n"
      },
      {
        "abstract_section": "RESULTS",
        "abstract_text": "<p>We enrolled 927 subjects (mean age, 68.5 years; 62% men). The primary outcome occurred in 72 subjects (7.8%). Peak NGAL was more predictive than the first NGAL, but neither added significant diagnostic utility over the first creatinine (areas under the curve: 0.656, 0.647, and 0.652, respectively). There were 235 adverse events in 144 subjects. The first NGAL was a better predictor than peak NGAL, but similar to the first creatinine (areas under the curve: 0.691, 0.653, and 0.686, respectively). In a post hoc analysis of subjects with an estimated glomerular filtration rate <60 ml/min/1.73 m(2), a first NGAL <150 ng/ml indicated a low likelihood of adverse events.\n</p>\n"
      },
      {
        "abstract_section": "CONCLUSIONS",
        "abstract_text": "<p>Plasma NGAL was not superior to creatinine for the prediction of WRF or adverse in-hospital outcomes. The use of plasma NGAL to diagnose acute kidney injury in AHF cannot be recommended at this time. (Acute Kidney Injury Neutrophil Gelatinase-Associated Lipocalin [N-GAL] Evaluation of Symptomatic Heart Failure Study [AKINESIS]; NCT01291836).</p>\n"
      }
    ]
  },
  {
    "id": 4574,
    "title": "52 Genetic Loci Influencing Myocardial Mass.",
    "journal": "Journal of the American College of Cardiology",
    "types": [
      {
        "publication_type": "Journal Article"
      }
    ],
    "duration": "00:02:02",
    "date": "//",
    "year": "2016",
    "month": "Sep",
    "abstract": [
      {
        "abstract_section": "BACKGROUND",
        "abstract_text": "<p>Myocardial mass is a key determinant of cardiac muscle function and hypertrophy. Myocardial depolarization leading to cardiac muscle contraction is reflected by the amplitude and duration of the QRS complex on the electrocardiogram (ECG). Abnormal QRS amplitude or duration reflect changes in myocardial mass and conduction, and are associated with increased risk of heart failure and death.</p>\n"
      },
      {
        "abstract_section": "OBJECTIVES",
        "abstract_text": "<p>This meta-analysis sought to gain insights into the genetic determinants of myocardial mass.</p>\n"
      },
      {
        "abstract_section": "METHODS",
        "abstract_text": "<p>We carried out a genome-wide association meta-analysis of 4 QRS traits in up to 73,518 individuals of European ancestry, followed by extensive biological and functional assessment.</p>\n"
      },
      {
        "abstract_section": "RESULTS",
        "abstract_text": "<p>We identified 52 genomic loci, of which 32 are novel, that are reliably associated with 1 or more QRS phenotypes at p < 1 × 10(-8). These loci are enriched in regions of open chromatin, histone modifications, and transcription factor binding, suggesting that they represent regions of the genome that are actively transcribed in the human heart. Pathway analyses provided evidence that these loci play a role in cardiac hypertrophy. We further highlighted 67 candidate genes at the identified loci that are preferentially expressed in cardiac tissue and associated with cardiac abnormalities in Drosophila melanogaster and Mus musculus. We validated the regulatory function of a novel variant in the SCN5A/SCN10A locus in vitro and in vivo.\n</p>\n"
      },
      {
        "abstract_section": "CONCLUSIONS",
        "abstract_text": "<p>Taken together, our findings provide new insights into genes and biological pathways controlling myocardial mass and may help identify novel therapeutic targets.</p>\n"
      }
    ]
  },
  {
    "id": 4573,
    "title": "Atrial Fibrillation and Thromboembolism in Patients With Chronic Kidney Disease.",
    "journal": "Journal of the American College of Cardiology",
    "types": [
      {
        "publication_type": "Journal Article"
      },
      {
        "publication_type": "Review"
      }
    ],
    "duration": "00:01:13",
    "date": "//",
    "year": "2016",
    "month": "Sep",
    "abstract": [
      {
        "abstract_section": "",
        "abstract_text": "<p>A bidirectional relationship exists between atrial fibrillation (AF) and chronic renal disease. Patients with AF have a higher incidence of renal dysfunction, and the latter predisposes to incident AF. The coexistence of both conditions results in a higher risk for thromboembolic-related adverse events but a paradoxical increased hemorrhagic risk. Oral anticoagulants (both vitamin K antagonists [VKAs] and non-VKA oral anticoagulants [NOACs]) have been demonstrated to be effective in mild to moderate renal dysfunction. Patients with severe renal impairment were excluded from the non-VKA oral anticoagulant trials, so limited data are available. In end-stage renal failure, the net clinical benefit of VKAs in dialysis-dependent patients remains uncertain, although some evidence suggests that such patients may do well with high-quality anticoagulation control. Risk stratification and careful follow-up of such patients are necessary to ensure a net clinical benefit from thromboprophylaxis.</p>\n"
      }
    ]
  },
  {
    "id": 4572,
    "title": "Contrast-Induced Acute Kidney Injury.",
    "journal": "Journal of the American College of Cardiology",
    "types": [
      {
        "publication_type": "Journal Article"
      },
      {
        "publication_type": "Review"
      }
    ],
    "duration": "00:00:53",
    "date": "//",
    "year": "2016",
    "month": "Sep",
    "abstract": [
      {
        "abstract_section": "",
        "abstract_text": "<p>Coronary angiography and percutaneous intervention rely on the use of iodinated intravascular contrast for vessel and chamber imaging. Despite advancements in imaging and interventional techniques, iodinated contrast continues to pose a risk of contrast-induced acute kidney injury (CI-AKI) for a subgroup of patients at risk for this complication. There has been a consistent and graded signal of risk for associated outcomes including need for renal replacement therapy, rehospitalization, and death, according to the incidence and severity of CI-AKI. This paper reviews the epidemiology, pathophysiology, prognosis, and management of CI-AKI as it applies to the cardiac catheterization laboratory.</p>\n"
      }
    ]
  },
  {
    "id": 4571,
    "title": "Restoration of Hydrogen Sulfide Production in Diabetic Mice Improves Reparative Function of Bone Marrow Cells.",
    "journal": "Circulation",
    "types": [
      {
        "publication_type": "JOURNAL ARTICLE"
      }
    ],
    "duration": "00:03:36",
    "date": "22/9/2016",
    "year": "2016",
    "month": "Sep",
    "abstract": [
      {
        "abstract_section": "BACKGROUND",
        "abstract_text": "<p>-Bone marrow cell-based treatment for critical limb ischemia (CLI) in diabetic patients yielded a modest therapeutic effect due to cell dysfunction. Therefore, approaches that improve diabetic stem/progenitor cell functions may provide therapeutic benefits. Here, we tested the hypotheses that restoration of hydrogen sulfide (H2S) production in diabetic bone marrow cells (BMCs) improves their reparative capacities.</p>\n"
      },
      {
        "abstract_section": "METHODS",
        "abstract_text": "<p>-Mouse BMCs were isolated by density-gradient centrifugation. Unilateral hind limb ischemia (HLI) was conducted in 12- to 14-week old db/+ and db/db mice by ligation of left femoral artery. H2S level was measured by either gas chromatography or staining with florescent dye sulfidefluor 7AM.</p>\n"
      },
      {
        "abstract_section": "RESULTS",
        "abstract_text": "<p>-Both H2S production and cystathionine γ-lyase (CSE), an H2S enzyme, levels were significantly decreased in BMCs from diabetic db/db mice. Administration of H2S donor diallyl trisulfide (DATS) or overexpression of CSE restored H2S production and enhanced cell survival and migratory capacity in high glucose (HG)-treated BMCs. Immediately after HLI surgery, the db/+ and db/db mice were administrated with DATS orally and/or local intramuscular injection of GFP-labeled BMCs or RFP-CSE-overexpressing BMCs (CSE-BMCs). Mice with HLI were divided into six groups: 1) db/+; 2) db/db; 3) db/db+BMCs; 4) db/db+DATS; 5) db/db+DATS+BMCs; 6) db/db+CSE-BMCs. DATS and CSE overexpression greatly enhanced diabetic BMCs retention in ischemic hind limbs (IHL) followed by improved blood perfusion, capillary/arteriole density, skeletal muscle architecture and cell survival, and decreased perivascular CD68(+) cell infiltration in IHL of diabetic mice. Interestingly, DATS or CSE overexpression rescued HG-impaired migration, tube formation and survival of BMCs or mature human cardiac microvascular endothelial cells (HCMVECs). Mechanistically, DATS restored nitric oxide production and decreased eNOS-pT495 levels in HCMVECs, and improved BMC angiogenic activity under HG condition. Finally, silencing CSE by siRNA significantly increased eNOS-pT495 levels in HCMVECs.</p>\n"
      },
      {
        "abstract_section": "CONCLUSIONS",
        "abstract_text": "<p>-Decreased CSE-mediated H2S bioavailability is an underlying source of BMC dysfunction in diabetes. Our data indicate that H2S and overexpression of CSE in diabetic BMCs may rescue their dysfunction and open novel avenues for cell-based therapeutics of CLI in diabetic patients.</p>\n"
      }
    ]
  },
  {
    "id": 4570,
    "title": "Cathepsin G Controls Arterial But Not Venular Myeloid Cell Recruitment.",
    "journal": "Circulation",
    "types": [
      {
        "publication_type": "JOURNAL ARTICLE"
      }
    ],
    "duration": "00:02:22",
    "date": "22/9/2016",
    "year": "2016",
    "month": "Sep",
    "abstract": [
      {
        "abstract_section": "BACKGROUND",
        "abstract_text": "<p>-Therapeutic targeting of arterial leukocyte recruitment in the context of atherosclerosis has been disappointing in clinical studies. Reasons for such failures include the lack of knowledge of arterial-specific recruitment patterns. Here we establish the importance of the Cathepsin G (CatG) in the context of arterial myeloid cell recruitment.</p>\n"
      },
      {
        "abstract_section": "METHODS",
        "abstract_text": "<p>-Intravital microscopy of the carotid artery, the jugular vein and cremasteric arterioles and venules in Apoe(-/-) and CatG-deficient mice Apoe(-/-)Ctsg(-/-)) mice was employed to study site-specific myeloid cell behavior after high fat diet (HFD) feeding or TNF stimulation. Atherosclerosis development was assessed in aortic root sections after 4 weeks of HFD while lung inflammation was assessed after inhalation of LPS. Endothelial deposition of CatG and CCL5 was quantified in whole mount preparations using 2-photon- and confocal microscopy.</p>\n"
      },
      {
        "abstract_section": "RESULTS",
        "abstract_text": "<p>-Our observations elucidated a crucial role for CatG during arterial leukocyte adhesion, an effect not found during venular adhesion. Consequently, CatG-deficiency attenuates atherosclerosis but not acute lung inflammation. Mechanistically, CatG is immobilized on arterial endothelium where it activates leukocytes to firmly adhere engaging integrin clustering, a process of crucial importance to achieve effective adherence under high shear flow. Therapeutic neutralization of CatG specifically abrogated arterial leukocyte adhesion without affecting myeloid cell adhesion in the microcirculation. Repetitive application of CatG neutralizing antibodies permitted inhibition of atherogenesis in mice.</p>\n"
      },
      {
        "abstract_section": "CONCLUSIONS",
        "abstract_text": "<p>-Taken together, these findings present evidence of an arterial-specific recruitment pattern centered on CatG -instructed adhesion strengthening. The inhibition of this process could provide a novel strategy for treatment of arterial inflammation with limited side effects.</p>\n"
      }
    ]
  },
  {
    "id": 4569,
    "title": "The Role of PIEZO2 in Human Mechanosensation.",
    "journal": "The New England journal of medicine",
    "types": [
      {
        "publication_type": "JOURNAL ARTICLE"
      }
    ],
    "duration": "00:01:43",
    "date": "21/9/2016",
    "year": "2016",
    "month": "Sep",
    "abstract": [
      {
        "abstract_section": "",
        "abstract_text": "<p>Background The senses of touch and proprioception evoke a range of perceptions and rely on the ability to detect and transduce mechanical force. The molecular and neural mechanisms underlying these sensory functions remain poorly defined. The stretch-gated ion channel PIEZO2 has been shown to be essential for aspects of mechanosensation in model organisms. Methods We performed whole-exome sequencing analysis in two patients who had unique neuromuscular and skeletal symptoms, including progressive scoliosis, that did not conform to standard diagnostic classification. In vitro and messenger RNA assays, functional brain imaging, and psychophysical and kinematic tests were used to establish the effect of the genetic variants on protein function and somatosensation. Results Each patient carried compound-inactivating variants in PIEZO2, and each had a selective loss of discriminative touch perception but nevertheless responded to specific types of gentle mechanical stimulation on hairy skin. The patients had profoundly decreased proprioception leading to ataxia and dysmetria that were markedly worse in the absence of visual cues. However, they had the ability to perform a range of tasks, such as walking, talking, and writing, that are considered to rely heavily on proprioception. Conclusions Our results show that PIEZO2 is a determinant of mechanosensation in humans. (Funded by the National Institutes of Health Intramural Research Program.).</p>\n"
      }
    ]
  },
  {
    "id": 4568,
    "title": "Nasal High-Flow Therapy for Primary Respiratory Support in Preterm Infants.",
    "journal": "The New England journal of medicine",
    "types": [
      {
        "publication_type": "Journal Article"
      }
    ],
    "duration": "00:02:46",
    "date": "//",
    "year": "2016",
    "month": "Sep",
    "abstract": [
      {
        "abstract_section": "",
        "abstract_text": "<p>Background Treatment with nasal high-flow therapy has efficacy similar to that of nasal continuous positive airway pressure (CPAP) when used as postextubation support in neonates. The efficacy of high-flow therapy as the primary means of respiratory support for preterm infants with respiratory distress has not been proved. Methods In this international, multicenter, randomized, noninferiority trial, we assigned 564 preterm infants (gestational age, ≥28 weeks 0 days) with early respiratory distress who had not received surfactant replacement to treatment with either nasal high-flow therapy or nasal CPAP. The primary outcome was treatment failure within 72 hours after randomization. Noninferiority was determined by calculating the absolute difference in the risk of the primary outcome; the chosen margin of noninferiority was 10 percentage points. Infants in whom high-flow therapy failed could receive rescue CPAP; infants in whom CPAP failed were intubated and mechanically ventilated. Results Trial recruitment stopped early at the recommendation of the independent data and safety monitoring committee because of a significant difference in the primary outcome between treatment groups. Treatment failure occurred in 71 of 278 infants (25.5%) in the high-flow group and in 38 of 286 infants (13.3%) in the CPAP group (risk difference, 12.3 percentage points; 95% confidence interval [CI], 5.8 to 18.7; P<0.001). The rate of intubation within 72 hours did not differ significantly between the high-flow and CPAP groups (15.5% and 11.5%, respectively; risk difference, 3.9 percentage points; 95% CI, -1.7 to 9.6; P=0.17), nor did the rate of adverse events. Conclusions When used as primary support for preterm infants with respiratory distress, high-flow therapy resulted in a significantly higher rate of treatment failure than did CPAP. (Funded by the National Health and Medical Research Council and others; Australian New Zealand Clinical Trials Registry number, ACTRN12613000303741 .).\n</p>\n"
      }
    ]
  }
];

  }

}
