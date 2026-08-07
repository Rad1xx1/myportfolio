/* ============================================================ */
/*  ITLD — CORPORATE WEBSITE SCRIPT                             */
/*  Full modals · Swiper · Search · Lang · Theme                */
/* ============================================================ */

'use strict';

// ==============================================================
//  DATA — Bilingual (RU / EN)
// ==============================================================

const securityModules = [
  {id:'01',title:'BAS · Симуляция атак',titleEn:'BAS · Attack Simulation',desc:'Платформа непрерывного тестирования защищённости — эмуляция реальных кибератак для оценки готовности ИБ-инфраструктуры.',descEn:'Continuous security testing platform — emulation of real cyber attacks to assess IS infrastructure readiness.',detail:'Breach and Attack Simulation (BAS) — технология автоматизированного тестирования защищённости. Платформа симулирует реальные кибератаки в безопасной среде, имитируя поведение злоумышленников. Позволяет выявить пробелы в настройках SIEM, EDR, NGFW, WAF до того, как ими воспользуются хакеры. Ключевые сценарии: фишинг, эксплуатация уязвимостей, латеральное перемещение, атаки на AD и облачные сервисы.',detailEn:'Breach and Attack Simulation (BAS) — automated security testing technology. The platform simulates real cyberattacks in a safe environment, mimicking attacker behavior. Identifies gaps in SIEM, EDR, NGFW, WAF configurations before hackers can exploit them. Key scenarios: phishing, vulnerability exploitation, lateral movement, AD and cloud attacks.',solutions:'Cloud Security Validation; Security Control Validation for Detection Controls; Security Control Validation for Prevention Controls; The Complete Security Validation Platform; Attack Surface Validation',advantages:'Непрерывное тестирование 24/7 без участия красных команд; Безопасная среда — атаки не влияют на боевую инфраструктуру; Приоритизация уязвимостей на основе реальной эксплуатируемости; Интеграция с MITRE ATT&CK; Снижение времени обнаружения с месяцев до часов',advantagesEn:'Continuous 24/7 testing without red teams; Safe environment — attacks don\'t affect production; Prioritization based on real exploitability; MITRE ATT&CK integration; Detection time reduction from months to hours'},
  {id:'02',title:'CTI · Разведка угроз',titleEn:'CTI · Threat Intelligence',desc:'Киберразведка в реальном времени: сбор, корреляция и анализ данных об актуальных угрозах из глобальных источников.',descEn:'Real-time cyber intelligence: collection, correlation and analysis of data on current threats from global sources.',detail:'Cyber Threat Intelligence (CTI) — система сбора, обработки и анализа данных о текущих и прогнозируемых киберугрозах. Платформа агрегирует данные из открытых (OSINT), технических (TEKINT) и закрытых источников (Dark Web, форумы хакеров). Позволяет SOC-командам получать контекстную информацию об атакующих до того, как они нанесут ущерб.',detailEn:'Cyber Threat Intelligence (CTI) — system for collecting, processing and analyzing current and predicted cyber threats. The platform aggregates data from open (OSINT), technical (TEKINT) and closed sources (Dark Web, hacker forums). Enables SOC teams to get contextual information about attackers before they cause damage.',solutions:'Threat Intelligence Platform; OSINT Collection Engine; Dark Web Monitoring; APT Group Tracking; SIEM/SOAR Integration',advantages:'Оповещение за 3-7 дней до атаки; Контекстная информация: тактики и индикаторы; Интеграция с SIEM/SOAR; Снижение времени детектирования на 60%; Защита от APT и кибершпионажа',advantagesEn:'Alerts 3-7 days before attack; Contextual data: tactics and IOCs; SIEM/SOAR integration; 60% detection time reduction; APT and cyber espionage protection'},
  {id:'03',title:'DDoS · Защита от атак',titleEn:'DDoS · Attack Protection',desc:'Многоуровневая фильтрация трафика с автоматическим обнаружением и блокировкой DDoS-атак любого объёма.',descEn:'Multi-level traffic filtering with automatic detection and blocking of DDoS attacks of any volume.',detail:'Система защиты от DDoS (Distributed Denial of Service) — комплексное решение для обнаружения и отражения распределённых атак на отказ в обслуживании. Работает на уровнях L3/L4 (атаки объёмом) и L7 (прикладные атаки). Автоматически идентифицирует аномальный трафик, применяет фильтрацию и митигацию без участия оператора.',detailEn:'DDoS (Distributed Denial of Service) protection system — comprehensive solution for detecting and mitigating distributed denial-of-service attacks. Operates at L3/L4 (volumetric attacks) and L7 (application attacks) levels. Automatically identifies anomalous traffic, applies filtering and mitigation without operator intervention.',solutions:'Cloud DDoS Protection; On-Premise Anti-DDoS; Hybrid DDoS Mitigation; DNS Amplification Protection; L7 Web Application DDoS Defense',advantages:'Обнаружение до 10 секунд; Защита до 2 Tbps; Фильтрация легитимного трафика; Интеграция с SIEM; Снижение риска даунтайма на 99.9%',advantagesEn:'Detection within 10 seconds; Up to 2 Tbps protection; Legitimate traffic filtering; SIEM integration; 99.9% downtime risk reduction'},
  {id:'04',title:'DLP · Защита от утечек',titleEn:'DLP · Data Leak Prevention',desc:'Контроль каналов передачи данных и предотвращение утечек конфиденциальной информации внутри организации.',descEn:'Control of data transmission channels and prevention of confidential information leaks within the organization.',detail:'Data Loss Prevention (DLP) — система предотвращения утечек конфиденциальных данных. Отслеживает и блокирует передачу критической информации (персональные данные, коммерческая тайна, финансовая отчётность) по всем каналам связи: email, веб-браузеры, USB-носители, мессенджеры, облачные хранилища и печать.',detailEn:'Data Loss Prevention (DLP) — system for preventing leakage of confidential data. Monitors and blocks transmission of critical information (personal data, trade secrets, financial reports) across all communication channels: email, web browsers, USB drives, messengers, cloud storage and printing.',solutions:'Enterprise DLP Suite; Cloud DLP; Network DLP; Endpoint DLP; Data Classification Engine',advantages:'Классификация до 340 форматов; Контроль всех каналов; Поведенческий анализ UEBA; Автоматическая блокировка утечек; Соответствие GDPR и ISO 27001',advantagesEn:'Classification up to 340 formats; All channel control; UEBA behavioral analysis; Automatic leak blocking; GDPR and ISO 27001 compliance'},
  {id:'05',title:'EDR · Защита устройств',titleEn:'EDR · Endpoint Protection',desc:'Обнаружение и реагирование на угрозы на конечных точках с поведенческим анализом и автоматической изоляцией.',descEn:'Threat detection and response on endpoints with behavioral analysis and automatic isolation.',detail:'Endpoint Detection and Response (EDR) — продвинутая система защиты конечных устройств от сложных угроз. Использует поведенческий анализ и машинное обучение для выявления аномалий. Выявляет бесфайловые атаки, living-off-the-land, угрозы нулевого дня, ransomware и инсайдерские угрозы.',detailEn:'Endpoint Detection and Response (EDR) — advanced endpoint protection against complex threats. Uses behavioral analysis and machine learning for anomaly detection. Identifies fileless attacks, living-off-the-land, zero-day threats, ransomware and insider threats.',solutions:'NGAV + EDR Platform; Managed Detection & Response; Threat Hunting Suite; Forensics & Investigation; Automated Endpoint Isolation',advantages:'Обнаружение 99.9% угроз; Изоляция за 1 секунду; Поведенческий ИИ; Интеграция с SOAR; Полное покрытие MITRE ATT&CK',advantagesEn:'99.9% threat detection; Isolation in 1 second; Behavioral AI; SOAR integration; Full MITRE ATT&CK coverage'},
  {id:'06',title:'IAM · Контроль доступа',titleEn:'IAM · Access Control',desc:'Управление идентификацией и доступом — единая платформа для аутентификации, авторизации и аудита.',descEn:'Identity and access management — unified platform for authentication, authorization and audit.',detail:'Identity and Access Management (IAM) — система управления цифровыми идентификациями и правами доступа. Обеспечивает единую точку входа (SSO), многофакторную аутентификацию и управление жизненным циклом учётных записей.',detailEn:'Identity and Access Management (IAM) — digital identity and access rights management system. Provides Single Sign-On (SSO), multi-factor authentication and account lifecycle management.',solutions:'Identity Governance; Access Management (SSO); Privileged Identity Management; Customer IAM; Identity Analytics',advantages:'Единый вход SSO; Автоматическое управление учётками; Детальный аудит; Гибкое управление ролями RBAC/ABAC; Снижение нагрузки на Helpdesk до 60%',advantagesEn:'Single Sign-On (SSO); Automatic account management; Detailed audit; Flexible RBAC/ABAC roles; Up to 60% Helpdesk load reduction'},
  {id:'07',title:'IDS · Сетевые ловушки',titleEn:'IDS · Network Honeypots',desc:'Система обнаружения вторжений с технологией Honeypot для выявления и анализа атак на ранней стадии.',descEn:'Intrusion detection system with Honeypot technology for early detection and analysis of attacks.',detail:'Intrusion Detection System (IDS) с технологией Honeypot — сетевая ловушка, имитирующая уязвимые ресурсы для привлечения и обнаружения злоумышленников внутри периметра сети. Предназначены для раннего обнаружения атак и сбора информации о методах злоумышленников.',detailEn:'Intrusion Detection System (IDS) with Honeypot technology — network traps mimicking vulnerable resources to attract and detect attackers inside the network perimeter. Designed for early attack detection and collecting information about attacker methods.',solutions:'Honeypot Network; Deception Technology Platform; Threat Intelligence Feed; Network IDS Sensor; SIEM Integration',advantages:'Раннее детектирование атак; Сбор информации об атакующем; Нулевой уровень ложных срабатываний; Интеграция с SIEM; Отвлечение атакующих от реальных целей',advantagesEn:'Early attack detection; Attacker information collection; Zero false positives; SIEM integration; Attacker distraction from real targets'},
  {id:'08',title:'MDM · Защита smartphones',titleEn:'MDM · Mobile Security',desc:'Управление мобильными устройствами: удалённая блокировка, шифрование, контейнеризация корпоративных данных.',descEn:'Mobile device management: remote lock, encryption, containerization of corporate data.',detail:'Mobile Device Management (MDM) — система управления корпоративными мобильными устройствами и контейнеризации данных. Обеспечивает безопасность корпоративной информации на смартфонах и планшетах сотрудников.',detailEn:'Mobile Device Management (MDM) — corporate mobile device management and data containerization system. Ensures corporate data security on employee smartphones and tablets.',solutions:'Enterprise MDM; BYOD Container; Mobile Threat Defense; Application Management; Device Compliance',advantages:'Централизованное управление; Удалённая блокировка и стирание; Безопасный контейнер BYOD; Контроль приложений; Соответствие регуляторам',advantagesEn:'Centralized management; Remote lock and wipe; Secure BYOD container; App control; Regulatory compliance'},
  {id:'09',title:'MFA · Двухфакторный вход',titleEn:'MFA · Multi-Factor Auth',desc:'Многофакторная аутентификация с поддержкой аппаратных ключей, биометрии и push-уведомлений.',descEn:'Multi-factor authentication with support for hardware keys, biometrics and push notifications.',detail:'Multi-Factor Authentication (MFA) — система многофакторной аутентификации, требующая подтверждения личности пользователя двумя и более независимыми факторами (знание, владение, биометрия). Блокирует 99.9% автоматических атак и атак с использованием украденных паролей.',detailEn:'Multi-Factor Authentication (MFA) — system requiring user identity confirmation with two or more independent factors (knowledge, possession, biometrics). Blocks 99.9% of automated attacks and attacks using stolen passwords.',solutions:'Adaptive MFA; Hardware Token; Biometric Authentication; Push Notification MFA; SSO Integration',advantages:'Блокировка 99.97% атак; Поддержка всех типов факторов; Адаптивный MFA; Zero Trust; Интеграция с 500+ приложениями',advantagesEn:'Blocks 99.97% of attacks; All factor types support; Adaptive MFA; Zero Trust; 500+ app integrations'},
  {id:'10',title:'NDR · Перехват угроз',titleEn:'NDR · Threat Detection',desc:'Сетевое обнаружение и реагирование — анализ трафика глубокими пакетами для поиска скрытых угроз.',descEn:'Network detection and response — deep packet traffic analysis for finding hidden threats.',detail:'Network Detection and Response (NDR) — система обнаружения угроз на основе анализа сетевого трафика. Использует Deep Packet Inspection (DPI) и машинное обучение для выявления аномалий и скрытых атак в реальном времени. Обнаруживает атаки, которые обходят защиту конечных точек.',detailEn:'Network Detection and Response (NDR) — threat detection system based on network traffic analysis. Uses Deep Packet Inspection (DPI) and machine learning for real-time anomaly detection. Detects attacks bypassing endpoint protection.',solutions:'Network Detection & Response; Encrypted Traffic Analysis; OT/ICS NDR; Cloud NDR; Managed NDR Service',advantages:'Обнаружение скрытых атак; DPI анализ L2-L7; Выявление латерального перемещения; Интеграция с SIEM/SOAR; Снижение MTTD до 2 часов',advantagesEn:'Hidden attack detection; L2-L7 DPI analysis; Lateral movement detection; SIEM/SOAR integration; MTTD reduction to 2 hours'},
  {id:'11',title:'NTA · Анализ трафика',titleEn:'NTA · Traffic Analysis',desc:'Поведенческий анализ сетевого трафика с машинным обучением для выявления аномалий и APT-атак.',descEn:'Behavioral analysis of network traffic with machine learning to detect anomalies and APT attacks.',detail:'Network Traffic Analysis (NTA) — платформа поведенческого анализа сетевого трафика. Использует модели машинного обучения для построения «нормального» профиля сети и выявления отклонений, указывающих на атаку.',detailEn:'Network Traffic Analysis (NTA) — behavioral network traffic analysis platform. Uses machine learning models to build a "normal" network profile and detect deviations indicating an attack.',solutions:'Network Traffic Analysis; Anomaly Detection ML; NetFlow/IPFIX Collector; Cloud Traffic Analysis; Threat Intelligence Integration',advantages:'Обнаружение атак нулевого дня; Построение базовой модели сети; 100+ моделей ML; Выявление APT и туннелей; Сокращение false positive на 70%',advantagesEn:'Zero-day attack detection; Baseline network modeling; 100+ ML models; APT and tunnel detection; 70% false positive reduction'},
  {id:'12',title:'PAM · Админ-доступ',titleEn:'PAM · Privileged Access',desc:'Управление привилегированным доступом — контроль сессий, хранение паролей и мониторинг действий администраторов.',descEn:'Privileged access management — session control, password storage and administrator activity monitoring.',detail:'Privileged Access Management (PAM) — система управления привилегированным доступом администраторов и сервисных учётных записей к критическим ресурсам. Контролирует и мониторит все действия администраторов: управление сессиями SSH/RDP/HTTPS, автоматическая ротация паролей.',detailEn:'Privileged Access Management (PAM) — privileged access management system for administrators and service accounts to critical resources. Controls and monitors all administrator actions: SSH/RDP/HTTPS session management, automatic password rotation.',solutions:'Privileged Access Management; Session Recording; Password Vault; Just-in-Time Access; Zero Standing Privileges',advantages:'Контроль 100% сессий; Автоматическая ротация паролей; Запись команд администраторов; Блокировка опасных операций; Снижение риска на 70%',advantagesEn:'100% session control; Automatic password rotation; Admin command recording; Dangerous operation blocking; 70% risk reduction'},
  {id:'13',title:'Sandbox · Песочница',titleEn:'Sandbox · Malware Analysis',desc:'Изолированная среда для безопасного исполнения подозрительных файлов и анализа вредоносного ПО.',descEn:'Isolated environment for safe execution of suspicious files and malware analysis.',detail:'Sandbox — изолированная виртуальная среда для безопасного запуска и анализа подозрительных файлов, ссылок и вложений. Позволяет выявить вредоносное поведение до доставки угрозы до пользователя. Поддерживает PE, PDF, Office, скрипты, APK.',detailEn:'Sandbox — isolated virtual environment for safe execution and analysis of suspicious files, links and attachments. Detects malicious behavior before threat delivery to user. Supports PE, PDF, Office, scripts, APK.',solutions:'Malware Analysis Sandbox; Email Attachment Analysis; URL Detonation; API Integration; IOC Export',advantages:'Изоляция без риска; Поддержка всех типов файлов; Поведенческий и сигнатурный анализ; Интеграция с Email Gateway; Автоматическая передача IOCs',advantagesEn:'Risk-free isolation; All file types support; Behavioral and signature analysis; Email Gateway integration; Automatic IOC transfer'},
  {id:'14',title:'SIEM · Анализ логов',titleEn:'SIEM · Log Analysis',desc:'Централизованный сбор и корреляция событий безопасности с автоматическими оповещениями и отчётами.',descEn:'Centralized collection and correlation of security events with automatic alerts and reports.',detail:'Security Information and Event Management (SIEM) — централизованная платформа сбора, нормализации, корреляции событий безопасности из всех источников: сетевое оборудование, серверы, приложения, средства защиты.',detailEn:'Security Information and Event Management (SIEM) — centralized platform for collecting, normalizing and correlating security events from all sources: network equipment, servers, applications, security tools.',solutions:'SIEM Platform; Log Management; Correlation Rules Engine; Compliance Reporting; UEBA Integration',advantages:'Сбор логов из 1000+ источников; Корреляция в реальном времени; Правила MITRE ATT&CK; Автоматическое оповещение; Отчёты для compliance',advantagesEn:'Log collection from 1000+ sources; Real-time correlation; MITRE ATT&CK rules; Automatic alerting; Compliance reports'},
  {id:'15',title:'SOAR · Автоматизация защиты',titleEn:'SOAR · Security Automation',desc:'Оркестрация и автоматизация реагирования на инциденты — playbooks, ticketing и Threat Intelligence.',descEn:'Incident response orchestration and automation — playbooks, ticketing and Threat Intelligence.',detail:'Security Orchestration, Automation and Response (SOAR) — платформа оркестрации процессов реагирования на инциденты. Автоматизирует рутинные операции SOC, интегрирует SIEM, EDR, NGFW, тикет-системы и Threat Intelligence.',detailEn:'Security Orchestration, Automation and Response (SOAR) — incident response orchestration platform. Automates routine SOC operations, integrates SIEM, EDR, NGFW, ticketing systems and Threat Intelligence.',solutions:'SOAR Platform; Playbook Automation; Case Management; Threat Intel Orchestration; SOC Automation Suite',advantages:'Автоматизация 80% операций SOC; Сокращение времени с часов до минут; Готовые playbooks; Оркестрация SIEM/EDR/NGFW; Полный аудит реагирования',advantagesEn:'80% SOC operations automation; Response time from hours to minutes; Ready playbooks; SIEM/EDR/NGFW orchestration; Full response audit'},
  {id:'16',title:'SPM · Управление политиками',titleEn:'SPM · Policy Management',desc:'Централизованное управление политиками безопасности с мониторингом соответствия стандартам ISO 27001.',descEn:'Centralized security policy management with ISO 27001 compliance monitoring.',detail:'Security Policy Management (SPM) — система централизованного управления политиками безопасности и мониторинга соответствия требованиям стандартов и регуляторов. Предназначена для управления жизненным циклом политик безопасности.',detailEn:'Security Policy Management (SPM) — centralized security policy management and regulatory compliance monitoring system. Designed for security policy lifecycle management.',solutions:'Policy Management Platform; Compliance Monitoring; ISO 27001 Readiness; Policy Lifecycle Automation; Audit Reporting',advantages:'Централизованное управление политиками; Автоматизированный мониторинг; Шаблоны ISO 27001/PCI DSS/GDPR; Авто-оповещение о нарушениях; Отчёты для аудита',advantagesEn:'Centralized policy management; Automated monitoring; ISO 27001/PCI DSS/GDPR templates; Auto-violation alerts; Audit reports'}
];

