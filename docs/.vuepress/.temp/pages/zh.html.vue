<template><div><h1 id="wyseos-面向-web-自动化的-agentos" tabindex="-1"><a class="header-anchor" href="#wyseos-面向-web-自动化的-agentos"><span>WyseOS：面向 web 自动化的 AgentOS</span></a></h1>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2>
<p>WyseOS 是一个代理操作系统——一个多代理网络自动化系统，旨在跨各种专家代理协调任务规划、感知、记忆和行动 。这个用于自动化的 AgentOS 通过自然语言理解用户意图，并利用规划代理和多个专家代理协同完成复杂任务 。与传统的多代理系统 (MAS) 不同，WyseOS 专注于与网络环境的无缝集成，通过高级规划和状态记忆动态协调代理</p>
<p>。其核心功能包括：</p>
<ul>
<li>精确的意图识别和任务编排</li>
<li>结合视觉和 DOM 分析的混合页面元素检测</li>
<li>持续学习和更新知识库</li>
<li>支持本地插件的基于云的沙盒浏览器</li>
<li>用于模块化扩展的 SDK</li>
</ul>
<p>本文深入介绍了 WyseOS 架构，并提供了一个详细的用例来展示其实际功能 。</p>
<h2 id="目标" tabindex="-1"><a class="header-anchor" href="#目标"><span>目标</span></a></h2>
<p>WyseOS 旨在运行能够执行以下操作的智能代理 ：</p>
<ul>
<li>自主浏览网页和数字界面</li>
<li>将复杂任务分解为以目标为导向的子任务</li>
<li>利用大型语言模型 (LLM) 进行决策</li>
<li>随时间保持任务上下文的记忆</li>
<li>适应动态的现实环境（DOM 更改、延迟、部分故障等）</li>
</ul>
<p>这些功能与更广泛的 AgentOS 愿景相一致，即建立一种新型操作系统，其中多模式代理（视觉、语言、规划）像人类一样与软件界面交互 。</p>
<p>WyseOS 代表着在构建更智能、适应性更强、用户友好性更高的网络自动化系统方面迈出的重要一步，这些系统可以跨任务、领域和界面设计进行推广 。代理可以用最少的再培训或硬编码规则来解决新任务，从而实现跨不同领域的自动化 。用户还可以声明性地指定目标，代理可以自主地解释和实现这些目标 。实时网络感知、上下文记忆和自适应推理的集成使 WyseOS 能够在闭环反馈周期中运行，这是连续交互系统的关键要求 。这使得代理能够持续运行，在需要时请求澄清，提供更新，并从错误中优雅地恢复，模仿人类助手的行为方式 。</p>
<h3 id="主要组成部分" tabindex="-1"><a class="header-anchor" href="#主要组成部分"><span>主要组成部分</span></a></h3>
<p>WyseOS 具有几个相互关联的组件，它们协同工作以实现智能行为 。该系统架构以一个多代理协作系统为中心，该系统由一个核心任务规划代理和多个专门的专家代理组成 。任务规划代理负责解释自然语言命令并执行宏观层面的任务调节和编排，而各种专家代理则专注于执行特定的子任务 。</p>
<h4 id="多代理框架" tabindex="-1"><a class="header-anchor" href="#多代理框架"><span>多代理框架</span></a></h4>
<p>WyseOS 采用 AutoGen 作为其统一的代理编排框架 。AutoGen 是一个开源平台，旨在构建 AI 代理并促进它们高效协作以解决复杂任务 。其核心功能包括异步消息传递机制、高模块化和出色的可伸缩性，为构建复杂的分布式代理网络提供了强大的支持 。借助 AutoGen 的强大功能，WyseOS 能够实现跨多个异构平台和应用场景的无缝连接，确保规划代理和各种专家代理之间的实时、高效协作，从而有效地处理各种复杂的自动化任务 。</p>
<h5 id="任务规划代理-意图识别和任务编排" tabindex="-1"><a class="header-anchor" href="#任务规划代理-意图识别和任务编排"><span>任务规划代理：意图识别和任务编排</span></a></h5>
<p>作为 WyseOS 的核心协调者，任务规划代理主要承担以下职责：首先，它采用先进的自然语言处理技术来深入解析用户以自然语言输入的目标和指令，准确把握用户意图 。随后，根据任务要求，它动态地将复杂任务分解为一系列可执行的子任务，并智能地选择和初始化相应的专家代理 。其职责摘要包括 ：</p>
<ul>
<li>解释高级目标/用户输入或提示</li>
<li>查询 LLM 以进行计划综合</li>
<li>向专家代理发出任务派遣</li>
<li>与记忆和感知协调</li>
<li>根据行动的成功/失败执行状态转换</li>
</ul>
<h5 id="多专家代理-执行" tabindex="-1"><a class="header-anchor" href="#多专家代理-执行"><span>多专家代理：执行</span></a></h5>
<p>WyseOS 中的专家代理是执行特定自动化操作的功能单元 。在执行任务时，专家代理首先从系统的知识库中检索完成当前子任务所需的相关信息和历史经验 。然后，它利用其封装的特定于任务场景的控制工具集（例如网页元素操作工具、API 调用接口等）来精确执行特定的自动化操作 。</p>
<h4 id="页面视觉和语义混合检测" tabindex="-1"><a class="header-anchor" href="#页面视觉和语义混合检测"><span>页面视觉和语义混合检测</span></a></h4>
<p>有效的感知和网页元素的精确定位是网络自动化系统正确理解页面结构和内容，并安全执行后续操作的基本前提 。鉴于现实环境中网页的多样性、动态性和固有的不确定性，WyseOS 特别设计并实现了一个高效的混合检测模块，以确保元素检测的成功率和跨站点通用性 。</p>
<ul>
<li>视觉检测模块：此模块包含一个经过微调的 YOLO-v12 检测模型 。该模型直接处理原始网页截图，可以识别各种 UI 控件类型（例如按钮、输入字段等）及其在页面上的精确边界框位置 。</li>
<li>DOM 语义检测模块：它负责遍历文档对象模型 (DOM)，枚举页面上所有可交互的控件元素及其边界框信息，提取与控件相关的文本内容，并为每个识别的控件分配一个唯一的系统内部 ID，为后续的元素定位和操作提供语义基础 。</li>
<li>信息融合策略：WyseOS 通过比较从视觉和 DOM 语义检测获得的控件边界框的重叠来融合信息 。具体来说，如果两种方法都将一个元素识别为 TEXT 控件类型，并且它们预测的边界框区域重叠超过 10%，则系统将优先考虑基于 DOM 分析的检测结果，并丢弃相应的视觉检测结果，以利用 DOM 提供的更精确的结构信息 。在其他情况下，例如控件类型不一致或重叠不足，WyseOS 将保留视觉检测模块的控件分类结果，利用其视觉特征来帮助增强检测语义的整体丰富性和鲁棒性 。</li>
</ul>
<h4 id="持续更新的知识库" tabindex="-1"><a class="header-anchor" href="#持续更新的知识库"><span>持续更新的知识库</span></a></h4>
<p>WyseOS 的核心优势之一在于其集成的、持续发展的检索增强生成 (RAG) 知识库 。该知识库预装了大量来自网站的官方帮助文档和从历史上成功的自动化案例中提炼的经验总结，为各种代理在决策和执行过程中提供即时信息检索支持 。WyseOS 对来自网站的非结构化帮助文档进行预处理，并将其转换为结构化的任务-解决方案对，以提高代理在新环境中的适应性 。它还通过记录详细的执行数据从过去的自动化任务中学习，这些数据会定期提炼并添加到其知识库中 。这种将静态领域知识与动态经验学习相结合的统一方法，使 WyseOS 能够通过终身学习持续改进，并随着时间的推移提供更高的任务成功率 。</p>
<h4 id="云浏览器和本地插件" tabindex="-1"><a class="header-anchor" href="#云浏览器和本地插件"><span>云浏览器和本地插件</span></a></h4>
<p>WyseOS 在执行层的关键设计方面是其独特的基于云的沙盒浏览器和本地浏览器插件的协同机制 。首先，该系统提供了一个隔离的基于云的沙盒浏览器环境，使自动化任务能够在云中独立并发地执行 。其次，对于许多 Web 应用程序和服务需要用户身份凭证进行登录身份验证的场景，WyseOS 通过安装在用户本地浏览器中的轻量级插件巧妙地安全地完成身份验证过程 。这种设计有效地解决了传统云浏览器在处理复杂身份验证时面临的限制和安全问题，确保了自动化流程的顺畅性和合规性 。</p>
<h4 id="sdk-和模块化封装" tabindex="-1"><a class="header-anchor" href="#sdk-和模块化封装"><span>SDK 和模块化封装</span></a></h4>
<p>为确保 WyseOS 系统具有高灵活性和可持续性，它提供了一个全面的软件开发工具包 (SDK) 和清晰的模块化扩展机制 。SDK 精心封装了一系列标准化接口和便捷的代理注册流程 。这使第三方开发人员或用户团队能够轻松地将自定义业务逻辑、专有算法模型或现有的第三方组件封装到符合 WyseOS 规范的新专家代理中 。这极大地增强了整个系统的功能覆盖范围和场景适应性，满足了不断发展的自动化需求 。</p>
<h3 id="对比分析" tabindex="-1"><a class="header-anchor" href="#对比分析"><span>对比分析</span></a></h3>
<h4 id="agentos-平台对比分析" tabindex="-1"><a class="header-anchor" href="#agentos-平台对比分析"><span>AgentOS 平台对比分析</span></a></h4>
<table>
<thead>
<tr>
<th style="text-align:left">功能</th>
<th style="text-align:left">WyseOS</th>
<th style="text-align:left">普华永道的 Agent OS (PwC)</th>
<th style="text-align:left">Agent S / S2 (Simular AI)</th>
<th style="text-align:left">Sierra AI 的 Agent OS (Sierra AI)</th>
<th style="text-align:right">SmythOS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">核心概念/重点</td>
<td style="text-align:left">开放式多代理协作框架</td>
<td style="text-align:left">“多代理编排、统一框架、云无关”</td>
<td style="text-align:left">“经验增强的分层规划、代理”</td>
<td style="text-align:left">“可组合技能、全渠道部署、知识引擎”</td>
<td style="text-align:right">“可视化构建器、无代码选项”</td>
</tr>
<tr>
<td style="text-align:left">关键架构特性</td>
<td style="text-align:left">“网络自动化、智能研究、高级分析和动态内容创建”</td>
<td style="text-align:left">大型企业</td>
<td style="text-align:left">“研究人员、开发人员”</td>
<td style="text-align:left">客户体验团队</td>
<td style="text-align:right">“技术和非技术用户、各种规模的企业”</td>
</tr>
<tr>
<td style="text-align:left">主要目标用户/领域</td>
<td style="text-align:left">开放式多代理协作框架</td>
<td style="text-align:left">企业级编排</td>
<td style="text-align:left">开放式 GUI 代理框架</td>
<td style="text-align:left">客户体验 (CX)</td>
<td style="text-align:right">通用 AI 代理创建</td>
</tr>
<tr>
<td style="text-align:left">显著优势</td>
<td style="text-align:left">“意图识别和任务编排、混合页面元素检测、持续学习和更新知识库、基于云的沙盒浏览器、用于模块化扩展的 SDK”</td>
<td style="text-align:left">“治理与合规、跨平台互操作性、预构建代理库、可伸缩性”</td>
<td style="text-align:left">“从经验和外部知识中学习、强大的基准性能、开源”</td>
<td style="text-align:left">“CX 领域专业化、快速部署、个性化客户互动”</td>
<td style="text-align:right">“易用性（无代码）、广泛的集成能力、多种部署选项、多模式支持”</td>
</tr>
</tbody>
</table>
<h4 id="wyseos-与-mas-的对比分析" tabindex="-1"><a class="header-anchor" href="#wyseos-与-mas-的对比分析"><span>WyseOS 与 MAS 的对比分析</span></a></h4>
<table>
<thead>
<tr>
<th style="text-align:left">功能</th>
<th style="text-align:left">传统 MAS</th>
<th style="text-align:left">WyseOS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">规划粒度</td>
<td style="text-align:left">预定义 FSM 或基于规则</td>
<td style="text-align:left">LLM 生成的动态计划</td>
</tr>
<tr>
<td style="text-align:left">协调</td>
<td style="text-align:left">消息传递</td>
<td style="text-align:left">共享内存 + TPA 编排</td>
</tr>
<tr>
<td style="text-align:left">视觉基础</td>
<td style="text-align:left">缺失或规则驱动</td>
<td style="text-align:left">学习的 VLM 模型 (WPM)</td>
</tr>
<tr>
<td style="text-align:left">动作抽象</td>
<td style="text-align:left">固定的动作模板</td>
<td style="text-align:left">语义到 UI 解析的动作</td>
</tr>
<tr>
<td style="text-align:left">任务记忆</td>
<td style="text-align:left">无状态或有限缓存</td>
<td style="text-align:left">具有回忆功能的长时任务记忆</td>
</tr>
<tr>
<td style="text-align:left">故障恢复</td>
<td style="text-align:left">预编码回退</td>
<td style="text-align:left">基于感知反馈的重新规划</td>
</tr>
<tr>
<td style="text-align:left">环境适应性</td>
<td style="text-align:left">弱（对布局变化敏感）</td>
<td style="text-align:left">“视觉感知、OCR + 布局鲁棒性”</td>
</tr>
</tbody>
</table>
<p>WyseOS 通过学习感知、语言引导规划和反应式控制循环克服了 MAS 的局限性，这对于现实世界的网络环境至关重要 。</p>
<h3 id="wyseos-的未来发展方向" tabindex="-1"><a class="header-anchor" href="#wyseos-的未来发展方向"><span>WyseOS 的未来发展方向</span></a></h3>
<ul>
<li>自我完善代理：使用强化信号在线微调 WPM 或 LLM 。</li>
<li>协作式多代理计划：Web 任务的多代理划分（例如，每个币一个代理）。</li>
<li>隐私和安全层：执行期间的安全 API 沙盒化 。</li>
<li>离线重放学习：从重放的成功/失败会话中训练 WPM/TPA 。</li>
<li>人在回路：设计有效的 HITL 系统，以实现代理与人之间的协作、监督和干预 。</li>
</ul>
<h3 id="结论" tabindex="-1"><a class="header-anchor" href="#结论"><span>结论</span></a></h3>
<p>WyseOS 通过紧密耦合感知、记忆和规划，重新定义了代理系统可以实现的目标 。受 WebAgent 创新的启发并为在动态环境中保持鲁棒性而构建，WyseOS 代表了该领域的飞跃 。它将经过训练后模型的智能、动态任务规划的适应性以及现实世界交互的精确性融合到一个统一的操作系统中 。它不受静态编程或脆弱的执行流程的限制 。其执行现实世界 Web 任务的能力展示了其作为通用代理操作系统的潜力 。</p>
</div></template>


