const CARDS = [
  // === Marr's levels & Cross-cutting ===
  {
    topic: "Cross-cutting",
    term: "Marr's three levels of explanation",
    termCn: "Marr 的三层解释",
    back: `<div class="en-side">
<p>David Marr argued that any mental capacity has to be analyzed at three distinct levels, because each level answers a different question and you cannot reduce one to another. The <strong>functional level</strong> asks what problem the system is trying to solve. The <strong>algorithmic level</strong> asks what procedure, representations, and rules the system uses to solve that problem. The <strong>physical level</strong> asks what neural hardware actually runs that procedure in the brain.</p>
<p>The clearest way to feel why this matters is to run it on the capacities this course covers. In vision, the function is inferring a three-dimensional scene from a two-dimensional retinal image; the algorithm is <em>Bayesian inference</em> that combines likelihood with priors; the physical substrate is V1, FFA, and the ventral visual stream. In language, the function is mapping sound to meaning; the algorithm is <em>phrase-structure grammar</em>; the physical realization involves Broca's and Wernicke's areas. In reward learning, the function is maximizing long-term reward; the algorithm is <em>Q-learning</em>; the physical structures are the striatum, VTA, and vmPFC.</p>
<p>This is the concept the study guide is probing whenever it asks you to take any phenomenon and state what it is at the functional, algorithmic, and physical levels. You should be ready to do this for any capacity in the course.</p>
</div>
<div class="cn-side">
<p>Marr 的核心主张是，每一种心智能力都必须同时从三个层面去解释，缺一不可。<strong>功能层</strong>问这个系统到底要解决什么问题；<strong>算法层</strong>问它用什么程序和表征来解决；<strong>物理层</strong>问具体是哪块神经硬件在执行。</p>
<p>放到本课的例子里看就很清楚。视觉系统功能上要从二维视网膜图推断三维场景，算法上用 Bayesian 推理结合先验和似然，物理上对应 V1、FFA 等区域。语言系统功能上是把声音映射到意义，算法上是短语结构语法，物理上对应 Broca 和 Wernicke 区。强化学习系统功能上是最大化长期回报，算法上是 Q-learning，物理上对应 striatum、VTA、vmPFC。</p>
<p>考试里凡是让你"给一个现象，分三层写出来"的题，问的就是这个框架。</p>
</div>`
  },
  {
    topic: "Cross-cutting",
    term: "Input-Output Equivalence",
    termCn: "输入-输出等价",
    back: `<div class="en-side">
<p><strong>Input-output equivalence</strong> is the observation that the same underlying function can be realized by very different algorithms, so two systems that produce the same outputs for the same inputs count as doing "the same thing" at the functional level even if their internal procedures are totally different. The variation, in Marr's terms, lives at the step from function to algorithm.</p>
<p>A concrete illustration is palindrome detection: you can check whether a string is a palindrome by comparing characters from the outside working inward, or by starting at the middle and working outward, and both algorithms compute exactly the same function. The <em>Turing Test</em> is built on the same idea — judges decide whether the system is intelligent purely by comparing inputs and outputs, never looking at how the machine internally gets there.</p>
<p>The exam hook here is to distinguish this from Multiple Realizability. Input-output equivalence is about choosing among different algorithms that compute the same function, while multiple realizability is about running the same algorithm on different physical substrates. Those are different dimensions of variation.</p>
</div>
<div class="cn-side">
<p>输入-输出等价指的是，同一个 function 可以由完全不同的 algorithm 实现，所以只要两个系统对同样的输入给出同样的输出，在功能层就算"做同一件事"，即使内部程序天差地别。变化发生在"function 到 algorithm"这一步。</p>
<p>回文检测就是标准例子，你可以从两头往中间比，也可以从中间往两头比，两种算法算的是同一个 function。Turing Test 的设计也完全基于这个思想，评委只比较输入输出，不看机器内部怎么实现。</p>
<p>考试常考的区分是：输入-输出等价说的是 algorithm 可以不同，multiple realizability 说的是 physical substrate 可以不同，这是两个方向的变化。</p>
</div>`
  },
  {
    topic: "Cross-cutting",
    term: "Multiple Realizability",
    termCn: "多重可实现",
    back: `<div class="en-side">
<p><strong>Multiple realizability</strong> is the point that the same algorithm can be implemented on different physical substrates. Here the variation lives at the step from algorithm to physical level: the procedure is fixed, but what actually carries out that procedure can be biological neurons, silicon chips, or in principle anything else that supports the right kind of computation.</p>
<p>Candy Crush running on a Mac, an iPhone, and an Android phone is a simple software example, and a palindrome-checking algorithm running on both a Turing Machine and a modern PC is a textbook one. For cognitive science the interesting case is Bayesian inference running in a human brain, an alien brain, or a silicon computer, because it means the mental state is defined by the algorithm, not by the specific neurons.</p>
<p>Combined with the Computational Theory of Mind, this is how the course partially dissolves the mind-body problem. Mental states are <em>implemented by</em> physical states but not <em>identical to</em> them, which is why a mind could in principle run on any suitable hardware.</p>
</div>
<div class="cn-side">
<p>多重可实现说的是，同一个 algorithm 可以在不同物理基底上运行，变化发生在"algorithm 到 physical"这一步：程序本身固定，但承载它的硬件可以是神经元、硅芯片，甚至任何能支持这类计算的东西。</p>
<p>Candy Crush 能在 Mac、iPhone、Android 上跑是软件层面的例子；回文算法能在图灵机和 PC 上跑是课本例子。真正关键的是 Bayesian 推理可以在人脑、外星脑或计算机里实现，这意味着心智状态由算法定义，而不是由具体神经元定义。</p>
<p>配合 CTM，这就是本课"部分消解心身问题"的方式：心智状态由物理状态实现，但并不等同于物理状态。</p>
</div>`
  },
  {
    topic: "Cross-cutting",
    term: "Dual Processes",
    termCn: "双过程",
    back: `<div class="en-side">
<p>A recurring theme across the course is that many mental capacities are supported by <strong>two systems working in parallel</strong>: one that is fast, automatic, and typically unconscious, and another that is slow, deliberate, and conscious. The pair does not always give the same answer, which is part of why they are so interesting.</p>
<p>Kahneman's <strong>System 1 and System 2</strong> in judgment and decision-making is the best-known version, but the same shape shows up everywhere. In fear, <em>LeDoux's</em> Low Road (thalamus to amygdala) runs before the cortex catches up on the High Road. In reasoning, Cosmides and Tooby's <strong>Cheater Detection Module</strong> handles social-contract logic automatically while central reasoning struggles with the abstract version. In vision, <strong>blindsight</strong> shows subcortical visual processing guiding behavior without conscious awareness, alongside the cortical pathway that produces conscious sight. In moral judgment, Greene distinguishes a personal alarm-bell system from an impersonal cost-benefit system.</p>
<p>The study guide's crosscutting question asks you to name these pairs and say what each does, so memorize the roster and be able to describe both halves.</p>
</div>
<div class="cn-side">
<p>本课反复出现的主题是，很多心智能力都由两套系统并行支持：一个快、自动、无意识，另一个慢、有意、有意识。两套系统的答案不一定一致，这正是它们有趣的地方。</p>
<p>最有名的是 Kahneman 的 System 1/System 2。同一模式还出现在 LeDoux 的恐惧 Low Road/High Road、Cosmides & Tooby 的 Cheater Detection Module 对中央推理、视觉中的 blindsight 皮层下通路 vs 皮层通路、以及 Greene 的道德 personal 警铃 vs impersonal 成本-效益。</p>
<p>考试会让你列举课程里见过的 dual-process 对，这份清单要背。</p>
</div>`
  },
  {
    topic: "Cross-cutting",
    term: "Poverty of the Stimulus",
    termCn: "刺激贫乏论证",
    back: `<div class="en-side">
<p>The <strong>poverty of the stimulus</strong> (POS) argument says that the input children receive is too meager to explain the rich output they produce, so some of that structure must be innate and not learned from the environment. The logic is one of the standard ways cognitive scientists argue for innateness.</p>
<p>In language, children master complex syntactic rules like the structure-dependent interrogative rule despite never hearing enough examples to distinguish the right rule from a wrong surface-level rule, so Chomsky's <em>Universal Grammar</em> posits innate linguistic structure. In moral cognition, Mikhail runs the same argument: children develop sophisticated judgments involving principles like the Doctrine of Double Effect from very sparse moral instruction, which he takes as evidence for a <em>Universal Moral Grammar</em>. In perception, the five hidden assumptions act as innate Bayesian priors that fill gaps the two-dimensional retinal image leaves open. In infant cognition, babies show knowledge of continuity, solidity, cohesion, and gravity earlier than any realistic learning schedule would allow.</p>
<p>The study-guide question to be ready for is: name the domains in which a POS argument is deployed and say what innate structure it posits in each.</p>
</div>
<div class="cn-side">
<p>刺激贫乏论证的核心是：儿童得到的输入太少，无法解释他们产出的丰富行为，所以某些结构必须是先天的。这是本课认定先天性的标准论证之一。</p>
<p>语言里 Chomsky 用它论证 UG；道德里 Mikhail 用同样的逻辑论证 UMG；感知里 5 条 hidden assumptions 充当先天 Bayesian 先验，填补二维视网膜图留下的歧义；婴儿认知里 continuity、solidity、cohesion、gravity 的年龄早到学习机制无法解释。</p>
<p>考试让你列出哪些领域用 POS 论证，分别论证了什么先天结构。</p>
</div>`
  },
  {
    topic: "Cross-cutting",
    term: "Tacit Knowledge",
    termCn: "隐性知识",
    back: `<div class="en-side">
<p><strong>Tacit knowledge</strong> is information that sits inside a cognitive system and shapes behavior, but that the person themselves cannot articulate or explicitly state. You use it competently, you just can't explain it. In Fodor's modularity vocabulary this overlaps heavily with inaccessibility, because the rest of the mind cannot see into the module that holds the rule.</p>
<p>The canonical example from language is the <em>interrogative rule</em>: children reliably form correct questions by moving the main verb of the main clause to the front, but if you ask them what the rule is, they cannot tell you. The five <em>hidden assumptions</em> of perception are another case — the visual system uses them on every glance, but you have no conscious access to them. Infant intuitive physics, including continuity and solidity, works the same way. In moral cognition, Mikhail's key example is the <em>Doctrine of Double Effect</em>: people apply it in their trolley judgments but cannot state it as a principle.</p>
<p>Crosscutting Q5 turns on this concept directly. Tacit knowledge and inaccessibility are exactly what <em>Mikhail</em> invokes to explain moral judgment (you know the rule without being able to state it), and they are exactly what <em>Greene</em> does NOT invoke (for Greene the fast process is simple emotion, not hidden sophisticated knowledge).</p>
</div>
<div class="cn-side">
<p>隐性知识指的是系统内部有、指导行为，但本人说不出来的知识。你会用，但讲不清楚。在 Fodor 的模块性术语里，它和 inaccessibility 几乎重合：外部系统看不进模块内部。</p>
<p>经典例子是语言的 interrogative rule（儿童会用却讲不出）、感知的 5 条 hidden assumptions、婴儿的直觉物理、以及 Mikhail 道德判断里的 Doctrine of Double Effect。</p>
<p>Crosscutting Q5 考的就是这一点：Mikhail 诉诸 tacit knowledge / inaccessibility，Greene 不诉诸，因为 Greene 把快过程解释成简单情绪，而不是隐藏的复杂规则。</p>
</div>`
  },
  {
    topic: "Cross-cutting",
    term: "Universality",
    termCn: "普遍性",
    back: `<div class="en-side">
<p><strong>Universality</strong> is the observation that a capacity appears across all human cultures with roughly similar complexity, and this is one of the standard arguments for innateness. If every society has it, the capacity cannot be the product of some particular cultural accident; something in the human mind must reliably produce it.</p>
<p>Language universality is the clearest case: every human society has a full language, and there are no "stone-age languages" that are structurally simpler than modern ones. <em>Senghas et al.'s Nicaraguan Sign Language</em> (2004) is a dramatic instance — when deaf children were brought together in the late 1970s with no existing sign language, they spontaneously generated grammatical structure within a few cohorts. <em>Ekman's 1971 cross-cultural facial expression studies</em> show that six basic emotions (happiness, sadness, anger, fear, disgust, surprise) are recognized across very different cultures.</p>
<p>On the exam, universality is typically presented as one prong of the standard innateness argument, alongside poverty of the stimulus and early developmental emergence. Together these three make the case that some capacity is part of species-typical human design rather than a cultural invention.</p>
</div>
<div class="cn-side">
<p>普遍性指的是一种能力在所有人类文化中都出现，且复杂度大致相当。如果每个社会都有它，它就不能是某个特定文化的偶然产物，而必须由人类心智某种稳定机制产生。</p>
<p>语言是最清楚的例子，所有社会都有完整语言，不存在"石器时代语言"这种东西。Senghas 的尼加拉瓜手语研究显示失聪儿童在几代 cohort 内自发生成语法。Ekman 1971 跨文化研究表明 6 种基本情绪在各文化都能被识别。</p>
<p>考试里，普遍性和 POS、早期发展并列，共同支持某能力是人类物种典型设计的一部分。</p>
</div>`
  },

  // === Modularity ===
  {
    topic: "Modularity",
    term: "Modularity (6 characteristic features)",
    termCn: "模块性的 6 个典型特征",
    back: `<div class="en-side">
<p>Fodor proposed that a cognitive <strong>module</strong> is a specialized processing unit with a cluster of characteristic features, and it's crucial that he described these as <em>characteristic</em>, not <em>required</em>. A system can count as a module without satisfying all six, and no single feature is individually necessary.</p>
<p>The six features are: <strong>mandatory</strong>, meaning the module runs automatically and is not under conscious control; <strong>fast</strong>, operating on a timescale around 250–350 milliseconds for a word; <strong>domain-specific</strong>, meaning it only processes a narrow kind of input; <strong>informationally encapsulated</strong>, meaning the module cannot see information from outside itself; <strong>inaccessible</strong>, meaning other systems cannot see inside the module's workings; and <strong>neurally discretely localized</strong>, meaning it has a specific brain region dedicated to it. LeDoux's Low Road for fear is the textbook case that happens to exhibit <em>all six</em>: it is fast, mandatory, domain-specific to threat, encapsulated (you can know the plane is safe and still feel fear), inaccessible, and localized to the amygdala.</p>
<p>Exam 2 asked which feature is <em>required</em>, and the answer is none of them. The study guide also pairs the "neurally discretely localized" feature with <strong>Marr's physical level</strong> — crosscutting Q4 turns on this mapping.</p>
</div>
<div class="cn-side">
<p>Fodor 把模块定义为具备一组典型特征的专门处理单元，关键在于他说这些特征是 characteristic（典型），不是 required（必需），没有哪一条单独必要。</p>
<p>6 个特征是：mandatory（自动运行不受控）、fast（约 250–350ms）、domain-specific（只处理狭窄输入）、informationally encapsulated（模块看不到外部信息）、inaccessible（外部看不到模块内部）、neurally discretely localized（有专门脑区）。LeDoux 的 Low Road 6 条全满足：快、自动、只管威胁、封装（知道飞机安全也怕）、不可访问、定位于 amygdala。</p>
<p>Exam 2 问"哪条是必需"，答案是"没有一条"。另外"neurally discretely localized"这条对应 Marr 物理层，crosscutting Q4 考的就是这个映射。</p>
</div>`
  },
  {
    topic: "Modularity",
    term: "Informational Encapsulation vs Inaccessibility",
    termCn: "信息封装 vs 不可访问",
    back: `<div class="en-side">
<p>These are two distinct features of modularity that are easy to confuse because they both describe information flow, but they point in <strong>opposite directions</strong>. Understanding the direction is the whole point.</p>
<p><strong>Informational encapsulation</strong> blocks the flow from outside into the module: the module cannot use information held elsewhere in the mind, even when that information would obviously be useful. The Müller-Lyer illusion persists even after you are told and believe that the two lines are equal, because your visual processing module cannot see that belief. Fear of flying persists even when you know flying is statistically safer than driving, because the fear module cannot use that knowledge. <strong>Inaccessibility</strong> blocks the flow in the other direction: other systems, including introspection, cannot read the internal workings of the module. Children apply the interrogative rule perfectly but cannot state what rule they are using, and Mikhail argues the same holds for moral-grammar principles like the Doctrine of Double Effect.</p>
<p>The study guide's Crosscutting Q5 hinges on inaccessibility specifically. <strong>Mikhail</strong> invokes inaccessibility / tacit knowledge to explain why people reach sophisticated moral judgments they cannot articulate, while <strong>Greene</strong> does NOT invoke this, because he treats the fast process as simple emotion rather than hidden sophisticated rules.</p>
</div>
<div class="cn-side">
<p>这两条都和信息流动有关，但方向相反，搞清方向是关键。</p>
<p>Informational encapsulation 挡的是"外部到模块"方向：模块用不到外面的信息。即使你知道 Müller-Lyer 两条线一样长，视觉系统照样显示不等；即使你知道坐飞机安全，怕飞机照样怕。Inaccessibility 挡的是"模块到外部"方向：外面读不到模块内部。儿童用 interrogative rule 却讲不出规则，Mikhail 也认为 DDE 是这种形式。</p>
<p>Crosscutting Q5 问的正是 inaccessibility：Mikhail 用它解释道德判断，Greene 不用，因为 Greene 把快过程当作简单情绪而非隐藏规则。</p>
</div>`
  },

  // === Perception ===
  {
    topic: "Perception",
    term: "Inverse Optics Problem",
    termCn: "逆光学问题",
    back: `<div class="en-side">
<p>The <strong>inverse optics problem</strong> is the foundational difficulty of vision: the brain has to infer a three-dimensional scene from a two-dimensional retinal image, and the math of this inference is <strong>underdetermined</strong>. Infinitely many different 3D scenes can project onto the retina as the exact same 2D image, so the retinal data by itself cannot pick out which scene is the real one.</p>
<p>A classic demonstration is that a neat row of same-size squares at different distances can produce the same retinal projection as a row of slanted diamonds at a uniform distance, and nothing in the raw image tells you which is out there. To get around this, the visual system combines the <em>likelihood</em> of the retinal image given each candidate scene with <em>prior assumptions</em> about how the world usually works, and the combination is Bayes' Rule. The priors are the five hidden assumptions (overhead light, continuous motion, and so on), which act as built-in biases that break the tie.</p>
<p>This is the problem the whole perception unit is designed to solve, and it is the reason innate priors are needed in the first place.</p>
</div>
<div class="cn-side">
<p>逆光学问题是视觉的根本难题：大脑要从二维视网膜图推断三维场景，但这个推断在数学上是 underdetermined，无数个 3D 场景都能投影成同一个 2D 图像，光靠视网膜数据选不出哪个是真的。</p>
<p>经典演示：一排等大方块放在不同距离，可以和一排倾斜的菱形在同一距离产生同样的视网膜投影。视觉系统的解决办法是把 likelihood（图像在某场景下的概率）和先验（5 条 hidden assumptions）结合起来，用 Bayes 规则打破僵局。</p>
<p>这就是为什么感知需要先天先验，整个感知单元都是为了解决这个问题。</p>
</div>`
  },
  {
    topic: "Perception",
    term: "5 Hidden Assumptions of Perception",
    termCn: "感知系统的 5 条隐藏假设",
    back: `<div class="en-side">
<p>The five <strong>hidden assumptions</strong> are the innate Bayesian priors the visual system uses to solve the inverse optics problem. They are "hidden" because we don't know we are using them — they operate as tacit knowledge.</p>
<p>The first is that light comes from a <strong>single overhead source</strong>, which is why a bump lit from above and a dent lit from below can produce the same shading but look different. The second is that surfaces in shadow are <strong>brighter than the sensor readings suggest</strong>, so the visual system discounts shadow. The third is that things tend to move in <strong>straight lines</strong> rather than zig-zag paths. The fourth is that all points on a moving object move <strong>together</strong>, which is how the visual system knows which pixels belong to the same object. The fifth is that moving objects <strong>progressively occlude and reveal</strong> a continuous background, which lets the system infer depth order from motion.</p>
<p>The classic evidence for innateness comes from <em>Hershberger (1970)</em>, whose chicks raised with only below-lighting still defaulted to the overhead-light assumption. On the exam, these five function as the prior P(scene) in Bayes' Rule applied to perception, and they are a standard example of tacit knowledge.</p>
</div>
<div class="cn-side">
<p>5 条 hidden assumptions 是视觉系统用来解决逆光学问题的先天 Bayesian 先验，之所以"隐藏"是因为我们用它们但意识不到。</p>
<p>分别是：光从上方单一光源；阴影表面实际比感受器读数亮；物体倾向走直线；同一物体各点同步运动；运动物体渐进遮挡/显露连续背景。</p>
<p>Hershberger 1970 小鸡实验证明"光从上"是先天的。考试中它们充当 Bayes 公式里的 P(scene) 先验，也是 tacit knowledge 的标准例子。</p>
</div>`
  },
  {
    topic: "Perception",
    term: "Bayes' Rule",
    termCn: "贝叶斯规则",
    back: `<div class="en-side">
<p><strong>Bayes' Rule</strong> is the formula for updating a belief in hypothesis h after observing data d. It tells you how to combine what you believed before (the prior) with how well the hypothesis explains the data (the likelihood) to get your new belief (the posterior).</p>
<span class='formula'>P(h|d) = P(d|h) · P(h) / Σⱼ P(d|hⱼ) · P(hⱼ)</span>
<p>The four pieces are the <em>posterior</em> P(h|d), which is your belief in h after seeing d; the <em>likelihood</em> P(d|h), which is how probable d is if h were true; the <em>prior</em> P(h), which is your belief in h before seeing any data; and the <em>normalizing denominator</em>, which is the total probability of the data summed over all hypotheses and makes the posteriors sum to 1.</p>
<p>In perception the rule becomes P(scene|retinal) = P(retinal|scene) · P(scene) / P(retinal), and the prior P(scene) is exactly where the hidden assumptions enter. On the exam you should be able to label the four components and plug numbers into a concrete case, whether that's perception, infant statistical reasoning, or the Sally's-cough diagnosis problem.</p>
</div>
<div class="cn-side">
<p>Bayes 规则告诉你怎么把先前的信念和数据的解释力结合起来，得到新的信念。</p>
<span class='formula'>P(h|d) = P(d|h) · P(h) / Σⱼ P(d|hⱼ) · P(hⱼ)</span>
<p>四部分：posterior（看到 d 后对 h 的信念）、likelihood（h 为真时 d 出现概率）、prior（未看数据时对 h 的信念）、分母是归一化总证据。感知中 P(scene) 就是 5 条 hidden assumptions。</p>
<p>考试让你命名四部分并代入具体题目（感知、婴儿、Sally 咳嗽题）。</p>
</div>`
  },
  {
    topic: "Perception",
    term: "Hershberger (1970) chicks",
    termCn: "Hershberger 小鸡实验",
    back: `<div class="en-side">
<p><em>Hershberger (1970)</em> is the classic demonstration that the "light comes from above" assumption in vision is <strong>innate</strong> rather than learned from experience. The logic of the design is clean: if you raise an animal without ever experiencing overhead light and it still uses the overhead-light assumption, the assumption cannot have come from experience.</p>
<p>Hershberger raised chicks from hatching in cages lit from below, and even the egg-incubation lighting was from below, so the chicks never saw light coming from above. He then trained one group to peck at dents and another group to peck at bumps. At test the chicks were shown two shaded images: image B had shadow on top, which under the overhead-light assumption would look like a dent, and image C had shadow on bottom, which would look like a bump. Chicks trained on dents pecked image B, and chicks trained on bumps pecked image C — exactly the pattern you'd expect if they were interpreting the shading with an overhead light source in mind, despite never having seen one.</p>
<p>On the exam this is the classic innate-prior evidence. It's the cleanest study in the course for "the mind comes equipped with a Bayesian prior before experience can install one."</p>
</div>
<div class="cn-side">
<p>Hershberger 1970 小鸡实验证明"光从上方"是先天假设。设计很干净：如果动物从未经历上方光照，却仍然按"光从上"解释阴影，那这个假设就不可能来自经验。</p>
<p>小鸡从孵化起只经历下方光源（包括孵化阶段），然后一组训练啄凹，一组训练啄凸。测试时给两张带阴影的图：图 B 阴影在上（按"光从上"解释是凹），图 C 阴影在下（按"光从上"解释是凸）。啄凹组选 B，啄凸组选 C，和"用上方光假设解释"完全一致。</p>
<p>考试里这是先天先验的经典证据。</p>
</div>`
  },
  {
    topic: "Perception",
    term: "Sugita (2008) face-deprived monkeys",
    termCn: "Sugita 猴子面孔剥夺实验",
    back: `<div class="en-side">
<p><em>Sugita (2008)</em> showed that face processing is not purely innate and not purely learned, but involves both an <strong>innate template</strong> and an <strong>experience-driven tuning stage</strong> during a sensitive period. This makes it a nice counterpoint to pure nativism and pure empiricism.</p>
<p>Sugita raised Japanese macaques with caregivers who wore masks at all times, so the monkeys were deprived of face exposure for 6, 12, or 24 months. After this deprivation period he exposed each monkey to either human faces or monkey faces for one month, then tested their preferences. Before any face exposure, the deprived monkeys already preferred faces over non-face objects, which shows there is an <em>innate face-detection template</em> — you don't need experience to know a face is special. But at that point they couldn't distinguish human from monkey faces. After one month of exposure to human faces they preferred humans; after one month of monkey-face exposure they preferred monkeys, the same pattern as control animals.</p>
<p>The exam hook is that this experiment combines innate structure, environmental input, and a sensitive period of learning into one clean story.</p>
</div>
<div class="cn-side">
<p>Sugita 2008 证明面孔处理既不是纯先天也不是纯经验，而是先天模板加上敏感期的经验微调。</p>
<p>他让日本猕猴在戴面具的饲养者陪伴下长大 6/12/24 个月（完全无面孔暴露），然后暴露 1 个月人脸或猴脸后测偏好。剥夺期后它们已经偏好面孔胜过非面孔物体（先天面孔检测模板），但分不清人/猴。暴露人脸 1 个月后偏好人脸，暴露猴脸后偏好猴脸。</p>
<p>考试里这是"先天结构 + 环境输入 + 敏感期"三者结合的清晰案例。</p>
</div>`
  },
  {
    topic: "Perception",
    term: "Blindsight",
    termCn: "盲视",
    back: `<div class="en-side">
<p><strong>Blindsight</strong> is the striking condition in which patients with damage to <strong>V1 (primary visual cortex)</strong> report no conscious vision in the affected part of their visual field, yet can still avoid obstacles, catch thrown objects, and correctly guess features of stimuli they claim not to see. It's a textbook illustration of dual processes in perception.</p>
<p>The mechanism is that visual signals reach behavior through a subcortical route: the retina projects to the LGN and then to the pulvinar and superior colliculus, which project to other cortical areas while bypassing V1. This pathway drives action without producing conscious visual experience. Conscious vision depends on the cortical route through V1, which is the part that's damaged.</p>
<p>On the exam blindsight is the clearest perception-domain example of a dual-process architecture: unconscious subcortical vision can guide behavior while conscious cortical vision is absent. A useful anatomical detail is that V1 lives in the occipital lobe.</p>
</div>
<div class="cn-side">
<p>盲视是 V1（初级视觉皮层）损伤患者的奇特现象：他们报告受影响视野看不见，但却能避障、接物、对他们自称看不见的刺激做出正确猜测。这是感知里 dual process 的代表案例。</p>
<p>机制是视觉信号走了皮层下通路：视网膜到 LGN，再到 pulvinar 和上丘，再到其他皮层，绕开了 V1。这条通路驱动行为但不产生意识视觉；意识视觉靠的是被损伤的 V1 皮层通路。</p>
<p>V1 位于枕叶。考试里这是感知的双过程代表。</p>
</div>`
  },
  {
    topic: "Perception",
    term: "Prosopagnosia",
    termCn: "面孔失认症",
    back: `<div class="en-side">
<p><strong>Prosopagnosia</strong> is the selective inability to recognize faces, caused by damage to the <strong>Fusiform Face Area (FFA)</strong> located in the inferior (ventral) temporal lobe. Patients with prosopagnosia can't recognize even close family members by their face, but their other visual recognition is intact — they can still identify cars, tools, houses, and so on — and it's not a memory problem, because they can recognize the same people by voice or walk.</p>
<p>The selectivity is what makes this condition important. It shows that face recognition is not just a generic visual-recognition process; there is a specialized neural region dedicated to faces, which gets wiped out independently when the FFA is damaged.</p>
<p>On the exam this is a clean case of a <em>neurally discretely localized module</em>, one of Fodor's six characteristic features of modularity, applied specifically to face processing.</p>
</div>
<div class="cn-side">
<p>面孔失认症是 FFA（位于颞叶下/腹侧）损伤导致的选择性面孔识别丧失。患者认不出亲人的脸，但其他视觉识别（车、工具、房屋）完好，也不是记忆问题（能通过声音、步态认出同一个人）。</p>
<p>选择性缺损说明面孔识别不是通用视觉识别的一部分，而是有专门的神经模块，FFA 损伤时独立被抹掉。</p>
<p>考试里这是 Fodor 6 特征中"neurally discretely localized"在面孔处理上的经典案例。</p>
</div>`
  },

  // === Infant Cognition ===
  {
    topic: "Infant",
    term: "Violation of Expectation method",
    termCn: "违反预期方法",
    back: `<div class="en-side">
<p>The <strong>violation of expectation</strong> method is the workhorse tool of infant cognition research. Since babies can't talk, researchers measure how long they look at different events, and the logic is that babies look longer at events that violate their expectations. A longer look at a "violation" event means the baby (1) had an expectation in the first place, (2) detected that the event violated it, and (3) responded with increased attention.</p>
<p>The classic illustration is the 1+1 arithmetic experiment: an experimenter places two toys behind a screen one at a time, then drops the screen to reveal either one toy (an impossible violation) or two toys (the expected outcome). Five-month-olds look longer at the one-toy outcome, suggesting they had computed that 1+1 should equal 2.</p>
<p>This method powers findings across intuitive physics (continuity, solidity, gravity), arithmetic, probabilistic reasoning (Xu & Denison's ping-pong balls), and even early theory of mind (Onishi & Baillargeon's false-belief task with 15-month-olds). On the exam expect to recognize it as the method behind essentially every infant study in the course.</p>
</div>
<div class="cn-side">
<p>违反预期法是婴儿认知研究的主力方法。婴儿不会说话，研究者就用注视时长做指标：看得更久说明 (1) 婴儿本有预期，(2) 检测到事件违反预期，(3) 以注意力增加作出反应。</p>
<p>经典演示是 1+1 算术实验：实验者把两个玩具先后放到屏幕后，屏幕落下时露出 1 个（违反）或 2 个（预期）玩具，5 月婴儿盯着 1 个的时间更长。</p>
<p>这方法贯穿直觉物理、算术、概率推理（Xu & Denison 乒乓球）、15 月 false belief（Onishi & Baillargeon），几乎所有婴儿研究都用它。</p>
</div>`
  },
  {
    topic: "Infant",
    term: "Intuitive Physics ages",
    termCn: "直觉物理的 5 原则+年龄",
    back: `<div class="en-side">
<p>Babies show a surprisingly rich grasp of physical principles very early in life, and the course tests specific ages for each principle. The core intuitive-physics timeline is: <strong>continuity</strong> (object permanence — objects don't pop in and out of existence) and <strong>solidity</strong> (solid objects don't pass through each other) both emerge by <strong>2.5 months</strong>; <strong>cohesion</strong> (objects are bounded wholes that hold together) shows up at <strong>3 months</strong>; <strong>gravity</strong> (unsupported objects fall) appears by <strong>4.5 months</strong>; and <strong>contact causality</strong> (causes have to touch their effects) arrives at <strong>6–7 months</strong>.</p>
<p>Beyond physics, three related milestones are worth memorizing: basic arithmetic (1+1=2) by <strong>5 months</strong>, probabilistic reasoning between <strong>8 and 11 months</strong>, and false-belief understanding, as demonstrated in Onishi & Baillargeon with the toy melon, at <strong>15–18 months</strong>.</p>
<p>These ages are exam fodder in the form of age-matching questions, and they serve as the core evidence for early-emerging core knowledge and for the innateness of the learning mechanisms that install this knowledge so fast.</p>
</div>
<div class="cn-side">
<p>婴儿很早就掌握物理原则，考试要求记住具体年龄。continuity（物体永久）和 solidity（固体不穿过固体）2.5 个月；cohesion（物体是整体）3 个月；gravity（重力）4.5 个月；contact causality（接触因果）6-7 个月。</p>
<p>此外算术 1+1=2 是 5 个月；概率推理 8-11 个月；false belief（Onishi & Baillargeon 玩具甜瓜）15-18 个月。</p>
<p>考试常出年龄匹配题，也是 core knowledge 和学习机制先天性的核心证据。</p>
</div>`
  },
  {
    topic: "Infant",
    term: "Onishi & Baillargeon (2005)",
    termCn: "15 个月婴儿 false belief",
    back: `<div class="en-side">
<p><em>Onishi and Baillargeon (2005, Science)</em> showed that <strong>15-month-olds</strong> already understand that others can hold <strong>false beliefs</strong>. This was a major finding because traditional false-belief tasks require age 4 and rely on verbal responses, so researchers had long thought that theory of mind came online very late.</p>
<p>The study used violation of expectation with a toy melon. In the <strong>true-belief "TB-yellow" condition</strong>, the agent watched the melon get moved to a yellow box, so she should expect it to be in the yellow box; babies looked longer when she reached into the green box (the one where she knew the melon wasn't). In the <strong>false-belief "FB-green" condition</strong>, the agent left the room before the melon was moved, so she still believes it's in the green box; babies looked longer when she reached into the yellow box, because given her false belief the expected reach was into the green one.</p>
<p>The key exam point is that this is early-emerging Theory of Mind, demonstrated nonverbally by violation of expectation.</p>
</div>
<div class="cn-side">
<p>Onishi & Baillargeon（2005, Science）证明 15 个月婴儿已能理解他人可以有 false belief。这是重大发现，因为传统任务要 4 岁、依赖语言。</p>
<p>实验用玩具甜瓜 + 违反预期。TB-yellow 条件：代理亲眼看到甜瓜被移到黄盒，婴儿预期她伸向黄盒，如果伸向绿盒会看更久。FB-green 条件：代理离开时甜瓜被移，她仍相信在绿盒，婴儿预期她伸向绿盒，伸向黄盒时看更久。</p>
<p>考试重点：早期 ToM 的非语言证据。</p>
</div>`
  },
  {
    topic: "Infant",
    term: "Xu & Denison (2009) ping-pong balls",
    termCn: "婴儿乒乓球概率实验",
    back: `<div class="en-side">
<p><em>Xu and Denison (2009)</em> showed that infants between <strong>8 and 11 months</strong> can already do <strong>sample-to-population statistical reasoning</strong> and, impressively, integrate it with theory of mind to distinguish random from selective sampling.</p>
<p>Babies saw a large box whose population was obviously skewed (for example 75% red balls and 25% white balls). The experimenter then "randomly" drew a small sample from the box. When the sample proportion was very different from the population — say mostly white when the box was mostly red — babies looked longer, a violation-of-expectation signature indicating they had a prior expectation about what a random sample should look like. The key control condition is what makes this a theory-of-mind story: if the experimenter visibly reached into her own pocket instead of the box, babies were not surprised by the unusual sample, because in that case the sample isn't supposed to reflect the box at all.</p>
<p>On the exam this is the go-to example that infant cognition combines statistical reasoning with theory of mind — babies aren't just pattern-matching, they're interpreting "she was sampling selectively."</p>
</div>
<div class="cn-side">
<p>Xu & Denison 2009 证明 8-11 个月婴儿能做样本-总体统计推理，还能结合 ToM 区分随机抽样和选择性抽样。</p>
<p>婴儿看到一个大箱（比如 75% 红 25% 白），实验者"随机"抽样。样本比例反常（大多白）时婴儿看更久。关键控制：如果实验者明显从口袋里抽，婴儿就不惊讶，因为那样的话样本本就不该反映箱内分布。</p>
<p>考试里这是"婴儿认知结合统计推理 + ToM"的代表案例。</p>
</div>`
  },
  {
    topic: "Infant",
    term: "Two kinds of baby cleverness",
    termCn: "婴儿聪明的两方面",
    back: `<div class="en-side">
<p>There are two distinct senses in which babies are cognitively impressive, and the course wants you to keep them separate. Babies are <strong>clever in what they know</strong> — they come equipped with or quickly acquire substantial core knowledge about intuitive physics, simple arithmetic, rudimentary theory of mind, and statistical reasoning. And babies are <strong>clever in how they learn</strong> — they have innate learning mechanisms, including Bayesian belief-updating and rational action choice, that let them extract structure from the environment very fast.</p>
<p>This distinction is the backbone of <strong>Spelke's hybrid position</strong>, which sits between pure nativism and pure empiricism. Her slogan is that <em>"babies are designed to learn."</em> You don't have to claim every specific fact a baby ends up knowing was genetically specified; you only have to claim that the learning machinery itself is part of innate human design.</p>
<p>On the exam this distinction is what lets you resolve the apparent tension between "so much knowledge is innate" and "so much is obviously learned from the environment" — both are true, and the learning mechanism is what makes the acquisition fast.</p>
</div>
<div class="cn-side">
<p>婴儿"聪明"有两个不同维度：一是 clever in what they know（知道得多：直觉物理、算术、基本 ToM、统计），二是 clever in how they learn（学得快：先天的 Bayesian 更新和理性行动选择等学习机制）。</p>
<p>Spelke 的 hybrid 立场（介于纯先天和纯经验之间）核心口号是"Babies are designed to learn"。不需要说每个具体事实都是基因指定的，只要说学习机制本身是先天的就够了。</p>
<p>考试里用这区分化解"先天 vs 学习"的张力。</p>
</div>`
  },

  // === Language ===
  {
    topic: "Language",
    term: "4 properties of language",
    termCn: "语言的 4 个关键属性",
    back: `<div class="en-side">
<p>Human language has four properties that Chomsky and the cognitivist tradition argue associationism cannot explain, while cognitivism can. You should know each property, its evidence, and why it breaks associationism.</p>
<p><strong>Stimulus independence</strong> is the fact that speech occurs outside the context in which it was originally learned — Nasser can talk about home in an airplane cabin, far from the situations where the relevant words were picked up, which is a problem for any theory that ties utterances to triggering stimuli. <strong>Novelty</strong> is the ability to produce and understand sentences no one has ever encountered before; the <em>Wug test</em> shows children correctly pluralize a made-up word "wug" as "wugs," and they also overgeneralize with errors like "goed" and "foots," both signs of rule use rather than memorization. <strong>Productivity</strong> is the unboundedness of possible sentences, which comes from <strong>recursion</strong> in phrase-structure grammar, where rules like S → NP VP and VP → V S allow structures to embed inside themselves indefinitely. <strong>Systematicity</strong> is the property that knowing one sentence implies knowing structurally related sentences — if you understand "onion is between mercury and crucible," you thereby understand "mercury is between onion and crucible."</p>
<p>On the exam you need to match each property to its evidence and explain why associationism, which only has sentence-context associations to work with, fails to account for any of them.</p>
</div>
<div class="cn-side">
<p>语言的 4 个关键属性，Chomsky 认为联想主义都解释不了，认知主义都能解释。</p>
<p>Stimulus independence：说话脱离原学习情境（Nasser 在机舱谈家）。Novelty：产生从未听过的句子（Wug test 儿童正确说 wugs，也会过度泛化"goed"）。Productivity：可能句子无限，来自 PSG 的 recursion（VP → V S 可嵌套）。Systematicity：懂一句就懂结构相关的另一句（洋葱-水银例）。</p>
<p>考试要把 4 属性配证据，并说明联想主义为什么都解释不了。</p>
</div>`
  },
  {
    topic: "Language",
    term: "Universal Grammar (UG)",
    termCn: "普遍语法",
    back: `<div class="en-side">
<p><strong>Universal Grammar</strong> is a term with a subtle definition that Exam 2 specifically tested. The correct definition is that UG is <em>the species-typical capacity and limits of the human mind to acquire and use language</em> — it refers both to the research topic ("what's innate in the language faculty?") and to the theory about that innate endowment.</p>
<p>The common misunderstanding, which Exam 2 marked as <em>False</em>, is that UG is "a set of grammatical rules every child is born knowing." That's not what Chomsky means. Children don't come into the world with the rules of English or Japanese already installed; they come into the world with the capacity to acquire whatever specific rules their environment offers. UG is the structure and constraints of that capacity, not a pre-loaded rulebook.</p>
<p>On the exam, when you see an answer choice that describes UG as a fixed list of rules, that's the trap. The right answer is the one about <em>capacity and limits</em>.</p>
</div>
<div class="cn-side">
<p>UG 有个陷阱定义，Exam 2 专门考过。正确定义是：UG 是物种典型的语言习得和使用的能力与限度，既指研究主题（语言里什么是先天的），也指这个先天能力的理论。</p>
<p>常见误解是"一套每个孩子生来就知道的语法规则"，Exam 2 判为 False。儿童生下来不是已经装好了英语或日语的规则，而是具备了获取任何语言规则的能力。UG 是这种能力的结构和限度，不是预装规则本。</p>
<p>考试里把 UG 描述成固定规则本的选项是陷阱，选"capacity and limits"的。</p>
</div>`
  },
  {
    topic: "Language",
    term: "Poverty of the Stimulus (Language)",
    termCn: "语言的刺激贫乏论证",
    back: `<div class="en-side">
<p>The canonical <strong>poverty of the stimulus</strong> case in language is the <strong>interrogative rule</strong>. When you form a yes/no question from a declarative like "the people you are staying with are very nice," a naive surface rule would be "move the first 'are' to the front," which would produce the ungrammatical "<em>are</em> the people you are staying with very nice." The correct rule is to <strong>move the main verb</strong> — specifically the auxiliary of the main VP — not the first auxiliary that happens to appear in the sentence. This is a structure-dependent rule: it requires parsing the sentence into phrase structure and identifying the main clause, not just counting words linearly.</p>
<p>The POS argument is that children master this structure-dependent rule correctly, without ever being explicitly taught, and without the kind of negative evidence (someone correcting them when they use the surface rule) that would be needed to rule the surface rule out. The input is too impoverished to distinguish the two rules by learning, so children must come equipped with something — the innate UG — that leads them to structure-dependent rules in the first place.</p>
<p>On the exam this is the standard example of a language POS argument, and the rule itself is also a standard example of tacit knowledge.</p>
</div>
<div class="cn-side">
<p>语言里 POS 的经典案例是 interrogative rule。从陈述句"the people you are staying with are very nice"变问句时，表面规则"把第一个 are 提前"会得到错句，正确规则是"把主动词前移"——具体说是主 VP 的助动词，这需要解析出短语结构并识别主句，是一条 structure-dependent rule。</p>
<p>POS 论证：儿童正确掌握这条结构依赖规则，却没有明确教学，也没有"用表面规则时被纠正"这种 negative evidence。输入不足以通过学习区分两条规则，所以儿童必须带着先天 UG，才会一上来就走向结构依赖规则。</p>
<p>考试里这是语言 POS 的标准例子，规则本身也是 tacit knowledge 的标准例子。</p>
</div>`
  },
  {
    topic: "Language",
    term: "Nicaraguan Sign Language (NSL)",
    termCn: "尼加拉瓜手语",
    back: `<div class="en-side">
<p><em>Senghas et al. (2004)</em>, titled "Children creating core properties of language," documented a remarkable natural experiment in Nicaragua. When the country opened its first school for deaf children in the late 1970s, the students arrived with only home-invented gestures and no shared sign language, so they started building one together — and successive cohorts of younger children kept adding structure on top of what the earlier cohort had done.</p>
<p>The key finding concerns how manner and path of motion were expressed. The earliest <em>gesturers</em> used a single combined gesture to express both manner (say, rolling) and path (say, leftward). But <strong>Cohorts 2 and 3</strong> — the younger, later arrivals — started splitting these into <strong>sequential gestures</strong>, one for manner and then one for path. This is combinatoric patterning, a core property of natural language, emerging out of thin air within one generation of child learners.</p>
<p>On Exam 2 the question presented a Cohort-3 signer (Maria) describing rolling plus leftward motion, and the correct answer was B: she expresses manner and path sequentially. This study supports the claim that language-like structure is created by children rather than taught, which is a strong innateness argument.</p>
</div>
<div class="cn-side">
<p>Senghas 等 2004 年论文"Children creating core properties of language"记录了尼加拉瓜的一次自然实验。70 年代末该国第一所聋人学校开学时，孩子们只带着家里发明的手势，没有共同手语，便开始共同建构，年幼的 cohort 在前辈的基础上加结构。</p>
<p>关键发现在于 manner（方式，如滚动）和 path（路径，如向左）的表达。最早的 gesturers 用一个合成手势同时表达两者；Cohort 2 和 3 开始把它们拆成先 manner 后 path 的顺序手势，这是自然语言的组合性特征，在一代儿童学习者中自发涌现。</p>
<p>Exam 2 里 Cohort 3 的 Maria 描述"滚动 + 向左"，正确答案是 B（顺序分开）。这支持语言的结构是儿童创造而非被教的，是强有力的先天性论证。</p>
</div>`
  },
  {
    topic: "Language",
    term: "Broca's aphasia",
    termCn: "布洛卡失语症",
    back: `<div class="en-side">
<p><strong>Broca's aphasia</strong> is the language deficit that results from damage to <strong>Broca's area</strong>, located in the left frontal lobe and often called the "syntactic region." Patients with Broca's aphasia speak in a way that is very distinctive and consistent across cases.</p>
<p>Their speech is <strong>non-fluent</strong>, meaning slow and effortful, and <strong>agrammatical</strong>, meaning the syntactic structure breaks down — function words, inflections, and word order get lost — but meaning is largely <strong>preserved</strong>, so a listener can still tell what the patient is trying to say. The classic demonstration is the "Cookie Theft" picture description: a Broca's patient trying to describe a scene of a boy stealing cookies produces halting, grammatically impoverished speech that is nonetheless intelligible as a description of that scene.</p>
<p>On the exam Broca's pairs with Wernicke's aphasia in the <strong>double dissociation</strong> that's taken as evidence for language as a modular, decomposable capacity: syntax can be damaged with semantics spared, or semantics damaged with syntax spared.</p>
</div>
<div class="cn-side">
<p>Broca 失语症由 Broca 区（左额叶"句法区"）损伤导致，症状跨病例很一致。</p>
<p>语言非流利（缓慢费力），无语法（功能词、词尾、词序丢失），但意义保留，听者能听出想表达什么。经典演示是 Cookie Theft 图描述：患者断断续续但能让人听懂。</p>
<p>考试里它和 Wernicke 组成双分离：句法坏语义好，或反过来，证明语言是模块化、可分解的能力。</p>
</div>`
  },
  {
    topic: "Language",
    term: "Wernicke's aphasia",
    termCn: "韦尼克失语症",
    back: `<div class="en-side">
<p><strong>Wernicke's aphasia</strong> results from damage to <strong>Wernicke's area</strong>, located in the left temporal lobe and often called the "semantic region." Its symptoms are almost the mirror image of Broca's, which is what makes the Broca/Wernicke pair so theoretically useful.</p>
<p>Wernicke's patients produce <strong>fluent</strong> speech with <strong>surface-correct grammar</strong> — the sentences flow at normal speed and have grammatical form — but the meaning is gone. The clinical term is <strong>"word salad"</strong>: you get streams of speech that sound like language and often have proper syntactic scaffolding but do not convey any coherent content.</p>
<p>Exam 2 presented a Mr. S who produced fluent but meaningless speech, and the correct answer was Wernicke's aphasia. Together with Broca's, this forms the classic <em>double dissociation</em> — syntactic impairment with spared meaning in Broca's, semantic impairment with spared syntax in Wernicke's — taken as evidence that language has neurally independent subsystems.</p>
</div>
<div class="cn-side">
<p>Wernicke 失语症由 Wernicke 区（左颞叶"语义区"）损伤导致，症状几乎与 Broca 相反，所以两者配对特别有理论价值。</p>
<p>语言流利、表面语法正常、但意义丢失，临床称为 word salad：语句有语言的样子和语法骨架，却不传达连贯内容。</p>
<p>Exam 2 里流利但无意义的 Mr. S 题答 Wernicke。和 Broca 一起构成经典双分离：句法损语义保 / 语义损句法保，证明语言子系统神经独立。</p>
</div>`
  },
  {
    topic: "Language",
    term: "Double Dissociation (语言)",
    termCn: "语言的双重分离",
    back: `<div class="en-side">
<p><strong>Double dissociation</strong> is a powerful piece of evidence in cognitive neuroscience: two patient groups show opposite patterns of impaired vs. intact function. If ability A is impaired with B spared in one group, and B impaired with A spared in another group, then A and B cannot be the same process — they have to be neurally independent.</p>
<p>In the language domain there are two textbook double dissociations. The first is <strong>Broca's</strong> (syntax impaired, semantics spared) vs. <strong>Wernicke's</strong> (semantics impaired, syntax spared), which decomposes language into at least two neurally separable subsystems. The second is <strong>Williams syndrome</strong> (low overall cognition but relatively spared language) vs. <strong>Down syndrome</strong> (IQ-matched individuals with especially impaired language), which dissociates language from general intelligence and supports the claim that language is a distinct cognitive capacity rather than a byproduct of overall smarts.</p>
<p>On the exam the upshot is that double dissociation supports language as an independent computational capacity — in other words, it supports a modularity view of language.</p>
</div>
<div class="cn-side">
<p>双重分离是神经科学的强证据：两组患者显示相反的损伤模式。如果 A 组 A 损 B 保，B 组 B 损 A 保，那 A 和 B 就不可能是同一过程，必须神经独立。</p>
<p>语言领域两个经典双分离：Broca（句法损、语义保）vs Wernicke（语义损、句法保）把语言拆成至少两个子系统；Williams 综合征（总体认知低但语言相对好）vs Down 综合征（IQ 匹配但语言特别差）把语言和一般智力分开。</p>
<p>考试结论：双分离支持语言是独立计算能力（语言模块性）。</p>
</div>`
  },
  {
    topic: "Language",
    term: "Hickok et al. (2002) sign language",
    termCn: "手语脑损伤研究",
    back: `<div class="en-side">
<p><em>Hickok et al. (2002)</em> studied deaf signers who had suffered brain damage and found that they showed Broca's-type and Wernicke's-type aphasias in patterns <strong>identical</strong> to those of hearing speakers. A signer with a Broca's lesion produces non-fluent, agrammatical signing with preserved meaning; a signer with a Wernicke's lesion produces fluent, grammatically-shaped but meaningless signing — the same double dissociation, just in the visual-manual modality instead of the auditory-oral one.</p>
<p>The theoretical punchline is that Broca's and Wernicke's areas are not tied to a specific sensory or motor modality. They are not about sound as such, or about vision as such. They process <em>abstract linguistic structure</em>, so whether the language is spoken or signed is incidental to the computational job these regions do.</p>
<p>On the exam this is the evidence that the language module is amodal — modularity at the level of linguistic computation, not at the level of the input channel.</p>
</div>
<div class="cn-side">
<p>Hickok 等 2002 研究脑损伤的失聪手语者，发现 Broca 型和 Wernicke 型失语模式和听人说话者完全一致。Broca 区损的手语者非流利无语法但意义保留，Wernicke 区损的手语者流利有语法形式但无意义。</p>
<p>理论结论：Broca 和 Wernicke 区不绑定具体感觉/运动通道，不是关于声音或视觉本身，而是处理抽象语言结构，语言是口语还是手语只是外在载体。</p>
<p>考试里这是语言模块跨感觉通道（amodal）的证据。</p>
</div>`
  },
  {
    topic: "Language",
    term: "Cognitivism vs Associationism",
    termCn: "认知主义 vs 联想主义",
    back: `<div class="en-side">
<p>The language unit is structured around the Chomsky-vs-Skinner debate. In 1957 Skinner published <em>Verbal Behavior</em>, arguing for an associationist account of language, and in 1959 Chomsky's review of that book was a direct attack on the associationist program, widely regarded as a devastating one.</p>
<p><strong>Associationism</strong> (Skinner) holds that what's in the head is a set of sentence-context associations, and that language is acquired through instrumental conditioning — behavior gets reinforced or extinguished. Its problem is that it fails on all four language properties: it can't explain stimulus-independent speech, can't produce novel sentences the speaker has never heard, can't handle the unbounded productivity that comes from recursion, and can't account for systematicity. <strong>Cognitivism</strong> (Chomsky) holds that what's in the head is an abstract, combinatorial <em>phrase-structure grammar</em>, with much of the structure innately specified as part of UG. Because PSG is generative and recursive, it handles all four properties naturally.</p>
<p>On the exam you should be able to map each framework onto each of the four properties and explain why associationism fails and PSG succeeds.</p>
</div>
<div class="cn-side">
<p>语言单元围绕 Chomsky-Skinner 之争展开。1957 年 Skinner 出版 Verbal Behavior 主张联想主义，1959 年 Chomsky 书评直接攻击联想主义，被广泛视作毁灭性。</p>
<p>联想主义（Skinner）认为脑内是句子-情境关联，通过操作性条件反射习得；问题是 4 个语言属性都解释不了。认知主义（Chomsky）认为脑内是抽象组合的 PSG，大部分结构由 UG 先天指定；PSG 是生成和递归的，4 属性都能处理。</p>
<p>考试让你把两框架配 4 属性，说明联想失败、PSG 成功的原因。</p>
</div>`
  },
  {
    topic: "Language",
    term: "Phrase Structure Grammar (PSG)",
    termCn: "短语结构语法",
    back: `<div class="en-side">
<p><strong>Phrase Structure Grammar</strong> is a system of rewrite rules that specifies how phrases can be built out of categories. The rules take the form "category X can be rewritten as sequence Y," and parsing a sentence means reversing this process to discover the tree of categories that produced it.</p>
<p>Typical rules from the course include S → NP VP (a sentence is a noun phrase followed by a verb phrase), NP → Det N (a noun phrase can be a determiner plus a noun), NP → NP PP (a noun phrase can be another noun phrase plus a prepositional phrase), VP → V NP (a verb phrase can be a verb plus a noun phrase), VP → VP PP (a verb phrase can be another verb phrase plus a prepositional phrase), and PP → P NP (a prepositional phrase is a preposition plus a noun phrase). What makes the system powerful is <strong>recursion</strong>: categories can branch back into themselves, for example VP → V S, which means a sentence can contain another sentence inside a verb phrase, and this in turn enables the unbounded <em>productivity</em> of language.</p>
<p>On the exam expect to draw parse trees, especially for ambiguous sentences where two different rule choices produce two different trees.</p>
</div>
<div class="cn-side">
<p>PSG 是一套重写规则，规则形式是"类别 X 可重写成序列 Y"，分析句子就是反向找出产生它的类别树。</p>
<p>课程里的典型规则：S → NP VP；NP → Det N；NP → NP PP；VP → V NP；VP → VP PP；PP → P NP。能力之源是 recursion：类别可以分支回自身（比如 VP → V S），句子里可以嵌套句子，这就带来了语言的无限 productivity。</p>
<p>考试让你画 parse tree，尤其是歧义句的两种规则选择对应两种树。</p>
</div>`
  },
  {
    topic: "Language",
    term: "Syntactic Ambiguity",
    termCn: "句法歧义",
    back: `<div class="en-side">
<p><strong>Syntactic ambiguity</strong> is when a single sentence has more than one possible structural parse, and each parse delivers a different meaning. The textbook example is "The bear attended the picnic with cake."</p>
<p>On the first reading, the cake is at the picnic — meaning the prepositional phrase "with cake" modifies "the picnic." This parse uses the rule <code>NP → NP PP</code>: [the picnic] combines with [with cake] to form a single noun phrase. On the second reading, the bear brought the cake — meaning "with cake" modifies "attended the picnic," specifying how the bear attended. This parse uses the rule <code>VP → VP PP</code>: [attended the picnic] combines with [with cake] to form a single verb phrase. The two readings hinge entirely on which rule attaches the PP.</p>
<p>On the exam you should be able to draw both parse trees and identify the rule that distinguishes them. Ambiguity is one of the core motivations for positing a PSG-style structural representation in the first place: any theory of language processing has to explain how the system copes with input that has multiple valid parses.</p>
</div>
<div class="cn-side">
<p>句法歧义指一个句子可有多种结构分析，每种对应不同意义。经典例子是"The bear attended the picnic with cake."</p>
<p>读法一：蛋糕在野餐上（"with cake"修饰"the picnic"），用规则 NP → NP PP，[the picnic] + [with cake] 合并成一个 NP。读法二：熊带来蛋糕（"with cake"修饰"attended the picnic"），用规则 VP → VP PP，[attended the picnic] + [with cake] 合并成一个 VP。差别全在 PP 挂在哪。</p>
<p>考试要画两棵 parse tree 并指出区分的规则。</p>
</div>`
  },

  // === Innateness ===
  {
    topic: "Innateness",
    term: "Samuels (2004) innateness definitions",
    termCn: "Innateness 的 5 种定义都有问题",
    back: `<div class="en-side">
<p><em>Samuels (2004)</em> argues that there is no consensus definition of "innate" in cognitive science, because every reasonable candidate definition runs into counterexamples. The takeaway is that when people use the word "innate," you should ask which of these five definitions they mean.</p>
<p>The first candidate is "present at birth," which fails because teeth and beards are clearly innate biological traits but are not present at birth — they develop later on a genetic schedule. The second is "product of internal causes," which fails because skin and digestion are also products of internal causes but are not typically what people mean by innate psychological capacities. The third is "product of the genes," which is too narrow because essentially every trait has some genetic contribution and some environmental input. The fourth is "high heritability," which fails because "the sky is blue" is a belief with very high heritability of acquisition (everyone learns it) but is obviously not innate. The fifth is "reliably develops across normal environments," which fails because lots of common-sense knowledge also reliably develops across normal environments without anyone calling it innate.</p>
<p>On the exam you should be able to pair each definition with its counterexample — especially "teeth and beards" as the counterexample to "present at birth."</p>
</div>
<div class="cn-side">
<p>Samuels 2004 指出"innate"没有统一定义，每个候选都有反例。听到"innate"要问对方用的是哪种定义。</p>
<p>5 种定义及其反例：(1)"出生时有"——牙和胡子反例；(2)"内因产物"——皮肤消化也是内因；(3)"基因产物"——太窄，每个特征都有基因+环境贡献；(4)"高遗传率"——"天蓝"习得高遗传但显然不先天；(5)"正常环境下稳定发展"——很多常识也稳定发展但不算先天。</p>
<p>考试给定义挑反例，尤其"牙/胡子"对应"出生时有"。</p>
</div>`
  },

  // === Computation ===
  {
    topic: "Computation",
    term: "Computational Theory of Mind (CTM)",
    termCn: "心智计算理论",
    back: `<div class="en-side">
<p>The <strong>Computational Theory of Mind</strong> is the big-picture claim that organizes much of cognitive science: <em>all mentation is computation</em>. Pinker's version is that "the mind is a system of organs of computation, designed by natural selection." Thinking, perceiving, deciding, feeling — all of it can be analyzed as algorithmic processing of information.</p>
<p>The major implication is that CTM partially dissolves the <strong>mind-body problem</strong>. Mental states on this view are algorithms executing on physical substrate, in the same way software runs on hardware: mental states are <em>implemented by</em> but not <em>identical to</em> physical states. Combined with Multiple Realizability, this lets you say what mental states are (computations) without tying them to any one kind of brain matter.</p>
<p>The limit is important too. CTM solves what Chalmers called the <em>easy problem</em> — explaining cognitive function. It does not solve the <em>hard problem</em>, which is why any of this computation is accompanied by subjective experience or qualia. On the exam be ready to state the claim, its implication for mind-body, and its limit.</p>
</div>
<div class="cn-side">
<p>CTM 是认知科学的大框架命题：所有思维都是计算。Pinker 说"心智是自然选择设计的一组计算器官"。思考、感知、决策、情绪都可以用算法的信息处理来分析。</p>
<p>主要意义是部分消解心身问题：心智状态是算法在物理基底上运行，类似软件在硬件上跑，心智状态被物理状态实现但不等同于物理状态。结合 multiple realizability，就可以说心智状态是什么（计算），而不把它绑定到某种特定脑组织。</p>
<p>限制同样重要：CTM 解决 Chalmers 的"easy problem"（解释功能），不解决"hard problem"（为什么计算伴随主观体验 qualia）。考试要会说命题、意义、限制。</p>
</div>`
  },
  {
    topic: "Computation",
    term: "Turing Machine 5 primitives",
    termCn: "图灵机的 5 个原始组件",
    back: `<div class="en-side">
<p>A <strong>Turing Machine</strong> is Turing's minimal formalization of what it means to compute. The machine is built from just five primitive components, and the whole point is that nothing more is needed to capture the notion of computation.</p>
<p>The first component is the <strong>tape</strong>, a one-dimensional strip divided into cells, each of which holds one symbol or is blank. The second is the <strong>set of symbols</strong>, a finite alphabet including blank. The third is the <strong>head</strong>, which sits on one cell at a time and can read the symbol there, write a new symbol there, and move one cell to the left or right. The fourth is the <strong>state memory</strong>, a finite set of internal states the machine can be in. The fifth is the <strong>rules</strong>, which have the form <em>"if in state S5 and you read X, then write Y, move left, and change to state Sn."</em> That's it — any computation can be carried out by some Turing Machine operating on these five primitives.</p>
<p>On the exam, list the five, and keep the Turing Machine distinct from the Universal Turing Machine (UTM), which additionally takes a program as input.</p>
</div>
<div class="cn-side">
<p>图灵机是 Turing 对"计算"的最小形式化，只用 5 个原始组件就够捕捉计算概念。</p>
<p>5 个组件：tape（一维纸带，每格一个符号或空）；symbols（有限字母表含空）；head（一次读写一格，可左右移）；state memory（有限内部状态集）；rules（"在 S5 状态读到 X 时，写 Y、左移、变 Sn"）。任何计算都可由某台图灵机完成。</p>
<p>考试列 5 个，并区别 UTM（后者额外接受程序作输入）。</p>
</div>`
  },
  {
    topic: "Computation",
    term: "Universal Turing Machine (UTM)",
    termCn: "通用图灵机",
    back: `<div class="en-side">
<p>A <strong>Universal Turing Machine</strong> is a Turing Machine that takes <em>both a program and an input</em> as its input, where the program specifies what computation to perform on the input. Because it can read and execute any program, a single UTM can simulate any other Turing Machine — it is <strong>maximally flexible</strong> (runs any algorithm) and <strong>maximally powerful</strong> (computes any computable function).</p>
<p>There is a crucial limit, however. There exist <strong>uncomputable functions</strong> — mappings from inputs to outputs that no physical machine can compute at all, no matter how much time and memory you give it. Exam 2 asked whether a UTM can compute "all conceivable input-output mappings," and the answer is <strong>no</strong>: a UTM is maximally powerful within the set of computable functions, but that set does not include every conceivable mapping.</p>
<p>So when someone says the UTM is the most powerful thing imaginable, that claim is bounded by computability. Within the computable, nothing beats it; outside the computable, nothing physical can go either.</p>
</div>
<div class="cn-side">
<p>通用图灵机是接受程序+输入的图灵机，程序告诉它对输入做什么。因为能读取执行任何程序，一台 UTM 能模拟任何其他图灵机，是 maximally flexible（跑任何算法）和 maximally powerful（算任何可计算函数）。</p>
<p>但有关键限制：存在 uncomputable functions，无论多少时间/内存都没物理机器能算。Exam 2 问 UTM 能不能算"所有可设想的输入输出映射"，答 No：UTM 在"可计算函数"集合内最强，但这个集合不含所有映射。</p>
<p>UTM 的"最强"是在可计算范围内；范围外的，任何物理机器也做不到。</p>
</div>`
  },
  {
    topic: "Computation",
    term: "Church-Turing Thesis",
    termCn: "Church-Turing 论题",
    back: `<div class="en-side">
<p>The <strong>Church-Turing Thesis</strong> is the claim that any function computable by <em>any</em> physical machine is also computable by <em>some</em> Turing Machine, and equivalently by a Universal Turing Machine. The thesis equates the informal notion of "what can be computed" with the formal notion of "what a Turing Machine can compute."</p>
<p>The Venn picture is useful. Imagine an outer ring containing all conceivable functions from inputs to outputs — this is an infinite set and includes lots of uncomputable functions. Inside that, there is a strictly smaller inner ring of functions <em>computable by some Turing Machine</em>, which is the same as <em>computable by a single Universal Turing Machine</em>, which is the same as <em>computable by any physical machine whatsoever</em>. The thesis says these three inner rings coincide.</p>
<p>On the exam the takeaway is that Turing Machines are maximally powerful within the space of the computable, and that no alternative model of computation — quantum, biological, whatever — gets you outside that inner ring.</p>
</div>
<div class="cn-side">
<p>Church-Turing 论题主张：任何物理机器可算的函数，都有某台图灵机可算（也等价于某台 UTM 可算）。它把"可计算"的直觉概念和"图灵机可算"的形式概念等同起来。</p>
<p>用 Venn 图：外圈是所有可设想函数（无限大，含不可计算函数）；内圈是某台 TM 可算 = 某台 UTM 可算 = 任何物理机器可算，三者重合。</p>
<p>考试结论：图灵机在"可计算"空间内最强，任何其他计算模型（量子、生物等）都走不出这个内圈。</p>
</div>`
  },
  {
    topic: "Computation",
    term: "Turing Test for intelligence",
    termCn: "图灵测试",
    back: `<div class="en-side">
<p>The <strong>Turing Test</strong> frames the question "is this machine intelligent?" in terms of <strong>input-output equivalence</strong>. A judge chats by text with both a hidden human and a hidden machine; if the judge cannot reliably tell which is which, the machine counts as intelligent under this test. The test says nothing about whether the machine's internal procedure matches a human's — only that it produces human-like outputs for human-like inputs.</p>
<p>The argument is three steps: the person behind the screen is intelligent; the machine and the person are input-output equivalent; therefore the machine is intelligent. Whether you buy that depends on whether you think input-output equivalence is sufficient for intelligence, which is exactly the kind of question the Chinese Room thought experiment takes up.</p>
<p>The course's up-to-date evidence is <em>Jones & Bergen (2025)</em>, who reported that GPT-4.5 with a "persona" prompt passed a three-party Turing Test — a first. Bollard criticized this by pointing out that the persona prompt is essentially a cheat sheet telling the model how to look human. On the exam the Turing Test is the canonical illustration of input-output equivalence in action.</p>
</div>
<div class="cn-side">
<p>图灵测试把"这机器智能吗"重构为输入-输出等价问题。评委用文字分别和隐藏的人和机器聊，若评委无法可靠区分，机器就算智能。测试不关心机器内部程序是否像人，只看"像人输入进去，像人输出出来"。</p>
<p>论证三步：屏幕后的人智能；机器和人输入输出等价；所以机器智能。这个论证是否有效，取决于你是否承认"输入-输出等价足以构成智能"，中文房间思想实验就讨论这个。</p>
<p>最新证据是 Jones & Bergen 2025，GPT-4.5 加 persona prompt 通过三方 Turing Test（首次）。Bollard 批评：persona prompt 本质是告诉模型怎么装人的 cheat sheet。考试里是输入输出等价的经典演示。</p>
</div>`
  },

  // === Emotions ===
  {
    topic: "Emotions",
    term: "Affect Programs",
    termCn: "情感程序",
    back: `<div class="en-side">
<p><strong>Affect programs</strong> are a computational account of what emotions are: special-purpose programs that the mind runs in response to certain kinds of situations. The format is "if the situation is of type X, then do Y," which makes emotions look algorithmically similar to the rest of cognition — just with different inputs and different outputs.</p>
<p>An affect program has two components. The first is <strong>appraisal</strong>, which evaluates how the current situation matches the agent's goals and priorities — is this threatening? helpful? disgusting? — and this is what triggers the program. The second is the <strong>effector program</strong>, which produces the characteristic package of cognitive, physiological, motoric, and experiential changes, together with action tendencies (flight, fight, approach, avoid). Fear, for example, appraises threat and then triggers heart-rate increase, attention narrowing, a specific facial expression, and the urge to escape.</p>
<p>On the exam the important point is that this is how the <em>Computational Theory of Mind</em> accommodates emotion — at least in part, by treating emotions as affect programs rather than as some separate noncognitive category.</p>
</div>
<div class="cn-side">
<p>情感程序把情绪看作心智运行的特殊用途程序，格式是"若情境为 X 类，则做 Y"，让情绪在算法上和其他认知同构，只是输入输出不同。</p>
<p>两个组件：appraisal 评估当前情境与目标/优先级的匹配（威胁？有利？恶心？），触发程序；effector program 产出特征性的认知、生理、运动、体验变化加行动倾向（逃、战、靠近、回避）。比如恐惧先评估威胁，再触发心跳加快、注意收窄、特定面部表情、逃跑冲动。</p>
<p>考试重点：这是 CTM 至少部分容纳情绪的方式，把情绪当程序而不是另一类非认知东西。</p>
</div>`
  },
  {
    topic: "Emotions",
    term: "4 Takes on Emotion",
    termCn: "情绪理论的 4 个版本",
    back: `<div class="en-side">
<p>The course walks through four successive theories of emotion, each fixing a problem with the previous one. <strong>Take 1 (James-Lange)</strong> says stimulus causes a body reaction, we perceive the body reaction, and the feeling comes from perceiving the body. It fails because the body is too slow to explain rapid emotional responses and because many emotions share the same physiology, so body states alone can't discriminate them. <strong>Take 2 (Schachter-Singer)</strong> adds a cognitive step: stimulus causes body reaction plus a conscious interpretation of that reaction, and feeling is the combination. <em>Dutton and Aron's</em> bridge study supports this with misattribution of arousal. It fails because it requires emotion to be fully conscious, which doesn't match cases where emotions operate below awareness.</p>
<p><strong>Take 3 (Standard Appraisal)</strong> puts cognition first: stimulus triggers conscious appraisal, which runs an effector program producing body and feeling. <em>Lazarus's</em> film studies support the role of cognitive framing. It fails because it leans too heavily on self-report and cannot explain the familiar experience "I know I shouldn't be afraid, but I am" — where appraisal and feeling disagree. <strong>Take 4</strong> is the accepted view, LeDoux's dual-pathway account, which resolves Take 3's problem by giving emotion two routes that can disagree.</p>
<p>On the exam, match each Take to one strength and one failure.</p>
</div>
<div class="cn-side">
<p>情绪理论 4 版演进，每版修前版问题。</p>
<p>Take 1 James-Lange：刺激引发身体反应，感知身体反应后产生感受。失败因身体太慢，且情绪共享生理。Take 2 Schachter-Singer：加上"意识解释身体反应"这一步（Dutton & Aron 吊桥支持），失败因要求情绪全有意识。Take 3 Standard Appraisal：意识评估先行，再出 effector（Lazarus 电影支持），失败因过度依赖 self-report，也不能解释"知道不该怕但还是怕"。Take 4 LeDoux 双通路被接受，给情绪两条路，可不一致。</p>
<p>考试为每版匹配优缺点。</p>
</div>`
  },
  {
    topic: "Emotions",
    term: "LeDoux Low Road / High Road",
    termCn: "LeDoux 恐惧双通路",
    back: `<div class="en-side">
<p>LeDoux's dual-pathway model says fear processing has two parallel routes. The <strong>Low Road</strong> is fast and unconscious: the stimulus goes from the thalamus directly to the amygdala, which triggers the fear effector program. The <strong>High Road</strong> is slow and conscious: the stimulus goes from the thalamus up to the cortex for conscious interpretation, and then down to the amygdala, which triggers the same effector program. The two roads can agree or disagree.</p>
<p>A good example is a veteran who hears a car backfire. The Low Road triggers fear immediately, before the person can think. Moments later the High Road arrives at "that's just a car, not a gunshot" and calms things down — but the initial startle has already happened. This is why you can know rationally that something is safe and still feel afraid of it.</p>
<p>Crosscutting Q2 asks what feature is shared by the Low Road and by modular systems in general, and the answer is that both are <strong>fast, mandatory, and automatic</strong>. The Low Road is also what explains the phrase "I know I shouldn't be afraid but I am" — the two roads are simply delivering different answers.</p>
</div>
<div class="cn-side">
<p>LeDoux 双通路模型：恐惧处理走两条平行路径。Low Road 快、无意识，刺激从 thalamus 直接到 amygdala 触发恐惧 effector。High Road 慢、有意识，刺激从 thalamus 上到 cortex 做意识解释，再下到 amygdala 触发同一 effector。两路可一致可不一致。</p>
<p>退伍兵听到汽车回火：Low Road 在思考前就触发恐惧；High Road 随后得出"只是汽车不是枪声"来平复。但初始惊吓已经发生，所以理性知道安全却仍然害怕。</p>
<p>Crosscutting Q2 问 Low Road 和模块系统共同特征，答 fast + mandatory + automatic。Low Road 也解释"知道不该怕但还是怕"——两路答案不同。</p>
</div>`
  },
  {
    topic: "Emotions",
    term: "Amygdala and fear",
    termCn: "杏仁核与恐惧",
    back: `<div class="en-side">
<p>The <strong>amygdala</strong> sits in the medial temporal lobe, near the hippocampus and basal ganglia, and it is the key hub for fear. Lesion evidence is the strongest case: when the amygdala is damaged, <em>both</em> the Low Road and the High Road fail to activate the fear effector, and the deficit is <strong>selective</strong> to fear — other emotions like disgust, happiness, and sadness are spared.</p>
<p>Fear is often treated as the paradigm case of a modular emotion because it satisfies essentially all of Fodor's characteristic features. It is fast, mandatory, and domain-specific to threat. It is neurally discretely localized to the amygdala. And it is informationally encapsulated, which is why you can know perfectly well that the airplane is safe and still feel fear as it takes off — the fear module can't use that knowledge.</p>
<p>On the exam, amygdala-and-fear is the clearest case in the emotion unit of an emotion that behaves like a Fodorian module.</p>
</div>
<div class="cn-side">
<p>Amygdala 位于颞叶内侧，靠近海马和基底神经节，是恐惧的关键中枢。最强证据是损伤实验：amygdala 损伤后，Low Road 和 High Road 都无法激活恐惧 effector，且缺损选择性针对恐惧，其他情绪（厌恶、快乐、悲伤）保留。</p>
<p>恐惧是模块化情绪的典范，几乎满足 Fodor 所有特征：快、自动、只管威胁、神经定位于 amygdala、信息封装（知道飞机安全起飞时仍怕，因为恐惧模块用不到这知识）。</p>
<p>考试里是情绪单元中"像 Fodor 模块的情绪"最清楚的案例。</p>
</div>`
  },
  {
    topic: "Emotions",
    term: "Ekman's 6 basic emotions",
    termCn: "Ekman 的 6 种基本情绪",
    back: `<div class="en-side">
<p>Paul Ekman's cross-cultural studies in 1967 and 1971 argued for <strong>six basic emotions</strong>: <em>happiness, sadness, anger, fear, disgust, surprise</em>. Across very different cultures, people recognize the facial expressions associated with each of these six, which is strong evidence that these emotions are not cultural inventions but species-typical.</p>
<p>Darwin anticipated this, noting that certain emotional expressions appear to be instinctual and have homologues in other species — dogs bare their teeth in something that looks a lot like human anger. The Ekman result is invoked in the course as a universality argument for the innateness of emotion, parallel to the universality argument for language.</p>
<p>An open theoretical question is how higher-level emotions like love, pride, and contempt fit in — whether they are independent affect programs, mixtures of the basic six, or socially constructed. The course flags this as unresolved. On the exam, be ready to list the six and connect them to universality as innateness evidence.</p>
</div>
<div class="cn-side">
<p>Ekman 1967、1971 跨文化研究主张 6 种基本情绪：happiness、sadness、anger、fear、disgust、surprise。不同文化的人都能识别这些情绪的面部表情，有力证据说明它们不是文化发明而是物种典型的。</p>
<p>Darwin 早就指出某些情绪表达是本能的，在其他物种也有同源（狗龇牙像人愤怒）。Ekman 结果在课程里是情绪先天性的普遍性论证，和语言的普遍性论证并列。</p>
<p>高级情绪（爱、骄傲、轻蔑）怎么算仍是开放问题——独立 affect program？6 种混合？社会建构？考试让你列 6 种并连上普遍性论证。</p>
</div>`
  },
  {
    topic: "Emotions",
    term: "Dutton & Aron (1974) bridge study",
    termCn: "吊桥实验",
    back: `<div class="en-side">
<p><em>Dutton and Aron (1974)</em> is the classic experimental support for the Schachter-Singer Two-Factor Theory of emotion. The logic is that if emotion depends on interpreting bodily arousal, then you should be able to take arousal from one source and get the person to misattribute it to a different source.</p>
<p>In the study, men crossed either a <em>swaying high suspension bridge</em> (arousal condition) or a <em>stable low bridge</em> (no-arousal condition), and at the far end they met a female research assistant who asked a few survey questions and gave them her phone number for follow-up. The key result is that men who crossed the scary bridge called the assistant back significantly more often than men who crossed the safe bridge.</p>
<p>The interpretation is that the bodily arousal caused by the scary bridge — pounding heart, fast breathing — got <em>misattributed</em> as attraction to the assistant, essentially "my heart is racing, she must be attractive." Arousal plus conscious interpretation equals emotion, exactly what Schachter-Singer predicts. On the exam this is the go-to misattribution-of-arousal example.</p>
</div>
<div class="cn-side">
<p>Dutton & Aron 1974 是 Schachter-Singer 两因素理论的经典证据。逻辑：若情绪依赖对身体唤起的解释，那可以把一个来源的唤起误归因到另一个来源。</p>
<p>男性被试走摇晃的高吊桥（唤起组）或稳定的低桥（对照），桥尽头遇到女研究助理，她问几个问题并留电话。结果：吊桥组回电话比例显著更高。</p>
<p>解释：吊桥带来的生理唤起（心跳加快、呼吸急）被误归因成对助理的吸引，"我心跳这么快，她肯定有吸引力"。唤起 + 解释 = 情绪，正是 Schachter-Singer 预测。考试里是 misattribution of arousal 的标准例子。</p>
</div>`
  },

  // === Rationality ===
  {
    topic: "Rationality",
    term: "4 Takes on Rationality",
    termCn: "理性决策的 4 个版本",
    back: `<div class="en-side">
<p>The rationality unit walks through four successive accounts of what a rational agent should maximize, each one fixing a problem in the previous. <strong>Take 1</strong> says maximize <em>objective value</em> — just pick the option with the highest dollar amount. It fails because it can't handle probability: it has no way to compare a sure $5 with a 50% chance of $20.</p>
<p><strong>Take 2</strong> (Pascal 1654) says maximize <em>expected objective value</em>, computed as EV = Σ (value × probability). It handles probability, but it fails in two ways: it ignores diminishing marginal utility, so it says a sure $10M should be preferred 50-50 to a gamble for $20M even when most people obviously wouldn't take that gamble, and it treats non-monetary goods (health, relationships) as if they were cash. <strong>Take 3</strong> (Bernoulli) fixes one of these by replacing objective value with <em>expected subjective utility</em>, so rationality means maximizing how much <em>you</em> value outcomes. It still fails to handle delay — it treats $999 now and $1000 in a month as if they had the same utility.</p>
<p><strong>Take 4</strong>, the accepted account, adds discounting: maximize <em>long-term discounted expected utility</em>, where the discounted utility of "U at delay x" is U × γˣ. This is the formula you actually compute with. On the exam, name each Take's failure and identify Take 4 as the correct account.</p>
</div>
<div class="cn-side">
<p>理性决策 4 版演进，每版修前版问题。</p>
<p>Take 1 最大化客观价值：处理不了概率。Take 2 Pascal 1654 最大化期望客观价值 EV = Σ(value × prob)：处理概率，但忽略边际效用递减（确定 $10M vs 50% 获 $20M 大多数人选前者，但 EV 反），也当非货币商品是现金。Take 3 Bernoulli 用期望主观效用代替客观价值：修好边际，但处理不了延迟（$999 现在 = $1000 一月后？）。</p>
<p>Take 4 被接受：最大化长期贴现期望效用，delay x 时 U 值 = U × γˣ。考试里每版配失败，Take 4 是实际计算用的。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Diminishing Marginal Utility",
    termCn: "边际效用递减",
    back: `<div class="en-side">
<p><strong>Diminishing marginal utility</strong> is the principle that each additional unit of a good yields less additional utility than the previous unit. An extra dollar means a lot to someone who has nothing and much less to someone who already has a billion.</p>
<p>The course's Rashi example makes this concrete. Rashi gets 500 utiles from $10M and 650 utiles from $20M — not 1000, because the second $10M doesn't double her happiness. Given this utility function, she prefers a certain $10M (500 utiles) over a 50/50 gamble for $20M, whose expected utility is only 0.5 × 650 = 325 utiles. Objective EV says take the gamble; subjective EU says take the certainty; she takes the certainty.</p>
<p>Two conceptual points matter. First, utility is <em>not interpersonally comparable</em> — your 500 utiles and my 500 utiles don't mean the same thing, so utility only expresses one person's relative preferences. Second, increasing marginal utility is possible but rare (an early dose of a drug might do nothing while the right threshold dose works). On the exam this explains why Take 2 (objective expected value) fails.</p>
</div>
<div class="cn-side">
<p>边际效用递减：每多一单位商品带来的额外效用逐渐减少。给一无所有的人多一元意义很大，给亿万富翁多一元意义很小。</p>
<p>Rashi 例子：$10M 带来 500 utiles，$20M 带来 650 utiles（不是 1000，因为第二个 $10M 不翻倍）。所以她比较确定 $10M（500 utiles）和 50/50 赌 $20M（期望效用 0.5 × 650 = 325 utiles），选确定。客观 EV 说赌，主观 EU 说确定，她选确定。</p>
<p>两点：效用不可人际比较（你的 500 utiles 和我的不等值，只表达一个人的相对偏好）；边际递增可能但罕见。考试里解释 Take 2 失败。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Exponential Discounting",
    termCn: "指数贴现",
    back: `<div class="en-side">
<p>The <strong>exponential discounting</strong> formula is how Take 4 handles delayed rewards.</p>
<span class='formula'>Discounted utility of "U at delay x" = U × γˣ</span>
<p>Here γ is the <em>discount factor</em>, a number between 0 and 1 that says how much of a reward's value survives one time unit of delay, and x is the number of time units you're waiting. A γ close to 1 means you're patient; a γ close to 0 means you steeply discount the future.</p>
<p>Three worked examples. Natalia has γ = 0.95 per week; for her, 100 utiles in 2 weeks is worth 100 × 0.95² = 90.25 utiles today. Ricky has γ = 0.50 per year, which is very impatient; for him, 100 utiles in 3 years is worth only 100 × 0.5³ = 12.5 utiles today. Someone with γ = 0.70 per month facing a choice between $999 now (999 utiles, using $1 = 1 utile) and $1000 in one month (1000 × 0.7 = 700 utiles today) takes the money now, because now beats discounted future.</p>
<p>On the exam this is a plug-and-chug problem, and it explains why Take 3 failed: Take 3 had no way to incorporate delay into the utility.</p>
</div>
<div class="cn-side">
<p>指数贴现公式是 Take 4 处理延迟的方式：延迟 x 时 U 的贴现效用 = U × γˣ。γ ∈ (0,1) 是贴现因子，γ 接近 1 说明耐心，接近 0 说明陡峭贴现未来。</p>
<p>三例：Natalia γ=0.95/周，100 utiles 延 2 周现值 = 100 × 0.95² = 90.25。Ricky γ=0.5/年（很没耐心），100 utiles 延 3 年现值 = 100 × 0.5³ = 12.5。γ=0.7/月 的人比较$999 现在（999 utiles，设 $1=1 utile）和 $1000 一月后（现值 700），选现在。</p>
<p>考试代数计算，解释 Take 3 失败（没法把延迟纳入效用）。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Representativeness Heuristic",
    termCn: "代表性启发",
    back: `<div class="en-side">
<p>The <strong>representativeness heuristic</strong> is the tendency to judge how likely something is by how much it resembles a mental prototype, rather than by actually computing probabilities. People treat "typicality" as if it were evidence of frequency, which systematically misleads them when the prototype is vivid but statistically unrepresentative.</p>
<p>The canonical demonstration is <em>Kahneman and Tversky's Linda Problem (1982)</em>. Given a description of Linda as politically active and philosophically inclined, about 89% of subjects rated "Linda is a bank teller and a feminist" as more likely than "Linda is a bank teller." Mathematically this is impossible because the conjunction is a subset of the single claim, but the feminist-teller description <em>feels</em> more like Linda. This is called the <strong>conjunction fallacy</strong>, and it is the cleanest evidence that people substitute similarity for probability. The Engineer/Lawyer study shows the same heuristic through base-rate neglect: told the group has 30 engineers and 70 lawyers or vice versa, people ignore the base rate and estimate about 50% based on the personality description alone.</p>
<p>The heuristic also explains why a coin-flip sequence like HTHHH feels more probable than HHHHH even though both are equally likely — HTHHH resembles our mental prototype of a random sequence. The study guide's HHHHH vs HTHHH question and the Linda conjunction fallacy are the canonical prompts. Evolutionary psychologists note that frequency framing drops the Linda error from 89% to 22%.</p>
</div>
<div class="cn-side">
<p>代表性启发：按与心理原型的相似度判断概率，而不是真算概率。人们把"典型度"当作频率证据，当原型生动但统计不具代表性时就系统性出错。</p>
<p>经典是 Linda 问题（Kahneman & Tversky 1982）：给定 Linda 是政治活跃的哲学专业者，89% 认为"Linda 是银行出纳且活跃女权"比"Linda 是银行出纳"更可能。数学上不可能（合取是子集），但前者更像 Linda。这叫合取谬误。Engineer/Lawyer 实验显示基率忽略：无论基率是 30 工程师/70 律师还是反过来，人都按性格描述估约 50%。</p>
<p>HHHHH vs HTHHH 等概率但 HTHHH 更像"随机序列"的原型。频率表述把 Linda 错误从 89% 降到 22%。考试常考 HHHHH/HTHHH 和 Linda。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Availability Heuristic",
    termCn: "可用性启发",
    back: `<div class="en-side">
<p>The <strong>availability heuristic</strong> is the tendency to judge how frequent or likely something is by how easily examples of it come to mind. If examples pop up fast, you think the thing is common; if retrieval is slow, you think it's rare. This goes wrong whenever ease of retrieval doesn't actually track frequency.</p>
<p>The classic demonstration is the N-letter problem. Asked whether there are more English words starting with N or more with N in the third position, most people say "starts with N," because starts-with words are easy to generate. In fact third-position-N words are more common; the same pattern holds for K, L, R, and V. The study guide's version of this is words ending in "—ing" vs. words with "n" in the second-to-last position — people vastly overestimate the "—ing" count because they come to mind much more easily, even though the "—n—" words actually include all "—ing" words as a subset. A nice companion is the <em>assertiveness experiment</em>: Group 1 listed 6 assertive examples and Group 2 listed 12, and Group 2 — despite generating more examples — rated themselves as <em>less</em> assertive, because struggling to come up with 12 felt like evidence against being assertive.</p>
<p>On the exam the study-guide prompt is "—ing" vs "—n—," and the error source is ease of retrieval, not actual frequency.</p>
</div>
<div class="cn-side">
<p>可用性启发：按例子被想起的容易程度判断频率。例子容易想起就觉得常见，想起难就觉得罕见。当想起容易度和真实频率不一致时就出错。</p>
<p>经典 N 字母问题：问英文词 N 开头多还是第三位 N 多，大多答 N 开头（因为容易想），但实际第三位 N 更多。K、L、R、V 同理。课程版本是"—ing"结尾 vs 倒数第二位是"n"，人大幅高估"—ing"（虽然"—n—"实际是包含关系）。Assertiveness 实验：列 6 例组比列 12 例组觉得自己更 assertive，因为列 12 难，难 = 我不 assertive 的证据。</p>
<p>考试考"—ing" vs "—n—"，错因是想起容易度而非真实频率。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Affect Heuristic",
    termCn: "情感启发",
    back: `<div class="en-side">
<p>The <strong>affect heuristic</strong> is the tendency to make complex judgments by substituting a <em>gut emotional reaction</em> for the actual question being asked. Kahneman called this "the most important advance in the study of heuristics." The move is subtle because it's not obvious the person did it; they think they're answering the hard question, but their brain silently replaced it with an easier emotional one.</p>
<p>The Ford stock example from <em>Thinking, Fast and Slow</em> is a nice illustration. A CEO invests millions in Ford stock because he attended an auto show and liked the Ford cars there — he replaced "should I invest in Ford stock?" with "do I like Ford cars?" The happiness/dating study makes the substitution statistically visible: when subjects were asked about overall happiness first and dating life second, the correlation between the two was near zero, but when they were asked about dating first and happiness second, the correlation jumped to 0.66. Dating affect was substituted for the happiness judgment.</p>
<p>The worksheet connection is the <em>jazz-playing accountant</em> / Iowa Gambling debate about gut feelings. Kahneman labels affect-based judgments as irrational, but Neuroeconomists (Damasio) argue the gut feeling is actually vindicated by the Iowa Gambling Task, where healthy subjects' somatic markers track good vs. bad decks before they consciously know why. This is the exam tension to be ready for.</p>
</div>
<div class="cn-side">
<p>情感启发：用 gut 情感反应替代复杂判断。Kahneman 称之为"启发研究最重要进展"。它隐蔽在于当事人不知道自己这么做了，以为在答难题，实际上大脑悄悄换成了容易的情感题。</p>
<p>Ford 股票例（Thinking Fast and Slow）：CEO 参加车展喜欢 Ford 车，就投几百万 Ford 股票，把"该不该投 Ford 股"换成"我喜不喜欢 Ford 车"。Happiness/Dating 研究让替代可见：先问幸福后问约会，相关接近 0；先问约会后问幸福，相关 0.66，约会情感被替代为幸福判断。</p>
<p>Worksheet 连接：爵士会计 / Iowa Gambling 的 gut feelings 争议。Kahneman 说情感判断不理性；Damasio 说 gut feeling 其实被 Iowa Gambling Task 证实（健康人 SCR 能追踪好坏牌在意识之前）。考试考这个张力。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Framing Effects",
    termCn: "框架效应",
    back: `<div class="en-side">
<p><strong>Framing effects</strong> are cases where different wordings of the same decision problem, with mathematically identical consequences, lead to different choices. The upshot is that people aren't making decisions about outcomes as such — they're making decisions about how outcomes are described.</p>
<p>The <strong>Asian Disease Problem</strong> is the classic case. 600 people will die from a disease; choose a plan. In the <em>gain framing</em>, Plan A saves 200 people for sure (majority choice) and Plan B has a 1/3 chance of saving all 600 and a 2/3 chance of saving none. In the <em>loss framing</em>, Plan C means 400 people die for sure and Plan D has a 1/3 chance that nobody dies and a 2/3 chance that all 600 die (majority choice). A = C and B = D mathematically — they have the same expected outcomes — but framing flips which people prefer. The pattern: people are <strong>risk-averse in gains</strong> (take the sure saving) and <strong>risk-seeking in losses</strong> (gamble to avoid the sure death).</p>
<p>The study guide's classic case is the yogurt labeled <strong>80% fat free vs 20% fat</strong> — identical product, different frame, very different perceived healthiness. On the exam expect to identify that the same problem in different frames yielded different choices, and name the risk-averse/risk-seeking pattern.</p>
</div>
<div class="cn-side">
<p>框架效应：同一决策问题用不同表述（数学等价），导致不同选择。要点是人不是对结果本身做决定，而是对结果的描述做决定。</p>
<p>Asian Disease Problem 是经典：600 人将死于某病，选方案。Gain 框架下 A 确定救 200（多数选），B 有 1/3 救全部 2/3 全死。Loss 框架下 C 确定死 400，D 有 1/3 无人死 2/3 全死（多数选）。A=C、B=D 数学等价，但框架翻转了选择。规律：gains 里避险（取确定救），losses 里冒险（赌没人死）。</p>
<p>课程经典案例是 80% fat free vs 20% fat 酸奶：同产品不同框架，健康感受差别巨大。考试识别同题不同框架如何翻转选择，并命名 risk-averse / risk-seeking 规律。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Bat and ball problem",
    termCn: "球棒和球问题",
    back: `<div class="en-side">
<p>The <strong>bat-and-ball problem</strong> is Kahneman's standard demonstration that people don't actually use System 2 monitoring very often. The problem is: a bat and a ball together cost $1.10, and the bat costs $1 more than the ball; how much does the ball cost?</p>
<p>Almost everyone's intuitive answer is 10 cents, and almost everyone who says 10 cents is wrong. The correct answer is 5 cents, found by setting up the equation: bat = ball + $1, bat + ball = 2 × ball + $1 = $1.10, so ball = $0.05. Finding this requires a few seconds of System 2 deliberation — simple arithmetic, but you have to actually do it rather than take the first answer that pops up.</p>
<p>The embarrassing finding is that roughly 50% of Princeton and Michigan students answer incorrectly. Kahneman's takeaway is blunt: "We don't actually use System 2 monitoring very much." On the exam this is the textbook evidence that System 1's first answer often feels right and System 2 rarely steps in to check, even in people who clearly have the arithmetic skill.</p>
</div>
<div class="cn-side">
<p>球棒和球问题是 Kahneman 证明人很少用 System 2 监控的标准演示。题目：球棒和球共 $1.10，球棒比球贵 $1，球多少钱？</p>
<p>几乎所有人直觉答 $0.10，几乎都是错的。正解 $0.05：球棒 = 球 + $1，球棒 + 球 = 2·球 + $1 = $1.10，球 = $0.05。需要几秒 System 2 慢想，简单算术但要真动笔，不能取冒出来的第一答案。</p>
<p>尴尬之处：约 50% 普林斯顿和密歇根学生答错。Kahneman 结论很直接："我们其实不怎么用 System 2 监控"。考试里是 System 1 感觉对 / System 2 很少介入的教科书证据。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Cheater Detection Module",
    termCn: "骗子侦测模块",
    back: `<div class="en-side">
<p>Cosmides and Tooby proposed that humans have an innate, <strong>domain-specific cognitive module</strong> for detecting violators of social contracts. The argument is evolutionary: our ancestors had to police cooperation, and a dedicated module would help where general-purpose reasoning would be too slow.</p>
<p>The evidence is the <strong>Wason Selection Task</strong> in two versions. The <em>abstract version</em> gives you four cards showing X, M, 3, 7 and a rule: "if X on one side, then 3 on the other." You're asked which cards to flip to test the rule. Most people pick X and 3, but the correct answer is X and 7 — you need to check X to see if there's a 3 on the back, and you need to check 7 to make sure there's no X on the back (flipping 3 doesn't test the rule because the rule doesn't say "3 implies X"). Most people fail this abstract version. Now give the same logical structure as a <em>social contract</em>: "if you drink beer, you must be over 18," with cards for beer, coke, 23, and 17. Almost everyone gets this right immediately — flip the beer card and the 17 card.</p>
<p>Logically these problems are identical, so pure abstract reasoning cannot explain the performance gap; the social-contract version engages a dedicated module that the abstract version doesn't. On the exam this is another dual-process pair (Cheater Detection Module vs. central cognition) and is the evolutionary-psychology reply to Kahneman's heuristics-and-biases program.</p>
</div>
<div class="cn-side">
<p>Cosmides & Tooby 主张人类有先天的、领域专属的模块负责侦测社会契约违反者。进化论证：祖先需监督合作，专门模块比通用推理快。</p>
<p>证据是 Wason 选择任务两版本。抽象版：4 张牌 X/M/3/7，规则"若一面 X 则另一面 3"，大多数人选 X 和 3，正解是 X 和 7（翻 X 看背面有没有 3，翻 7 确认背面没 X；翻 3 不测规则）。大多数人抽象版做不对。社会契约版：同逻辑结构"喝啤酒必须 18 以上"，牌是 beer/coke/23/17，人人立即翻 beer + 17。</p>
<p>逻辑相同，纯抽象推理解释不了表现差异，社会契约版激活了专门模块。考试里这是又一对 dual process（Cheater Detection Module vs 中央推理），是进化心理学对 Kahneman 启发偏差程序的回应。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Evolutionary Psychology on Rationality",
    termCn: "进化心理学对理性的立场",
    back: `<div class="en-side">
<p>Cosmides and Tooby's <strong>evolutionary psychology</strong> research program argues that humans actually <em>are</em> rational — but only when questions are posed in formats our ancestors would have faced. The key claim is that the mind's reasoning modules evolved to handle <strong>frequencies</strong> (not abstract probabilities) and concrete <strong>social contracts</strong> (not abstract logical conditionals). If you ask the question in the right format, performance jumps.</p>
<p>The evidence is direct. The Linda conjunction fallacy drops from 89% in the standard probability framing to about 22% when the same question is asked in frequency format ("out of 100 women fitting this description, how many are bank tellers? how many are bank tellers and feminists?"). The Wason selection task is near-ceiling when the content is a social contract (drink-beer / over-18) rather than abstract symbols. In each case, the same logical structure produces very different error rates depending on framing.</p>
<p>On the exam, the study guide's Rationality Q4 asks how to make people rational, and the evolutionary-psych answer is to give them ecologically valid formats: frequencies and social contracts. Contrast this with Kahneman's answer (train System 2 to monitor) and the Neuroeconomics answer (experiential learning with feedback); all three camps answer the same question differently.</p>
</div>
<div class="cn-side">
<p>Cosmides & Tooby 的进化心理学主张人其实是理性的，但前提是问题以祖先遇到的格式提出。核心：心智推理模块演化成处理频率（不是抽象概率）和具体社会契约（不是抽象逻辑条件句）。格式对，表现就上来。</p>
<p>直接证据：Linda 合取谬误从标准概率框架的 89% 降到频率框架的约 22%（"100 个符合此描述的女性中有多少是银行出纳？多少是出纳且女权？"）。Wason 选择任务社会契约版本（喝啤酒/18 岁）接近满分。同一逻辑结构，表现因格式大不同。</p>
<p>考试 Rationality Q4 问怎么让人理性，进化心理学答"给生态有效格式：频率、社会契约"。对比 Kahneman 答"训练 System 2"和 Neuroeconomics 答"带反馈的体验学习"。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Policy",
    termCn: "策略",
    back: `<div class="en-side">
<p>In reinforcement learning, a <strong>policy</strong> (usually written π) is a function from states to actions — given the state the agent is in, the policy tells it which action to take. It is the output of all the learning that the agent has done so far.</p>
<p>In Q-learning specifically, the current best policy is to pick, at each state s, the action a that maximizes Q(s, a). That is, the policy is the argmax over the Q-values at the current state. This is how the learned values actually drive behavior: the agent doesn't just store Q-values, it uses them to decide.</p>
<p>The Wally-at-the-park example is a good concrete case. Suppose Q(park, truck) = 3 and Q(park, home) = −1. The policy at the park state says "run to truck" because 3 > −1. The study guide's rationality question "how does the agent choose an action at a given state?" is asking about this — the answer is that the agent follows its policy, which is the argmax over Q-values.</p>
</div>
<div class="cn-side">
<p>在强化学习里，策略 π 是状态到动作的函数：给定当前状态，策略告诉智能体选哪个动作。它是之前所有学习的产物。</p>
<p>在 Q-learning 里，当前最优策略是在每个状态 s 选 Q(s, a) 最大的 a，也就是 Q 值的 argmax。学到的 Q 值由此真正驱动行为：智能体不只是存 Q，还用它来决策。</p>
<p>Wally 公园例：Q(park, truck) = 3，Q(park, home) = −1，策略说"去 truck"因为 3 > −1。考试 Rationality 问"agent 如何在某状态选动作"，答案就是遵循 policy（Q 值 argmax）。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Q-Learning update rule",
    termCn: "Q-learning 更新规则",
    back: `<div class="en-side">
<p>The Q-learning update rule is how an agent improves its value estimates from experience.</p>
<span class='formula'>Q(s,a) ← Q(s,a) + α · [R(s') + γ · max Q(s',a') − Q(s,a)]</span>
<p>The bracketed term is the <strong>prediction error</strong>: the difference between what just happened (the immediate reward R(s') plus the discounted best possible future from the new state, γ · max Q(s', a')) and what the agent expected (the old Q(s, a)). The learning rate α controls how much of that error the agent incorporates. The discount factor γ is the same as in exponential discounting — it weights future reward relative to immediate reward. One important detail: if s' is a <strong>terminal state</strong>, there's no future to look forward to, so max Q(s', a') = 0 by convention.</p>
<p>The loop runs in three stages: first CHOOSE, where the agent picks an action with its current policy; then MOVE, where it transitions to a new state and collects the reward; then LEARN, where it applies the update rule. Under reasonable conditions Q-learning converges to the true value function. On the exam this is the temporal-difference algorithm that solves the credit-assignment problem by propagating value backward from reward to the actions that led there.</p>
</div>
<div class="cn-side">
<p>Q-learning 更新规则让 agent 从经验中改进价值估计。</p>
<span class='formula'>Q(s,a) ← Q(s,a) + α · [R(s') + γ · max Q(s',a') − Q(s,a)]</span>
<p>方括号里是 prediction error：实际发生（即时奖励 R(s') 加上新状态下最佳未来 γ · max Q(s', a')）减去原先预期（旧 Q(s, a)）。α 学习率控制吸收多少误差，γ 贴现因子和指数贴现里一样。关键细节：若 s' 是终止状态，按约定 max Q(s', a') = 0。</p>
<p>循环分三步走：先 CHOOSE，按当前策略选动作；再 MOVE，转移到新状态收奖励；最后 LEARN，应用更新规则。合理条件下收敛到真值函数。考试里这是 TD 学习，通过从奖励往回传播价值解决信用分配问题。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Wally's Walk 计算示例",
    termCn: "Q-learning 实战",
    back: `<div class="en-side">
<p>Here is the standard numerical Q-learning problem from the course, worked through step by step. Initial Q-values: Q(park, truck) = 3, Q(park, home) = −1, Q(truck, ice-cream) = 5, Q(truck, swim) = 8. Parameters γ = 0.7, α = 0.8.</p>
<p>Iteration 1: At the park state Wally follows his policy and picks "run to truck" because 3 > −1. He arrives at the truck with reward R = 4. At the truck state he picks "swim" because 8 > 5, arrives at water with reward R = −5 (terminal). Now update Q(park, truck). The prediction error is [4 + 0.7 × 8] − 3 = 11.6 − 3 = <strong>6.6</strong>. So Q(park, truck) becomes 3 + 0.8 × 6.6 = <strong>8.28</strong>. Next update Q(truck, swim). Because water is terminal, max Q = 0. Prediction error is [−5 + 0] − 8 = <strong>−13</strong>, so Q(truck, swim) becomes 8 + 0.8 × (−13) = <strong>−2.4</strong>.</p>
<p>On the exam this is the prototype numerical Q-update question, and the detail to not screw up is the terminal-state rule: at a terminal state max Q over next actions is zero, not some other initial Q-value.</p>
</div>
<div class="cn-side">
<p>课程标准数值题，一步一步做。初始 Q 值：Q(park, truck) = 3，Q(park, home) = −1，Q(truck, ice-cream) = 5，Q(truck, swim) = 8。参数 γ = 0.7，α = 0.8。</p>
<p>第 1 轮：Wally 在 park 按策略选"跑 truck"（3 > −1），到 truck 得奖励 R = 4。在 truck 选"swim"（8 > 5），到水边得奖励 R = −5（终止）。更新 Q(park, truck)：pred_err = [4 + 0.7 × 8] − 3 = 6.6，Q = 3 + 0.8 × 6.6 = 8.28。更新 Q(truck, swim)：水边终止，max Q = 0，pred_err = [−5 + 0] − 8 = −13，Q = 8 + 0.8 × (−13) = −2.4。</p>
<p>考试注意：终止状态的 max Q = 0，别用原始 Q。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "RL brain regions",
    termCn: "强化学习的脑区三元组",
    back: `<div class="en-side">
<p>The physical-level answer for the Q-learning algorithm in the brain is a trio of regions, each mapping onto a specific term in the Q-update rule.</p>
<p>The <strong>striatum</strong>, part of the basal ganglia, encodes <em>reward magnitude</em>. <em>Knutson (2003)</em> did an fMRI study showing that $0, $0.20, $1, and $5 rewards produce a graded BOLD signal in the striatum — bigger rewards, bigger activation. The <strong>VTA</strong> (ventral tegmental area in the midbrain) contains dopamine neurons that encode the <em>prediction error</em> — the bracketed term in the Q-update. When a reward is larger than expected, VTA dopamine neurons burst; when smaller, they are suppressed; when exactly as expected, they show no change. The <strong>vmPFC</strong> (ventromedial prefrontal cortex) encodes the <em>Q-values</em> themselves — expected future reward associated with states and actions.</p>
<p>On the exam this is the Marr-level physical answer for the RL algorithm: each region corresponds to a specific component of the Q-learning update. Striatum handles the R term, VTA handles the prediction-error bracket, vmPFC handles the Q values.</p>
</div>
<div class="cn-side">
<p>Q-learning 算法在脑中的物理层答案是三个脑区，各对应 Q 更新规则中的一项。</p>
<p>Striatum（基底神经节的一部分）编码奖励大小，Knutson 2003 fMRI 显示 $0/$0.20/$1/$5 的奖励在 striatum 产生渐变 BOLD。VTA（中脑腹侧被盖区）的多巴胺神经元编码预测误差（方括号里那项）：奖励大于预期时 burst，小于预期时被抑制，等于预期时无变化。vmPFC（腹内侧前额叶）编码 Q 值本身——状态-动作的期望未来奖励。</p>
<p>考试里这是 RL 算法的 Marr 物理层答案：各脑区对应 Q 更新的具体组件。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "VTA prediction error",
    termCn: "VTA 预测误差实验",
    back: `<div class="en-side">
<p>The evidence that <strong>VTA dopamine neurons encode prediction error</strong> comes from three experimental scenarios, each matching one pattern of the Q-learning prediction-error term. In Case 1, an animal is trained with consistent rewards until Q = 5; on day 11 the expected reward is delivered, prediction error = 5 − 5 = 0, and the VTA shows no burst. In Case 2, the animal has never been rewarded (Q = 0); on day 11 a reward is unexpectedly delivered, prediction error = 5 − 0 = +5, and VTA fires a large burst. In Case 3, the animal has been trained to expect a reward; on day 11 the reward is omitted, prediction error is negative, and VTA activity is suppressed below baseline.</p>
<p>This maps perfectly onto the bracketed term in Q-learning: when the expected reward is delivered the prediction error is zero, when the reward is better than expected there is a positive burst, and when it is worse than expected there is a negative suppression below baseline.</p>
<p>The worksheet Q1 hook is about Linda getting 3 candies instead of the usual 1. The "usual 1" describes a <em>low prior expectation</em>, and receiving 3 is <em>more than expected</em>, so VTA activation is <strong>higher</strong> in the unexpectedly-rewarded group compared to the usual-reward group. This is the direct application of the prediction-error story.</p>
</div>
<div class="cn-side">
<p>VTA 多巴胺神经元编码预测误差的证据来自三种情境，各对应 Q-learning 预测误差项的一种模式。情境 1：动物训练到稳定奖励 Q=5，第 11 天按预期给奖，误差 = 5 − 5 = 0，VTA 无 burst。情境 2：动物从未被奖励 Q=0，第 11 天意外给奖，误差 = +5，VTA 大 burst。情境 3：动物预期会得奖，第 11 天不给，误差为负，VTA 活动被抑制到基线以下。</p>
<p>完全对应方括号项：预期中 = 0，好于预期 = 正 burst，差于预期 = 负抑制。</p>
<p>Worksheet Q1：Linda 得 3 颗糖而不是往常 1 颗。"往常 1 颗"= 低先验期望，得 3 颗 = 超预期，所以意外奖励组 VTA 激活更高。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Iowa Gambling Task",
    termCn: "爱荷华赌博任务",
    back: `<div class="en-side">
<p>The <strong>Iowa Gambling Task</strong> (<em>Bechara et al. 1997</em>) is the classic experiment behind the Somatic Marker Hypothesis. Participants pick cards one at a time from four decks. Decks A and B are the <em>bad decks</em>: they give big wins but even bigger losses, so their expected value is negative. Decks C and D are the <em>good decks</em>: small wins, small losses, positive EV. The study measures <strong>skin conductance response (SCR)</strong>, a physiological index of arousal, while participants play.</p>
<p>Performance goes through four phases. In the Baseline phase (cards 0–10), subjects are guessing. In the Pre-hunch phase (cards 10–20), they still say they have no idea what's going on, but — remarkably — healthy subjects already show an anticipatory SCR when their hand hovers over a bad deck. In the Hunch phase (cards 20–80), subjects can say "I like C and D, I don't like A and B" but can't articulate why. In the Conceptual phase (cards 80–100) they can explain the rule.</p>
<p>The striking fact is that <strong>the body knows before the mind does</strong>: anticipatory SCR appears in the Pre-hunch phase, well before conscious recognition. The worksheet Q2 hook is Tom, who has vmPFC damage: he cannot form these gut feelings, so he keeps drawing from the bad decks even once he can verbally identify them. Kahneman would call Tom's behavior an irrational failure; Damasio and the Neuroeconomists call it a disorder of rationality itself — gut feelings are part of what rational decision-making runs on.</p>
</div>
<div class="cn-side">
<p>Iowa Gambling Task（Bechara 等 1997）是 Somatic Marker 假说背后的经典实验。受试从 4 副牌一张张抽：A、B 是坏牌（大赢更大输，EV 负），C、D 是好牌（小赢小输，EV 正）。测量 SCR（皮肤电导反应）。</p>
<p>表现 4 阶段：Baseline（0-10 张）瞎猜；Pre-hunch（10-20）仍说不知道规律，但健康受试手伸向坏牌时已有 anticipatory SCR；Hunch（20-80）说"喜欢 C/D 不喜欢 A/B"但说不出原因；Conceptual（80-100）能讲规则。</p>
<p>惊人点：身体比意识先知道，anticipatory SCR 在 Pre-hunch 就出现。Worksheet Q2：Tom 有 vmPFC 损伤，无法形成这种 gut feelings，所以即使嘴上说得出坏牌是哪两副，手还是去抓。Kahneman 说 Tom 不理性，Damasio/Neuroeconomics 说这是理性本身的障碍——gut feelings 是理性决策运行的材料。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Somatic Marker Hypothesis",
    termCn: "身体标记假说",
    back: `<div class="en-side">
<p>Damasio's <strong>Somatic Marker Hypothesis</strong>, based on the Iowa Gambling Task, is the claim that bodily emotional reactions correspond to Q-values — they are the physical form that value estimates take — and the <strong>vmPFC</strong> is the key neural substrate that ties these body signals to decision-making. The big-picture claim is that <em>rational decision-making depends on emotional and somatic signals</em>, not in spite of them.</p>
<p>The evidence is the vmPFC lesion pattern. Patients with vmPFC damage show no anticipatory SCR when reaching for bad decks; they continue drawing from bad decks at high rates; and crucially, even when they can <em>explain</em> which decks are bad, their behavior still drifts back to them. Knowing the rule isn't enough — without the gut feeling, the knowledge doesn't steer behavior.</p>
<p>On the exam this is the position of the Neuroeconomics camp: emotion is not the opposite of rationality, it's its necessary complement. This directly answers worksheet Q2 about Tom — Tom has vmPFC damage, he cannot form gut feelings, and where Kahneman would label his behavior irrational, the Neuroeconomists call it a disorder of rationality itself.</p>
</div>
<div class="cn-side">
<p>Damasio 基于 Iowa Gambling Task 提出 Somatic Marker Hypothesis：身体情绪反应对应 Q 值（价值估计的物理形式），vmPFC 是把身体信号和决策绑定的关键基底。大图：理性决策依赖情绪和躯体信号，而不是排斥它们。</p>
<p>证据是 vmPFC 损伤模式。损伤患者伸手向坏牌时没 anticipatory SCR，继续高频抽坏牌；关键是即使他们能讲出哪两副坏，行为还是飘回坏牌。知道规则不够，没有 gut feeling，知识就导不动行为。</p>
<p>考试里这是 Neuroeconomics 阵营立场：情绪不是理性的对立面，是必要互补。直接答 worksheet Q2：Tom 有 vmPFC 损伤无 gut feelings，Kahneman 说他不理性，Neuroeconomics 说这是理性本身的障碍。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Two physical implementations of Q-learning",
    termCn: "Q-learning 的两种物理实现",
    back: `<div class="en-side">
<p>Q-learning is a nice illustration of <strong>Multiple Realizability</strong> because the same algorithm runs on very different physical substrates. The two implementations the course emphasizes are the <strong>biological brain circuit</strong> — striatum encoding reward magnitude, VTA encoding prediction error, vmPFC encoding Q-values — and a <strong>silicon computer</strong> executing the Q-learning update rule in code. Both compute the same function (maximize long-term discounted reward) via the same algorithm (Q-learning), but through totally different hardware.</p>
<p>Within the brain there is a further distinction worth knowing. <strong>Model-free RL</strong> is the habitual, striatum-led version where the agent just updates Q-values based on experienced reward. <strong>Model-based RL</strong> is the goal-directed, vmPFC-led version where the agent maintains a model of the environment and plans with it. These are two different implementations of reward-maximization in the brain itself.</p>
<p>On the exam, the study guide's RL Q3 asks you to name two physical implementations of Q-learning, and the clean answer is brain vs. silicon — a textbook multiple-realizability illustration.</p>
</div>
<div class="cn-side">
<p>Q-learning 是 Multiple Realizability 的好例子：同一算法跑在非常不同的物理基底上。课程强调两种实现：生物脑回路（striatum 奖励大小、VTA 预测误差、vmPFC Q 值）和硅基计算机（代码执行 Q 更新规则）。二者计算同一 function（最大化长期贴现奖励）用同一 algorithm（Q-learning），但硬件完全不同。</p>
<p>脑内还有进一步区分：model-free RL 是习惯性的，由 striatum 主导，agent 根据经历奖励更新 Q；model-based RL 是目标导向的，由 vmPFC 主导，agent 维护环境模型并用它规划。这是脑内两种不同实现。</p>
<p>考试 RL Q3 问 Q-learning 两种物理实现，标准答案是脑 vs 硅，经典多重实现案例。</p>
</div>`
  },
  {
    topic: "Rationality",
    term: "Three camps on rationality",
    termCn: "理性问题的三大阵营",
    back: `<div class="en-side">
<p>There are three research programs with different answers to whether humans are rational, what makes us rational when we are, and how to improve rationality. You should know each camp's stance on all three questions.</p>
<p>The <strong>Heuristics and Biases</strong> camp (Kahneman) says we are often <em>not</em> rational; what makes us rational when we are is <strong>System 2</strong>, the slow deliberate system; and the way to improve is to recognize System 1 biases and correct them with System 2 monitoring. The <strong>Evolutionary Psychology</strong> camp (Cosmides and Tooby) says we are often <em>yes</em> rational, as long as the question is posed in an ecologically valid format; what makes us rational is <strong>System 1 plus domain-specific modules</strong> like the Cheater Detection Module; and the way to improve is to give people frequencies and social-contract formats instead of abstract probabilities and conditionals. The <strong>Neuroeconomics</strong> camp (Glimcher, Rustichini, Damasio) says yes we are rational, especially at the automatic / emotional level; what makes us rational is the <strong>emotional and reinforcement-learning systems</strong>, with vmPFC linking gut feelings to choice; and the way to improve is <em>experiential learning with feedback</em>, which is how the Iowa Gambling Task participants learn.</p>
<p>On the exam expect to map each camp's three-part stance onto the right positions. This is the big-picture chart for the entire rationality unit.</p>
</div>
<div class="cn-side">
<p>三个研究纲领对"人是否理性、什么让我们理性、怎么提升理性"给出不同答案。</p>
<p>Heuristics & Biases（Kahneman）：我们常不理性；理性来自 System 2；提升靠识别 System 1 偏差并用 System 2 纠正。Evolutionary Psychology（Cosmides & Tooby）：格式对了我们就理性；理性来自 System 1 + 领域专属模块（如 Cheater Detection）；提升靠给频率、社会契约格式。Neuroeconomics（Glimcher、Rustichini、Damasio）：我们理性，尤其在自动/情绪层；理性来自情绪和 RL 系统，vmPFC 绑定 gut feelings 与选择；提升靠带反馈的体验学习（Iowa Gambling 就是这样学的）。</p>
<p>考试让你把三阵营的三部分立场映射对。这是整个理性单元的大图。</p>
</div>`
  },

  // === Moral ===
  {
    topic: "Moral",
    term: "Trolley: Bystander vs Footbridge",
    termCn: "电车难题的两个版本",
    back: `<div class="en-side">
<p>The two canonical trolley cases have the <strong>same consequence</strong> (one person dies so five are saved) but produce <strong>opposite moral judgments</strong>, which is what makes them useful as a probe.</p>
<p>In the <strong>Bystander</strong> case, a runaway trolley is about to kill five workers; you can flip a switch to divert it onto a side track where it will kill one worker instead. A majority of people say this is <em>permissible</em>. In the <strong>Footbridge</strong> case, the same trolley is about to kill five; you can stop it by pushing a large man off a footbridge into its path, and his body will stop the trolley. A majority say this is <em>not permissible</em>. Same body count, opposite intuitions.</p>
<p>There are two major explanations. Greene says the difference is <strong>dual process</strong>: Footbridge triggers a personal alarm-bell emotional system, while Bystander engages an impersonal cost-benefit system. Mikhail says the difference is the <strong>Doctrine of Double Effect</strong>: in Bystander the death is a foreseen side effect of diverting the trolley, whereas in Footbridge the death is the means by which the trolley is stopped. On the exam you should be able to explain why the judgments diverge despite identical consequences.</p>
</div>
<div class="cn-side">
<p>电车难题两个经典版本结果相同（1 死 5 活），但判断相反。</p>
<p>Bystander：失控电车即将撞死 5 人，你可拉开关让它转到侧轨撞死 1 人。多数人认为可以。Footbridge：你可以把桥上一个大个子推下去，用他的身体挡住电车救 5 人。多数人认为不可以。同样死 1 活 5，直觉相反。</p>
<p>两种解释：Greene 说差别在 dual process，Footbridge 触发个人警铃情绪，Bystander 调用非个人成本效益。Mikhail 说差别在 Doctrine of Double Effect，Bystander 的死是转向电车的预见副作用，Footbridge 的死是阻止电车的手段。考试让你解释为什么同样结果判断相反。</p>
</div>`
  },
  {
    topic: "Moral",
    term: "Greene's dual-process account",
    termCn: "Greene 的双过程理论",
    back: `<div class="en-side">
<p>Joshua <em>Greene's (2001, Science)</em> fMRI study is the empirical backbone of his dual-process account of moral judgment. The scanner showed that <strong>Personal Force dilemmas</strong> like Footbridge light up emotional brain regions — they trigger an <em>alarm-bell emotional response</em> — while <strong>impersonal dilemmas</strong> like Bystander light up the <strong>DLPFC</strong> and other cognitive regions, consistent with cost-benefit deliberation.</p>
<p>The reaction-time data reinforce this. When people say "permissible" to a Personal dilemma (going against the alarm bell), they take markedly longer than in other conditions — the suggestion is that you have to override the emotional response with deliberate reasoning, and that takes time. Other conditions don't show the same RT cost. In <em>Greene (2009)</em> he refined what exactly triggers the alarm bell: the crucial feature is <em>personal force</em> — the agent directly applying muscular force to the victim — not mere physical contact.</p>
<p>The exam hook is Moral Q2: DLPFC involvement in the Bystander judgment is what Greene takes to make that judgment <em>more justified</em> than the Footbridge judgment. Greene implicitly endorses Utilitarianism: if the trustworthy judgment is the one produced by cost-benefit deliberation, then maximizing-good-outcomes is the trustworthy moral framework.</p>
</div>
<div class="cn-side">
<p>Joshua Greene 2001 年 Science fMRI 研究是其道德双过程理论的实证基础。扫描显示 Personal Force 困境（Footbridge）激活情绪脑区——触发警铃情绪反应；Impersonal 困境（Bystander）激活 DLPFC 等认知脑区，与成本效益思考一致。</p>
<p>反应时数据印证：对 Personal 困境回答"可以"（反警铃）比其他情形明显更慢——要用审慎推理压住情绪反应。其他情形没这时差。Greene 2009 把触发警铃的准确特征细化为 personal force（亲身施加肌肉力），不仅仅是物理接触。</p>
<p>Moral Q2：Bystander 判断涉及 DLPFC，Greene 据此认为它比 Footbridge 判断更 justified。Greene 隐含支持功利主义：若可信判断来自成本效益思考，那"最大化好结果"就是可信的道德框架。</p>
</div>`
  },
  {
    topic: "Moral",
    term: "Doctrine of Double Effect (DDE)",
    termCn: "双重效果原则",
    back: `<div class="en-side">
<p>The <strong>Doctrine of Double Effect</strong> is a principle from moral philosophy that Mikhail argues is part of our tacit moral grammar. Its formal statement: <em>it is permissible to cause a foreseen but unintended harm as a side effect of bringing about a good end, but it is not permissible to cause the same harm as a means to bringing about the same good end.</em></p>
<p>The doctor example makes the means/side-effect distinction concrete. Prescribing a drug to relieve arthritis, where the drug happens to also cause a rash, is permissible — the rash is a foreseen side effect of achieving pain relief. Prescribing a drug <em>because</em> the rash is what makes the drug work — the rash <em>is</em> the mechanism by which arthritis is relieved — is not permissible, because now you're using the harm as a means.</p>
<p>Applied to trolley: in <strong>Bystander</strong>, the one death is a <em>side effect</em> of turning the trolley to save the five — if that one person weren't on the side track, your plan would still work — so it's permissible. In <strong>Footbridge</strong>, the man's death is the <em>means</em> — if his body weren't going to stop the trolley, there'd be no point pushing him — so it's not permissible. On the exam this is Mikhail's paradigm of a sophisticated moral rule that operates as tacit knowledge.</p>
</div>
<div class="cn-side">
<p>Doctrine of Double Effect 是一条道德哲学原则，Mikhail 认为它是我们隐性道德语法的一部分。正式陈述：为达到好目的而预见但非故意地作为副作用造成伤害，是可允许的；为同一好目的而把同样的伤害作为手段造成，是不可允许的。</p>
<p>医生例子：开药治关节炎，药碰巧引起皮疹，可允许（皮疹是达到止痛的副作用）。开药是因为皮疹正好是药起效的机制（皮疹 = 治病的手段），不可允许，因为用伤害作手段。</p>
<p>用到电车：Bystander 里 1 死是转向电车救 5 的副作用（那人不在侧轨计划照样成功），可允许。Footbridge 里男人的死是手段（他的身体不挡就没必要推他），不可允许。考试里这是 Mikhail sophisticated rule 的典范，以 tacit knowledge 形式存在。</p>
</div>`
  },
  {
    topic: "Moral",
    term: "Mikhail's Action Tree / K-rule distance",
    termCn: "Mikhail 的行动树 / K 规则距离",
    back: `<div class="en-side">
<p>Mikhail formalizes the Doctrine of Double Effect into a computable rule using an <strong>action tree</strong>. He represents a moral dilemma as a tree whose nodes are intended ends and whose edges are actions taken to achieve those ends. The harm caused by the action sits somewhere on this tree, and the <em>tree distance</em> between the agent's direct action and the harm determines permissibility. The rule is: <strong>shorter distance means less permissible</strong>.</p>
<p>Applied to trolley, the contrast is clean. In <strong>Footbridge</strong>, the harm (man's death) <em>is</em> the means — distance 0 between the action and the harm — so the judgment is impermissible. In <strong>Bystander</strong>, the harm (one worker's death) is a side effect of turning the trolley — there's at least one intermediate node between "flip the switch" and the harm, so the distance is greater than 0 — so the judgment is permissible.</p>
<p>On the exam the study guide's Moral Q3 answer is that <strong>distance between means and harm</strong> corresponds to permissibility, with shorter distance being less permissible. This formalizes DDE into a computable rule that the hypothesized Universal Moral Grammar can apply without conscious reasoning.</p>
</div>
<div class="cn-side">
<p>Mikhail 用行动树把 DDE 形式化为可计算规则。把道德困境表示为一棵树，节点是意图目的，边是为达目的采取的动作。伤害挂在树上某处，当事人直接动作到伤害之间的"树距离"决定可允许性。规则：距离越短越不可允许。</p>
<p>用到电车对比清晰。Footbridge 里伤害（男人死）就是手段，距离 0，不可允许。Bystander 里伤害（1 工人死）是转向电车的副作用，动作（拉开关）和伤害之间至少有一个中间节点，距离 > 0，可允许。</p>
<p>考试 Moral Q3 答：手段与伤害的距离对应可允许性，距离短 = 不可允许。这把 DDE 形式化成 UMG 可无意识应用的可计算规则。</p>
</div>`
  },
  {
    topic: "Moral",
    term: "Personal Force (Greene's alarm-bell trigger)",
    termCn: "Personal Force（Greene 的警铃触发）",
    back: `<div class="en-side">
<p><em>Greene (2009)</em> refined his earlier "personal vs. impersonal" dilemma distinction into a sharper criterion: what triggers the alarm-bell emotional response is <strong>personal force</strong> — the agent directly applying <em>muscular or physical force</em> to the victim. Mere physical contact isn't enough, and force without contact (through intermediate tools or mechanisms) doesn't count either. This was the fix for cases where "personal" didn't draw the line cleanly.</p>
<p>The worksheet Q14 cases illustrate the refined criterion. Whacking the victim with a bat triggers the <strong>alarm bell</strong> because the agent directly applies muscular force. Pulling a lever that opens a trap door, or using a magnet to pull the victim off a platform, does <strong>not</strong> trigger the alarm bell because the causal chain runs through an intermediate mechanism, so there's no personal force. Tickling is an <strong>edge case</strong>: there is direct force but it's not harmful, so intuitions split.</p>
<p>On the exam this replaces the cruder "is there physical contact?" criterion and is the current explanation for why Footbridge feels morally different from Bystander.</p>
</div>
<div class="cn-side">
<p>Greene 2009 把早期"personal vs impersonal"困境区分细化为更精准标准：触发警铃情绪反应的是 personal force——当事人直接对受害者施加肌肉/物理力。单纯物理接触不够，用中间工具/机制的力也不算。这是为了修好"personal"划不清的案例。</p>
<p>Worksheet Q14 案例：用球棒打受害者触发警铃（直接施加肌肉力）；拉开关打开活板门、用磁铁把受害者吸下平台都不触发警铃（因果链经过中间机制，没有 personal force）。挠痒是边缘：有直接施力但不伤害，直觉分裂。</p>
<p>考试里这取代了粗糙的"有无物理接触"标准，是目前解释为什么 Footbridge 道德上和 Bystander 感觉不同。</p>
</div>`
  },
  {
    topic: "Moral",
    term: "Mikhail's Universal Moral Grammar",
    termCn: "Mikhail 的普遍道德语法",
    back: `<div class="en-side">
<p>Mikhail's <strong>Universal Moral Grammar</strong> is a deliberate parallel to Chomsky's Universal Grammar for language. The claim is that moral judgment is analogous to language — produced by an <em>inaccessible module</em> that applies rules we cannot state, the same way children apply the interrogative rule without being able to formulate it.</p>
<p>UMG has four characteristic features. Moral judgment is a <em>language-like process</em>; it's <em>complex and abstract</em>; it operates on <em>sophisticated principles</em> like the Doctrine of Double Effect; and it <em>possesses rational justification</em>, meaning the output is not just an emotional reflex but a defensible moral claim. The supporting argument is poverty-of-moral-stimulus: children develop sophisticated moral judgments from sparse moral input, just as they develop grammar from sparse linguistic input, so something must be innate.</p>
<p>The exam contrast with Greene is sharp. Where Greene says the fast process in moral judgment is <em>simple, primitive, and unjustified</em> — just an alarm bell — Mikhail says the fast process is <em>complex, sophisticated, and justified</em> — the output of a grammar-like system that deserves to be taken seriously.</p>
</div>
<div class="cn-side">
<p>Mikhail 的 Universal Moral Grammar 刻意和 Chomsky 的 UG 并列。主张道德判断类比语言——由一个 inaccessible 模块产生，应用我们讲不出来的规则，就像儿童会用 interrogative rule 却讲不出来。</p>
<p>UMG 四个典型特征：类似语言的过程；复杂抽象；基于 sophisticated 原则如 DDE；具有 rational justification（产出不是情绪反射，而是可辩护的道德主张）。支持论证是道德 POS：儿童从稀疏道德输入中发展出复杂道德判断，像从稀疏语言输入中发展出语法一样，必有先天成分。</p>
<p>考试对比 Greene：Greene 说道德快过程 simple、primitive、不 justified，仅是警铃；Mikhail 说快过程 complex、sophisticated、justified，是类语法系统的产出，应被认真对待。</p>
</div>`
  },
  {
    topic: "Moral",
    term: "Greene vs Mikhail",
    termCn: "Greene 与 Mikhail 对比",
    back: `<div class="en-side">
<p>The Greene-vs-Mikhail contrast is the central comparison in the moral unit, and it spans descriptive and normative dimensions. Descriptively, Greene takes moral judgment to be a <strong>dual process</strong> — emotion plus reason — with the fast emotional process being <em>simple, primitive, and unjustified</em>. He identifies the physical level as emotional regions (alarm bell) for Footbridge-type cases versus DLPFC (cost-benefit) for Bystander-type cases. Normatively, Greene implicitly supports <strong>Utilitarianism</strong> and treats the Footbridge reaction as <em>not trustworthy</em> — it's just alarm-bell emotion.</p>
<p>Mikhail, by contrast, takes moral judgment to be the output of a single sophisticated <strong>UMG</strong>. The fast process for him is <em>language-like, complex, and justified</em>. He doesn't specify a physical-level story. Normatively, he treats DDE-type rules as trustworthy and the Footbridge intuition (don't push) as the legitimate output of UMG, to be taken seriously.</p>
<p>On the exam expect to compare them across Marr's three levels plus the descriptive/normative split: process (dual vs single), characterization of the fast process (simple vs complex), physical level (specified vs not), and normative commitment (utilitarianism vs DDE-trust).</p>
</div>
<div class="cn-side">
<p>Greene vs Mikhail 是道德单元的核心对比，横跨描述和规范维度。</p>
<p>描述上，Greene 把道德判断看成 dual process（情绪 + 理性），快情绪过程 simple、primitive、unjustified；物理层 Footbridge 类对应情绪脑区（警铃），Bystander 类对应 DLPFC（成本效益）。规范上，Greene 隐含支持功利主义，认为 Footbridge 反应不可信（只是警铃）。</p>
<p>Mikhail 把道德判断看成单一 sophisticated UMG 的产出；快过程 language-like、complex、justified；物理层未指定。规范上他认为 DDE 类规则可信，Footbridge 直觉（别推）是 UMG 合法产出，应被认真对待。</p>
<p>考试跨 Marr 三层 + 描述/规范对比：过程（双 vs 单）、快过程性质（简单 vs 复杂）、物理层（有 vs 无）、规范承诺（功利 vs DDE 信任）。</p>
</div>`
  },
  {
    topic: "Moral",
    term: "vmPFC damage & moral judgment",
    termCn: "vmPFC 损伤与道德判断",
    back: `<div class="en-side">
<p><em>Koenigs et al. (2007, Nature)</em> found that patients with vmPFC damage give more "yes" (utilitarian, push-the-man) answers to Footbridge-type personal dilemmas than controls, and they show less emotional conflict while doing so. Read straight, this sounds like the "rational" answer Greene would endorse: these patients don't get caught up in the alarm-bell response.</p>
<p>But there's a paradox, and this is the interesting part. In the Iowa Gambling Task, <em>vmPFC damage</em> is associated with <em>impaired</em> decision-making — patients keep drawing from bad decks because they can't form the gut feelings that guide them away. So one context frames vmPFC damage as making people better decision-makers (utilitarian moral answer), and another context frames it as making them worse decision-makers (IGT). Are vmPFC patients more rational or just less emotional? The two results don't straightforwardly point the same way.</p>
<p>The professor flagged this as interesting but not directly tested. On the exam it's usable as an extra-credit point illustrating the tension between Greene's view (less emotion = better moral judgment) and the Neuroeconomics view (emotion is constitutive of rational decision-making).</p>
</div>
<div class="cn-side">
<p>Koenigs 等 2007 年 Nature 发现 vmPFC 损伤患者对 Footbridge 类个人困境给更多"是"（功利主义，推人）答案，且情绪冲突更少。直读起来像 Greene 会支持的"理性"答案：这些患者不被警铃牵绊。</p>
<p>但有悖论，有意思的地方在这。Iowa Gambling Task 里 vmPFC 损伤 = 决策障碍——患者一直抽坏牌因为形不成 gut feelings。一处把 vmPFC 损伤描绘成决策变好（功利道德答案），另一处描绘成决策变差（IGT）。vmPFC 患者是更理性还是只是更少情绪？两结果不明显指向同一方向。</p>
<p>老师说有意思但不直接考。可作加分点，体现 Greene 立场（少情绪 = 更好道德判断）和 Neuroeconomics 立场（情绪构成理性决策）的张力。</p>
</div>`
  },
  {
    topic: "Moral",
    term: "Descriptive vs Normative claims",
    termCn: "描述性 vs 规范性主张",
    back: `<div class="en-side">
<p>A <strong>descriptive</strong> claim is a factual statement about how things <em>are</em>; a <strong>normative</strong> claim is an evaluative statement about how things <em>ought</em> to be or what <em>should</em> count as good or bad. The distinction matters because an argument can establish descriptive facts without thereby establishing any normative conclusion.</p>
<p>The textbook-style illustration is "the movie runs for 178 minutes" (descriptive — just a fact about the movie) versus "the movie is too long" (normative — invokes a standard about what length is appropriate). One can be true and the other false independently of each other.</p>
<p>In Greene's moral work the distinction is crucial. His claims labeled D1 through D4 are <em>descriptive</em>: Footbridge judgments arise from alarm-bell emotions, Bystander judgments engage DLPFC cost-benefit, reaction times are longer when subjects override the alarm bell, and so on. These are factual claims about what the brain does. His claims labeled N1 and N2 are <em>normative</em>: the Footbridge judgment is worse, and utilitarian judgments are more trustworthy. These go beyond the facts to make evaluative commitments. On the exam, be ready to classify a given Greene claim as descriptive or normative.</p>
</div>
<div class="cn-side">
<p>描述性陈述讲事实（是如何），规范性陈述讲评价（应如何，什么算好坏）。区分重要，因为论证可以建立描述事实而不建立规范结论。</p>
<p>教科书例子："这电影时长 178 分钟"是描述；"这电影太长"是规范（涉及"合适时长"标准）。一个为真另一个可独立为真或假。</p>
<p>Greene 道德研究里区分关键。D1-D4 是描述性：Footbridge 判断来自警铃情绪、Bystander 判断激活 DLPFC 成本效益、反应时在反警铃时更长等，都是关于脑活动的事实。N1-N2 是规范性：Footbridge 判断更差、功利判断更可信，超出事实做评价承诺。考试给陈述分类 D 或 N。</p>
</div>`
  },

  // === Neuroanatomy ===
  {
    topic: "Brain",
    term: "Brain direction terms",
    termCn: "大脑方位术语",
    back: `<div class="en-side">
<p>Neuroanatomy uses a specific vocabulary for direction that you need to know for diagram labeling. The six direction pairs are: <strong>superior / dorsal</strong> for up or toward the back (top of the brain), <strong>inferior / ventral</strong> for down or toward the front-belly (bottom of the brain), <strong>anterior / rostral</strong> for toward the front, <strong>posterior / caudal</strong> for toward the back, <strong>medial</strong> for toward the midline, and <strong>lateral</strong> for away from the midline. The "dorsal/ventral" and "rostral/caudal" terms are borrowed from four-legged-animal anatomy and mapped onto the human brain's orientation.</p>
<p>On the cortical surface the four lobes are the <strong>frontal</strong> lobe (which contains the motor cortex and Broca's area), the <strong>parietal</strong> lobe, the <strong>occipital</strong> lobe (which contains V1), and the <strong>temporal</strong> lobe (which contains the primary auditory cortex, Wernicke's area, and the FFA). Below the cortex are the cerebellum at the back of the head and the brain stem, which contains the VTA.</p>
<p>On the exam expect to label a brain diagram with these direction terms and lobe boundaries.</p>
</div>
<div class="cn-side">
<p>神经解剖方位用固定词汇，脑图标注要会。6 对方位：superior/dorsal（上或后上，脑顶）、inferior/ventral（下或前腹，脑底）、anterior/rostral（前）、posterior/caudal（后）、medial（靠中线）、lateral（远离中线）。dorsal/ventral 和 rostral/caudal 从四足动物解剖借来，映射到人脑方向。</p>
<p>皮层表面 4 叶：frontal（含运动皮层、Broca）、parietal、occipital（含 V1）、temporal（含初级听觉皮层、Wernicke、FFA）。皮层下：后脑的小脑和脑干（含 VTA）。</p>
<p>考试用这些方位术语和脑叶边界标注脑图。</p>
</div>`
  },
  {
    topic: "Brain",
    term: "Language brain regions",
    termCn: "语言相关脑区",
    back: `<div class="en-side">
<p>Four regions are critical for language. The <strong>motor cortex</strong> at the top of the frontal lobe controls the muscles of speech; damage produces trouble coordinating mouth, lips, and tongue, which affects articulation but not linguistic competence. <strong>Broca's area</strong> in the left frontal lobe is often called the "syntactic region"; damage produces <em>Broca's aphasia</em>, with non-fluent, agrammatical but meaningful speech. <strong>Wernicke's area</strong> in the left temporal lobe is often called the "semantic region"; damage produces <em>Wernicke's aphasia</em>, with fluent, grammatically well-formed but meaningless speech ("word salad"). The <strong>primary auditory cortex</strong> in the temporal lobe processes sound; damage produces cortical deafness, where the ear works but the brain doesn't parse what it hears.</p>
<p>The double dissociation between Broca's and Wernicke's aphasias is the evidence that language decomposes into at least two neurally independent subsystems. Hickok et al.'s sign-language studies showed the same double dissociation in deaf signers, establishing that these regions process abstract linguistic structure rather than specific sensory modalities.</p>
<p>On the exam expect to match a damage location to a functional deficit on a labeled brain map.</p>
</div>
<div class="cn-side">
<p>4 个语言关键脑区。Motor cortex（额叶顶部）控制说话肌肉，损伤导致口舌唇协调困难，影响发音不影响语言能力。Broca 区（左额叶"句法区"）损伤导致 Broca 失语（非流利、无语法但有意义）。Wernicke 区（左颞叶"语义区"）损伤导致 Wernicke 失语（流利、语法正常但无意义，"word salad"）。初级听觉皮层（颞叶）处理声音，损伤导致皮层性耳聋（耳朵好使但脑解析不出）。</p>
<p>Broca vs Wernicke 双分离证明语言至少分成两个神经独立子系统。Hickok 手语研究显示失聪手语者有同样双分离，说明这些区域处理抽象语言结构而非具体感觉通道。</p>
<p>考试里脑图上把损伤位置配功能缺损。</p>
</div>`
  },
  {
    topic: "Brain",
    term: "Subcortical structures",
    termCn: "皮层下结构",
    back: `<div class="en-side">
<p>The key subcortical structures for this course are the <strong>thalamus</strong>, which relays sensory information from the senses up to the cortex and is the first stop on both of LeDoux's roads; the <strong>basal ganglia</strong>, which contain the <em>striatum</em> and handle reward, punishment, and motor control; the <strong>amygdala</strong>, which sits in the medial temporal lobe near the hippocampus and handles emotion, especially fear; the <strong>VTA</strong> (ventral tegmental area) in the brainstem / midbrain, whose dopamine neurons encode prediction error; and the <strong>vmPFC</strong>, which is technically part of the cortex but is often grouped with the reinforcement-learning circuit because it encodes Q-values.</p>
<p>Neuroanatomy Q2 asks you to name the three subcortical structures in LeDoux's High Road pathway, and the answer is <strong>thalamus, amygdala, and basal ganglia</strong>. The stimulus is relayed through the thalamus, the cortex does conscious interpretation (the "High" part), the amygdala triggers the fear effector program, and the basal ganglia serve as the motor and reward interface that commits the physical response.</p>
<p>On the exam expect questions that combine anatomical location with functional role.</p>
</div>
<div class="cn-side">
<p>本课关键皮层下结构：thalamus（丘脑）中继感觉信息到皮层，LeDoux 两条路的第一站；basal ganglia（基底神经节）含 striatum，处理奖励、惩罚、运动控制；amygdala（杏仁核）位于颞叶内侧靠海马，管情绪尤其恐惧；VTA（脑干/中脑腹侧被盖区）的多巴胺神经元编码预测误差；vmPFC 技术上属皮层但常归入 RL 回路因编码 Q 值。</p>
<p>Neuroanatomy Q2 问 LeDoux 高通路的 3 个皮层下结构：thalamus、amygdala、basal ganglia。刺激经 thalamus 中继，cortex 做有意识解释（"高"的部分），amygdala 触发恐惧 effector，basal ganglia 作运动奖励接口把身体反应落实。</p>
<p>考试把解剖位置和功能角色组合。</p>
</div>`
  },

  // === Key People ===
  {
    topic: "People",
    term: "David Marr",
    termCn: "戴维·马尔",
    back: `<div class="en-side">
<p><strong>David Marr</strong> was a British neuroscientist whose main contribution was the <strong>three-level framework</strong> for analyzing cognitive capacities: <em>functional</em>, <em>algorithmic</em>, and <em>physical</em>. The levels answer different questions about the same capacity — what problem, what procedure, what hardware — and you need all three to have a complete explanation.</p>
<p>Why this matters is that the entire course uses Marr's framework as its organizing skeleton. Perception is analyzed as inverse optics (function), Bayesian inference (algorithm), and V1/FFA (physical). Language is mapping sound to meaning (function), phrase-structure grammar (algorithm), and Broca/Wernicke (physical). Emotion, rationality, and moral judgment get the same treatment. Whenever the course asks you to explain a phenomenon, it wants you to identify what's happening at each of these three levels.</p>
<p>On the exam, given any phenomenon, be ready to state what it is functionally, algorithmically, and physically.</p>
</div>
<div class="cn-side">
<p>英国神经科学家，核心贡献是分析认知能力的三层框架：功能、算法、物理。三层回答关于同一能力的不同问题——什么问题、什么程序、什么硬件——完整解释三层缺一不可。</p>
<p>重要性在于整个课程用 Marr 框架作为组织骨架。感知分析为逆光学（功能）、Bayesian 推理（算法）、V1/FFA（物理）。语言是声音到意义（功能）、PSG（算法）、Broca/Wernicke（物理）。情绪、理性、道德判断同理。</p>
<p>考试给任何现象，都要能分功能、算法、物理三层讲。</p>
</div>`
  },
  {
    topic: "People",
    term: "Noam Chomsky",
    termCn: "乔姆斯基",
    back: `<div class="en-side">
<p><strong>Noam Chomsky</strong> is the founder of linguistic <strong>Cognitivism</strong> and the central figure in the language unit. His main contributions are <strong>Universal Grammar</strong> (the species-typical capacity and limits for language acquisition and use), <strong>phrase-structure grammar</strong> (the generative, recursive rule system that captures syntactic structure), and his <em>1959 review of Skinner's Verbal Behavior</em>, which is widely considered a devastating attack on behaviorist accounts of language.</p>
<p>His core claim is that language is innate. The four language properties — stimulus independence, novelty, productivity, and systematicity — cannot be explained by association because associationism has no access to abstract combinatorial structure. PSG handles all four naturally because it's rule-based and recursive, and UG provides the innate scaffolding children need to acquire those rules from sparse input.</p>
<p>On the exam Chomsky is associated with Cognitivism, UG, and PSG, and with the rejection of associationism.</p>
</div>
<div class="cn-side">
<p>Chomsky 是语言认知主义创始人，语言单元核心人物。主要贡献：Universal Grammar（物种典型的语言习得使用能力与限度）、PSG（生成、递归的规则系统捕捉句法结构）、1959 年对 Skinner《言语行为》的书评（被广泛视作对行为主义语言论的毁灭性批判）。</p>
<p>核心主张：语言先天。4 个语言属性（stimulus independence、novelty、productivity、systematicity）联想主义都解释不了（没有抽象组合结构）。PSG 靠规则和递归自然处理 4 属性，UG 提供儿童从稀疏输入中习得规则所需的先天脚手架。</p>
<p>考试联想：Chomsky = Cognitivism + UG + PSG + 拒斥联想主义。</p>
</div>`
  },
  {
    topic: "People",
    term: "Kahneman & Tversky",
    termCn: "卡尼曼和特沃斯基",
    back: `<div class="en-side">
<p><strong>Daniel Kahneman and Amos Tversky</strong> founded the <strong>Heuristics and Biases</strong> research program. Kahneman won the 2002 Nobel Prize in Economics for this work, and his book <em>Thinking, Fast and Slow</em> is the popular synthesis. Their core claim is that <em>"in making predictions and judgments under uncertainty, people do not appear to follow the calculus of chance or statistical theory. Instead, they rely on a limited number of heuristics which sometimes yield reasonable judgments and sometimes lead to severe and systematic errors."</em></p>
<p>The four heuristics they identified are the <strong>representativeness</strong> heuristic (judging probability by resemblance to a prototype, giving the Linda conjunction fallacy), the <strong>availability</strong> heuristic (judging frequency by ease of retrieval, giving the N-letter problem), the <strong>affect</strong> heuristic (substituting gut emotion for the real question, giving the Ford stock example), and <strong>framing</strong> effects (different wordings of mathematically identical problems yielding different choices, as in the Asian Disease Problem). They also introduced the <strong>System 1 / System 2</strong> distinction.</p>
<p>On the exam they are the central figures of the H&B camp in the three-camp rationality debate.</p>
</div>
<div class="cn-side">
<p>Kahneman 和 Tversky 创立了 Heuristics and Biases 研究纲领。Kahneman 2002 年获诺贝尔经济学奖，《思考快与慢》是通俗综合。核心主张：人在不确定下预测判断不用概率或统计理论，而用有限几个启发式，有时合理有时出系统性大错。</p>
<p>识别的 4 个启发式：代表性（按与原型相似度判概率，Linda 合取谬误）、可用性（按易想起程度判频率，N 字母题）、情感（用 gut 情绪替代真问题，Ford 股票例）、框架效应（同题不同表述不同选择，Asian Disease）。还引入 System 1/System 2 区分。</p>
<p>考试里他们是理性三阵营中 H&B 阵营的核心人物。</p>
</div>`
  },
  {
    topic: "People",
    term: "LeDoux",
    termCn: "勒杜克斯",
    back: `<div class="en-side">
<p><strong>Joseph LeDoux</strong> is the neuroscientist who proposed the dual-pathway model of fear processing. His <strong>Low Road / High Road</strong> framework has the Low Road going from thalamus directly to amygdala (fast, unconscious), while the High Road goes from thalamus up to cortex and then down to amygdala (slower, conscious). Both routes end at the amygdala and the fear effector program, but they can disagree along the way.</p>
<p>The model is important in the emotion unit because it explains the phenomenology of "I know I shouldn't be afraid but I am" — the Low Road has already fired before the High Road finishes its more considered interpretation. This is why fear behaves like a Fodorian module (fast, mandatory, encapsulated) even when conscious belief says there's nothing to fear.</p>
<p>On the exam LeDoux is the figure you associate with Take 4 of the emotion theories, opposing Standard Appraisal Theory because Standard Appraisal required emotion to be fully conscious and couldn't explain the Low Road's independence.</p>
</div>
<div class="cn-side">
<p>Joseph LeDoux 神经科学家，提出恐惧处理双通路模型。Low Road 从 thalamus 直接到 amygdala（快、无意识），High Road 从 thalamus 上到 cortex 再下到 amygdala（较慢、有意识）。两路都终于 amygdala 和恐惧 effector，但途中可不一致。</p>
<p>模型在情绪单元重要，因为它解释"知道不该怕但还是怕"的现象——Low Road 已经触发，High Road 的考虑性解释还没到。所以恐惧行为上像 Fodor 模块（快、自动、封装），即使意识信念说没什么可怕的。</p>
<p>考试里 LeDoux = 情绪理论 Take 4，反对 Standard Appraisal（Standard Appraisal 要求情绪全有意识，解释不了 Low Road 的独立性）。</p>
</div>`
  },
  {
    topic: "People",
    term: "Greene",
    termCn: "约书亚·格林",
    back: `<div class="en-side">
<p><strong>Joshua Greene</strong> is a Harvard psychologist who works on moral judgment. His landmark study is <em>Greene et al. (2001, Science)</em>, an fMRI experiment that showed Trolley and Footbridge dilemmas activate different brain regions: Footbridge lights up emotional areas, Bystander lights up the DLPFC and other cognitive regions.</p>
<p>His core claims are that moral judgment is <strong>dual process</strong> — a personal-force alarm-bell system plus an impersonal cost-benefit system — and that the alarm-bell emotions are <em>simple, primitive, and lacking rational justification</em>. Normatively he implicitly endorses <strong>Utilitarianism</strong>: if the reliable judgment comes from cost-benefit reasoning, then maximizing-good-outcomes is the morally serious framework. This is why he treats the Footbridge reaction as not trustworthy.</p>
<p>On the exam Greene is contrasted with Mikhail, especially along the axis of whether the fast moral process is simple/primitive (Greene) or sophisticated/grammar-like (Mikhail).</p>
</div>
<div class="cn-side">
<p>Joshua Greene 哈佛心理学家，研究道德判断。标志性研究是 Greene 等 2001 年 Science 的 fMRI 实验，显示电车和 Footbridge 困境激活不同脑区：Footbridge 激活情绪区，Bystander 激活 DLPFC 等认知区。</p>
<p>核心主张：道德判断是双过程——personal-force 警铃系统加 impersonal 成本效益系统；警铃情绪 simple、primitive、缺 rational justification。规范上隐含支持功利主义：若可靠判断来自成本效益推理，那最大化好结果就是严肃的道德框架。所以他认为 Footbridge 反应不可信。</p>
<p>考试里 Greene 和 Mikhail 对比，尤其在快道德过程是简单/原始（Greene）还是 sophisticated/类语法（Mikhail）这条轴上。</p>
</div>`
  },
  {
    topic: "People",
    term: "Mikhail",
    termCn: "米哈伊尔",
    back: `<div class="en-side">
<p><strong>John Mikhail</strong> is a legal scholar and cognitive scientist whose central contribution is <strong>Universal Moral Grammar</strong> (2007). He argues that moral judgment is language-like, produced by an <em>inaccessible module</em> that applies rules we cannot articulate, paralleling Chomsky's UG story for language.</p>
<p>Mikhail's core claims are that moral judgment operates on <em>sophisticated principles</em> such as the Doctrine of Double Effect, which he formalizes with the action-tree distance between an agent's action and the harm it causes. He runs a poverty-of-moral-stimulus argument, parallel to the linguistic POS argument, to conclude that UMG must be innate. And crucially, he argues that moral judgment <em>possesses rational justification</em>, contrary to Greene, because the output of UMG isn't just an emotional reflex — it's the application of a grammar-like rule system.</p>
<p>On the exam Mikhail stands opposite Greene: UMG, DDE, moral POS, and the claim that our fast moral intuitions are sophisticated and deserve to be taken seriously.</p>
</div>
<div class="cn-side">
<p>John Mikhail 是法学家兼认知科学家，核心贡献是 2007 年的 Universal Moral Grammar。主张道德判断类似语言，由 inaccessible 模块产生，应用我们讲不出的规则，和 Chomsky 的 UG 平行。</p>
<p>核心主张：道德判断基于 sophisticated 原则如 Doctrine of Double Effect，他用当事人动作到伤害的行动树距离将其形式化。他跑道德 POS 论证（和语言 POS 平行）得出 UMG 必然先天。关键是他认为道德判断具有 rational justification，与 Greene 相反，因为 UMG 的产出不是情绪反射而是类语法规则系统的应用。</p>
<p>考试里 Mikhail 站在 Greene 对立面：UMG + DDE + 道德 POS + "我们的快速道德直觉是 sophisticated 的，应被认真对待"。</p>
</div>`
  },
  {
    topic: "People",
    term: "Fodor",
    termCn: "福多",
    back: `<div class="en-side">
<p><strong>Jerry Fodor</strong> is the philosopher who proposed the <strong>Modularity of Mind</strong> and gave us the vocabulary the course uses throughout. He characterized a cognitive module by six features: <em>mandatory, fast, domain-specific, informationally encapsulated, inaccessible, and neurally discretely localized</em>. A module tends to exhibit these features, but — and this is the key caveat — <strong>none is individually required</strong>.</p>
<p>Fodor's framework shows up repeatedly: LeDoux's Low Road for fear satisfies all six; face recognition (FFA) exhibits neurally discrete localization; language has its own pattern of modularity as shown by double dissociation; and Cosmides and Tooby's Cheater Detection Module is a domain-specific social-reasoning module.</p>
<p>On the exam the trick question is "which of the six features is required for modularity?" and the answer is none — this was on Exam 2.</p>
</div>
<div class="cn-side">
<p>Jerry Fodor 哲学家，提出 Modularity of Mind，给了本课始终使用的词汇。他用 6 特征刻画认知模块：mandatory、fast、domain-specific、informationally encapsulated、inaccessible、neurally discretely localized。模块倾向表现这些特征，但关键告诫：没有一条是单独必需的。</p>
<p>Fodor 框架反复出现：LeDoux 恐惧 Low Road 6 条全满足；面孔识别（FFA）有神经离散定位；语言的模块模式由双分离展示；Cosmides & Tooby 的 Cheater Detection Module 是 domain-specific 社会推理模块。</p>
<p>考试陷阱题"6 个特征哪个必需"答"无"，Exam 2 考过。</p>
</div>`
  },
  {
    topic: "People",
    term: "Cosmides & Tooby",
    termCn: "科斯米德斯和托比",
    back: `<div class="en-side">
<p><strong>Leda Cosmides and John Tooby</strong> are the leading representatives of <strong>Evolutionary Psychology</strong>. Their core claim is that the mind is <em>massively modular</em> — built from many domain-specific modules each tuned to problems our ancestors faced repeatedly, rather than being a single general-purpose reasoning engine.</p>
<p>Their classic contribution is the <strong>Cheater Detection Module</strong>, demonstrated by the social-contract version of the Wason Selection Task: almost everyone solves it correctly, even though they fail the logically identical abstract version. This is taken as evidence that there's a dedicated module for social contracts that general reasoning doesn't reach. Their most-cited reply to Kahneman is that <em>frequency framing drops the Linda conjunction fallacy from 89% to 22%</em>, because frequencies are an ancestrally valid format while abstract probabilities aren't.</p>
<p>On the exam Cosmides & Tooby represent the Evolutionary Psychology camp in the three-camp rationality debate: we are rational when the question is posed in ecologically valid formats.</p>
</div>
<div class="cn-side">
<p>Leda Cosmides 和 John Tooby 是进化心理学主要代表。核心主张：心智是 massively modular——由许多领域专属模块构成，各自调谐应对祖先反复遇到的问题，而不是单一通用推理引擎。</p>
<p>经典贡献是 Cheater Detection Module，由 Wason 选择任务社会契约版本展示：几乎人人做对，尽管他们做不对逻辑等价的抽象版。这证明社会契约有专门模块，通用推理够不到。最常被引用的对 Kahneman 的回应是频率表述把 Linda 合取谬误从 89% 降到 22%，因为频率是祖先有效格式而抽象概率不是。</p>
<p>考试里他们代表理性三阵营中的进化心理学阵营：格式生态有效时我们就理性。</p>
</div>`
  },
  {
    topic: "People",
    term: "Bechara & Damasio",
    termCn: "贝卡拉和达马西奥",
    back: `<div class="en-side">
<p><strong>Antoine Bechara and Antonio Damasio</strong> are the neuroeconomics duo behind the <strong>Iowa Gambling Task</strong> (<em>Bechara et al. 1997</em>). In that study, subjects pick from four decks — A and B are bad (big wins, bigger losses, negative EV), C and D are good. Healthy subjects show anticipatory SCR (skin conductance response) when their hand hovers over bad decks <em>before</em> they can consciously articulate why, while vmPFC-lesioned patients show no anticipatory SCR and continue drawing from bad decks even after they can explain which ones are bad.</p>
<p>On the basis of this work, Damasio formulated the <strong>Somatic Marker Hypothesis</strong>: bodily emotional reactions correspond to Q-values, with vmPFC as the substrate that ties body signals to choice. The big claim is that <em>rational decision-making depends on emotional and somatic signals</em> — emotion is not the enemy of rationality but a necessary part of it.</p>
<p>On the exam they represent the Neuroeconomics camp in the three-camp rationality debate.</p>
</div>
<div class="cn-side">
<p>Antoine Bechara 和 Antonio Damasio 是 Iowa Gambling Task（Bechara 等 1997）背后的 neuroeconomics 二人组。受试从 4 副牌抽：A、B 坏（大赢更大输，EV 负），C、D 好。健康受试手伸向坏牌时在能讲出原因前就有 anticipatory SCR（皮肤电导），vmPFC 损伤患者没有 anticipatory SCR，即使能讲出哪两副坏还是继续抽。</p>
<p>基于此 Damasio 提出 Somatic Marker Hypothesis：身体情绪反应对应 Q 值，vmPFC 作为把身体信号绑定到选择的基底。大主张：理性决策依赖情绪和躯体信号，情绪不是理性的敌人而是必要部分。</p>
<p>考试里代表理性三阵营中的 Neuroeconomics 阵营。</p>
</div>`
  },
  {
    topic: "People",
    term: "Ekman",
    termCn: "艾克曼",
    back: `<div class="en-side">
<p><strong>Paul Ekman</strong> is the facial-expression researcher whose cross-cultural studies identified <strong>six basic emotions</strong> — happiness, sadness, anger, fear, disgust, and surprise — that are recognized across radically different cultures, including pre-literate societies. The 1971 paper is the key citation.</p>
<p>This result supports the <strong>universality</strong> argument for the innateness of emotion, echoing Darwin's idea that some emotional expressions are instinctual and have homologues in other species. If every human culture recognizes the same six expressions, they can't be cultural inventions; they have to be part of species-typical design.</p>
<p>On the exam Ekman is invoked as innateness-of-emotion evidence, parallel to language universality for the innateness of language.</p>
</div>
<div class="cn-side">
<p>Paul Ekman 面部表情研究者，跨文化研究识别出 6 种基本情绪：happiness、sadness、anger、fear、disgust、surprise，在差异很大的文化（包括前文字社会）都能识别。1971 年论文是关键引用。</p>
<p>这支持情绪先天性的普遍性论证，呼应 Darwin 的观点：某些情绪表达是本能的，在其他物种有同源。如果每个文化都识别同样的 6 种表达，它们就不可能是文化发明，必须是物种典型设计的一部分。</p>
<p>考试里 Ekman = 情绪先天性证据，和语言普遍性之于语言先天性并列。</p>
</div>`
  },
  {
    topic: "People",
    term: "Turing",
    termCn: "图灵",
    back: `<div class="en-side">
<p><strong>Alan Turing</strong> is the British mathematician whose four course-relevant contributions are the backbone of the computation unit. He gave the minimal formalization of computation — the <strong>Turing Machine</strong> with its five primitives (tape, symbols, head, state memory, and rules). He proposed the <strong>Universal Turing Machine</strong>, which takes program plus input and is maximally flexible and maximally powerful within the set of computable functions. He articulated the <strong>Church-Turing Thesis</strong>, that any function computable by any physical machine is computable by some Turing Machine. And he proposed the <strong>Turing Test</strong> for intelligence, which operationalizes intelligence as input-output equivalence.</p>
<p>Outside the course his best-known contribution is breaking the Enigma code in World War II, which shortened the war considerably.</p>
<p>On the exam, be ready to recognize each of the four contributions and state what it claims.</p>
</div>
<div class="cn-side">
<p>Alan Turing 英国数学家，本课相关的 4 个贡献是计算单元的骨架。他给出计算的最小形式化——Turing Machine 及其 5 个原始组件（tape、symbols、head、state memory、rules）。他提出 UTM，接受程序+输入，在可计算函数集合内最灵活最强。他提出 Church-Turing 论题：任何物理机器可算的函数都有某台 Turing Machine 可算。他提出 Turing Test 把智能操作化为输入输出等价。</p>
<p>课外最著名贡献是二战破解 Enigma 密码，显著缩短了战争。</p>
<p>考试要能识别 4 个贡献并讲清各自主张。</p>
</div>`
  },
  {
    topic: "People",
    term: "Bayes",
    termCn: "贝叶斯",
    back: `<div class="en-side">
<p><strong>Thomas Bayes</strong> (1702–1761) was a British mathematician and Presbyterian minister whose posthumously published essay established what we now call <strong>Bayes' Theorem</strong>. The theorem's key idea is <em>how to update beliefs on the basis of evidence</em> — given a prior belief about a hypothesis and a likelihood for how the hypothesis explains the data, it tells you how to get a posterior belief that reflects both.</p>
<p>In this course Bayes' Rule shows up everywhere that involves inference under uncertainty. In perception it combines the likelihood of a retinal image given a scene with the prior provided by the five hidden assumptions, solving the inverse optics problem. In infant cognition it describes how babies update their beliefs about sampling processes in the Xu & Denison ping-pong ball study. In diagnostic reasoning, it's the formula you use for problems like Sally's cough.</p>
<p>On the exam, be able to identify where Bayes' Rule is being applied and plug values into its four components (prior, likelihood, posterior, normalizing denominator).</p>
</div>
<div class="cn-side">
<p>Thomas Bayes（1702–1761）英国数学家和长老会牧师，遗著建立了现在称为 Bayes 定理的理论。定理核心：如何根据证据更新信念——给定对假设的先验信念和假设解释数据的似然，告诉你怎么得到综合二者的后验信念。</p>
<p>本课中 Bayes 规则出现在所有不确定性推理场景：感知中它结合视网膜图给定场景的似然和 5 条 hidden assumptions 提供的先验，解决逆光学问题；婴儿认知中它描述 Xu & Denison 乒乓球研究里婴儿对抽样过程的信念更新；诊断推理中它是 Sally 咳嗽题的公式。</p>
<p>考试要能识别 Bayes 规则在哪被用，并把值代入 4 个组件（先验、似然、后验、归一化分母）。</p>
</div>`
  },
  {
    topic: "People",
    term: "Elizabeth Spelke",
    termCn: "斯佩尔克",
    back: `<div class="en-side">
<p><strong>Elizabeth Spelke</strong> is a pioneer of infant cognition research whose core contribution is a <strong>hybrid position</strong> between pure nativism and pure empiricism. Her slogan is that <em>"babies are designed to learn"</em> — you don't need to claim every specific fact a baby knows was genetically specified, but you do need to claim that the learning machinery itself is innate.</p>
<p>She is also central to <strong>Core Knowledge Theory</strong>, which proposes that babies come equipped with a set of core cognitive systems — for objects, number, space, agents, and social relationships — that structure how they parse their experience from early on. The core knowledge doesn't explain everything babies eventually know, but it provides the foundation on which fast learning can happen.</p>
<p>On the exam Spelke's hybrid slogan is worth recognizing as her answer to the "innate vs. learned" dichotomy: both, because the learning is what is innate.</p>
</div>
<div class="cn-side">
<p>Elizabeth Spelke 婴儿认知研究先驱，核心贡献是介于纯先天和纯经验之间的 hybrid 立场。口号"Babies are designed to learn"——不必说婴儿知道的每个具体事实都是基因指定的，但必须说学习机器本身是先天的。</p>
<p>她也是 Core Knowledge 理论核心人物，主张婴儿配备一组核心认知系统（物体、数字、空间、代理、社会关系），从早期就结构化他们如何解析经验。核心知识不能解释婴儿最终知道的所有东西，但提供了快速学习的基础。</p>
<p>考试识别 Spelke 的 hybrid 口号，作为对"先天 vs 后学"二分法的回答：两者都是，因为学习本身才是先天的。</p>
</div>`
  },

  // === Key Experiments 汇总 ===
  {
    topic: "Experiments",
    term: "Wug Test",
    termCn: "Wug 测试",
    back: `<div class="en-side">
<p>The <strong>Wug Test</strong> (<em>Berko 1958</em>) is a classic demonstration that children acquire abstract language rules rather than just memorizing words. The setup is simple: a child is shown a picture of a novel creature and told "This is a wug." Then a second one appears, and the experimenter says "Now there is another one. There are two ___."</p>
<p>Children reliably produce <strong>"wugs,"</strong> even though they have never heard the word before. That means they aren't retrieving a memorized plural — they are applying an abstract rule ("add /z/ to form a plural") to a novel stem. This supports the <em>novelty</em> property of language, which associationism cannot explain, and it supports cognitivism's claim that what's in the head is rules, not associations. Children also make characteristic <em>overgeneralization</em> errors like "goed" and "foots," which are further evidence that they're using rules — they over-apply the regular past-tense and plural rules to irregular words.</p>
<p>On the exam this is the standard evidence for rule-based language acquisition and a direct hit against associationist theories of language.</p>
</div>
<div class="cn-side">
<p>Wug Test（Berko 1958）经典演示：儿童习得抽象语言规则而非死记单词。给孩子看一张新奇生物图片说"This is a wug"，然后第二只出现，实验者说"Now there is another one. There are two ___"。</p>
<p>儿童稳定产出"wugs"，尽管从没听过这个词。这意味着他们不是从记忆中提取复数形式，而是对新词干应用抽象规则（"加 /z/ 构成复数"）。支持语言的 novelty 属性，联想主义解释不了；支持认知主义主张——脑内是规则不是联想。儿童还会出现"goed"、"foots"这类特征性过度泛化错误，更证明他们在用规则——把规则过度应用到不规则词上。</p>
<p>考试里是规则式语言习得的标准证据，直接打联想主义。</p>
</div>`
  },
  {
    topic: "Experiments",
    term: "Wason Selection Task",
    termCn: "Wason 选择任务",
    back: `<div class="en-side">
<p>The <strong>Wason Selection Task</strong> has two versions that together support the Cheater Detection Module. In the <strong>abstract version</strong>, you see four cards showing X, M, 3, and 7, and the rule is "if X on one side, then 3 on the other." Your job is to pick which cards to flip to test the rule. The intuitive answer is X and 3, but the correct answer is <strong>X and 7</strong>: X needs flipping to check whether there's a 3 on the back, and 7 needs flipping to make sure there's no X on the back. The card showing 3 is irrelevant because the rule doesn't require that a 3 have X on its back, and the card showing M is irrelevant because the rule only constrains X. Most people get this abstract version wrong.</p>
<p>In the <strong>social-contract version</strong>, the same logical structure is presented with content: four cards show "beer," "coke," "age 23," and "age 17," and the rule is "to drink alcohol you must be over 18." Most people immediately flip <em>beer</em> (is that person old enough?) and <em>17</em> (is that person drinking beer?). The abstract version is hard; the social-contract version is trivial.</p>
<p>On the exam this supports Cosmides & Tooby's <strong>Cheater Detection Module</strong> — a domain-specific module for social contracts that general-purpose reasoning doesn't engage.</p>
</div>
<div class="cn-side">
<p>Wason 选择任务有两个版本，共同支持 Cheater Detection Module。</p>
<p>抽象版：4 张牌 X、M、3、7，规则"若一面 X 则另一面 3"，你选哪些翻来测规则。直觉答 X 和 3，正解是 X 和 7（翻 X 看有没有 3，翻 7 确认没 X；翻 3 无关因为规则没说 3 必须背面是 X，翻 M 无关因为规则只约束 X）。大多数人抽象版做错。</p>
<p>社会契约版：同逻辑结构"喝酒必须 18 岁以上"，牌是 beer/coke/23/17，人立即翻 beer（这人够岁数吗）和 17（这人喝啤酒吗）。抽象版难，社会契约版小菜。</p>
<p>考试支持 Cosmides & Tooby 的 Cheater Detection Module——通用推理激活不了的社会契约专门模块。</p>
</div>`
  },
  {
    topic: "Experiments",
    term: "Linda Problem",
    termCn: "林达问题",
    back: `<div class="en-side">
<p>The <strong>Linda Problem</strong> (<em>Kahneman and Tversky 1982</em>) is the canonical demonstration of the representativeness heuristic. Subjects read a description of Linda: she is 31, single, a philosophy major, and was active in anti-nuclear demonstrations. They are then asked which is more probable: (f) Linda is a bank teller, or (h) Linda is a bank teller AND is active in the feminist movement.</p>
<p>About <strong>89%</strong> choose (h), which is the <strong>conjunction fallacy</strong>. Mathematically this is impossible: (h) is a strict subset of (f), because every bank-teller-feminist is also a bank-teller, so (h) cannot be more probable than (f). But the feminist-teller description <em>looks</em> much more like Linda, and people substitute similarity-to-prototype for probability. The description is vivid but statistically unrepresentative of bank tellers in general.</p>
<p>Frequency reframing reduces the error dramatically: asked "out of 100 women fitting this description, how many are bank tellers? how many are bank tellers and feminists?" the conjunction fallacy drops from 89% to about 22%. This is the evolutionary psychology reply. On the exam this is the canonical representativeness-heuristic evidence.</p>
</div>
<div class="cn-side">
<p>Linda 问题（Kahneman & Tversky 1982）是代表性启发的经典演示。受试读 Linda 描述：31 岁、单身、哲学专业、积极参与反核游行。然后问哪个更可能：(f) Linda 是银行出纳；(h) Linda 是银行出纳且活跃女权主义者。</p>
<p>约 89% 选 (h)，即合取谬误。数学上不可能：(h) 是 (f) 的严格子集（每个银行出纳女权主义者也是银行出纳），所以 (h) 不可能比 (f) 概率大。但女权出纳描述更像 Linda，人们用"和原型相似度"替代概率。描述生动但在银行出纳总体中统计不具代表性。</p>
<p>频率重框戏剧性降低错误："100 个符合描述的女性中多少是银行出纳？多少是出纳且女权？"合取谬误从 89% 降到 22%，这是进化心理学回应。考试里是代表性启发的经典证据。</p>
</div>`
  },
  {
    topic: "Experiments",
    term: "Asian Disease Problem",
    termCn: "亚洲疾病问题",
    back: `<div class="en-side">
<p>The <strong>Asian Disease Problem</strong> is the classic demonstration of framing effects. Subjects are told 600 people will die from a disease and asked to choose a plan. In the <strong>gain framing</strong> (Group 1), Plan A <em>saves 200 for sure</em>, and Plan B has a 1/3 chance of <em>saving everyone</em> and a 2/3 chance of <em>saving no one</em>. A majority picks A. In the <strong>loss framing</strong> (Group 2), Plan C means <em>400 die for sure</em>, and Plan D has a 1/3 chance that <em>no one dies</em> and a 2/3 chance that <em>all 600 die</em>. A majority picks D.</p>
<p>But A and C are mathematically identical (200 live / 400 die is the same state of the world), and so are B and D. The consequences don't change; only the wording does. Framing the same outcome as a gain ("saved") pushes people toward the risk-averse option, while framing it as a loss ("die") pushes them toward the risk-seeking gamble. The pattern is that people are <strong>risk-averse in gains and risk-seeking in losses</strong>.</p>
<p>On the exam this is the canonical framing-effects demonstration, usually paired with the 80%-fat-free vs. 20%-fat yogurt case from the study guide as an everyday example.</p>
</div>
<div class="cn-side">
<p>亚洲疾病问题是框架效应的经典演示。受试被告知 600 人将死于某病，选方案。Gain 框架（第 1 组）：A 确定救 200 人，B 有 1/3 救全部 2/3 救 0。多数选 A。Loss 框架（第 2 组）：C 确定死 400 人，D 有 1/3 无人死 2/3 全死。多数选 D。</p>
<p>但 A 和 C 数学等价（200 活/400 死是同一世界状态），B 和 D 也等价。结果不变，只有措辞变。把同一结果框成收益（"救"）推人向避险选项，框成损失（"死"）推人向冒险赌博。规律是 gain 避险、loss 冒险。</p>
<p>考试里是框架效应的标准演示，通常和课程 80% fat free vs 20% fat 酸奶的日常例子配对。</p>
</div>`
  },
  {
    topic: "Experiments",
    term: "Dutton & Aron bridge study",
    termCn: "吊桥实验",
    back: `<div class="en-side">
<p><em>Dutton and Aron (1974)</em> is the experimental support for the Schachter-Singer Two-Factor Theory of emotion — the theory that emotion equals arousal plus conscious interpretation. The prediction is that arousal produced by one source can be misattributed to another source, because the interpretation step is underdetermined by the arousal itself.</p>
<p>In the study, men crossed either a swaying high suspension bridge (arousal condition) or a stable low bridge (control), then at the far end met a female research assistant who asked some survey questions and handed them her phone number. The result was that men from the scary bridge called her back significantly more often than men from the safe bridge.</p>
<p>The interpretation is that the bodily arousal from the scary bridge — pounding heart, fast breathing — got misattributed as attraction: "my heart is racing, she must be attractive." Arousal plus (mis)interpretation = emotion, which is exactly what Schachter-Singer predicts. On the exam this is the textbook misattribution-of-arousal case.</p>
</div>
<div class="cn-side">
<p>Dutton & Aron 1974 是 Schachter-Singer 两因素情绪理论的实验支持——情绪 = 唤起 + 有意识解释。预测是一个来源产生的唤起可被误归因到另一来源，因为解释这一步由唤起本身决定不了。</p>
<p>男性被试走摇晃的高吊桥（唤起组）或稳定的低桥（对照），桥尽头遇到女研究助理问几个问题并留电话。结果吊桥组回电话比例显著更高。</p>
<p>解释：吊桥带来的身体唤起（心跳加快、呼吸急）被误归因成吸引——"我心跳这么快，她肯定有吸引力"。唤起 + (错)解释 = 情绪，正是 Schachter-Singer 预测。考试里是 misattribution of arousal 的标准案例。</p>
</div>`
  },
  {
    topic: "Experiments",
    term: "False Belief Task (toy melon)",
    termCn: "玩具甜瓜 false belief",
    back: `<div class="en-side">
<p><em>Onishi and Baillargeon (2005, Science)</em> used a toy-melon version of the false-belief task to show that <strong>15-month-olds</strong> already understand that others can hold false beliefs. This was a big deal because the traditional false-belief task requires age 4 and depends on verbal responses.</p>
<p>The method was violation of expectation with two conditions. In the <strong>TB-yellow</strong> (true belief) condition, the agent watched the melon get moved into the yellow box, so she holds the correct belief; babies expected her to reach into yellow, and looked longer (surprised) when she reached into green. In the <strong>FB-green</strong> (false belief) condition, the agent left the room before the melon was moved, so she still believes it's in the green box; babies expected her to reach into green (based on her false belief), and looked longer when she reached into yellow.</p>
<p>That pattern means the babies were tracking <em>her belief</em> — including when it was false — not just the actual location of the melon. On the exam this is the earliest-emerging nonverbal demonstration of Theory of Mind.</p>
</div>
<div class="cn-side">
<p>Onishi & Baillargeon 2005 Science 用玩具甜瓜版 false belief 任务证明 15 个月婴儿已懂他人可有 false belief。这是大发现，因为传统 false belief 任务要 4 岁、靠语言。</p>
<p>方法是违反预期两条件。TB-yellow（真信念）：代理亲眼看到甜瓜移入黄盒，她持正确信念；婴儿预期她伸向黄盒，她伸向绿盒时看更久（惊讶）。FB-green（假信念）：代理在甜瓜被移前离开房间，她仍信在绿盒；婴儿预期她伸向绿盒（基于她的假信念），她伸向黄盒时看更久。</p>
<p>这个模式说明婴儿追踪的是"她的信念"（包括假信念），而不是甜瓜实际位置。考试里是最早涌现的非语言 ToM 证据。</p>
</div>`
  },

  // === Formulas & Quick practice ===
  {
    topic: "Formulas",
    term: "Bayes' Rule 快速套公式",
    termCn: "Sally 咳嗽题",
    back: `<div class="en-side">
<p>This is the standard Bayes' Rule practice problem. Sally has a cough; you want to know the probability that heartburn is the cause, given the cough. Priors: P(cold) = 0.5, P(heartburn) = 0.4, P(cancer) = 0.1. Likelihoods: P(cough | cold) = 0.8, P(cough | heartburn) = 0.1, P(cough | cancer) = 0.9.</p>
<p>Apply Bayes' Rule with heartburn as the hypothesis:</p>
<span class='formula'>P(heartburn | cough) = (0.1 × 0.4) / [(0.8)(0.5) + (0.9)(0.1) + (0.1)(0.4)]<br>= 0.04 / 0.53<br>≈ 0.0755</span>
<p>The numerator is the likelihood times the prior for heartburn, and the denominator is the total probability of coughing, summed over all three possible causes. The answer says that even though heartburn has a substantial prior (40%), it's not a likely cause of cough (only 10% chance of coughing given heartburn), so the posterior drops to about 7.5%.</p>
<p>The Canvas answer format is <code>P(Hhburn|d) = (0.1)(0.4) / (0.8)(0.5) + (0.9)(0.1) + (0.1)(0.4)</code>. No calculator is needed on the exam; just plug numbers into the formula correctly.</p>
</div>
<div class="cn-side">
<p>标准 Bayes 规则练习题。Sally 咳嗽，求 heartburn 为病因的概率。先验 P(cold)=0.5、P(heartburn)=0.4、P(cancer)=0.1。似然 P(cough|cold)=0.8、P(cough|heartburn)=0.1、P(cough|cancer)=0.9。</p>
<span class='formula'>P(heartburn | cough) = (0.1 × 0.4) / [(0.8)(0.5) + (0.9)(0.1) + (0.1)(0.4)]<br>= 0.04 / 0.53<br>≈ 0.0755</span>
<p>分子 = heartburn 的似然 × 先验；分母 = 咳嗽的总概率，对所有病因加总。结果说明 heartburn 先验虽高（40%），但它不太能导致咳嗽（10%），所以后验降到约 7.5%。</p>
<p>Canvas 答案格式：<code>P(Hhburn|d) = (0.1)(0.4) / (0.8)(0.5) + (0.9)(0.1) + (0.1)(0.4)</code>。考试不需要计算器，把数字代入公式即可。</p>
</div>`
  },
  {
    topic: "Formulas",
    term: "γ 贴现快速练",
    termCn: "指数贴现计算",
    back: `<div class="en-side">
<p>The exponential discounting formula is what you use for any delayed-reward problem.</p>
<span class='formula'>U × γˣ</span>
<p>Here U is the undiscounted utility, γ is the discount factor per time unit, and x is the number of time units of delay. Three practice problems: Ricky has γ = 0.5 per year and is offered 100 utiles in 3 years — the discounted value is 100 × 0.5³ = 100 × 0.125 = <strong>12.5 utiles</strong>, which shows how brutal a low-γ (impatient) person is on long delays. Natalia has γ = 0.95 per week and is offered 100 utiles in 2 weeks — the discounted value is 100 × 0.95² = 100 × 0.9025 = <strong>90.25 utiles</strong>, a relatively small haircut because she's patient and the delay is short. Siva has γ = 0.80 per hour and is offered 50 utiles in 3 hours — the discounted value is 50 × 0.8³ = 50 × 0.512 = <strong>25.6 utiles</strong>.</p>
<p>On the exam the trick is unit-matching: make sure the exponent x is in the same time unit as γ (weekly γ needs x in weeks, yearly γ needs x in years). Plug and chug.</p>
</div>
<div class="cn-side">
<p>指数贴现公式用于任何延迟奖励题。U × γˣ，U 是未贴现效用，γ 是单位时间贴现因子，x 是延迟的时间单位数。</p>
<p>3 个练习：Ricky γ=0.5/年，100 utiles 延 3 年 = 100 × 0.5³ = 12.5 utiles（低 γ 不耐心的人在长延迟上被砍得很惨）。Natalia γ=0.95/周，100 utiles 延 2 周 = 100 × 0.95² = 90.25 utiles（她耐心且延迟短，砍得少）。Siva γ=0.80/小时，50 utiles 延 3 小时 = 50 × 0.8³ = 25.6 utiles。</p>
<p>考试要注意单位匹配：指数 x 的时间单位必须和 γ 一致（周 γ 要用周为 x，年 γ 要用年）。代数计算即可。</p>
</div>`
  },
  {
    topic: "Formulas",
    term: "Q-learning 快速练",
    termCn: "Q 值更新计算",
    back: `<div class="en-side">
<p>The Q-learning update is:</p>
<span class='formula'>Q(s,a) ← Q(s,a) + α · [R(s') + γ · max Q(s',a') − Q(s,a)]</span>
<p>Two worked examples from Wally's walk. For "run to truck": old Q = 3, reward R = 4, max Q at the next state (truck) = 8 because swim is the best action there, γ = 0.7, α = 0.8. Prediction error = [4 + 0.7 × 8] − 3 = 9.6 − 3 = <strong>6.6</strong>. New Q = 3 + 0.8 × 6.6 = <strong>8.28</strong>.</p>
<p>For "swim" (water is a terminal state): old Q = 8, reward R = −5, and because water is terminal, max Q at the next state is <strong>0</strong> by convention — not the old Q, not any default value, just 0 because there are no future actions. Prediction error = [−5 + 0] − 8 = <strong>−13</strong>. New Q = 8 + 0.8 × (−13) = <strong>−2.4</strong>.</p>
<p>On the exam the single most important rule to remember is that <em>at a terminal state, max Q over next actions is 0</em>. That's the detail the problem is trying to catch you on.</p>
</div>
<div class="cn-side">
<p>Q-learning 更新公式：</p>
<span class='formula'>Q(s,a) ← Q(s,a) + α · [R(s') + γ · max Q(s',a') − Q(s,a)]</span>
<p>Wally 走路两例。"跑 truck"：旧 Q=3，奖励 R=4，下一状态（truck）的 max Q=8（那里 swim 最大），γ=0.7，α=0.8。预测误差 = [4 + 0.7 × 8] − 3 = 6.6。新 Q = 3 + 0.8 × 6.6 = 8.28。</p>
<p>"swim"（水边是终止状态）：旧 Q=8，奖励 R=−5，水边是终止，max Q 按约定 = 0（不是旧 Q，不是默认值，就是 0 因为没有未来动作）。预测误差 = [−5 + 0] − 8 = −13。新 Q = 8 + 0.8 × (−13) = −2.4。</p>
<p>考试最关键一条：终止状态的 max Q = 0。这是题目想抓你的细节。</p>
</div>`
  }
];