const infraModules = [
  {id:'01',title:'СХД · Системы хранения',titleEn:'Storage · Data Systems',desc:'Высокопроизводительные массивы хранения данных all-flash и гибридные решения для корпоративных ЦОД.',descEn:'High-performance all-flash storage arrays and hybrid solutions for enterprise data centers.',detail:'Корпоративные системы хранения данных (СХД) all-flash и гибридные массивы для критических нагрузок Enterprise-уровня. Обеспечивают 100% доступность данных с RPO=0 и RTO<1 мин. Технологии NVMe, NVMe-oF, автоматическое тиррингование и дедупликация данных.',detailEn:'Enterprise all-flash and hybrid storage systems for mission-critical Enterprise workloads. Provide 100% data availability with RPO=0 and RTO<1 min. NVMe, NVMe-oF technologies, automatic tiering and data deduplication.',solutions:'All-Flash Storage Array; Hybrid Storage Array; Software-Defined Storage; Object Storage (S3); Immutable Backup Storage',advantages:'100% доступность SLA 99.9999%; До 1.3M IOPS; Дедупликация до 100%; Защита от ransomware; Предиктивная аналитика NeuroAI',advantagesEn:'100% availability SLA 99.9999%; Up to 1.3M IOPS; Up to 100% deduplication; Ransomware protection; Predictive NeuroAI analytics'},
  {id:'02',title:'Сети · Маршрутизация',titleEn:'Networks · Routing',desc:'Программируемые сетевые архитектуры SD-WAN, коммутаторы и маршрутизаторы для распределённых офисов.',descEn:'Programmable SD-WAN network architectures, switches and routers for distributed offices.',detail:'Программируемые сетевые решения: SD-WAN, коммутаторы L2/L3, маршрутизаторы для построения отказоустойчивой корпоративной сети с централизованным управлением. Технологии VXLAN, EVPN, Segment Routing.',detailEn:'Programmable networking solutions: SD-WAN, L2/L3 switches, routers for building fault-tolerant corporate networks with centralized management. VXLAN, EVPN, Segment Routing technologies.',solutions:'SD-WAN Platform; Enterprise Switching; Core Routing; Network Segmentation; Traffic Analytics',advantages:'Централизованное управление; Оптимизация SD-WAN; Микроссегментация Zero Trust; Видимость L2-L7; Снижение OPEX на 60%',advantagesEn:'Centralized management; SD-WAN optimization; Zero Trust microsegmentation; L2-L7 visibility; 60% OPEX reduction'},
  {id:'03',title:'Виртуализация · Hypervisor',titleEn:'Virtualization · Hypervisor',desc:'Платформы виртуализации серверов и рабочих столов, контейнеризация и оркестрация Kubernetes.',descEn:'Server and desktop virtualization platforms, containerization and Kubernetes orchestration.',detail:'Платформы виртуализации для серверов (Hypervisor Type-1) и VDI, контейнеризация Docker и оркестрация Kubernetes для микросервисных архитектур.',detailEn:'Server virtualization (Hypervisor Type-1) and VDI platforms, Docker containerization and Kubernetes orchestration for microservice architectures.',solutions:'VMware vSphere/vSAN; Microsoft Hyper-V; VDI (Citrix/VMware); Kubernetes Clusters; Private Cloud Platform',advantages:'Снижение CAPEX до 70%; Авто-восстановление ВМ; Live Migration; Гибридное облако; Enterprise Kubernetes',advantagesEn:'Up to 70% CAPEX reduction; Auto VM recovery; Live Migration; Hybrid cloud; Enterprise Kubernetes'},
  {id:'04',title:'Резервное копирование',titleEn:'Backup · Disaster Recovery',desc:'Enterprise-решения для backup & disaster recovery с поддержкой immutable-хранилищ.',descEn:'Enterprise solutions for backup & disaster recovery with immutable storage support.',detail:'Enterprise-решения для резервного копирования и аварийного восстановления (BaaS/DRaaS) с поддержкой immutable-хранилищ, защитой от ransomware и гарантированным восстановлением.',detailEn:'Enterprise backup and disaster recovery (BaaS/DRaaS) solutions with immutable storage support, ransomware protection and guaranteed recovery.',solutions:'Backup for Virtual Environments; Physical Server Backup; Cloud Backup; Disaster Recovery Orchestration; Immutable Storage',advantages:'Immutable backup 100%; Восстановление за 1 час; Дедупликация до 90%; Авто-тестирование recovery; Единый план DR',advantagesEn:'100% immutable backup; 1 hour recovery; Up to 90% deduplication; Auto recovery testing; Unified DR plan'},
  {id:'05',title:'Мониторинг · Observability',titleEn:'Monitoring · Observability',desc:'Комплексный мониторинг IT-инфраструктуры, APM, управление логами и метриками.',descEn:'Comprehensive IT infrastructure monitoring, APM, log and metrics management.',detail:'Комплексный мониторинг и Observability-платформа для IT-инфраструктуры: метрики, логи, трейсы, APM и алертинг в едином интерфейсе. Позволяет командам DevOps/NOC/SRE проактивно выявлять и устранять инциденты.',detailEn:'Comprehensive monitoring and Observability platform for IT infrastructure: metrics, logs, traces, APM and alerting in a single interface. Enables DevOps/NOC/SRE teams to proactively detect and resolve incidents.',solutions:'APM Monitoring; Infrastructure Monitoring; Log Management (ELK/Loki); Alerting & Escalation; NPMD',advantages:'Единая панель метрик/логов/трейсов; Сокращение MTTR; ML/AI аномалии; Готовые дашборды; Интеграция с Telegram/Slack',advantagesEn:'Single metrics/logs/traces dashboard; MTTR reduction; ML/AI anomalies; Ready dashboards; Telegram/Slack integration'},
  {id:'06',title:'Балансировка трафика',titleEn:'Load Balancing',desc:'Аппаратные и программные балансировщики нагрузки L4–L7 для отказоустойчивых приложений.',descEn:'Hardware and software L4-L7 load balancers for fault-tolerant applications.',detail:'Аппаратные (ADC) и программные балансировщики нагрузки для L4-L7. Обеспечивают отказоустойчивость, масштабирование, SSL-offload и защиту веб-приложений.',detailEn:'Hardware (ADC) and software load balancers for L4-L7. Provide fault tolerance, scaling, SSL-offload and web application protection.',solutions:'Hardware ADC; Software Load Balancer; GSLB; SSL/TLS Offload; Web Application Firewall',advantages:'99.999% доступность; До 10M запросов/сек; SSL-offload 100K tps; Защита от OWASP Top 10; Авто-масштабирование',advantagesEn:'99.999% availability; Up to 10M req/sec; SSL-offload 100K tps; OWASP Top 10 protection; Auto-scaling'},
  {id:'07',title:'Wi-Fi · Беспроводные сети',titleEn:'Wi-Fi · Wireless Networks',desc:'Корпоративные Wi-Fi 6/6E решения с централизованным управлением и аналитикой.',descEn:'Enterprise Wi-Fi 6/6E solutions with centralized management and analytics.',detail:'Корпоративные Wi-Fi 6/6E с централизованным контроллером, аналитикой посетителей, Captive Portal, интеграцией с RADIUS/LDAP для безопасного доступа.',detailEn:'Enterprise Wi-Fi 6/6E with centralized controller, visitor analytics, Captive Portal, RADIUS/LDAP integration for secure access.',solutions:'Wi-Fi 6/6E Access Points; WLC Controller; Captive Portal; BLE/RTLS; Wireless IDS/IPS',advantages:'Скорость до 9.6 Gbps; Бесшовный роуминг <30ms; Авто-оптимизация RF; Гостевой портал; Аналитика посетителей',advantagesEn:'Up to 9.6 Gbps speed; Seamless roaming <30ms; Auto RF optimization; Guest portal; Visitor analytics'},
  {id:'08',title:'ЦОД · Инженерная инфра',titleEn:'Data Center · Infrastructure',desc:'Модульные ЦОД, системы охлаждения, бесперебойного питания и управления инфраструктурой дата-центров.',descEn:'Modular data centers, cooling systems, UPS and data center infrastructure management.',detail:'Комплексные решения для строительства и модернизации ЦОД: модульные ЦОД, ИБП, охлаждение, СКС, DCIM-системы управления инфраструктурой.',detailEn:'Comprehensive solutions for data center construction and modernization: modular data centers, UPS, cooling, structured cabling, DCIM infrastructure management systems.',solutions:'Modular Data Centers; UPS & Power; Precision Cooling; Structured Cabling; DCIM Platform',advantages:'PUE <1.2; 100% отказоустойчивость Tier III/IV; Модульное расширение; DCIM управление; Uptime 99.999%',advantagesEn:'PUE <1.2; 100% fault tolerance Tier III/IV; Modular expansion; DCIM management; 99.999% uptime'}
];

