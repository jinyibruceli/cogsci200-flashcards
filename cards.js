const CARDS = [
  // === Marr's levels & Cross-cutting ===
  {
    topic: "Cross-cutting",
    term: "Marr's three levels of explanation",
    termCn: "Marr 的三层解释",
    back: `<div class="en-side">
<p><strong>Definition.</strong> Every mental capacity can be analyzed at three levels: <strong>Functional</strong> (what problem is solved?), <strong>Algorithmic</strong> (what procedure?), <strong>Physical</strong> (which neural structure?).</p>
<p><strong>Examples.</strong></p>
<ul>
<li>Vision — Functional: infer 3D scene from 2D retinal image; Algorithmic: <em>Bayesian inference</em>; Physical: V1, FFA, etc.</li>
<li>Language — Functional: map sound to meaning; Algorithmic: <em>phrase-structure grammar</em>; Physical: Broca / Wernicke.</li>
<li>Reward learning — Functional: maximize long-term reward; Algorithmic: <em>Q-learning</em>; Physical: striatum / VTA / vmPFC.</li>
</ul>
<p><strong>Exam hook.</strong> Given any phenomenon, state what it is at the functional, algorithmic, and physical levels.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>任何心智能力都拆成 <strong>功能层 / 算法层 / 物理层</strong> 三层分析。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>视觉：解决逆光学问题 / Bayesian 推理 / V1、FFA</li>
<li>语言：声音到意义 / 短语结构语法 / Broca、Wernicke</li>
<li>强化学习：最大化长期回报 / Q-learning / striatum、VTA、vmPFC</li>
</ul>
<p><strong>考试对应：</strong>给一个现象说出它在三层各是什么。</p>
</div>`
  },
  {
    topic: "Cross-cutting",
    term: "Input-Output Equivalence",
    termCn: "输入-输出等价",
    back: `<div class="en-side">
<p><strong>Definition.</strong> The same <strong>function</strong> can be realized by <strong>different algorithms</strong>. Variation lives at the <em>function → algorithm</em> step.</p>
<p><strong>Examples.</strong></p>
<ul>
<li>Palindrome detection — check ends-inward or middle-outward; both compute the same function.</li>
<li><em>Turing Test</em> — judges only compare input/output, not internal procedure.</li>
</ul>
<p><strong>Exam hook.</strong> Distinguish from Multiple Realizability: I/O equivalence is about algorithm choice, not physical substrate.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>同一 <strong>function</strong> 可由不同 <strong>algorithm</strong> 实现（function → algorithm 这一层变）。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>找回文有多种算法</li>
<li>Turing Test 只比较输入输出</li>
</ul>
<p><strong>考试对应：</strong>与 multiple realizability 的区分题。</p>
</div>`
  },
  {
    topic: "Cross-cutting",
    term: "Multiple Realizability",
    termCn: "多重可实现",
    back: `<div class="en-side">
<p><strong>Definition.</strong> The same <strong>algorithm</strong> can run on <strong>different physical substrates</strong>. Variation lives at the <em>algorithm → physical</em> step.</p>
<p><strong>Examples.</strong></p>
<ul>
<li>Candy Crush running on Mac, iPhone, Android.</li>
<li>A palindrome algorithm running on a Turing Machine or a PC.</li>
<li>Bayesian inference running in human brain vs alien brain vs silicon.</li>
</ul>
<p><strong>Exam hook.</strong> Paired with CTM to dissolve the mind-body problem: mental states implemented by but not identical to physical states.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>同一 <strong>algorithm</strong> 可在不同物理基底上实现（algorithm → physical 这一层变）。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Candy Crush 多平台都能跑</li>
<li>Bayesian 算法人脑或外星脑都可</li>
</ul>
<p><strong>考试对应：</strong>配合 CTM 用来回应心身问题。</p>
</div>`
  },
  {
    topic: "Cross-cutting",
    term: "Dual Processes",
    termCn: "双过程",
    back: `<div class="en-side">
<p><strong>Definition.</strong> Many mental capacities have a <strong>fast / automatic / unconscious</strong> system alongside a <strong>slow / deliberate / conscious</strong> one.</p>
<p><strong>Examples across the course.</strong></p>
<ul>
<li>Kahneman's <strong>System 1 / System 2</strong>.</li>
<li><em>LeDoux's</em> Low Road / High Road for fear.</li>
<li>Cosmides &amp; Tooby's <strong>Cheater Detection Module</strong> vs central reasoning.</li>
<li><strong>Blindsight</strong> — subcortical (unconscious) vs cortical (conscious) vision.</li>
<li>Greene's moral dual process — personal alarm-bell vs impersonal cost-benefit.</li>
</ul>
<p><strong>Exam hook.</strong> "Name other dual-process pairs you have seen in this course."</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>心智普遍存在 <strong>快/自动</strong> 与 <strong>慢/有意识</strong> 两套系统。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>System 1 / System 2</li>
<li>Low Road / High Road</li>
<li>Cheater Detection vs central cognition</li>
<li>Blindsight；Greene 道德双过程</li>
</ul>
<p><strong>考试对应：</strong>举出课程中的其他双过程例子。</p>
</div>`
  },
  {
    topic: "Cross-cutting",
    term: "Poverty of the Stimulus",
    termCn: "刺激贫乏论证",
    back: `<div class="en-side">
<p><strong>Definition.</strong> Input is <strong>meager</strong>, output is <strong>rich</strong> — the gap must be filled by innate structure.</p>
<p><strong>Examples across the course.</strong></p>
<ul>
<li><strong>Language</strong> — children master complex syntax from limited input → <em>Universal Grammar</em> (Chomsky).</li>
<li><strong>Moral</strong> — children develop sophisticated judgments from sparse moral input → <em>Universal Moral Grammar</em> (Mikhail).</li>
<li><strong>Perception</strong> — 5 hidden assumptions act as innate priors that fill gaps in 2D retinal input.</li>
<li><strong>Infant cognition</strong> — babies know more than input could teach (continuity, solidity, etc.).</li>
</ul>
<p><strong>Exam hook.</strong> Name domains where a POS argument is offered and say what innate structure it posits.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>输入贫乏、输出丰富 → 必有先天结构。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>语言 → UG；道德 → UMG</li>
<li>感知 → 5 条 hidden assumptions</li>
<li>婴儿认知</li>
</ul>
<p><strong>考试对应：</strong>列举课程里用 POS 论证的领域。</p>
</div>`
  },
  {
    topic: "Cross-cutting",
    term: "Tacit Knowledge",
    termCn: "隐性知识",
    back: `<div class="en-side">
<p><strong>Definition.</strong> Information inside a cognitive system that the person <strong>cannot articulate</strong> — you use it, but cannot explain it.</p>
<p><strong>Examples.</strong></p>
<ul>
<li>The language <em>interrogative rule</em> ("move the main verb") — kids use it correctly but cannot state it.</li>
<li>The 5 <em>hidden assumptions</em> of perception.</li>
<li>Infants' intuitive physics (continuity, solidity).</li>
<li>Moral principles like the <em>Doctrine of Double Effect</em> (Mikhail's key example).</li>
</ul>
<p><strong>Exam hook.</strong> Crosscutting Q5 — tacit knowledge / inaccessibility is what Mikhail invokes; Greene does NOT.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>系统里有、但人说不出来的知识。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>interrogative rule</li>
<li>5 条 hidden assumptions</li>
<li>婴儿直觉物理</li>
<li>DDE（Mikhail 引用）</li>
</ul>
<p><strong>考试对应：</strong>Crosscutting Q5 — Mikhail 诉诸 tacit，Greene 不。</p>
</div>`
  },
  {
    topic: "Cross-cutting",
    term: "Universality",
    termCn: "普遍性",
    back: `<div class="en-side">
<p><strong>Definition.</strong> A capacity shows up in <strong>all human cultures</strong> with similar complexity — a standard argument for innateness.</p>
<p><strong>Examples.</strong></p>
<ul>
<li><strong>Language universality</strong> — every society has language; no "stone-age languages."</li>
<li><em>Nicaraguan Sign Language</em> (Senghas 2004) — children spontaneously created grammar.</li>
<li><em>Ekman's</em> 6 basic emotions recognized across cultures.</li>
</ul>
<p><strong>Exam hook.</strong> Used as one prong of the standard innateness argument alongside POS and early emergence.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>能力在所有人类文化中都出现 → 支持先天性。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>语言；NSL</li>
<li>Ekman 6 基本情绪</li>
</ul>
<p><strong>考试对应：</strong>与 POS、早发展并列的 innateness 论证。</p>
</div>`
  },

  // === Modularity ===
  {
    topic: "Modularity",
    term: "Modularity (6 characteristic features)",
    termCn: "模块性的 6 个典型特征",
    back: `<div class="en-side">
<p><strong>Definition.</strong> Fodor's six <strong>characteristic</strong> (<em>not required!</em>) features of a cognitive module:</p>
<ul>
<li><strong>Mandatory</strong> — runs automatically, not under conscious control.</li>
<li><strong>Fast</strong> — ~250–350ms for a word.</li>
<li><strong>Domain-specific</strong> — processes only a narrow input type.</li>
<li><strong>Informationally encapsulated</strong> — the module cannot see outside information.</li>
<li><strong>Inaccessible</strong> — other systems cannot see inside the module.</li>
<li><strong>Neurally discretely localized</strong> — has a specific brain region.</li>
</ul>
<p><strong>Exam hook.</strong> Exam 2 asked "which feature is required?" — answer: <strong>none</strong>. LeDoux's Low Road exhibits <em>all six</em> (fast, mandatory, domain-specific, encapsulated, inaccessible, localized to amygdala). The "neurally discretely localized" feature corresponds to <strong>Marr's physical level</strong> (crosscutting Q4).</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>Fodor 模块的 6 个 characteristic 特征（没有一条是 required）。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Mandatory / Fast / Domain-specific</li>
<li>Informationally encapsulated / Inaccessible</li>
<li>Neurally discretely localized</li>
<li>LeDoux Low Road 6 条全满足</li>
</ul>
<p><strong>考试对应：</strong>"哪个是 required" → 答"没有"；"neurally localized" 对应 Marr 物理层（crosscutting Q4）。</p>
</div>`
  },
  {
    topic: "Modularity",
    term: "Informational Encapsulation vs Inaccessibility",
    termCn: "信息封装 vs 不可访问",
    back: `<div class="en-side">
<p><strong>Definition.</strong> Two opposite-direction features of modularity.</p>
<ul>
<li><strong>Informational Encapsulation</strong> — <em>module → outside</em> is blocked. The module cannot use outside information.</li>
<li><strong>Inaccessibility</strong> — <em>outside → module</em> is blocked. Other systems cannot read the module's internals.</li>
</ul>
<p><strong>Examples.</strong></p>
<ul>
<li>Encapsulation: Müller-Lyer illusion persists even when you know the lines are equal; fear of flying persists when you know flying is safe.</li>
<li>Inaccessibility: children use the interrogative rule but cannot state it; moral grammar hidden rules are unstatable.</li>
</ul>
<p><strong>Exam hook.</strong> Crosscutting Q5 — <strong>inaccessibility / tacit knowledge</strong> is what <em>Mikhail</em> invokes for moral judgment; <em>Greene</em> does NOT.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>方向相反的两条特征。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Encapsulation = 模块→外 看不到（Müller-Lyer、飞行恐惧）</li>
<li>Inaccessibility = 外→模块 看不到（interrogative rule、DDE）</li>
</ul>
<p><strong>考试对应：</strong>Crosscutting Q5 — Mikhail 用 inaccessibility，Greene 不用。</p>
</div>`
  },

  // === Perception ===
  {
    topic: "Perception",
    term: "Inverse Optics Problem",
    termCn: "逆光学问题",
    back: `<div class="en-side">
<p><strong>Definition.</strong> Inferring a <strong>3D scene</strong> from a <strong>2D retinal image</strong>. The problem is <strong>underdetermined</strong> — infinitely many 3D scenes produce the same 2D image.</p>
<p><strong>Mechanism.</strong></p>
<ul>
<li>A row of same-size squares at different distances vs slanted diamonds can project identically onto the retina.</li>
<li>Solved by combining likelihood with <em>hidden assumptions</em> (priors) via Bayes' Rule.</li>
</ul>
<p><strong>Exam hook.</strong> Perception's foundational problem; sets up the need for innate priors.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>从 2D 视网膜图推断 3D 场景，问题 underdetermined。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>同一 2D 图对应无数 3D 场景</li>
<li>用 hidden assumptions + Bayes 解决</li>
</ul>
<p><strong>考试对应：</strong>感知的根本难题，引出先天先验。</p>
</div>`
  },
  {
    topic: "Perception",
    term: "5 Hidden Assumptions of Perception",
    termCn: "感知系统的 5 条隐藏假设",
    back: `<div class="en-side">
<p><strong>Definition.</strong> Innate <strong>Bayesian priors</strong> the visual system uses to solve the inverse optics problem.</p>
<ol>
<li>Light comes from a <strong>single overhead light source</strong>.</li>
<li>Surfaces in shadow are <strong>brighter than sensor readings suggest</strong>.</li>
<li>Things tend to move in <strong>straight lines</strong>.</li>
<li>All points on a moving object move <strong>together</strong>.</li>
<li>Moving objects <strong>progressively occlude / reveal</strong> a continuous background.</li>
</ol>
<p><strong>Evidence.</strong> <em>Hershberger (1970)</em> chicks show the overhead-light assumption is <strong>innate</strong>.</p>
<p><strong>Exam hook.</strong> Tacit knowledge example; functions as innate prior P(scene) in Bayes.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>视觉系统的 5 条先天 Bayesian 先验。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>光从上；阴影实际更亮；直线运动；同步运动；渐进遮挡</li>
<li>Hershberger 小鸡证明"光从上"先天</li>
</ul>
<p><strong>考试对应：</strong>tacit knowledge 例子；Bayes 中的 P(scene)。</p>
</div>`
  },
  {
    topic: "Perception",
    term: "Bayes' Rule",
    termCn: "贝叶斯规则",
    back: `<div class="en-side">
<p><strong>Formula.</strong></p>
<span class='formula'>P(h|d) = P(d|h) · P(h) / Σⱼ P(d|hⱼ) · P(hⱼ)</span>
<ul>
<li><strong>P(h|d)</strong> = <em>posterior</em> — belief in h after seeing d.</li>
<li><strong>P(d|h)</strong> = <em>likelihood</em>.</li>
<li><strong>P(h)</strong> = <em>prior</em>.</li>
<li>Denominator = <em>normalizing term / total evidence</em>.</li>
</ul>
<p><strong>Applied to perception.</strong></p>
<span class='formula'>P(scene|retinal) = P(retinal|scene)·P(scene) / P(retinal)</span>
<p>P(scene) is where hidden assumptions enter.</p>
<p><strong>Exam hook.</strong> Label the four components; set up perception, infant reasoning, or Sally's cough problem.</p>
</div>
<div class="cn-side">
<p><strong>公式：</strong>见上。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>后验 / 似然 / 先验 / 归一化</li>
<li>感知中 P(scene) = hidden assumptions</li>
</ul>
<p><strong>考试对应：</strong>四部分命名；套用到具体题。</p>
</div>`
  },
  {
    topic: "Perception",
    term: "Hershberger (1970) chicks",
    termCn: "Hershberger 小鸡实验",
    back: `<div class="en-side">
<p><strong>Claim.</strong> The "light comes from above" assumption is <strong>innate</strong>.</p>
<p><strong>Method.</strong> Chicks raised from hatching under <em>below-lit</em> cages (even egg-incubation lit from below). Trained to peck either dents or bumps, then tested on two shaded images.</p>
<ul>
<li>Image B: shadow on top → under overhead-light assumption, looks like a <em>dent</em>.</li>
<li>Image C: shadow on bottom → under overhead-light assumption, looks like a <em>bump</em>.</li>
</ul>
<p><strong>Result.</strong> Chicks trained on dents pecked B; chicks trained on bumps pecked C. Despite never experiencing overhead lighting, they defaulted to the assumption → <strong>innate</strong>.</p>
<p><strong>Exam hook.</strong> Classic innate-prior evidence.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>证明"光从上方"是先天假设。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>小鸡孵化起只经历下方光源</li>
<li>测试依然用"光从上"解释阴影</li>
</ul>
<p><strong>考试对应：</strong>先天先验的经典证据。</p>
</div>`
  },
  {
    topic: "Perception",
    term: "Sugita (2008) face-deprived monkeys",
    termCn: "Sugita 猴子面孔剥夺实验",
    back: `<div class="en-side">
<p><strong>Claim.</strong> Face processing has both an <strong>innate template</strong> and an <strong>experience-driven tuning</strong> stage.</p>
<p><strong>Method.</strong> Japanese macaques raised with caregivers wearing masks — no face exposure — for 6/12/24 months. Then exposed to either human or monkey faces for 1 month.</p>
<p><strong>Results.</strong></p>
<ul>
<li>Before exposure: already preferred faces over non-face objects (<em>innate face detection template</em>) but didn't distinguish human vs monkey.</li>
<li>After 1 month of human-face exposure: preferred human faces.</li>
<li>After 1 month of monkey-face exposure: like controls, preferred monkey faces.</li>
</ul>
<p><strong>Exam hook.</strong> <strong>Innate structure + environmental input + sensitive period</strong> combined.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>先天面孔模板 + 经验微调。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>剥夺后仍偏好面孔</li>
<li>暴露 1 月形成专长偏好</li>
</ul>
<p><strong>考试对应：</strong>innate + input + sensitive period 三者结合。</p>
</div>`
  },
  {
    topic: "Perception",
    term: "Blindsight",
    termCn: "盲视",
    back: `<div class="en-side">
<p><strong>Definition.</strong> Patients with <strong>V1 (primary visual cortex)</strong> damage report no conscious vision in the affected field but can <strong>avoid obstacles</strong> and <strong>catch thrown objects</strong>.</p>
<p><strong>Mechanism.</strong> Visual signals travel a subcortical pathway: <em>retina → LGN → pulvinar / superior colliculus → other cortex</em>, bypassing V1, so they drive action without consciousness.</p>
<p><strong>Exam hook.</strong> Classic dual-process case in perception: unconscious subcortical vs conscious cortical vision. V1 is in the <em>occipital lobe</em>.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>V1 受损患者"看不见"却能避障、接物。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>皮层下通路绕开 V1</li>
<li>意识缺失但行为有视觉指导</li>
</ul>
<p><strong>考试对应：</strong>感知的 dual process 代表。</p>
</div>`
  },
  {
    topic: "Perception",
    term: "Prosopagnosia",
    termCn: "面孔失认症",
    back: `<div class="en-side">
<p><strong>Definition.</strong> Inability to recognize faces, caused by damage to the <strong>Fusiform Face Area (FFA)</strong> in the <em>inferior (ventral) temporal lobe</em>.</p>
<p><strong>Features.</strong></p>
<ul>
<li><strong>Selective deficit</strong> — other visual recognition intact.</li>
<li>Not a memory problem.</li>
</ul>
<p><strong>Exam hook.</strong> Neurally discretely localized module for face processing.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>FFA（颞叶下/腹侧）损伤 → 认不出脸。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>选择性缺损</li>
<li>非记忆问题</li>
</ul>
<p><strong>考试对应：</strong>面孔处理的 neurally localized 模块。</p>
</div>`
  },

  // === Infant Cognition ===
  {
    topic: "Infant",
    term: "Violation of Expectation method",
    termCn: "违反预期方法",
    back: `<div class="en-side">
<p><strong>Definition.</strong> Measure <strong>looking time</strong> to expected vs unexpected events; longer looks at <em>violations</em> mean the baby (1) had an expectation, (2) detected the violation, (3) responded with attention.</p>
<p><strong>Example.</strong> 1+1 arithmetic — two toys placed behind a screen; screen drops to reveal 1 (violation) or 2 (expected).</p>
<p><strong>Exam hook.</strong> The workhorse method across intuitive physics, arithmetic, probability, and false-belief (Onishi &amp; Baillargeon).</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>用注视时长测婴儿预期。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>1+1 实验</li>
<li>应用于物理、算术、概率、false belief</li>
</ul>
<p><strong>考试对应：</strong>婴儿研究的主力方法。</p>
</div>`
  },
  {
    topic: "Infant",
    term: "Intuitive Physics ages",
    termCn: "直觉物理的 5 原则+年龄",
    back: `<div class="en-side">
<p><strong>Core timeline.</strong></p>
<ul>
<li><strong>Continuity</strong> (object permanence): <strong>2.5 months</strong>.</li>
<li><strong>Solidity</strong> (solids don't pass through solids): <strong>2.5 months</strong>.</li>
<li><strong>Cohesion</strong> (objects are bounded wholes): <strong>3 months</strong>.</li>
<li><strong>Gravity</strong>: <strong>4.5 months</strong>.</li>
<li><strong>Contact causality</strong>: <strong>6–7 months</strong>.</li>
</ul>
<p><strong>Plus.</strong></p>
<ul>
<li>Basic arithmetic (1+1=2): <strong>5 months</strong>.</li>
<li>Probabilistic reasoning: <strong>8–11 months</strong>.</li>
<li>False-belief understanding: <strong>15–18 months</strong>.</li>
</ul>
<p><strong>Exam hook.</strong> Memorize ages; used as evidence of core knowledge / early innateness.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>必背年龄表。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Continuity/Solidity 2.5m；Cohesion 3m；Gravity 4.5m；Contact 6-7m</li>
<li>算术 5m；概率 8-11m；False belief 15-18m</li>
</ul>
<p><strong>考试对应：</strong>年龄匹配题；core knowledge 证据。</p>
</div>`
  },
  {
    topic: "Infant",
    term: "Onishi & Baillargeon (2005)",
    termCn: "15 个月婴儿 false belief",
    back: `<div class="en-side">
<p><strong>Claim.</strong> <strong>15-month-olds</strong> understand others can have <strong>false beliefs</strong>. Traditional false-belief tasks require age 4 and rely on language; this study used violation-of-expectation with a toy melon.</p>
<p><strong>Conditions.</strong></p>
<ul>
<li><strong>TB-yellow</strong>: agent saw melon moved to yellow box → baby expects agent to reach into yellow; surprised if she reaches green.</li>
<li><strong>FB-green</strong>: agent believes melon is in green (she didn't see it move) → baby expects agent to reach into green; surprised if she reaches yellow.</li>
</ul>
<p><strong>Exam hook.</strong> Early Theory of Mind; published in <em>Science</em>.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>15 月婴儿已能理解他人有 false belief。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>TB-yellow / FB-green 两条件</li>
<li>用 violation of expectation</li>
</ul>
<p><strong>考试对应：</strong>早期 ToM 证据。</p>
</div>`
  },
  {
    topic: "Infant",
    term: "Xu & Denison (2009) ping-pong balls",
    termCn: "婴儿乒乓球概率实验",
    back: `<div class="en-side">
<p><strong>Claim.</strong> <strong>8–11-month-olds</strong> grasp <strong>sample-to-population</strong> statistics and integrate it with theory of mind.</p>
<p><strong>Method.</strong> Large box (e.g., 75% red / 25% white). Experimenter "randomly" draws a sample.</p>
<p><strong>Results.</strong></p>
<ul>
<li>Unusual sample proportion → longer looking (violation of expectation).</li>
<li>Control: if experimenter visibly drew from her <em>pocket</em> instead of the box, babies were NOT surprised.</li>
</ul>
<p><strong>Exam hook.</strong> Babies use <em>statistical reasoning</em> AND <em>theory of mind</em> — "she was sampling selectively."</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>8-11 月婴儿能做样本-总体推理 + ToM。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>比例反常 → 惊讶</li>
<li>从口袋抽 → 不惊讶（selective sampling）</li>
</ul>
<p><strong>考试对应：</strong>统计 + ToM 结合。</p>
</div>`
  },
  {
    topic: "Infant",
    term: "Two kinds of baby cleverness",
    termCn: "婴儿聪明的两方面",
    back: `<div class="en-side">
<p><strong>Distinction.</strong></p>
<ul>
<li><strong>Clever in what they know</strong> — innate or early-acquired knowledge: intuitive physics, arithmetic, theory of mind, statistics.</li>
<li><strong>Clever in how they learn</strong> — innate learning mechanisms: Bayesian belief-updating, rational action choice.</li>
</ul>
<p><strong>Spelke's hybrid position.</strong> <em>"Babies are designed to learn."</em> Sits between pure nativism and pure empiricism.</p>
<p><strong>Exam hook.</strong> Know that not every specific fact is innate, but the <em>learning mechanism</em> is.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>婴儿聪明的两维度。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>知道很多（core knowledge）</li>
<li>学得快（学习机制先天）</li>
</ul>
<p><strong>考试对应：</strong>Spelke 的 hybrid 立场。</p>
</div>`
  },

  // === Language ===
  {
    topic: "Language",
    term: "4 properties of language",
    termCn: "语言的 4 个关键属性",
    back: `<div class="en-side">
<p><strong>The four.</strong> Associationism explains none; Cognitivism explains all.</p>
<ul>
<li><strong>Stimulus Independence</strong> — speech occurs outside original learning context (Nasser speaks in an airplane cabin what he learned at home).</li>
<li><strong>Novelty</strong> — producing sentences never encountered before. <em>Wug test</em>: children correctly pluralize "wug" → "wugs"; also overgeneralize ("goed").</li>
<li><strong>Productivity</strong> — unbounded number of possible sentences, due to <strong>recursion</strong> in PSG (S → NP VP; VP → V S).</li>
<li><strong>Systematicity</strong> — knowing one sentence implies knowing structurally related sentences (know "onion is between mercury and crucible" ⇒ also know "mercury is between onion and crucible").</li>
</ul>
<p><strong>Exam hook.</strong> Match each property to evidence and explain why associationism fails.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>Associationism 都解释不了，Cognitivism 都能。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Stimulus Independence（机舱说话）</li>
<li>Novelty（Wug test）</li>
<li>Productivity（PSG recursion）</li>
<li>Systematicity（洋葱-水银例）</li>
</ul>
<p><strong>考试对应：</strong>四属性配证据 + 解释 associationism 失败。</p>
</div>`
  },
  {
    topic: "Language",
    term: "Universal Grammar (UG)",
    termCn: "普遍语法",
    back: `<div class="en-side">
<p><strong>Definition.</strong> UG is <em>the species-typical capacity and limits of the human mind to acquire and use language</em> — both the research topic ("what's innate in language?") and the theory about it.</p>
<p><strong>Common misunderstanding.</strong> UG is <strong>NOT</strong> "a set of grammatical rules every child is born knowing" (Exam 2 marked this <em>False</em>).</p>
<p><strong>Exam hook.</strong> Pick the correct definition; distinguish the <em>capacity</em> from the <em>specific rules</em> children end up acquiring.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>物种典型的语言习得与使用能力与限度。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>不是一套天生规则</li>
<li>是能力本身 + 关于该能力的研究/理论</li>
</ul>
<p><strong>考试对应：</strong>正确选项识别题。</p>
</div>`
  },
  {
    topic: "Language",
    term: "Poverty of the Stimulus (Language)",
    termCn: "语言的刺激贫乏论证",
    back: `<div class="en-side">
<p><strong>Classic case: interrogative rule.</strong></p>
<ul>
<li>Surface rule (wrong): "Move the first 'are' to the front."</li>
<li>Correct rule: <strong>"Move the main verb"</strong> — the auxiliary of the main VP (a <em>structure-dependent rule</em>).</li>
</ul>
<p><strong>Example.</strong> "the people you are staying with are very nice" → "<strong>Are</strong> the people you are staying with ___ very nice?" (first 'are' is inside a relative clause; the one to move is the main-verb one).</p>
<p><strong>Exam hook.</strong> Children master this structure-dependent rule without explicit teaching → innate UG; the rule itself is <em>tacit knowledge</em>.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>interrogative rule 的 POS 论证。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>表面规则错；正确规则 = move main verb</li>
<li>儿童未教而会 → 先天 UG</li>
</ul>
<p><strong>考试对应：</strong>语言 POS 的标准例子；tacit knowledge。</p>
</div>`
  },
  {
    topic: "Language",
    term: "Nicaraguan Sign Language (NSL)",
    termCn: "尼加拉瓜手语",
    back: `<div class="en-side">
<p><strong>Senghas et al. (2004)</strong> — "Children creating core properties of language."</p>
<p><strong>Setup.</strong> Late-1970s Nicaragua opened a deaf school. Early <em>gesturers</em> used one combined gesture for manner (rolling) + path (leftward).</p>
<p><strong>Result.</strong> <strong>Cohorts 2 and 3</strong> (younger/later) split these <strong>sequentially</strong> — manner gesture then path gesture — showing <strong>combinatoric patterning</strong>.</p>
<p><strong>Exam hook.</strong> Exam 2: Cohort-3 Maria describes rolling + leftward → answer B (sequentially separate). Supports <em>language is created by kids</em> / innateness.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>NSL 儿童自发创造组合性语言。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>早期 gesturers 单一合成手势</li>
<li>Cohort 2/3 分开 manner 和 path</li>
</ul>
<p><strong>考试对应：</strong>Exam 2 Maria 题答 B。</p>
</div>`
  },
  {
    topic: "Language",
    term: "Broca's aphasia",
    termCn: "布洛卡失语症",
    back: `<div class="en-side">
<p><strong>Damage.</strong> <strong>Broca's area</strong> — left frontal lobe (the "syntactic region").</p>
<p><strong>Features.</strong></p>
<ul>
<li><strong>Non-fluent</strong> speech.</li>
<li><strong>Agrammatical</strong>.</li>
<li><strong>Meaning preserved</strong> — you can tell what they want to say.</li>
</ul>
<p><strong>Evidence.</strong> Cookie Theft picture description — halting but intelligible.</p>
<p><strong>Exam hook.</strong> Pair with Wernicke's in the <em>double dissociation</em> question.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>Broca 区损伤。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>非流利 + 无语法 + 意义保留</li>
<li>Cookie Theft 视频</li>
</ul>
<p><strong>考试对应：</strong>与 Wernicke 组成双分离。</p>
</div>`
  },
  {
    topic: "Language",
    term: "Wernicke's aphasia",
    termCn: "韦尼克失语症",
    back: `<div class="en-side">
<p><strong>Damage.</strong> <strong>Wernicke's area</strong> — left temporal lobe (the "semantic region").</p>
<p><strong>Features.</strong></p>
<ul>
<li><strong>Fluent</strong> speech.</li>
<li>Surface-correct grammar.</li>
<li><strong>"Word salad" — no meaning</strong>.</li>
</ul>
<p><strong>Exam hook.</strong> Exam 2's Mr. S example — answer: Wernicke. Pair with Broca's in double-dissociation questions.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>Wernicke 区损伤。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>流利 + 表面语法 + 无意义</li>
<li>word salad</li>
</ul>
<p><strong>考试对应：</strong>Mr. S 题；双分离。</p>
</div>`
  },
  {
    topic: "Language",
    term: "Double Dissociation (语言)",
    termCn: "语言的双重分离",
    back: `<div class="en-side">
<p><strong>Definition.</strong> Two groups show <em>opposite</em> patterns of impaired vs intact function — strong evidence that the two abilities are neurally independent.</p>
<p><strong>Language-domain examples.</strong></p>
<ul>
<li><strong>Broca's</strong> (syntax impaired / semantics spared) vs <strong>Wernicke's</strong> (semantics impaired / syntax spared).</li>
<li><strong>Williams syndrome</strong> (low overall cognition, relatively spared language) vs <strong>Down syndrome</strong> (IQ-matched but especially impaired language).</li>
</ul>
<p><strong>Exam hook.</strong> Double dissociation → language as an independent computational capacity (modularity).</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>两组患者显示相反损伤模式。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Broca vs Wernicke</li>
<li>Williams vs Down</li>
</ul>
<p><strong>考试对应：</strong>支持语言独立/模块性。</p>
</div>`
  },
  {
    topic: "Language",
    term: "Hickok et al. (2002) sign language",
    termCn: "手语脑损伤研究",
    back: `<div class="en-side">
<p><strong>Finding.</strong> Deaf signers with brain damage show Broca-/Wernicke-type aphasias <strong>identical in pattern</strong> to hearing speakers.</p>
<p><strong>Interpretation.</strong> Language is not tied to a specific sensory/motor modality; Broca's and Wernicke's process <em>abstract linguistic structure</em>, not sound or vision per se.</p>
<p><strong>Exam hook.</strong> Shows language modularity is amodal.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>失聪手语者的失语模式与听人一致。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Broca/Wernicke 处理抽象语言结构</li>
</ul>
<p><strong>考试对应：</strong>语言模块跨感觉通道。</p>
</div>`
  },
  {
    topic: "Language",
    term: "Cognitivism vs Associationism",
    termCn: "认知主义 vs 联想主义",
    back: `<div class="en-side">
<p><strong>The Chomsky vs Skinner debate.</strong> 1957 Skinner published <em>Verbal Behavior</em>; 1959 Chomsky's review is widely viewed as devastating.</p>
<p><strong>Associationism (Skinner).</strong></p>
<ul>
<li>In the head: sentence-context associations.</li>
<li>Learning: instrumental conditioning.</li>
<li>Fails on all 4 language properties.</li>
</ul>
<p><strong>Cognitivism (Chomsky).</strong></p>
<ul>
<li>In the head: <em>phrase-structure grammar</em> — abstract combinatorial rules.</li>
<li>Learning: largely innate (part of UG).</li>
<li>Handles all 4 language properties.</li>
</ul>
<p><strong>Exam hook.</strong> Map each framework to the 4 properties.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>Chomsky vs Skinner。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>1959 Chomsky 书评</li>
<li>联想解释不了 4 属性；PSG 可以</li>
</ul>
<p><strong>考试对应：</strong>两派对 4 属性的处理。</p>
</div>`
  },
  {
    topic: "Language",
    term: "Phrase Structure Grammar (PSG)",
    termCn: "短语结构语法",
    back: `<div class="en-side">
<p><strong>Definition.</strong> Rewrite rules that specify language structure.</p>
<p><strong>Typical rules.</strong></p>
<ul>
<li><code>S → NP VP</code></li>
<li><code>NP → Det N</code></li>
<li><code>NP → NP PP</code></li>
<li><code>VP → V NP</code></li>
<li><code>VP → VP PP</code></li>
<li><code>PP → P NP</code></li>
</ul>
<p><strong>Recursive</strong> — categories can branch back into themselves (VP → V S), enabling unbounded <em>productivity</em>.</p>
<p><strong>Exam hook.</strong> Draw a parse tree for an ambiguous sentence.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>重写规则定义语言结构。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>S→NP VP；NP→NP PP；VP→VP PP；PP→P NP 等</li>
<li>Recursion 带来 productivity</li>
</ul>
<p><strong>考试对应：</strong>画 parse tree。</p>
</div>`
  },
  {
    topic: "Language",
    term: "Syntactic Ambiguity",
    termCn: "句法歧义",
    back: `<div class="en-side">
<p><strong>Example: "The bear attended the picnic with cake."</strong></p>
<ul>
<li><strong>Meaning 1</strong> (cake is at the picnic): key rule <code>NP → NP PP</code> — [the picnic] + [with cake] form one NP.</li>
<li><strong>Meaning 2</strong> (bear brought cake): key rule <code>VP → VP PP</code> — [attended the picnic] + [with cake] form one VP.</li>
</ul>
<p><strong>Exam hook.</strong> Draw both parse trees; identify which rule distinguishes the readings. One of the four core claims about language processing: the system must handle ambiguous input.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>同一句子两种结构两种意义。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>"bear attended picnic with cake" 两种 tree</li>
<li>NP→NP PP vs VP→VP PP</li>
</ul>
<p><strong>考试对应：</strong>必考画树题。</p>
</div>`
  },

  // === Innateness ===
  {
    topic: "Innateness",
    term: "Samuels (2004) innateness definitions",
    termCn: "Innateness 的 5 种定义都有问题",
    back: `<div class="en-side">
<p><strong>Claim.</strong> There is no consensus definition of "innate." Every candidate has counterexamples.</p>
<ol>
<li>"Present at birth" — <em>counterexample: teeth, beards</em>.</li>
<li>"Product of internal causes" — <em>skin, digestion are internal too</em>.</li>
<li>"Product of the genes" — too narrow.</li>
<li>"High heritability" — e.g., "the sky is blue" is known by all but obviously not innate.</li>
<li>"Reliably develops across normal environments" — some common-sense knowledge fits too.</li>
</ol>
<p><strong>Exam hook.</strong> Pick a counterexample for a given definition (teeth / beards for "present at birth").</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>5 种 innate 定义都有反例。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>出生时有 → 牙/胡子</li>
<li>内因 → 皮肤消化</li>
<li>高遗传 → "天蓝"反例</li>
</ul>
<p><strong>考试对应：</strong>给定义挑反例。</p>
</div>`
  },

  // === Computation ===
  {
    topic: "Computation",
    term: "Computational Theory of Mind (CTM)",
    termCn: "心智计算理论",
    back: `<div class="en-side">
<p><strong>Claim.</strong> <em>"All mentation is computation."</em> Pinker: <em>"The mind is a system of organs of computation, designed by natural selection."</em></p>
<p><strong>Implications.</strong></p>
<ul>
<li>Partially dissolves the <strong>mind-body problem</strong>: mental states = algorithms executing on physical substrate (software/hardware analogy).</li>
<li>CTM + Multiple Realizability → mental states are implemented by but not identical to physical states.</li>
</ul>
<p><strong>Limit.</strong> Solves Chalmers's "easy problem" (function); does not solve the "hard problem" (qualia).</p>
<p><strong>Exam hook.</strong> State the claim, its implication for mind-body, and its limit.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>所有思维 = 计算。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>软件/硬件类比</li>
<li>CTM + multiple realizability → 实现但不等于</li>
<li>不解决 hard problem</li>
</ul>
<p><strong>考试对应：</strong>命题 + 意义 + 局限。</p>
</div>`
  },
  {
    topic: "Computation",
    term: "Turing Machine 5 primitives",
    termCn: "图灵机的 5 个原始组件",
    back: `<div class="en-side">
<p><strong>Minimal formalization of computation.</strong></p>
<ol>
<li><strong>Tape</strong> — each cell holds one symbol or is blank.</li>
<li><strong>Symbols</strong> — a finite alphabet.</li>
<li><strong>Head</strong> — reads/writes one cell at a time; can move left or right.</li>
<li><strong>State memory</strong> — finite set of internal states.</li>
<li><strong>Rules</strong> — <em>"if in state S5 and read X, write Y, move left, change to Sn"</em>.</li>
</ol>
<p><strong>Exam hook.</strong> List the five; distinguish from the Universal Turing Machine (which takes program + input).</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>计算的 5 个原始组件。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Tape / Symbols / Head / State memory / Rules</li>
</ul>
<p><strong>考试对应：</strong>列出 5 个 + 区别 UTM。</p>
</div>`
  },
  {
    topic: "Computation",
    term: "Universal Turing Machine (UTM)",
    termCn: "通用图灵机",
    back: `<div class="en-side">
<p><strong>Definition.</strong> A Turing Machine that takes <strong>program + input</strong> as input. It is <strong>maximally flexible</strong> and <strong>maximally powerful</strong> — it can execute any algorithm and compute any computable function.</p>
<p><strong>Important limit.</strong> There exist <em>uncomputable functions</em> — no physical machine can solve them.</p>
<p><strong>Exam hook.</strong> Exam 2: Can a UTM compute "all conceivable input-output mappings"? Answer: <strong>No</strong> — only the computable ones.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>接受 program + input 的 Turing Machine。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>maximally flexible + powerful</li>
<li>有 uncomputable functions</li>
</ul>
<p><strong>考试对应：</strong>Exam 2 "all conceivable" 题答 No。</p>
</div>`
  },
  {
    topic: "Computation",
    term: "Church-Turing Thesis",
    termCn: "Church-Turing 论题",
    back: `<div class="en-side">
<p><strong>Claim.</strong> Every function computable by <em>any</em> physical machine is also computable by <em>some</em> Turing Machine.</p>
<p><strong>Venn picture.</strong></p>
<ul>
<li>Outer ring: all conceivable functions (infinite, includes uncomputable).</li>
<li>Inner ring = <em>computable by some TM</em> = <em>computable by a single UTM</em> = <em>computable by any physical machine</em>.</li>
</ul>
<p><strong>Exam hook.</strong> Turing Machines are maximally powerful within the computable.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>物理可计算 = Turing 可计算。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>外圈 all conceivable；内圈 computable</li>
</ul>
<p><strong>考试对应：</strong>TM 是 maximally powerful。</p>
</div>`
  },
  {
    topic: "Computation",
    term: "Turing Test for intelligence",
    termCn: "图灵测试",
    back: `<div class="en-side">
<p><strong>Core idea.</strong> Intelligence = <strong>input-output equivalence</strong>. If a judge chatting by text cannot tell which interlocutor is human vs machine, the machine counts as intelligent.</p>
<p><strong>Argument.</strong></p>
<ol>
<li>The person behind the screen is intelligent.</li>
<li>Machine and person are input-output equivalent.</li>
<li>∴ The machine is intelligent.</li>
</ol>
<p><strong>Evidence.</strong> <em>Jones &amp; Bergen (2025)</em> — GPT-4.5 with a "persona" prompt passed a three-party Turing Test (a first). Bollard criticizes: the persona prompt is like a cheat sheet.</p>
<p><strong>Exam hook.</strong> Turing Test illustrates input-output equivalence in action.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>智能 = 输入-输出等价。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>三步论证</li>
<li>Jones & Bergen (2025) GPT-4.5 通过三方测试</li>
</ul>
<p><strong>考试对应：</strong>I/O 等价的应用案例。</p>
</div>`
  },

  // === Emotions ===
  {
    topic: "Emotions",
    term: "Affect Programs",
    termCn: "情感程序",
    back: `<div class="en-side">
<p><strong>Claim.</strong> Emotions are special <strong>computational affect programs</strong>.</p>
<p><strong>Components.</strong></p>
<ul>
<li><strong>Appraisal</strong> — how the situation matches the agent's goals / priorities.</li>
<li><strong>Effector program</strong> — triggers cognitive / physiological / motoric / experiential changes plus action tendencies.</li>
</ul>
<p>Format: "If situation is of type X, then do Y."</p>
<p><strong>Exam hook.</strong> Shows CTM <em>can</em> accommodate emotion — at least in part, as affect programs.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>情绪 = 计算的 affect programs。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Appraisal + Effector program</li>
<li>"If X then Y" 形式</li>
</ul>
<p><strong>考试对应：</strong>CTM 可解释情绪。</p>
</div>`
  },
  {
    topic: "Emotions",
    term: "4 Takes on Emotion",
    termCn: "情绪理论的 4 个版本",
    back: `<div class="en-side">
<p><strong>Take 1 — James-Lange.</strong> Stimulus → body reaction → perception of body → feeling. Fails: body is too slow; many emotions share physiology.</p>
<p><strong>Take 2 — Schachter-Singer.</strong> Stimulus → body → conscious interpretation → feeling. Supported by <em>Dutton &amp; Aron</em> bridge study. Fails: too conscious.</p>
<p><strong>Take 3 — Standard Appraisal.</strong> Stimulus → conscious appraisal → effector program → body + feeling. Supported by <em>Lazarus</em> film studies. Fails: too self-report-dependent; cannot explain "I know I shouldn't be afraid but I am."</p>
<p><strong>Take 4 (accepted) — LeDoux dual-pathway.</strong></p>
<p><strong>Exam hook.</strong> Match each Take to a strength and a failure.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>情绪理论演进 4 步。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>James-Lange 太慢</li>
<li>Schachter-Singer（吊桥）太有意识</li>
<li>Standard Appraisal 太依赖 self-report</li>
<li>LeDoux 双通路采纳</li>
</ul>
<p><strong>考试对应：</strong>匹配优缺点。</p>
</div>`
  },
  {
    topic: "Emotions",
    term: "LeDoux Low Road / High Road",
    termCn: "LeDoux 恐惧双通路",
    back: `<div class="en-side">
<p><strong>Low Road</strong> (fast, unconscious).</p>
<p><code>stimulus → thalamus → amygdala → fear effector program</code></p>
<p><strong>High Road</strong> (slow, conscious).</p>
<p><code>stimulus → thalamus → cortex (conscious interpretation) → amygdala → fear effector program</code></p>
<p><strong>Example.</strong> A veteran hears a car backfire — Low Road triggers fear immediately; High Road later recognizes "not a gunshot."</p>
<p><strong>Exam hook.</strong> Crosscutting Q2 — the feature common to the Low Road and to modular systems is <strong>fast + mandatory + automatic</strong>. Low Road explains "I know I shouldn't be afraid but I am" (the two roads disagree).</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>恐惧的快慢双通路。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Low = thalamus→amygdala；High = 加 cortex</li>
<li>退伍兵 car backfire 例</li>
</ul>
<p><strong>考试对应：</strong>Crosscutting Q2 共同特征 = fast + mandatory + automatic。</p>
</div>`
  },
  {
    topic: "Emotions",
    term: "Amygdala and fear",
    termCn: "杏仁核与恐惧",
    back: `<div class="en-side">
<p><strong>Location.</strong> Medial temporal lobe, near hippocampus and basal ganglia.</p>
<p><strong>Lesion evidence.</strong> Amygdala lesion → both Low Road and High Road fail to activate the fear effector. The deficit is <strong>selective</strong> to fear; other emotions spared.</p>
<p><strong>Fear is highly modular.</strong></p>
<ul>
<li>Fast ✓</li>
<li>Mandatory ✓</li>
<li>Domain-specific ✓</li>
<li>Neurally discretely localized ✓</li>
<li>Informationally encapsulated ✓ (you can know the plane is safe and still feel fear)</li>
</ul>
<p><strong>Exam hook.</strong> Fear as paradigm modular emotion.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>amygdala 损伤 → 恐惧通路双断。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>选择性缺损</li>
<li>满足模块 5 条特征</li>
</ul>
<p><strong>考试对应：</strong>恐惧 = 模块化情绪代表。</p>
</div>`
  },
  {
    topic: "Emotions",
    term: "Ekman's 6 basic emotions",
    termCn: "Ekman 的 6 种基本情绪",
    back: `<div class="en-side">
<p><strong>Cross-cultural facial expression studies (1967, 1971).</strong></p>
<ol>
<li><strong>Happiness</strong></li>
<li><strong>Sadness</strong></li>
<li><strong>Anger</strong></li>
<li><strong>Fear</strong></li>
<li><strong>Disgust</strong></li>
<li><strong>Surprise</strong></li>
</ol>
<p>Support for <strong>universality</strong> (Darwin: some expressions are instinctual and cross-species homologous).</p>
<p><strong>Open question.</strong> Are "higher" emotions (love, pride, contempt) independent affect programs, mixtures, or socially constructed? Unresolved.</p>
<p><strong>Exam hook.</strong> List the 6; connect to universality as innateness evidence.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>6 种跨文化基本情绪。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>happiness/sadness/anger/fear/disgust/surprise</li>
<li>支持 universality</li>
</ul>
<p><strong>考试对应：</strong>列举 + 与先天性论证联系。</p>
</div>`
  },
  {
    topic: "Emotions",
    term: "Dutton & Aron (1974) bridge study",
    termCn: "吊桥实验",
    back: `<div class="en-side">
<p><strong>Supports Schachter-Singer Two-Factor Theory.</strong></p>
<p><strong>Method.</strong> Men crossed a <em>swaying high suspension bridge</em> vs a <em>stable low bridge</em>, then met a female assistant who gave them her number.</p>
<p><strong>Result.</strong> Bridge-condition men called the assistant significantly more often.</p>
<p><strong>Interpretation.</strong> Bodily arousal from the bridge was <em>misattributed</em> as attraction. Arousal + cognitive interpretation = emotion.</p>
<p><strong>Exam hook.</strong> Misattribution of arousal.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>支持 Schachter-Singer 的吊桥实验。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>吊桥组打电话比例更高</li>
<li>唤起被错误归因为吸引</li>
</ul>
<p><strong>考试对应：</strong>Misattribution of arousal。</p>
</div>`
  },

  // === Rationality ===
  {
    topic: "Rationality",
    term: "4 Takes on Rationality",
    termCn: "理性决策的 4 个版本",
    back: `<div class="en-side">
<p><strong>Take 1 — Maximize Objective Value.</strong> Fails: cannot handle probability.</p>
<p><strong>Take 2 — Maximize Expected Objective Value</strong> (Pascal 1654). EV = Σ(value × prob). Fails: ignores diminishing marginal utility and non-monetary goods. (Coin-toss example: EV = +$50 but most people refuse.)</p>
<p><strong>Take 3 — Maximize Expected Utility</strong> (Bernoulli). Subjective utility replaces objective value. Fails: cannot handle delay. ($999 now vs $1000 in a month.)</p>
<p><strong>Take 4 (accepted) — Maximize Long-term Discounted Expected Utility.</strong></p>
<span class='formula'>Discounted utility of "U at delay x" = U × γˣ</span>
<p><strong>Exam hook.</strong> Name each Take's failure; Take 4 is the one you compute with.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>理性决策 4 个版本。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>1 不处理概率；2 不处理边际效用；3 不处理延迟</li>
<li>4 = long-term discounted expected utility</li>
</ul>
<p><strong>考试对应：</strong>命名每版本的失败。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Diminishing Marginal Utility",
    termCn: "边际效用递减",
    back: `<div class="en-side">
<p><strong>Definition.</strong> Each extra dollar yields less additional utility.</p>
<p><strong>Rashi example.</strong></p>
<ul>
<li>$10M → <strong>500 utiles</strong>.</li>
<li>$20M → <strong>650 utiles</strong> (not 1000!).</li>
</ul>
<p>She prefers certain $10M (500 utiles) over a 50/50 gamble for $20M (EU = 325 utiles).</p>
<p><strong>Key point.</strong> Utility is not interpersonally comparable; it only expresses one person's relative preferences. Increasing marginal utility is possible but rare.</p>
<p><strong>Exam hook.</strong> Explains why Take 2 (objective EV) fails.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>每多一元 utility 越来越少。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Rashi: $10M = 500 utiles；$20M = 650 utiles</li>
<li>选确定 $10M（EU 325）</li>
</ul>
<p><strong>考试对应：</strong>Take 2 失败原因。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Exponential Discounting",
    termCn: "指数贴现",
    back: `<div class="en-side">
<p><strong>Formula.</strong></p>
<span class='formula'>Discounted utility of "U at delay x" = U × γˣ</span>
<p>γ ∈ (0,1) is the discount factor; x is the delay.</p>
<p><strong>Worked examples.</strong></p>
<ul>
<li>Natalia γ=0.95/week, 100 utiles in 2 weeks → <em>100 × 0.95² = 90.25 utiles</em>.</li>
<li>Ricky γ=0.50/year, 100 utiles in 3 years → <em>100 × 0.5³ = 12.5 utiles</em>.</li>
<li>γ=0.70/month: $1000 in 1 month = 700 utiles &lt; $999 now = 999 utiles → take now.</li>
</ul>
<p><strong>Exam hook.</strong> Plug and chug; explains Take 3's failure (ignoring delay).</p>
</div>
<div class="cn-side">
<p><strong>公式：</strong>U × γˣ。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Natalia 2 周 → 90.25</li>
<li>Ricky 3 年 → 12.5</li>
</ul>
<p><strong>考试对应：</strong>Take 3 失败原因。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Representativeness Heuristic",
    termCn: "代表性启发",
    back: `<div class="en-side">
<p><strong>Definition.</strong> Judging probability by <em>similarity</em>.</p>
<p><strong>Linda Problem</strong> (Kahneman &amp; Tversky 1982). Linda is 31, philosophy major, anti-nuclear activist. (f) bank teller vs (h) bank teller + feminist? <strong>89% say (h)</strong> → <strong>Conjunction Fallacy</strong> (h is a subset of f, cannot be more probable).</p>
<p><strong>Coin-flip intuition.</strong> People rate HTHHH as more likely than HHHHH even though both are equally probable — the varied sequence "looks" more random.</p>
<p><strong>Engineer/Lawyer.</strong> Group 1: 30 engineers / 70 lawyers; Group 2: reversed. Same Jack description. Both estimate ~50% → <strong>Base rate neglect</strong>.</p>
<p><strong>Exam hook.</strong> Frequency framing drops Linda conjunction fallacy from 89% → 22% (evolutionary psych reply). Study-guide: HHHHH vs HTHHH and the Linda conjunction fallacy are the canonical prompts.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>基于相似度判断概率。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Linda → 89% 合取谬误</li>
<li>HHHHH vs HTHHH 等概率</li>
<li>Engineer/Lawyer → 基率忽略</li>
<li>频率表述 → 89% → 22%</li>
</ul>
<p><strong>考试对应：</strong>HHHHH/HTHHH 和 Linda 题。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Availability Heuristic",
    termCn: "可用性启发",
    back: `<div class="en-side">
<p><strong>Definition.</strong> Judging frequency by the <em>ease with which examples come to mind</em>.</p>
<p><strong>N-letter Problem.</strong> "More English words starting with N, or with N in the third position?" Most people say starts-with-N (wrong — third-position is more common). Same for K, L, R, V. This is the canonical "—ing vs —n—" study-guide prompt: words ending in "—ing" vs words with "n" in the second-to-last position — people vastly overestimate the "—ing" count because they come to mind more easily.</p>
<p><strong>Assertiveness Experiment.</strong> Group 1 listed 6 assertive examples, Group 2 listed 12. Group 2 rated themselves as <em>less</em> assertive (12 was hard → "I guess I'm not").</p>
<p><strong>Exam hook.</strong> "—ing" vs "—n—" question; what drives the error = ease of retrieval, not actual frequency.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>按"例子易想起程度"判断频率。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>N 开头 vs 第三位 N</li>
<li>"—ing" vs "—n—"</li>
<li>Assertiveness 列 6 vs 12</li>
</ul>
<p><strong>考试对应：</strong>"—ing" vs "—n—" 题。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Affect Heuristic",
    termCn: "情感启发",
    back: `<div class="en-side">
<p><strong>Definition.</strong> Making complex judgments by substituting a <em>gut emotional reaction</em> for the actual question. Kahneman calls this <em>"the most important advance in the study of heuristics."</em></p>
<p><strong>Ford stock example.</strong> (<em>Thinking, Fast and Slow</em>.) A CEO invests millions in Ford stock because he liked Ford cars at an auto show — he replaced "should I invest in Ford?" with "do I like Ford cars?"</p>
<p><strong>Happiness/Dating study.</strong> Asking overall-happiness first then dating → correlation ~0. Asking dating first then happiness → correlation 0.66. Dating affect substituted for happiness judgment.</p>
<p><strong>Exam hook.</strong> Worksheet connection — the <em>jazz-playing accountant</em> / Iowa Gambling gut-feelings debate: affect heuristic is what Kahneman labels irrational, but Neuroeconomists (Damasio) argue the gut feeling is actually vindicated by the Iowa Gambling Task.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>用 gut 情感替代复杂判断。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Ford 股票例</li>
<li>Happiness/Dating 0 vs 0.66</li>
</ul>
<p><strong>考试对应：</strong>jazz 会计 / Iowa Gambling 的 gut feelings vindication。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Framing Effects",
    termCn: "框架效应",
    back: `<div class="en-side">
<p><strong>Definition.</strong> Different wording of the same problem → different choices.</p>
<p><strong>Asian Disease Problem.</strong> 600 people will die; choose a plan.</p>
<ul>
<li><strong>Gain framing</strong>: A) 200 saved (majority) or B) 1/3 save all / 2/3 save none.</li>
<li><strong>Loss framing</strong>: C) 400 die or D) 1/3 none die / 2/3 all die (majority).</li>
</ul>
<p>A = C and B = D mathematically, but framing flips the choice.</p>
<p><strong>Exam hook.</strong> Study-guide's classic case is "80% fat free vs 20% fat" yogurt — same product, framing flips perceived healthiness. People are risk-averse in gains, risk-seeking in losses.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>同题不同表述改变选择。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Asian Disease 数学等价但选择反</li>
<li>gain 框架保守，loss 框架冒险</li>
</ul>
<p><strong>考试对应：</strong>"80% fat free vs 20% fat" 酸奶题。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Bat and ball problem",
    termCn: "球棒和球问题",
    back: `<div class="en-side">
<p><strong>Why System 2 doesn't monitor.</strong></p>
<p>A bat and a ball together cost <strong>$1.10</strong>. The bat costs <strong>$1 more</strong> than the ball. How much is the ball?</p>
<ul>
<li>Intuitive (wrong): $0.10.</li>
<li>Correct: <em>$0.05</em>. (bat = ball + $1; bat + ball = 2·ball + $1 = $1.10 → ball = $0.05.)</li>
</ul>
<p><strong>Result.</strong> ~50% of Princeton and Michigan students answer wrong. Kahneman: <em>"We don't actually use System 2 monitoring very much."</em></p>
<p><strong>Exam hook.</strong> System 1 answer feels right; System 2 rarely steps in.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>球棒和球一共 $1.10，球棒贵 $1。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>直觉 $0.10 错；正确 $0.05</li>
<li>~50% 精英学生答错</li>
</ul>
<p><strong>考试对应：</strong>System 2 不监控的证据。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Cheater Detection Module",
    termCn: "骗子侦测模块",
    back: `<div class="en-side">
<p><strong>Cosmides &amp; Tooby.</strong> Humans have an innate, <strong>domain-specific module</strong> for social-contract rules.</p>
<p><strong>Wason Selection Task.</strong></p>
<ul>
<li>Abstract: "X on one side → 3 on other." Most fail (correct: flip X and 7).</li>
<li>Social contract: "drink beer → must be over 18." <strong>Almost everyone gets it right</strong>.</li>
</ul>
<p>Structurally identical, but there is a dedicated module for social contracts.</p>
<p><strong>Exam hook.</strong> Another dual-process pair: Cheater Detection Module vs central cognition; evolutionary-psych reply to heuristics &amp; biases.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>Cosmides & Tooby 的社会契约模块。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Wason 抽象版难，社会契约版容易</li>
</ul>
<p><strong>考试对应：</strong>dual process + 进化心理学回应。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Evolutionary Psychology on Rationality",
    termCn: "进化心理学对理性的立场",
    back: `<div class="en-side">
<p><strong>Research program</strong> (Cosmides &amp; Tooby). Humans are rational <em>when questions are posed in formats our ancestors faced</em>: <strong>frequencies</strong> (not probabilities), concrete <strong>social contracts</strong> (not abstract logic).</p>
<p><strong>Evidence.</strong></p>
<ul>
<li>Linda conjunction fallacy drops from 89% → 22% with frequency framing.</li>
<li>Wason selection task near-ceiling when content is a social contract.</li>
</ul>
<p><strong>Exam hook.</strong> Study-guide Rationality Q4 — how to make people rational? Give them ecologically-valid formats (frequencies, social contracts). Contrast with Kahneman (train System 2) and Neuroeconomics (experiential learning with feedback).</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>用祖先熟悉的格式问，人就理性。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>频率版 Linda 错误 89% → 22%</li>
<li>社会契约 Wason 人人做对</li>
</ul>
<p><strong>考试对应：</strong>Rationality Q4 — 促进理性方法。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Policy",
    termCn: "策略",
    back: `<div class="en-side">
<p><strong>Definition.</strong> A <strong>policy π</strong> is a function from state to action — it tells the agent which action to take in each state.</p>
<p><strong>In Q-learning.</strong> The current best policy is: <em>at state s, pick the action a with the highest Q(s, a)</em>.</p>
<p><strong>Example.</strong> Wally at the park: policy says "run to truck" because Q(park, truck) = 3 beats Q(park, home) = −1.</p>
<p><strong>Exam hook.</strong> Study-guide Rationality question: "How does the agent choose an action at a given state?" Answer: by following its policy — the argmax over Q-values.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>策略 π = 状态 → 动作的函数。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Q-learning 中：选 Q 值最大的动作</li>
<li>Wally park 例：选 truck 因为 Q=3>-1</li>
</ul>
<p><strong>考试对应：</strong>"agent 如何在某状态选动作" → 遵循 policy（argmax Q）。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Q-Learning update rule",
    termCn: "Q-learning 更新规则",
    back: `<div class="en-side">
<p><strong>Formula.</strong></p>
<span class='formula'>Q(s,a) ← Q(s,a) + α · [R(s') + γ · max Q(s',a') − Q(s,a)]</span>
<p>The bracketed term is the <strong>prediction error</strong>.</p>
<ul>
<li><strong>α</strong> = learning rate.</li>
<li><strong>γ</strong> = discount factor.</li>
<li>If s' is terminal → <strong>max Q(s',a') = 0</strong>.</li>
</ul>
<p><strong>Loop.</strong> CHOOSE → MOVE → LEARN. Converges to the true value function under reasonable conditions.</p>
<p><strong>Exam hook.</strong> Temporal-difference learning solves the credit-assignment problem.</p>
</div>
<div class="cn-side">
<p><strong>公式：</strong>见上。方括号 = prediction error。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>α 学习率；γ 贴现</li>
<li>Terminal 时 max = 0</li>
</ul>
<p><strong>考试对应：</strong>TD learning 解决信用分配。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Wally's Walk 计算示例",
    termCn: "Q-learning 实战",
    back: `<div class="en-side">
<p><strong>Initial Q-values.</strong></p>
<ul>
<li>Q(park, truck) = 3</li>
<li>Q(park, home) = −1</li>
<li>Q(truck, ice-cream) = 5</li>
<li>Q(truck, swim) = 8</li>
</ul>
<p>γ = 0.7, α = 0.8.</p>
<p><strong>Iteration 1.</strong> Wally picks "run to truck" (3 &gt; −1), arrives truck, R = 4. Picks "swim" (8 &gt; 5), arrives water, R = −5 (terminal).</p>
<p><strong>Update Q(park, truck).</strong></p>
<ul>
<li>pred_err = [4 + 0.7 × 8] − 3 = <strong>6.6</strong>.</li>
<li>Q ← 3 + 0.8 × 6.6 = <strong>8.28</strong>.</li>
</ul>
<p><strong>Update Q(truck, swim)</strong> (terminal → max = 0).</p>
<ul>
<li>pred_err = [−5 + 0] − 8 = <strong>−13</strong>.</li>
<li>Q ← 8 + 0.8 × (−13) = <strong>−2.4</strong>.</li>
</ul>
<p><strong>Exam hook.</strong> Standard numerical Q-update problem.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>Wally 的 Q-learning 计算示例。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Q(park, truck) 3 → 8.28</li>
<li>Q(truck, swim) 8 → -2.4（terminal）</li>
</ul>
<p><strong>考试对应：</strong>标准数值更新题。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "RL brain regions",
    termCn: "强化学习的脑区三元组",
    back: `<div class="en-side">
<p><strong>The triple.</strong></p>
<ul>
<li><strong>Striatum</strong> (part of basal ganglia) — encodes <em>reward magnitude</em>. <em>Knutson (2003)</em> fMRI: $0 / $0.20 / $1 / $5 rewards produce graded BOLD signal.</li>
<li><strong>VTA</strong> (ventral tegmental area, midbrain) — dopamine neurons encode <em>prediction error</em>.</li>
<li><strong>vmPFC</strong> (ventromedial prefrontal cortex) — encodes <em>Q-values</em> (expected future reward).</li>
</ul>
<p><strong>Exam hook.</strong> Physical-level answer for the RL algorithm; each region maps to a term in the Q-update.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>RL 的三个脑区。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Striatum → reward magnitude（Knutson 2003）</li>
<li>VTA → prediction error</li>
<li>vmPFC → Q values</li>
</ul>
<p><strong>考试对应：</strong>Marr 物理层对应算法各项。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "VTA prediction error",
    termCn: "VTA 预测误差实验",
    back: `<div class="en-side">
<p><strong>VTA dopamine neurons encode prediction error.</strong></p>
<ul>
<li><strong>Case 1</strong>: Always-rewarded training (Q = 5). Day 11 reward. Error = 5 − 5 = 0 → <em>no burst</em>.</li>
<li><strong>Case 2</strong>: Never-rewarded training (Q = 0). Day 11 unexpectedly rewarded. Error = 5 − 0 = +5 → <em>burst</em>.</li>
<li><strong>Case 3</strong>: Expected reward omitted. Negative error → <em>suppression</em>.</li>
</ul>
<p>Matches the prediction-error term in Q-learning perfectly.</p>
<p><strong>Exam hook.</strong> Worksheet Q1 — "Linda gets 3 candies instead of the usual 1" → she has <em>low prior expectation</em> and receives <em>more</em> than expected → <strong>VTA activation is higher</strong> in the unexpectedly-rewarded group.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>VTA 多巴胺 = prediction error。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>预期内：无信号</li>
<li>意外奖励：爆发</li>
<li>预期奖励未来：被抑制</li>
</ul>
<p><strong>考试对应：</strong>Worksheet Q1 — Linda 3 颗糖而非 1 颗 → 低期望组 VTA 信号更高。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Iowa Gambling Task",
    termCn: "爱荷华赌博任务",
    back: `<div class="en-side">
<p><strong>Bechara et al. (1997).</strong> 4 decks.</p>
<ul>
<li>A, B = <strong>bad decks</strong> (big wins, bigger losses, negative EV).</li>
<li>C, D = <strong>good decks</strong> (small wins, small losses, positive EV).</li>
</ul>
<p>Measure: <strong>SCR</strong> (skin conductance response).</p>
<p><strong>Four phases.</strong></p>
<ol>
<li><strong>Baseline</strong> (cards 0–10): guessing.</li>
<li><strong>Pre-hunch</strong> (10–20): "no idea what's going on."</li>
<li><strong>Hunch</strong> (20–80): "I like/dislike certain decks" (can't explain why).</li>
<li><strong>Conceptual</strong> (80–100): can explain.</li>
</ol>
<p>Healthy subjects show <em>anticipatory SCR</em> to Bad decks already in the pre-hunch phase — <strong>the body knows before the mind does</strong>.</p>
<p><strong>Exam hook.</strong> Worksheet Q2 — Tom cannot form gut feelings (<em>vmPFC damage</em>), so he keeps drawing from bad decks. Kahneman would call this irrational; Neuroeconomists (Damasio) call it a disorder of rationality itself.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>Iowa Gambling Task 4 副牌 + SCR。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>4 阶段：Baseline/Pre-hunch/Hunch/Conceptual</li>
<li>Pre-hunch 就已有 anticipatory SCR</li>
</ul>
<p><strong>考试对应：</strong>Worksheet Q2 — Tom vmPFC 损伤 → 无 gut feelings。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Somatic Marker Hypothesis",
    termCn: "身体标记假说",
    back: `<div class="en-side">
<p><strong>Damasio</strong>, based on Iowa Gambling Task.</p>
<p><strong>Claim.</strong> <em>Bodily emotional reactions correspond to Q-values; vmPFC is the key substrate. Rational decision-making depends on emotional / somatic signals.</em></p>
<p><strong>Evidence.</strong> vmPFC-lesioned patients:</p>
<ul>
<li>Show no anticipatory SCR.</li>
<li>Continue drawing from bad decks.</li>
<li>Even when they can <em>explain</em> which decks are bad, their behavior still favors them.</li>
</ul>
<p><strong>Exam hook.</strong> Emotion is not the opposite of rationality but its necessary complement — Neuroeconomics camp. Directly answers worksheet Q2: Tom (vmPFC damage) cannot form gut feelings; Kahneman labels irrational, Neuroeconomists call it rational.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>身体情感反应 = Q 值；vmPFC 载体。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>vmPFC 损伤 → 无 anticipatory SCR</li>
<li>知道坏牌仍抽坏牌</li>
</ul>
<p><strong>考试对应：</strong>Worksheet Q2 — Tom 案例。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Two physical implementations of Q-learning",
    termCn: "Q-learning 的两种物理实现",
    back: `<div class="en-side">
<p><strong>Multiple Realizability applied to Q-learning.</strong> The same algorithm runs on:</p>
<ol>
<li><strong>Biological brain circuit</strong> — striatum (reward magnitude) + VTA (prediction error) + vmPFC (Q-values).</li>
<li><strong>Silicon computer</strong> — executing the Q-learning update rule in code.</li>
</ol>
<p><strong>Within the brain.</strong> Further distinction:</p>
<ul>
<li><strong>Model-free</strong> RL — habitual, striatum-led.</li>
<li><strong>Model-based</strong> RL — goal-directed, vmPFC-led.</li>
</ul>
<p>Both implement reward-maximization through different neural substrates.</p>
<p><strong>Exam hook.</strong> Study-guide RL Q3: name two physical implementations of Q-learning — brain vs silicon. Classic multiple-realizability illustration.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>同一 Q-learning 算法两种物理实现。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>脑内：striatum + VTA + vmPFC</li>
<li>硅基：计算机执行更新规则</li>
<li>脑内还有 model-free（striatum）vs model-based（vmPFC）</li>
</ul>
<p><strong>考试对应：</strong>RL Q3 — 列两种物理实现。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Three camps on rationality",
    termCn: "理性问题的三大阵营",
    back: `<div class="en-side">
<p><strong>Heuristics &amp; Biases</strong> (Kahneman).</p>
<ul>
<li>Rational? <em>Often not</em>.</li>
<li>What makes us rational? <em>System 2</em>.</li>
<li>How to improve? <em>Recognize and correct System 1 biases</em>.</li>
</ul>
<p><strong>Evolutionary Psychology</strong> (Cosmides &amp; Tooby).</p>
<ul>
<li>Rational? <em>Often yes, given the right format</em>.</li>
<li>What? <em>System 1 + domain-specific modules</em>.</li>
<li>How? <em>Use frequency / social-contract formats</em>.</li>
</ul>
<p><strong>Neuroeconomics</strong> (Glimcher / Rustichini / Damasio).</p>
<ul>
<li>Rational? <em>Yes, especially at the automatic / emotional level</em>.</li>
<li>What? <em>Emotional / RL systems</em>.</li>
<li>How? <em>Experiential learning with feedback</em>.</li>
</ul>
<p><strong>Exam hook.</strong> Map each camp's stance on whether we are rational + what makes us so + how to improve.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>理性问题 3 阵营。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Kahneman：System 2 纠偏</li>
<li>Cosmides：对了格式就理性</li>
<li>Damasio：情感 = 理性核心</li>
</ul>
<p><strong>考试对应：</strong>3 阵营立场配对。</p>
</div>`
  },

  // === Moral ===
  {
    topic: "Moral",
    term: "Trolley: Bystander vs Footbridge",
    termCn: "电车难题的两个版本",
    back: `<div class="en-side">
<p><strong>Same outcome (1 dies, 5 saved), opposite judgments.</strong></p>
<ul>
<li><strong>Bystander</strong> — flip a switch to divert trolley, killing 1 to save 5. Majority: <em>permissible</em> ✓.</li>
<li><strong>Footbridge</strong> — push a large man off a bridge to stop trolley, saving 5. Majority: <em>not permissible</em> ✗.</li>
</ul>
<p><strong>Two explanations.</strong></p>
<ul>
<li>Greene: dual process — personal alarm-bell vs impersonal cost-benefit.</li>
<li>Mikhail: Doctrine of Double Effect — side effect vs means.</li>
</ul>
<p><strong>Exam hook.</strong> Explain why judgments diverge despite identical consequences.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>结果相同但判断相反。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Bystander 可 vs Footbridge 不可</li>
<li>Greene 双过程 / Mikhail DDE 两种解释</li>
</ul>
<p><strong>考试对应：</strong>判断分歧原因。</p>
</div>`
  },
  {
    topic: "Moral",
    term: "Greene's dual-process account",
    termCn: "Greene 的双过程理论",
    back: `<div class="en-side">
<p><strong>fMRI (Greene 2001).</strong></p>
<ul>
<li><strong>Personal Force dilemmas</strong> (Footbridge) → <em>alarm-bell emotions</em> → emotional brain regions light up.</li>
<li><strong>Impersonal dilemmas</strong> (Bystander) → <em>cost-benefit calculation</em> → <strong>DLPFC</strong> and other cognitive regions light up.</li>
</ul>
<p><strong>Reaction time.</strong> Saying "permissible" to a Personal dilemma (emotion-inconsistent) is markedly slower; other conditions show no RT difference.</p>
<p><strong>Greene (2009).</strong> Refined trigger = <em>personal force</em> (agent applies muscular force), not mere physical contact.</p>
<p><strong>Exam hook.</strong> Moral Q2 — DLPFC involvement in Bystander (cost-benefit) is what Greene thinks makes that judgment <em>more justified</em>. Greene implicitly supports Utilitarianism.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>Greene 的道德双过程。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Personal → 情绪脑区</li>
<li>Impersonal → DLPFC 成本效益</li>
<li>Personal 反常判断反应时更慢</li>
</ul>
<p><strong>考试对应：</strong>Moral Q2 — DLPFC 让 Bystander 判断更 justified。</p>
</div>`
  },
  {
    topic: "Moral",
    term: "Doctrine of Double Effect (DDE)",
    termCn: "双重效果原则",
    back: `<div class="en-side">
<p><strong>Principle.</strong></p>
<p><em>"It is <strong>permissible</strong> to cause a foreseen but unintended harm as a <strong>side effect</strong> of bringing about a good end, even though it is <strong>not permissible</strong> to cause such a harm as a <strong>means</strong> to bringing about the same good end."</em></p>
<p><strong>Doctor example.</strong></p>
<ul>
<li>Prescribing a drug → arthritis relief (end), rash (side effect) ✓ permissible.</li>
<li>Rash used as the means that makes the drug work ✗ not permissible.</li>
</ul>
<p><strong>Trolley application.</strong></p>
<ul>
<li>Bystander: killing 1 is a <em>side effect</em> ✓.</li>
<li>Footbridge: killing 1 is a <em>means</em> ✗.</li>
</ul>
<p><strong>Exam hook.</strong> Mikhail's exemplar of sophisticated moral rule; tacit knowledge.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>side effect 可允许，means 不可允许。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>医生用药例</li>
<li>Bystander side effect；Footbridge means</li>
</ul>
<p><strong>考试对应：</strong>Mikhail 的 sophisticated rule。</p>
</div>`
  },
  {
    topic: "Moral",
    term: "Mikhail's Action Tree / K-rule distance",
    termCn: "Mikhail 的行动树 / K 规则距离",
    back: `<div class="en-side">
<p><strong>Claim.</strong> Mikhail analyzes moral dilemmas by building a <strong>tree of actions</strong> with intended ends as nodes. The <em>tree distance</em> between the agent's action (means) and the harm determines permissibility — <strong>shorter distance = less permissible</strong>.</p>
<p><strong>Trolley application.</strong></p>
<ul>
<li><strong>Footbridge</strong>: harm <em>IS</em> the means (distance 0) → impermissible.</li>
<li><strong>Bystander</strong>: harm is a side-effect of turning the trolley (distance &gt; 0) → permissible.</li>
</ul>
<p><strong>Exam hook.</strong> Study-guide Moral Q3 answer — distance between means (action) and harm corresponds to lower permissibility. Formalizes DDE into a computable rule that UMG can apply.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>行动树中动作到伤害的距离越短 → 越不可允许。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Footbridge：伤害即手段，距离 0 → 不可</li>
<li>Bystander：伤害是副作用，距离 &gt;0 → 可</li>
</ul>
<p><strong>考试对应：</strong>Moral Q3 — 距离对应可允许性。</p>
</div>`
  },
  {
    topic: "Moral",
    term: "Personal Force (Greene's alarm-bell trigger)",
    termCn: "Personal Force（Greene 的警铃触发）",
    back: `<div class="en-side">
<p><strong>Greene (2009)</strong> refined the "personal vs impersonal" dilemma distinction into a more precise criterion: <strong>personal force</strong> = agent directly applies <em>muscular / physical force</em> to the victim. This is what triggers the alarm-bell emotional response — not mere physical contact.</p>
<p><strong>Worksheet Q14 cases.</strong></p>
<ul>
<li>Whacking the victim with a bat → <strong>alarm bell</strong> (direct force).</li>
<li>Pulling a lever or using a magnet → <strong>no alarm bell</strong> (impersonal).</li>
<li>Tickling → <strong>edge case</strong> (force but not harmful).</li>
</ul>
<p><strong>Exam hook.</strong> Replaces the cruder "is there contact?" criterion. Explains why Footbridge feels different from Bystander.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>亲身施力（肌肉力）= Greene 的警铃触发。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>球棒打 → 警铃</li>
<li>拉杆/磁铁 → 无警铃</li>
<li>挠痒 → 边缘</li>
</ul>
<p><strong>考试对应：</strong>Worksheet Q14 判断。</p>
</div>`
  },
  {
    topic: "Moral",
    term: "Mikhail's Universal Moral Grammar",
    termCn: "Mikhail 的普遍道德语法",
    back: `<div class="en-side">
<p><strong>Linguistic Analogy.</strong> Moral judgment is analogous to language — produced by an <em>inaccessible module</em> that knows rules we cannot state (like the interrogative rule).</p>
<p><strong>UMG features.</strong></p>
<ul>
<li>Language-like processes.</li>
<li>Complex / abstract.</li>
<li>Based on sophisticated principles (e.g., DDE).</li>
<li>Possesses rational justification.</li>
</ul>
<p><strong>POS argument.</strong> Children develop sophisticated moral judgments from sparse moral input → must be innate UMG.</p>
<p><strong>Exam hook.</strong> Contrast with Greene: where Greene says fast process is <em>simple, primitive, unjustified</em>, Mikhail says <em>complex, sophisticated, justified</em>.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>道德判断类比语言的 UMG。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Inaccessible module 产出 DDE</li>
<li>POS argument</li>
<li>possesses rational justification</li>
</ul>
<p><strong>考试对应：</strong>与 Greene 对比。</p>
</div>`
  },
  {
    topic: "Moral",
    term: "Greene vs Mikhail",
    termCn: "Greene 与 Mikhail 对比",
    back: `<div class="en-side">
<p><strong>Greene.</strong></p>
<ul>
<li>Moral judgment = dual process (emotion + reason).</li>
<li>Fast process: <em>simple, primitive, unjustified</em>.</li>
<li>Physical level: emotion regions vs DLPFC.</li>
<li>Normative stance: supports Utilitarianism.</li>
<li>Footbridge reaction: <em>not trustworthy</em> — just alarm-bell emotion.</li>
</ul>
<p><strong>Mikhail.</strong></p>
<ul>
<li>Moral judgment = single sophisticated UMG.</li>
<li>Fast process: <em>language-like, complex, justified</em>.</li>
<li>Physical level: unspecified.</li>
<li>Normative stance: DDE-type rules trustworthy.</li>
<li>Footbridge reaction: <em>trustworthy</em> — UMG output.</li>
</ul>
<p><strong>Exam hook.</strong> Compare across the 3 Marr levels + descriptive/normative claims.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>两派 5 维对比。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>快过程 simple vs complex</li>
<li>Footbridge 不可信 vs 可信</li>
<li>Utilitarianism vs DDE</li>
</ul>
<p><strong>考试对应：</strong>跨 3 层 + 规范性对比题。</p>
</div>`
  },
  {
    topic: "Moral",
    term: "vmPFC damage & moral judgment",
    termCn: "vmPFC 损伤与道德判断",
    back: `<div class="en-side">
<p><strong>Koenigs et al. (2007, Nature).</strong></p>
<p>vmPFC-lesioned patients give more "yes" (utilitarian) answers to Footbridge-type personal dilemmas and show less emotional conflict.</p>
<p><strong>Surface reading.</strong> This looks like the "rational" answer Greene endorses.</p>
<p><strong>Paradox.</strong></p>
<ul>
<li>In the Iowa Gambling Task, vmPFC damage = <em>impaired</em> decision-making.</li>
<li>So are they really more rational here, or just less emotional?</li>
</ul>
<p><strong>Exam hook.</strong> Professor: interesting but not tested — usable as extra-credit point for the Greene/Neuroeconomics tension.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>vmPFC 损伤 → Footbridge 更多选"是"。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>少情绪冲突</li>
<li>与 Iowa Gambling 损伤矛盾</li>
</ul>
<p><strong>考试对应：</strong>加分题，不必考。</p>
</div>`
  },
  {
    topic: "Moral",
    term: "Descriptive vs Normative claims",
    termCn: "描述性 vs 规范性主张",
    back: `<div class="en-side">
<p><strong>Descriptive (is claims).</strong> Factual statements about how things are.</p>
<p><em>"The movie runs for 178 minutes."</em></p>
<p><strong>Normative (ought claims).</strong> Evaluative statements involving standards or values.</p>
<p><em>"The movie is too long."</em></p>
<p><strong>Greene's claims.</strong></p>
<ul>
<li>D1–D4: descriptive (Footbridge judgments arise from alarm-bell emotions, etc.).</li>
<li>N1–N2: normative (Footbridge judgment is "worse" — implicitly endorses utilitarian judgments as more trustworthy).</li>
</ul>
<p><strong>Exam hook.</strong> Classify a given Greene claim as D or N.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>事实陈述 vs 评价陈述。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Greene D1-D4 描述；N1-N2 规范</li>
</ul>
<p><strong>考试对应：</strong>给陈述分类 D/N。</p>
</div>`
  },

  // === Neuroanatomy ===
  {
    topic: "Brain",
    term: "Brain direction terms",
    termCn: "大脑方位术语",
    back: `<div class="en-side">
<p><strong>Direction terms.</strong></p>
<ul>
<li><strong>Superior / Dorsal</strong> — up / back (top).</li>
<li><strong>Inferior / Ventral</strong> — down / front-belly (bottom).</li>
<li><strong>Anterior / Rostral</strong> — front.</li>
<li><strong>Posterior / Caudal</strong> — back.</li>
<li><strong>Medial</strong> — toward midline.</li>
<li><strong>Lateral</strong> — away from midline.</li>
</ul>
<p><strong>Cortical lobes.</strong></p>
<ul>
<li><strong>Frontal</strong> (Motor Cortex, Broca).</li>
<li><strong>Parietal</strong>.</li>
<li><strong>Occipital</strong> (V1).</li>
<li><strong>Temporal</strong> (Primary Auditory Cortex, Wernicke, FFA).</li>
<li>Cerebellum; Brain Stem (contains VTA).</li>
</ul>
<p><strong>Exam hook.</strong> Label a brain diagram.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>方位术语 + 皮层分区。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>方位 6 对</li>
<li>4 叶 + 小脑 + 脑干</li>
</ul>
<p><strong>考试对应：</strong>脑图标注。</p>
</div>`
  },
  {
    topic: "Brain",
    term: "Language brain regions",
    termCn: "语言相关脑区",
    back: `<div class="en-side">
<p><strong>Key regions.</strong></p>
<ul>
<li><strong>Motor Cortex</strong> (top of frontal lobe) — damage → trouble coordinating mouth, lips, tongue.</li>
<li><strong>Broca's area</strong> (left frontal, "syntactic region") — damage → Broca's aphasia (non-fluent, agrammatical, meaning preserved).</li>
<li><strong>Wernicke's area</strong> (left temporal, "semantic region") — damage → Wernicke's aphasia (fluent, grammatical, word salad).</li>
<li><strong>Primary Auditory Cortex</strong> (temporal) — damage → cortical deafness.</li>
</ul>
<p><strong>Exam hook.</strong> Match damage to deficit on a labeled brain map.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>4 个语言相关脑区。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Motor / Broca / Wernicke / 初级听觉</li>
</ul>
<p><strong>考试对应：</strong>损伤—缺损配对。</p>
</div>`
  },
  {
    topic: "Brain",
    term: "Subcortical structures",
    termCn: "皮层下结构",
    back: `<div class="en-side">
<p><strong>Key subcortical structures.</strong></p>
<ul>
<li><strong>Thalamus</strong> — relays sensory information.</li>
<li><strong>Basal ganglia</strong> — contains <em>striatum</em>; reward / punishment / motor control.</li>
<li><strong>Amygdala</strong> — emotion, especially fear.</li>
<li><strong>VTA</strong> (brainstem / midbrain) — dopamine neurons encoding prediction error.</li>
<li><strong>vmPFC</strong> — encodes Q-values (technically cortical but often grouped with RL circuit).</li>
</ul>
<p><strong>Exam hook.</strong> Neuroanatomy Q2 — the three subcortical structures in LeDoux's high-road pathway: <strong>thalamus, amygdala, basal ganglia</strong> (the stimulus relays through thalamus; amygdala triggers the fear effector; basal ganglia are the motor/reward interface that commits the response).</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>皮层下结构总览。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Thalamus / Basal ganglia（含 striatum）/ Amygdala / VTA</li>
</ul>
<p><strong>考试对应：</strong>Neuroanatomy Q2 — LeDoux 高通路的 3 个皮层下结构：thalamus、amygdala、basal ganglia。</p>
</div>`
  },

  // === Key People ===
  {
    topic: "People",
    term: "David Marr",
    termCn: "戴维·马尔",
    back: `<div class="en-side">
<p><strong>Who.</strong> British neuroscientist who proposed the <strong>three-level framework</strong>: <em>Functional / Algorithmic / Physical</em>.</p>
<p><strong>Why it matters.</strong> The entire course analyzes every topic (perception, language, emotion, rationality, moral judgment) at these three levels.</p>
<p><strong>Exam hook.</strong> Given any phenomenon, state what it is at each level.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>提出三层解释框架。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Functional / Algorithmic / Physical</li>
</ul>
<p><strong>考试对应：</strong>现象分三层解析。</p>
</div>`
  },
  {
    topic: "People",
    term: "Noam Chomsky",
    termCn: "乔姆斯基",
    back: `<div class="en-side">
<p><strong>Who.</strong> Founder of linguistic <strong>Cognitivism</strong>.</p>
<p><strong>Contributions.</strong></p>
<ul>
<li><strong>Universal Grammar</strong> (UG).</li>
<li><strong>Phrase-structure grammar</strong>.</li>
<li>1959 review of Skinner's <em>Verbal Behavior</em> — widely viewed as devastating to behaviorism.</li>
</ul>
<p><strong>Core claim.</strong> Language is innate; it cannot be learned by association (the 4 language properties defeat associationism).</p>
<p><strong>Exam hook.</strong> Associate him with Cognitivism + UG + PSG.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>Cognitivism 创始人。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>UG；PSG；1959 书评</li>
</ul>
<p><strong>考试对应：</strong>Cognitivism + UG + PSG。</p>
</div>`
  },
  {
    topic: "People",
    term: "Kahneman & Tversky",
    termCn: "卡尼曼和特沃斯基",
    back: `<div class="en-side">
<p><strong>Who.</strong> Founders of the <strong>Heuristics and Biases</strong> research program. Kahneman won the 2002 Nobel Prize in Economics; author of <em>Thinking, Fast and Slow</em>.</p>
<p><strong>Core claim.</strong> <em>"In making predictions and judgments under uncertainty, people do not appear to follow the calculus of chance or statistical theory. Instead, they rely on a limited number of heuristics which sometimes yield reasonable judgments and sometimes lead to severe and systematic errors."</em></p>
<p><strong>Four heuristics.</strong> representativeness, availability, affect, framing.</p>
<p><strong>Also.</strong> System 1 vs System 2.</p>
<p><strong>Exam hook.</strong> Central figure of the H&amp;B camp.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>Heuristics & Biases 创始人。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>4 heuristics + System 1/2</li>
<li>Kahneman 2002 诺奖</li>
</ul>
<p><strong>考试对应：</strong>H&B 阵营代表。</p>
</div>`
  },
  {
    topic: "People",
    term: "LeDoux",
    termCn: "勒杜克斯",
    back: `<div class="en-side">
<p><strong>Who.</strong> Neuroscientist studying <strong>fear processing</strong>.</p>
<p><strong>Contribution.</strong> <strong>Low Road / High Road</strong> dual-pathway model:</p>
<ul>
<li>Low Road: thalamus → amygdala (fast, unconscious).</li>
<li>High Road: thalamus → cortex → amygdala (slow, conscious).</li>
</ul>
<p>Explains "I know I shouldn't be afraid but I am."</p>
<p><strong>Exam hook.</strong> Opposes Standard Appraisal Theory as too conscious.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>恐惧双通路模型提出者。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Low/High Road</li>
</ul>
<p><strong>考试对应：</strong>反对 Standard Appraisal。</p>
</div>`
  },
  {
    topic: "People",
    term: "Greene",
    termCn: "约书亚·格林",
    back: `<div class="en-side">
<p><strong>Who.</strong> Harvard psychologist, moral judgment.</p>
<p><strong>Classic study.</strong> <em>Greene et al. (2001, Science)</em> — fMRI finds Trolley vs Footbridge activate different regions.</p>
<p><strong>Core claims.</strong></p>
<ul>
<li>Moral judgment is <strong>dual process</strong>: personal-force alarm bell vs impersonal cost-benefit.</li>
<li>Alarm-bell emotions are <em>simple, primitive, lacking rational justification</em>.</li>
<li>Implicitly endorses <strong>Utilitarianism</strong>.</li>
</ul>
<p><strong>Exam hook.</strong> Contrast with Mikhail.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>哈佛道德判断研究者。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>2001 fMRI 研究</li>
<li>道德双过程 + 隐含 Utilitarianism</li>
</ul>
<p><strong>考试对应：</strong>与 Mikhail 对比。</p>
</div>`
  },
  {
    topic: "People",
    term: "Mikhail",
    termCn: "米哈伊尔",
    back: `<div class="en-side">
<p><strong>Who.</strong> Legal scholar + cognitive scientist.</p>
<p><strong>Contribution.</strong> <strong>Universal Moral Grammar</strong> (2007).</p>
<p><strong>Core claims.</strong></p>
<ul>
<li>Moral judgment is language-like, produced by an <em>inaccessible module</em>.</li>
<li>Sophisticated principles such as the <strong>Doctrine of Double Effect</strong>.</li>
<li>Poverty-of-Moral-Stimulus argument.</li>
<li>Moral judgment <em>possesses rational justification</em> (contra Greene).</li>
</ul>
<p><strong>Exam hook.</strong> UMG + DDE + POS.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>UMG 提出者。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>UMG + DDE + Moral POS</li>
<li>道德判断可理性辩护</li>
</ul>
<p><strong>考试对应：</strong>与 Greene 对立的立场。</p>
</div>`
  },
  {
    topic: "People",
    term: "Fodor",
    termCn: "福多",
    back: `<div class="en-side">
<p><strong>Who.</strong> Philosopher who proposed <strong>Modularity of Mind</strong>.</p>
<p><strong>Six characteristic features of a module.</strong></p>
<ul>
<li>Mandatory</li>
<li>Fast</li>
<li>Domain-specific</li>
<li>Informationally encapsulated</li>
<li>Inaccessible</li>
<li>Neurally discretely localized</li>
</ul>
<p><strong>Key caveat.</strong> <em>None is required</em>.</p>
<p><strong>Exam hook.</strong> "Which is required?" → none.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>模块心智理论提出者。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>6 characteristic 特征</li>
<li>没有一条 required</li>
</ul>
<p><strong>考试对应：</strong>"哪条必需" 答"无"。</p>
</div>`
  },
  {
    topic: "People",
    term: "Cosmides & Tooby",
    termCn: "科斯米德斯和托比",
    back: `<div class="en-side">
<p><strong>Who.</strong> Representatives of <strong>Evolutionary Psychology</strong>.</p>
<p><strong>Core claim.</strong> The mind is <strong>massively modular</strong>, with domain-specific modules tuned to ancestral-environment formats.</p>
<p><strong>Classic.</strong> <strong>Cheater Detection Module</strong> — social-contract Wason Selection Task is solved by nearly everyone.</p>
<p><strong>Reply to Kahneman.</strong> Frequency framing drops Linda conjunction fallacy from 89% → 22%.</p>
<p><strong>Exam hook.</strong> Evolutionary Psychology camp on rationality.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>Evolutionary Psychology 代表。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>massively modular</li>
<li>Cheater Detection Module</li>
<li>频率表述 → 89%→22%</li>
</ul>
<p><strong>考试对应：</strong>理性 3 阵营之一。</p>
</div>`
  },
  {
    topic: "People",
    term: "Bechara & Damasio",
    termCn: "贝卡拉和达马西奥",
    back: `<div class="en-side">
<p><strong>Iowa Gambling Task</strong> (Bechara et al. 1997).</p>
<ul>
<li>4 decks (A, B bad; C, D good).</li>
<li>Healthy subjects' SCR identifies bad decks before conscious awareness.</li>
<li>vmPFC-lesioned patients fail.</li>
</ul>
<p><strong>Damasio's Somatic Marker Hypothesis.</strong> Bodily emotional reactions correspond to Q-values; vmPFC is the substrate. <em>Rational decision-making depends on emotional / somatic signals.</em></p>
<p><strong>Exam hook.</strong> Neuroeconomics camp on rationality.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>Iowa Gambling + 身体标记假说。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>健康人预感识别</li>
<li>vmPFC 损伤无法做对</li>
</ul>
<p><strong>考试对应：</strong>Neuroeconomics 阵营。</p>
</div>`
  },
  {
    topic: "People",
    term: "Ekman",
    termCn: "艾克曼",
    back: `<div class="en-side">
<p><strong>Who.</strong> Facial-expression researcher.</p>
<p><strong>Contribution.</strong> 1971 cross-cultural study proposed <strong>6 basic emotions</strong>: <em>happiness, sadness, anger, fear, disgust, surprise</em> — recognized across cultures.</p>
<p><strong>Supports.</strong> Universality (Darwin: some emotional expressions are instinctual).</p>
<p><strong>Exam hook.</strong> Innateness-of-emotion evidence.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>面部表情研究者。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>6 basic emotions</li>
<li>跨文化一致</li>
</ul>
<p><strong>考试对应：</strong>情绪先天证据。</p>
</div>`
  },
  {
    topic: "People",
    term: "Turing",
    termCn: "图灵",
    back: `<div class="en-side">
<p><strong>Who.</strong> British mathematician.</p>
<p><strong>Contributions.</strong></p>
<ul>
<li>Minimal formalization of computation — <strong>Turing Machine</strong> (5 primitives: tape, symbols, head, state memory, rules).</li>
<li><strong>Universal Turing Machine</strong> — maximally flexible, maximally powerful.</li>
<li><strong>Church-Turing Thesis</strong>.</li>
<li><strong>Turing Test</strong> for intelligence.</li>
<li>Broke the Enigma code in WWII.</li>
</ul>
<p><strong>Exam hook.</strong> Know each contribution and what it claims.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>英国数学家。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>TM 5 原始 + UTM + Church-Turing + Turing Test</li>
</ul>
<p><strong>考试对应：</strong>逐项识别。</p>
</div>`
  },
  {
    topic: "People",
    term: "Bayes",
    termCn: "贝叶斯",
    back: `<div class="en-side">
<p><strong>Who.</strong> Thomas Bayes (1702–1761), British mathematician and Presbyterian minister.</p>
<p><strong>Contribution.</strong> The posthumously published essay establishing <strong>Bayes' Theorem</strong>.</p>
<p><strong>Key idea.</strong> <em>How to update beliefs on the basis of evidence</em> — formal framework for combining prior + likelihood.</p>
<p><strong>In this course.</strong> Perception (inverse optics), infant cognition, statistical reasoning.</p>
<p><strong>Exam hook.</strong> Identify Bayes' Rule applications across domains.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>18 世纪数学家/牧师。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>贝叶斯定理：先验 + 证据 → 后验</li>
</ul>
<p><strong>考试对应：</strong>跨领域应用识别。</p>
</div>`
  },
  {
    topic: "People",
    term: "Elizabeth Spelke",
    termCn: "斯佩尔克",
    back: `<div class="en-side">
<p><strong>Who.</strong> Pioneer of infant cognition research.</p>
<p><strong>Core contribution.</strong> <strong>Hybrid</strong> position between nativism and empiricism.</p>
<p><strong>Slogan.</strong> <em>"Babies are designed to learn."</em> The learning mechanism is innate even if specific facts are not.</p>
<p><strong>Also.</strong> Core Knowledge theory — babies come equipped with core cognitive systems (objects, number, space, agents, social).</p>
<p><strong>Exam hook.</strong> Know the hybrid slogan.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>婴儿认知 hybrid 立场代表。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>"Babies are designed to learn"</li>
<li>Core Knowledge 理论</li>
</ul>
<p><strong>考试对应：</strong>识别 hybrid 口号。</p>
</div>`
  },

  // === Key Experiments 汇总 ===
  {
    topic: "Experiments",
    term: "Wug Test",
    termCn: "Wug 测试",
    back: `<div class="en-side">
<p><strong>Berko (1958).</strong> Children shown a novel creature "wug": "This is a wug. Now there is another one. There are two ___."</p>
<p>Children produce <strong>"wugs"</strong> despite never having heard the word.</p>
<p><strong>Implications.</strong></p>
<ul>
<li>Children apply an <em>abstract rule</em>, not memorized words.</li>
<li>Supports language <strong>novelty</strong>.</li>
<li>Supports cognitivism.</li>
</ul>
<p>Children also <em>overgeneralize</em>: "goed", "foots".</p>
<p><strong>Exam hook.</strong> Evidence for rule-based language acquisition.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>Berko 1958 经典测试。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>新词正确复数化</li>
<li>过度泛化"goed"</li>
</ul>
<p><strong>考试对应：</strong>语言 novelty + cognitivism。</p>
</div>`
  },
  {
    topic: "Experiments",
    term: "Wason Selection Task",
    termCn: "Wason 选择任务",
    back: `<div class="en-side">
<p><strong>Abstract version.</strong> 4 cards X, M, 3, 7; rule "If X on one side, then 3 on other." Which to flip to falsify?</p>
<ul>
<li>Intuition: X + 3.</li>
<li>Correct: <strong>X + 7</strong> (M is irrelevant; 3's other side could be anything).</li>
</ul>
<p>Most people fail.</p>
<p><strong>Social-contract version.</strong> 4 cards (beer, coke, age 23, age 17); rule "To drink alcohol you must be over 18."</p>
<ul>
<li>Most get it right — flip beer + 17.</li>
</ul>
<p><strong>Exam hook.</strong> Supports <strong>Cheater Detection Module</strong> (Cosmides &amp; Tooby).</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>抽象版难 / 社会契约版易。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>抽象版正解 X+7</li>
<li>社会契约版 beer+17</li>
</ul>
<p><strong>考试对应：</strong>支持 Cheater Detection Module。</p>
</div>`
  },
  {
    topic: "Experiments",
    term: "Linda Problem",
    termCn: "林达问题",
    back: `<div class="en-side">
<p><strong>Kahneman &amp; Tversky (1982).</strong></p>
<p>Linda is 31, single, philosophy major, anti-nuclear activist.</p>
<p>Which is more probable?</p>
<ul>
<li>(f) Linda is a bank teller.</li>
<li>(h) Linda is a bank teller AND is active in the feminist movement.</li>
</ul>
<p><strong>89% choose (h) → Conjunction Fallacy.</strong> Mathematically (h) ⊂ (f); cannot be more probable. Linda "looks" like a feminist teller — representativeness.</p>
<p><strong>Frequency reframing.</strong> Error rate drops to 22%.</p>
<p><strong>Exam hook.</strong> Canonical representativeness evidence.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>代表性启发的经典题。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>89% 合取谬误</li>
<li>频率表述后 22%</li>
</ul>
<p><strong>考试对应：</strong>代表性启发经典。</p>
</div>`
  },
  {
    topic: "Experiments",
    term: "Asian Disease Problem",
    termCn: "亚洲疾病问题",
    back: `<div class="en-side">
<p><strong>Framing Effects classic.</strong></p>
<p>600 people will die; choose a plan.</p>
<p><strong>Gain framing</strong> (Group 1).</p>
<ul>
<li>A: 200 <em>saved</em> → <strong>majority</strong>.</li>
<li>B: 1/3 save all / 2/3 save none.</li>
</ul>
<p><strong>Loss framing</strong> (Group 2).</p>
<ul>
<li>C: 400 <em>die</em>.</li>
<li>D: 1/3 none die / 2/3 all die → <strong>majority</strong>.</li>
</ul>
<p>A = C and B = D, but framing flips preference — <strong>risk-averse in gains, risk-seeking in losses</strong>.</p>
<p><strong>Exam hook.</strong> Classic framing demonstration.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>同题不同框架反转选择。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>A=C, B=D 数学等价</li>
<li>gain 保守 / loss 冒险</li>
</ul>
<p><strong>考试对应：</strong>framing 的经典证据。</p>
</div>`
  },
  {
    topic: "Experiments",
    term: "Dutton & Aron bridge study",
    termCn: "吊桥实验",
    back: `<div class="en-side">
<p><strong>Evidence for Schachter-Singer Two-Factor Theory.</strong></p>
<p>Men crossed a <em>swaying high bridge</em> vs a <em>stable low bridge</em>, then met a female assistant.</p>
<p><strong>Result.</strong> Bridge-group men called her back significantly more often.</p>
<p><strong>Interpretation.</strong> Bodily arousal (pounding heart) misattributed as sexual attraction — "my heart is racing, she must be attractive."</p>
<p><strong>Exam hook.</strong> Arousal + conscious interpretation = emotion.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>Schachter-Singer 经典证据。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>吊桥组约会比例更高</li>
<li>唤起归因误差</li>
</ul>
<p><strong>考试对应：</strong>唤起 + 解释 = 情绪。</p>
</div>`
  },
  {
    topic: "Experiments",
    term: "False Belief Task (toy melon)",
    termCn: "玩具甜瓜 false belief",
    back: `<div class="en-side">
<p><strong>Onishi &amp; Baillargeon (2005, Science).</strong></p>
<p>Shows that <strong>15-month-olds</strong> understand others can hold <strong>false beliefs</strong>.</p>
<p><strong>Two conditions</strong> using violation of expectation.</p>
<ul>
<li><strong>TB-yellow</strong>: agent saw melon moved to yellow box → expects agent to reach yellow; baby surprised if she reaches green.</li>
<li><strong>FB-green</strong>: agent believes melon is in green (she didn't see it moved) → expects agent to reach green; baby surprised if she reaches yellow.</li>
</ul>
<p>Traditional false-belief task needs age 4; this adapted version shows 15-month ability.</p>
<p><strong>Exam hook.</strong> Early-emerging Theory of Mind.</p>
</div>
<div class="cn-side">
<p><strong>定义：</strong>15 月婴儿 false belief 实验。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>TB-yellow / FB-green 条件</li>
<li>Violation of expectation</li>
</ul>
<p><strong>考试对应：</strong>早期 ToM。</p>
</div>`
  },

  // === Formulas & Quick practice ===
  {
    topic: "Formulas",
    term: "Bayes' Rule 快速套公式",
    termCn: "Sally 咳嗽题",
    back: `<div class="en-side">
<p><strong>Setup.</strong> Priors: P(cold)=0.5, P(heartburn)=0.4, P(cancer)=0.1. Likelihoods: P(cough|cold)=0.8, P(cough|heartburn)=0.1, P(cough|cancer)=0.9.</p>
<p><strong>Q.</strong> P(heartburn | cough)?</p>
<span class='formula'>= (0.1 × 0.4) / [(0.8)(0.5) + (0.9)(0.1) + (0.1)(0.4)]<br>= 0.04 / 0.53<br>≈ 0.0755</span>
<p><strong>Canvas answer format.</strong></p>
<p><code>P(Hhburn|d) = (0.1)(0.4) / (0.8)(0.5) + (0.9)(0.1) + (0.1)(0.4)</code></p>
<p><strong>Exam hook.</strong> No calculator needed; plug into the formula correctly.</p>
</div>
<div class="cn-side">
<p><strong>公式练习：</strong>Sally 咳嗽题。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>P(heartburn|cough) = (0.1)(0.4) / 0.53 ≈ 0.0755</li>
</ul>
<p><strong>考试对应：</strong>Canvas 套公式格式。</p>
</div>`
  },
  {
    topic: "Formulas",
    term: "γ 贴现快速练",
    termCn: "指数贴现计算",
    back: `<div class="en-side">
<p><strong>Formula.</strong></p>
<span class='formula'>U × γˣ</span>
<p><strong>Practice 1.</strong> Ricky γ=0.5/year. 100 utiles in 3 years?</p>
<p>→ 100 × 0.5³ = 100 × 0.125 = <strong>12.5 utiles</strong>.</p>
<p><strong>Practice 2.</strong> Natalia γ=0.95/week. 100 utiles in 2 weeks?</p>
<p>→ 100 × 0.95² = 100 × 0.9025 = <strong>90.25 utiles</strong>.</p>
<p><strong>Practice 3.</strong> Siva γ=0.80/hour. 50 utiles in 3 hours?</p>
<p>→ 50 × 0.8³ = 50 × 0.512 = <strong>25.6 utiles</strong>.</p>
<p><strong>Exam hook.</strong> Plug and chug; watch units of delay.</p>
</div>
<div class="cn-side">
<p><strong>公式：</strong>U × γˣ。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>Ricky 12.5；Natalia 90.25；Siva 25.6</li>
</ul>
<p><strong>考试对应：</strong>注意延迟单位。</p>
</div>`
  },
  {
    topic: "Formulas",
    term: "Q-learning 快速练",
    termCn: "Q 值更新计算",
    back: `<div class="en-side">
<p><strong>Formula.</strong></p>
<span class='formula'>Q(s,a) ← Q(s,a) + α · [R(s') + γ · max Q(s',a') − Q(s,a)]</span>
<p><strong>Wally: run to truck.</strong></p>
<ul>
<li>Old Q = 3, R = 4, max Q(s', a') = 8 (swim is max).</li>
<li>γ = 0.7, α = 0.8.</li>
<li>pred_err = [4 + 0.7 × 8] − 3 = 9.6 − 3 = <strong>6.6</strong>.</li>
<li>New Q = 3 + 0.8 × 6.6 = <strong>8.28</strong>.</li>
</ul>
<p><strong>Wally: swim</strong> (water is terminal).</p>
<ul>
<li>Old Q = 8, R = −5, max Q(s', a') = <strong>0</strong> (terminal!).</li>
<li>pred_err = [−5 + 0] − 8 = <strong>−13</strong>.</li>
<li>New Q = 8 + 0.8 × (−13) = <strong>−2.4</strong>.</li>
</ul>
<p><strong>Exam hook.</strong> Remember: terminal state → max Q = 0.</p>
</div>
<div class="cn-side">
<p><strong>公式：</strong>Q-learning 更新。</p>
<p><strong>关键证据：</strong></p>
<ul>
<li>park,truck: 3 → 8.28</li>
<li>truck,swim（terminal）: 8 → -2.4</li>
</ul>
<p><strong>考试对应：</strong>terminal → max = 0。</p>
</div>`
  }
];
