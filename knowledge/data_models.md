# Longentis Data Models

## Patient

| Field | Type | Notes |
|-------|------|-------|
| `id` | UUID | Primary key |
| `email` | string | Unique, required |
| `first_name` | string | |
| `last_name` | string | |
| `date_of_birth` | date | Age verification (must be 18+) |
| `state` | string | Two-letter code, determines provider licensing |
| `phone` | string | For SMS notifications |
| `created_at` | timestamp | |
| `status` | enum | `intake`, `active`, `paused`, `discharged` |

## LabPanel

| Field | Type | Notes |
|-------|------|-------|
| `id` | UUID | Primary key |
| `patient_id` | UUID | FK → Patient |
| `collected_at` | timestamp | Date blood was drawn |
| `provider_notes` | text | Physician commentary |

### Biomarkers (embedded or related)

| Marker | Unit | Category |
|--------|------|----------|
| Total Testosterone | ng/dL | Hormonal |
| Free Testosterone | pg/mL | Hormonal |
| Estradiol (E2) | pg/mL | Hormonal |
| SHBG | nmol/L | Hormonal |
| LH | mIU/mL | Hormonal |
| FSH | mIU/mL | Hormonal |
| DHEA-S | µg/dL | Hormonal |
| PSA | ng/mL | Prostate |
| Hematocrit | % | Hematologic |
| Hemoglobin | g/dL | Hematologic |
| CBC (RBC, WBC, Platelets) | various | Hematologic |
| Comprehensive Metabolic Panel | various | Metabolic |
| Lipid Panel (Total, LDL, HDL, Triglycerides) | mg/dL | Metabolic |
| Fasting Glucose | mg/dL | Metabolic |
| HbA1c | % | Metabolic |
| TSH | mIU/L | Thyroid |
| Free T4 | ng/dL | Thyroid |
| Vitamin D (25-OH) | ng/mL | Nutritional |
| Vitamin B12 | pg/mL | Nutritional |
| IGF-1 | ng/mL | Growth |

## Treatment

| Field | Type | Notes |
|-------|------|-------|
| `id` | UUID | Primary key |
| `patient_id` | UUID | FK → Patient |
| `type` | enum | `trt`, `ed`, `weight_loss` |
| `protocol` | text | Physician-defined protocol details |
| `start_date` | date | |
| `status` | enum | `pending_labs`, `active`, `adjusting`, `completed` |
| `next_lab_due` | date | Scheduled follow-up labs |

### Treatment Types

- **TRT (Testosterone Replacement Therapy)**: Cypionate injections, dosing schedules, E2 management.
- **ED (Erectile Dysfunction)**: Compounded tadalafil/sildenafil, on-demand vs. daily protocols.
- **Weight Loss**: GLP-1 agonists (semaglutide/tirzepatide), titration schedules, metabolic monitoring.