const aboutData = [
  {id:1,title:'Официальная дистрибуция от ведущих мировых производителей',titleEn:'Official Distribution from Leading Global Manufacturers',desc:'Новейшие разработки в сфере ИТ-оборудования и ПО для киберзащиты организаций любого масштаба.',descEn:'Latest developments in IT equipment and software for cybersecurity of organizations of any scale.',detail:'Мы обеспечиваем доступ к лучшим мировым решениям кибербезопасности, ИТ-инфраструктуры и ПО. Наши партнёры — CrowdStrike, Vectra AI, Infinidat, Ping Identity и другие мировые лидеры. Мы гарантируем оригинальность продукции, конкурентные цены и полную техническую поддержку на всех этапах внедрения.',detailEn:'We provide access to the best global cybersecurity, IT infrastructure and software solutions. Our partners — CrowdStrike, Vectra AI, Infinidat, Ping Identity and other world leaders. We guarantee product originality, competitive prices and full technical support at all stages of implementation.'},
  {id:2,title:'Поддержка от вендора и наших сертифицированных специалистов',titleEn:'Vendor & Certified Specialist Support',desc:'Комплексный подход: предпродажная поддержка, логистика, внедрение и сервис от наших экспертов.',descEn:'Comprehensive approach: pre-sales support, logistics, implementation and service from our experts.',detail:'Сертифицированные инженеры ITLD сопровождают каждый проект от пресейла до промышленной эксплуатации. Мы проводим аудит текущей ИТ-инфраструктуры, разрабатываем архитектуру решения, осуществляем поставку, пусконаладку и последующее сервисное обслуживание. Среднее время решения инцидента — 4 часа.',detailEn:'ITLD certified engineers accompany every project from pre-sales to industrial operation. We conduct current IT infrastructure audit, develop solution architecture, handle delivery, commissioning and subsequent service maintenance. Average incident resolution time — 4 hours.'},
  {id:3,title:'Индивидуальный подход к каждому клиенту',titleEn:'Individual Approach to Every Client',desc:'Работа по модели Value Added Distribution через партнёрскую сеть, обучение и тренинги.',descEn:'Value Added Distribution model through partner network, training and workshops.',detail:'Мы предлагаем не просто поставку решений, а комплексный подход с обучением и сертификацией ваших специалистов. Проводим технические тренинги по продуктам, киберучения и воркшопы по настройке и администрированию решений. Совместные программы развития позволяют максимизировать ROI от внедрённых технологий.',detailEn:'We offer not just solution delivery, but a comprehensive approach with training and certification of your specialists. We conduct technical product trainings, cyber exercises and workshops on solution configuration and administration. Joint development programs maximize ROI from implemented technologies.'},
  {id:4,title:'Географический охват по всей территории Казахстана',titleEn:'Geographic Coverage Across Kazakhstan',desc:'Офисы в Алматы, Астане и Актау — покрытие всех регионов Казахстана.',descEn:'Offices in Almaty, Astana and Aktau — coverage of all regions of Kazakhstan.',detail:'Наши офисы расположены в трёх ключевых городах Казахстана: Алматы (головной офис), Астана (представительство в столице) и Актау (западный регион). Это позволяет нам оперативно реагировать на запросы клиентов по всей стране, проводить выездные аудиты и обеспечивать сервисное обслуживание на месте.',detailEn:'Our offices are located in three key cities of Kazakhstan: Almaty (head office), Astana (capital representative office) and Aktau (western region). This allows us to quickly respond to client requests nationwide, conduct on-site audits and provide on-site service maintenance.'}
];

const newsData = [
  {id:1,badge:'Киберугрозы',badgeEn:'Cyber Threats',date:'12 марта 2026',dateEn:'March 12, 2026',title:'ИИ-угрозы 2026: атаки с генеративным ИИ выросли на 340%',titleEn:'AI Threats 2026: attacks with generative AI grew by 340%',preview:'Количество кибератак с использованием генеративного ИИ достигло рекордного уровня.',previewEn:'Cyberattacks using generative AI reached a record level.',full:'По данным CrowdStrike Global Threat Report 2026, атаки с применением генеративного ИИ выросли на 340% за последние 12 месяцев. Дипфейки в реальном времени, автоматизированное создание вредоносного кода через LLM и AI-driven BEC-атаки стали основным вектором угроз для Enterprise-сектора. Эксперты ITLD рекомендуют внедрение AI-защиты в EDR, NDR и SEG.',fullEn:'According to CrowdStrike Global Threat Report 2026, attacks using generative AI increased by 340% over the past 12 months. Real-time deepfakes, automated malware via LLM and AI-driven BEC attacks became the main threat vector for Enterprise. ITLD experts recommend implementing AI protection in EDR, NDR and SEG.'},
  {id:2,badge:'Исследования',badgeEn:'Research',date:'28 февраля 2026',dateEn:'February 28, 2026',title:'Дипфейки-атаки в корпоративной среде: гайд по защите',titleEn:'Deepfake attacks: protection guide',preview:'Deepfake-технологии позволяют имитировать голос и видео топ-менеджеров для мошеннических транзакций.',previewEn:'Deepfake technology allows impersonating executives for fraudulent transactions.',full:'В 2025-2026 годах зафиксировано более 1200 инцидентов с deepfake-аудио для BEC-атак. Средняя сумма ущерба — $2.3 млн. ITLD рекомендует внедрение решений Vectra AI, ZeroFox и Picus Security.',fullEn:'Over 1,200 deepfake audio BEC incidents recorded in 2025-2026. Average damage — $2.3M. ITLD recommends Vectra AI, ZeroFox and Picus Security solutions.'},
  {id:3,badge:'Развитие',badgeEn:'Development',date:'15 февраля 2026',dateEn:'February 15, 2026',title:'Пост-квантовая криптография: тренды 2026',titleEn:'Post-quantum cryptography: 2026 trends',preview:'Переход на пост-квантовые криптоалгоритмы становится главным приоритетом ИБ-отделов.',previewEn:'Transition to post-quantum crypto algorithms is a top IS priority.',full:'NIST утвердил первые 4 пост-квантовых криптоалгоритма. Крупнейшие вендоры начали интеграцию PQC. ITLD совместно с Infodas и WALLIX разрабатывает roadmap перехода на PQC для клиентов в Казахстане.',fullEn:'NIST approved the first 4 post-quantum crypto algorithms. Major vendors started PQC integration. ITLD with Infodas and WALLIX develops PQC transition roadmap for clients in Kazakhstan.'},
  {id:4,badge:'Партнерство',badgeEn:'Partnership',date:'5 февраля 2026',dateEn:'February 5, 2026',title:'ITLD расширяет портфель: новые партнеры',titleEn:'ITLD expands portfolio: new partners',preview:'ITLD заключила партнерские соглашения с лидерами кибербезопасности.',previewEn:'ITLD signed partnership agreements with cybersecurity leaders.',full:'Новые партнерства: CrowdStrike Falcon (NGAV+EDR), Vectra AI Cognito (AI-driven NDR) и Exabeam Fusion (SIEM+UEBA). В рамках соглашений — прямые поставки лицензий и создание демо-лабораторий.',fullEn:'New partnerships: CrowdStrike Falcon (NGAV+EDR), Vectra AI Cognito (AI-driven NDR) and Exabeam Fusion (SIEM+UEBA). Agreements include direct license supply and demo labs.'},
  {id:5,badge:'Технологии',badgeEn:'Technology',date:'22 января 2026',dateEn:'January 22, 2026',title:'Zero Trust Architecture в Казахстане',titleEn:'Zero Trust Architecture in Kazakhstan',preview:'Zero Trust — новая парадигма кибербезопасности для госсектора и Enterprise.',previewEn:'Zero Trust — new cybersecurity paradigm for government and Enterprise.',full:'Zero Trust требует микроссегментации сети и непрерывной верификации. Закон РК «О кибербезопасности» рекомендовал переход на Zero Trust. ITLD предлагает проекты с WALLIX, Ping Identity, NACVIEW, Gatewatcher.',fullEn:'Zero Trust requires network microsegmentation and continuous verification. Kazakhstan law recommends Zero Trust adoption. ITLD offers projects with WALLIX, Ping Identity, NACVIEW, Gatewatcher.'},
  {id:6,badge:'Событие',badgeEn:'Event',date:'15 января 2026',dateEn:'January 15, 2026',title:'ITLD на Kazan Digital Week 2026',titleEn:'ITLD at Kazan Digital Week 2026',preview:'Компания ITLD приняла участие в Kazan Digital Week.',previewEn:'ITLD participated in Kazan Digital Week.',full:'Live-демонстрации CrowdStrike, Vectra AI и Picus Security. Киберучения с 47 специалистами из 18 организаций Казахстана.',fullEn:'Live demos of CrowdStrike, Vectra AI and Picus Security. Cyber exercises with 47 specialists from 18 Kazakhstan organizations.'}
];

const vacancies = [
  {title:'Frontend Developer (React/TypeScript)',titleEn:'Frontend Developer (React/TypeScript)',meta:'Удалённо / Алматы',metaEn:'Remote / Almaty',desc:'Присоединяйтесь к команде разработки корпоративных продуктов ИБ.',descEn:'Join the corporate IS product development team.',requirements:['React, TypeScript, Next.js от 3 лет','CSS-in-JS и анимации','REST API и WebSocket','Английский — Intermediate+'],requirementsEn:['3+ years React, TypeScript, Next.js','CSS-in-JS and animations','REST API and WebSocket','English — Intermediate+']},
  {title:'Инженер ИБ-решений (Pre-sales)',titleEn:'Security Engineer (Pre-sales)',meta:'Алматы, офис',metaEn:'Almaty, office',desc:'Техническая поддержка продаж решений по кибербезопасности.',descEn:'Technical support for cybersecurity sales.',requirements:['ИБ или ИТ от 2 лет','Сетевые протоколы','Презентации и переговоры','CISSP, CEH — плюс'],requirementsEn:['2+ years in IS or IT','Network protocols','Presentations and negotiations','CISSP, CEH — plus']},
  {title:'Cybersecurity Sales Specialist',titleEn:'Cybersecurity Sales Specialist',meta:'Алматы / Нур-Султан',metaEn:'Almaty / Nur-Sultan',desc:'Развитие партнёрской сети Enterprise-заказчикам.',descEn:'Building partner network for Enterprise clients.',requirements:['B2B в ИТ/ИБ от 3 лет','Рынок РК и СНГ','Контакты среди ЛПР','Сложные переговоры'],requirementsEn:['3+ years B2B in IT/IS','KZ and CIS market','Decision-maker contacts','Complex negotiations']},
  {title:'SOC Analyst (L2/L3)',titleEn:'SOC Analyst (L2/L3)',meta:'Алматы, 24/7',metaEn:'Almaty, 24/7',desc:'Работа в центре мониторинга безопасности.',descEn:'Work in the security monitoring center.',requirements:['SOC от 1 года','SIEM (Splunk, ELK)','MITRE ATT&CK','SANS/GIAC — преимущество'],requirementsEn:['1+ year SOC','SIEM (Splunk, ELK)','MITRE ATT&CK','SANS/GIAC — advantage']},
  {title:'DevOps Engineer (Kubernetes)',titleEn:'DevOps Engineer (Kubernetes)',meta:'Удалённо',metaEn:'Remote',desc:'Разработка CI/CD пайплайнов, управление k8s.',descEn:'CI/CD pipeline development, k8s management.',requirements:['AWS/GCP, Terraform от 2 лет','Kubernetes (CKAD — плюс)','Helm, ArgoCD, GitOps','Security — приветствуется'],requirementsEn:['2+ years AWS/GCP, Terraform','Kubernetes (CKAD — plus)','Helm, ArgoCD, GitOps','Security experience — welcome']}
];

const partners = ['A10 Networks','Automox','Bitsight','Censys','Cribl','CrowdStrike','Cyber Unit Technologies','Exabeam','Fastly','Gatewatcher','GTB technologies','Hexnode','Holm Security','Infinidat','Infodas','Lepide','Lookout','NACVIEW','Nakivo','NetBrain','Niagara Networks','Outkept','Picus Security','Ping Identity','Protectimus','RedSeal','Safetica','Sonar','SOTI','Spin.AI','Sycope','TerraZone','Threema','Vectra AI','WALLIX','ZeroFox'];

const partnersData = {
  'A10 Networks': {
    category:'ADC & Load Balancing',categoryEn:'ADC & Load Balancing',
    descRu:'Глобальный лидер в области Application Delivery Controllers (ADC) и DDoS-защиты. Основанная в 2004 году компания разрабатывает решения для управления трафиком и защиты приложений Enterprise-уровня.',
    descEn:'Global leader in Application Delivery Controllers (ADC) and DDoS protection. Founded in 2004, the company develops traffic management and Enterprise-level application protection solutions.',
    servicesRu:'Балансировка нагрузки; DDoS-защита; SSL/TLS offload; WAF; Аналитика трафика',
    servicesEn:'Load Balancing; DDoS Protection; SSL/TLS offload; WAF; Traffic Analytics'
  },
  'CrowdStrike': {
    category:'NGAV + EDR + XDR',categoryEn:'NGAV + EDR + XDR',
    descRu:'Глобальный лидер в облачной кибербезопасности. Платформа Falcon на основе AI и поведенческого анализа защищает более 20 000 организаций worldwide.',
    descEn:'Global leader in cloud cybersecurity. Falcon platform based on AI and behavioral analysis protects more than 20,000 organizations worldwide.',
    servicesRu:'NGAV/EDR; Threat Hunting; MDR; Forensics; Cloud Security',
    servicesEn:'NGAV/EDR; Threat Hunting; MDR; Forensics; Cloud Security'
  },
  'Vectra AI': {
    category:'AI-Driven NDR',categoryEn:'AI-Driven NDR',
    descRu:'Лидер в AI-driven Network Detection and Response. Платформа использует ИИ для выявления скрытых атак в реальном времени.',
    descEn:'Leader in AI-driven Network Detection and Response. Platform uses AI to detect hidden attacks in real time.',
    servicesRu:'NDR; AI-detection; Cloud NDR; OT/ICS NDR; Managed NDR',
    servicesEn:'NDR; AI-detection; Cloud NDR; OT/ICS NDR; Managed NDR'
  },
  'Picus Security': {
    category:'BAS & Security Validation',categoryEn:'BAS & Security Validation',
    descRu:'Лидер в Breach and Attack Simulation (BAS). Платформа автоматически тестирует эффективность средств защиты 24/7.',
    descEn:'Leader in Breach and Attack Simulation (BAS). Platform automatically tests security controls effectiveness 24/7.',
    servicesRu:'BAS; Security Validation; MITRE ATT&CK Mapping; Reporting; Integration',
    servicesEn:'BAS; Security Validation; MITRE ATT&CK Mapping; Reporting; Integration'
  },
  'WALLIX': {
    category:'PAM & Zero Trust',categoryEn:'PAM & Zero Trust',
    descRu:'Европейский лидер PAM. WALLIX Bastion управляет доступом администраторов и автоматически ротирует пароли.',
    descEn:'European PAM leader. WALLIX Bastion manages admin access and automatically rotates passwords.',
    servicesRu:'PAM; Session Recording; Password Vault; JIT Access; Zero Trust',
    servicesEn:'PAM; Session Recording; Password Vault; JIT Access; Zero Trust'
  },
  'Ping Identity': {
    category:'IAM & Identity Security',categoryEn:'IAM & Identity Security',
    descRu:'Глобальный лидер IAM. PingOne обеспечивает SSO, MFA и федерацию идентификаций для облачных и гибридных сред.',
    descEn:'Global IAM leader. PingOne provides SSO, MFA and identity federation for cloud and hybrid environments.',
    servicesRu:'SSO; MFA; CIAM; IAM; Zero Trust',
    servicesEn:'SSO; MFA; CIAM; IAM; Zero Trust'
  },
  'Exabeam': {
    category:'SIEM + UEBA + SOAR',categoryEn:'SIEM + UEBA + SOAR',
    descRu:'Платформа для управления информационной безопасностью и реагирования на инциденты с ML аналитикой.',
    descEn:'Platform for information security management and incident response with ML analytics.',
    servicesRu:'SIEM; UEBA; SOAR; Log Management; Compliance',
    servicesEn:'SIEM; UEBA; SOAR; Log Management; Compliance'
  },
  'Gatewatcher': {
    category:'NDR & Network Security',categoryEn:'NDR & Network Security',
    descRu:'Французский разработчик NDR на основе ML для выявления скрытых атак и аномалий в сетевом трафике.',
    descEn:'French NDR developer based on ML for detecting hidden attacks and anomalies in network traffic.',
    servicesRu:'NDR; IDS/IPS; Threat Detection; Network Analytics; SOC Integration',
    servicesEn:'NDR; IDS/IPS; Threat Detection; Network Analytics; SOC Integration'
  },
  'Infinidat': {
    category:'Enterprise Storage',categoryEn:'Enterprise Storage',
    descRu:'Израильский производитель enterprise-class систем хранения данных. Массивы InfiniBox с 100% доступностью.',
    descEn:'Israeli manufacturer of enterprise-class storage systems. InfiniBox arrays with 100% availability.',
    servicesRu:'All-Flash Storage; Hybrid Storage; Backup Storage; DR Solutions; Cloud Storage',
    servicesEn:'All-Flash Storage; Hybrid Storage; Backup Storage; DR Solutions; Cloud Storage'
  },
  'Infodas': {
    category:'Security Gateways',categoryEn:'Security Gateways',
    descRu:'Немецкий эксперт по защите критической инфраструктуры. Data diodes и security gateways.',
    descEn:'German expert in critical infrastructure protection. Data diodes and security gateways.',
    servicesRu:'Data Diodes; Security Gateways; OT Security; Network Encryption; Compliance',
    servicesEn:'Data Diodes; Security Gateways; OT Security; Network Encryption; Compliance'
  }
};

// Fallback for partners not in partnersData
function getPartnerData(name) {
  const def = partnersData[name];
  if (def) return def;
  return {
    category: 'IT & Security',
    categoryEn: 'IT & Security',
    descRu: 'Ведущий мировой поставщик решений в области кибербезопасности и ИТ-инфраструктуры.',
    descEn: 'Leading global provider of cybersecurity and IT infrastructure solutions.',
    servicesRu: 'ИТ-решения; Кибербезопасность; Консалтинг; Поддержка',
    servicesEn: 'IT Solutions; Cybersecurity; Consulting; Support'
  };
}

// ==============================================================
//  RENDER
// ==============================================================
function renderSwiperCards(containerId, data) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const lang = document.documentElement.lang || 'ru';
  const t = lang === 'en' ? 'Learn more' : 'Узнать подробнее';
  el.innerHTML = data.map((m,i) => `<div class="swiper-slide"><div class="card" data-index="${i}" data-section="${containerId === 'securityCards' ? 'sec' : 'infra'}"><div class="card__badge">${m.id}</div><div class="card__content"><h3 class="card__title">${lang === 'en' ? m.titleEn : m.title}</h3><p class="card__desc">${lang === 'en' ? m.descEn : m.desc}</p><button class="card__link" onclick="openTechModal('${containerId === 'securityCards' ? 'sec' : 'infra'}', ${i})">${t} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button></div></div></div>`).join('');
  setTimeout(() => {
    el.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', function(e) {
        if (e.target.closest('.card__link')) return;
        const idx = parseInt(this.getAttribute('data-index'));
        const section = this.getAttribute('data-section');
        openTechModal(section, idx);
      });
    });
  }, 0);
}

function renderAbout() {
  const el = document.getElementById('aboutGrid');
  if (!el) return;
  const lang = document.documentElement.lang || 'ru';
  const icons = ['<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>','<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>','<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>','<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'];
  el.innerHTML = aboutData.map((m,i) => `<div class="about-card" onclick="openAboutModal(${i})"><div class="about-card__icon">${icons[i]||icons[0]}</div><div class="about-card__content"><h3 class="about-card__title">${lang === 'en' ? m.titleEn : m.title}</h3><p class="about-card__desc">${lang === 'en' ? m.descEn : m.desc}</p></div></div>`).join('');
}

function renderNews() {
  const el = document.getElementById('newsGrid');
  if (!el) return;
  const lang = document.documentElement.lang || 'ru';
  const t = lang === 'en' ? 'Read more' : 'Читать далее';
  el.innerHTML = newsData.map(m => `<div class="news-card" data-filter="${(lang === 'en' ? m.titleEn : m.title).toLowerCase()} ${(lang === 'en' ? m.badgeEn : m.badge).toLowerCase()}"><span class="news-card__badge">${lang === 'en' ? m.badgeEn : m.badge}</span><h3 class="news-card__title">${lang === 'en' ? m.titleEn : m.title}</h3><div class="news-card__date">${lang === 'en' ? m.dateEn : m.date}</div><div class="news-card__preview">${lang === 'en' ? m.previewEn : m.preview}</div><div class="news-card__body"><div class="news-card__full">${lang === 'en' ? m.fullEn : m.full}</div></div><div class="news-card__chevron">${t} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div></div>`).join('');
}

function renderVac() {
  const el = document.getElementById('vacanciesList');
  if (!el) return;
  const lang = document.documentElement.lang || 'ru';
  const t = lang === 'en' ? 'Apply' : 'Откликнуться';
  el.innerHTML = vacancies.map((v,i) => `<div class="vacancy" data-index="${i}"><div class="vacancy__header"><div class="vacancy__title-group"><div class="vacancy__icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div><span class="vacancy__title">${lang === 'en' ? v.titleEn : v.title}</span></div><span class="vacancy__meta">${lang === 'en' ? v.metaEn : v.meta}</span><svg class="vacancy__chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div><div class="vacancy__body"><p class="vacancy__desc">${lang === 'en' ? v.descEn : v.desc}</p><ul class="vacancy__list">${(lang === 'en' ? v.requirementsEn : v.requirements).map(r => `<li>${r}</li>`).join('')}</ul><a href="#contacts" class="vacancy__btn">${t} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></div></div>`).join('');
}

function renderPartners() {
  const el = document.getElementById('partnersGrid');
  if (!el) return;
  const lang = document.documentElement.lang || 'ru';
  const detBtn = lang === 'en' ? 'Details' : 'Подробнее';
  const recBtn = lang === 'en' ? 'Recommendation' : 'Рекомендация';
  el.innerHTML = partners.map(p => {
    const pd = getPartnerData(p);
    const cat = lang === 'en' ? pd.categoryEn : pd.category;
    return `<div class="partner-card" data-partner="${p}" data-category="${cat}">
      <span class="partner-card__name">${p}</span>
      <span class="partner-card__cat">${cat}</span>
      <div class="partner-card__actions">
        <button class="partner-card__btn partner-card__btn--detail" onclick="openPartnerDetail('${p}')">${detBtn}</button>
        <button class="partner-card__btn partner-card__btn--rec" onclick="openPartnerRec('${p}')">${recBtn}</button>
      </div>
    </div>`;
  }).join('');
}

// ==============================================================
//  MODALS
// ==============================================================
const mo = document.getElementById('modalOverlay');
const mb = document.getElementById('modalBody');
const mc = document.getElementById('modalClose');

function openModal(html) {
  mb.innerHTML = html;
  mo.classList.add('active'); document.body.style.overflow = 'hidden';
}
function closeModal() { mo.classList.remove('active'); document.body.style.overflow = ''; }
mo?.addEventListener('click', e => { if (e.target === mo) closeModal(); });
mc?.addEventListener('click', closeModal);

// PARTNER DETAIL
function openPartnerDetail(name) {
  const lang = document.documentElement.lang || 'ru';
  const pd = getPartnerData(name);
  const cat = lang === 'en' ? pd.categoryEn : pd.category;
  const desc = lang === 'en' ? pd.descEn : pd.descRu;
  const services = lang === 'en' ? pd.servicesEn : pd.servicesRu;
  const title = lang === 'en' ? 'About Partner' : 'О партнёре';
  const servTitle = lang === 'en' ? 'Services' : 'Услуги';
  const btnText = lang === 'en' ? 'Request a demo or consultation' : 'Запросить демонстрацию или консультацию';
  const servicesHtml = services.split(';').map(s => `<li>${s.trim()}</li>`).join('');
  openModal(`<div class="modal__brand">${name}</div><div class="modal__badge">${cat}</div><div class="modal__subtitle">${title}</div><p class="modal__text">${desc}</p><div class="modal__subtitle">${servTitle}</div><ul class="modal__list">${servicesHtml}</ul><button class="modal__btn" onclick="closeModal();openContactForm('${name}')"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> ${btnText}</button>`);
}

// PARTNER RECOMMENDATION FORM
function openPartnerRec(name) {
  const lang = document.documentElement.lang || 'ru';
  const title = lang === 'en' ? `Recommendation request: ${name}` : `Запрос рекомендации: ${name}`;
  const nameLabel = lang === 'en' ? 'Your Name' : 'Ваше имя';
  const emailLabel = lang === 'en' ? 'Your Email' : 'Ваш Email';
  const phoneLabel = lang === 'en' ? 'Phone' : 'Телефон';
  const msgLabel = lang === 'en' ? 'Your message' : 'Ваше сообщение';
  const btnText = lang === 'en' ? 'Send request' : 'Отправить запрос';
  openModal(`<div class="modal__brand">${title}</div><form class="modal__form" id="recForm"><input type="text" class="modal__input" placeholder="${nameLabel}" required /><input type="email" class="modal__input" placeholder="${emailLabel}" required /><input type="tel" class="modal__input" placeholder="${phoneLabel}" /><textarea class="modal__textarea" placeholder="${msgLabel}" rows="4"></textarea><button type="submit" class="modal__btn">${btnText}</button></form>`);
  const rf = document.getElementById('recForm');
  if (rf) rf.addEventListener('submit', function(e) {
    e.preventDefault();
    this.innerHTML = `<div class="form-success"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><h3>${lang === 'en' ? 'Request sent!' : 'Запрос отправлен!'}</h3><p>${lang === 'en' ? 'We will contact you shortly.' : 'Мы свяжемся с вами в ближайшее время.'}</p></div>`;
  });
}

// ABOUT MODAL
function openAboutModal(idx) {
  const lang = document.documentElement.lang || 'ru';
  const m = aboutData[idx];
  if (!m) return;
  const title = lang === 'en' ? m.titleEn : m.title;
  const detail = lang === 'en' ? m.detailEn : m.detail;
  openModal(`<div class="modal__brand">${title}</div><div class="modal__badge">${lang === 'en' ? 'About Company' : 'О компании'}</div><p class="modal__text">${detail}</p><button class="modal__btn" onclick="closeModal();openContactForm('${title}')"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> ${lang === 'en' ? 'Request a consultation' : 'Запросить консультацию'}</button>`);
}

// TECH MODAL
const tmo = document.getElementById('techModalOverlay');
const tmb = document.getElementById('techModalBody');
const tmc = document.getElementById('techModalClose');

function openTechModal(prefix, idx) {
  const data = prefix === 'sec' ? securityModules : infraModules;
  if (idx < 0 || idx >= data.length) return;
  const m = data[idx];
  if (!m) return;
  const lang = document.documentElement.lang || 'ru';
  const title = lang === 'en' ? m.titleEn : m.title;
  const detail = lang === 'en' ? m.detailEn : m.detail;
  const sols = (lang === 'en' ? m.solutions : m.solutions) || '';
  const advs = (lang === 'en' ? m.advantagesEn : m.advantages) || '';
  const cat = lang === 'en' ? (prefix === 'sec' ? 'Information Security' : 'IT Infrastructure') : (prefix === 'sec' ? 'Информационная безопасность' : 'ИТ-Инфраструктура');
  const solList = sols.split(';').map(s => `<li>${s.trim()}</li>`).join('');
  const advList = advs.split(';').map(s => `<li>${s.trim()}</li>`).join('');
  tmb.innerHTML = `<div class="tech-modal__title">${title}</div><div class="tech-modal__badge">${cat}</div><div class="tech-modal__desc">${detail}</div>${solList ? `<div class="tech-modal__section"><div class="tech-modal__section-title">${lang === 'en' ? 'Solutions' : 'Решения'}</div><ul class="tech-modal__list">${solList}</ul></div>` : ''}${advList ? `<div class="tech-modal__section"><div class="tech-modal__section-title">${lang === 'en' ? 'Key Advantages' : 'Ключевые преимущества'}</div><ul class="tech-modal__list">${advList}</ul></div>` : ''}<div class="tech-modal__divider"></div><button class="tech-modal__submit" onclick="closeTechModal();openContactForm('${title}')">${lang === 'en' ? 'Request a demo or consultation' : 'Запросить демонстрацию или консультацию'} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>`;
  tmo.classList.add('active'); document.body.style.overflow = 'hidden';
}
function closeTechModal() { tmo.classList.remove('active'); document.body.style.overflow = ''; }
tmo?.addEventListener('click', e => { if (e.target === tmo) closeTechModal(); });
tmc?.addEventListener('click', closeTechModal);

// ==============================================================
//  CONTACT FORM, SEARCH, ACCORDION, BURGER, LANG, THEME
// ==============================================================
function openContactForm(s) {
  closeModal(); closeTechModal();
  const fs = document.getElementById('contacts');
  if (fs) fs.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const ta = document.querySelector('.contacts__textarea');
  if (ta && s) { ta.value = `${document.documentElement.lang === 'en' ? 'Product inquiry' : 'Запрос по продукту'}: ${s}\n\n`; ta.focus(); }
}
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const fc = this.innerHTML;
  this.innerHTML = `<div class="form-success"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><h3>${document.documentElement.lang === 'en' ? 'Request sent!' : 'Запрос отправлен!'}</h3><p>${document.documentElement.lang === 'en' ? 'Our team will contact you shortly.' : 'Наша команда свяжется с вами в ближайшее время.'}</p></div>`;
  setTimeout(() => { this.innerHTML = fc; }, 3000);
});
document.getElementById('searchInput')?.addEventListener('input', e => {
  const q = e.target.value.toLowerCase().trim();
  document.querySelectorAll('.card, .about-card, .news-card').forEach(c => {
    const f = (c.getAttribute('data-filter')||'').toLowerCase();
    c.style.display = (!q || f.includes(q)) ? '' : 'none';
  });
  document.querySelectorAll('.partner-card').forEach(c => {
    const n = (c.getAttribute('data-partner')||'').toLowerCase();
    c.style.display = (!q || n.includes(q)) ? '' : 'none';
  });
});
document.addEventListener('click', e => {
  const vh = e.target.closest('.vacancy__header');
  if (vh) { const v = vh.closest('.vacancy'); if (v) { const a = v.classList.contains('active'); document.querySelectorAll('.vacancy.active').forEach(x => x.classList.remove('active')); if (!a) v.classList.add('active'); } }
  const nc = e.target.closest('.news-card');
  if (nc) nc.classList.toggle('active');
});
const bb = document.getElementById('burgerBtn'), hn = document.getElementById('headerNav');
bb?.addEventListener('click', () => { bb.classList.toggle('active'); hn.classList.toggle('active'); });
hn?.querySelectorAll('.header__nav-link').forEach(l => l.addEventListener('click', () => { bb.classList.remove('active'); hn.classList.remove('active'); }));

// LANGUAGE
function setLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('itld_lang', lang);
  document.querySelectorAll('#langRu, #langEn').forEach(b => b.classList.toggle('active', b.id === 'lang' + lang.toUpperCase()));
  // Re-render all dynamic content
  renderSwiperCards('securityCards', securityModules);
  renderSwiperCards('infraCards', infraModules);
  renderAbout(); renderNews(); renderVac(); renderPartners();
  applyLang(lang);
}
document.getElementById('langRu')?.addEventListener('click', () => setLanguage('ru'));
document.getElementById('langEn')?.addEventListener('click', () => setLanguage('en'));

function applyLang(lang) {
  const t = lang === 'en'
    ? {solutions:'Solutions',about:'About Us',partners:'Partners',news:'News',vacancies:'Jobs',contacts:'Contacts',search:'Search solutions...',ht:'Digital Sovereignty',ha:'starts here',hs:'Premium distribution of cybersecurity, IT infrastructure and technology hub in Central Asia',hb1:'Explore Solutions',hb2:'Contact Us',st1:'Information Security',st2:'IT Infrastructure',st3:'About Company',st4:'Partners',st5:'News Feed',st6:'Vacancies',st7:'Contacts & Demo',al:'We make unique advanced high-tech solutions available for customers in Kazakhstan!',ch:'Get in Touch',ct:'Request a demo, get implementation advice or become our partner.',cn:'Your Name',ce:'Email',cp:'Phone',cm:'Your message...',cs:'Send Request',sel:'Select topic',sd:'Demo Request',sp:'Partnership',ss:'Technical Support',so:'Other',fc:'© 2026 ITLD Distribution & Technology Hub. All rights reserved.',ft:'Digital sovereignty starts here'}
    : {solutions:'Решения',about:'О компании',partners:'Партнёры',news:'Новости',vacancies:'Вакансии',contacts:'Контакты',search:'Поиск решений...',ht:'Цифровой суверенитет',ha:'начинается здесь',hs:'Премиальная дистрибуция решений кибербезопасности, ИТ-инфраструктуры и технологический хаб в Центральной Азии',hb1:'Исследовать решения',hb2:'Связаться с нами',st1:'Информационная безопасность',st2:'ИТ-Инфраструктура',st3:'О компании',st4:'Партнёры',st5:'Ветка новостей',st6:'Вакансии',st7:'Контакты & Демо',al:'Мы делаем уникальные передовые высокотехнологичные решения доступными для заказчиков в Казахстане!',ch:'Свяжитесь с нами',ct:'Запросите демонстрацию решений, получите консультацию по внедрению или станьте нашим партнёром.',cn:'Ваше имя',ce:'Электронная почта',cp:'Телефон',cm:'Ваше сообщение...',cs:'Отправить запрос',sel:'Выберите тему',sd:'Запрос демонстрации',sp:'Партнёрство',ss:'Техническая поддержка',so:'Другое',fc:'© 2026 ITLD Distribution & Technology Hub. Все права защищены.',ft:'Цифровой суверенитет начинается здесь'};
  const nk = ['solutions','about','partners','news','vacancies','contacts'];
  document.querySelectorAll('.header__nav-link').forEach((l,i) => { if (i < nk.length) l.textContent = t[nk[i]]; });
  const si = document.getElementById('searchInput'); if (si) si.placeholder = t.search;
  const ht = document.querySelector('.hero__title'); if (ht) ht.innerHTML = `${t.ht}<br /><span class="hero__title-accent">${t.ha}</span>`;
  const hs = document.querySelector('.hero__subtitle'); if (hs) hs.textContent = t.hs;
  const hb = document.querySelectorAll('.hero__actions .btn'); if (hb[0]) hb[0].textContent = t.hb1; if (hb[1]) hb[1].textContent = t.hb2;
  const st = document.querySelectorAll('.section__title'); const sk = ['st1','st2','st3','st4','st5','st6','st7'];
  st.forEach((el,i) => { if (i < sk.length) el.textContent = t[sk[i]]; });
  const al = document.querySelector('.about__lead'); if (al) al.textContent = t.al;
  const ch = document.querySelector('.contacts__heading'); if (ch) ch.textContent = t.ch;
  const ct = document.querySelector('.contacts__text'); if (ct) ct.textContent = t.ct;
  const ci = document.querySelectorAll('.contacts__input'); if (ci[0]) ci[0].placeholder = t.cn; if (ci[1]) ci[1].placeholder = t.ce; if (ci[2]) ci[2].placeholder = t.cp;
  const sel = document.querySelector('.contacts__select'); if (sel) { const o = sel.querySelectorAll('option'); if (o[0]) o[0].textContent = t.sel; if (o[1]) o[1].textContent = t.sd; if (o[2]) o[2].textContent = t.sp; if (o[3]) o[3].textContent = t.ss; if (o[4]) o[4].textContent = t.so; }
  const ta = document.querySelector('.contacts__textarea'); if (ta) ta.placeholder = t.cm;
  const sb = document.querySelector('.contacts__submit'); if (sb) sb.textContent = t.cs;
  const fc = document.querySelector('.footer__copy'); if (fc) fc.textContent = t.fc;
  const ft = document.querySelector('.footer__tagline'); if (ft) ft.textContent = t.ft;
}

// THEME
const tt = document.getElementById('themeToggle');
if (localStorage.getItem('itld_theme') === 'light') document.body.classList.add('light-theme');
tt?.addEventListener('click', () => {
  const is = document.body.classList.toggle('light-theme');
  localStorage.setItem('itld_theme', is ? 'light' : 'dark');
});

// ==============================================================
//  INIT
// ==============================================================
let securitySwiper, infraSwiper;
function initSwipers() {
  if (document.getElementById('securitySlider')) securitySwiper = new Swiper('#securitySlider', { loop: true, grabCursor: true, spaceBetween: 24, navigation: { prevEl: '#secPrev', nextEl: '#secNext' }, breakpoints: { 0: { slidesPerView: 1 }, 600: { slidesPerView: 2 }, 900: { slidesPerView: 3 }, 1200: { slidesPerView: 4 } } });
  if (document.getElementById('infraSlider')) infraSwiper = new Swiper('#infraSlider', { loop: true, grabCursor: true, spaceBetween: 24, navigation: { prevEl: '#infraPrev', nextEl: '#infraNext' }, breakpoints: { 0: { slidesPerView: 1 }, 600: { slidesPerView: 2 }, 900: { slidesPerView: 3 }, 1200: { slidesPerView: 4 } } });
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('itld_lang') || 'ru';
  document.documentElement.lang = savedLang;
  document.querySelectorAll('#langRu, #langEn').forEach(b => b.classList.toggle('active', b.id === 'lang' + savedLang.toUpperCase()));
  renderSwiperCards('securityCards', securityModules);
  renderSwiperCards('infraCards', infraModules);
  renderAbout(); renderPartners(); renderNews(); renderVac();
  initSwipers();
  applyLang(savedLang);
});