# API

## Session

### Open chat

#### POST `/session/complete`

```

export interface Request {
    intent?: Intent;
    messages: Message[];
    session_id: string;
    team_id: string;
}

export interface Intent {
    category: string;
    content: string;
    intent_id: string;
    tag: string;
    title: string;
}

export interface Message {
    content?: string;
    role?: string;
}

```

### Get running chat

#### GET `/session/current`

```
export interface Response {
    code: number;
    data: Datum[];
    msg: string;
}

export interface Datum {
    browser_id?: string;
    created_at?: string;
    duration?: number;
    error_message?: string;
    messages?: Message[];
    session_id?: string;
    status?: string;
    task?: Task[];
    task_result?: TaskResult;
    team_id?: string;
    tokens?: Tokens;
    updated_at?: string;
}

export interface Message {
    content?: string;
    created_at?: string;
    message_id?: string;
    message_type?: string;
    source?: string;
}

export interface Task {
    content?: string;
    role?: string;
}

export interface TaskResult {
    content: string;
    source: string;
    type: string;
}

export interface Tokens {
    models: Models;
}

export interface Models {
    "58612030-0189-42a2-9ad9-1ae5ac64002d": The58612030018942A29Ad91Ae5Ac64002D;
}

export interface The58612030018942A29Ad91Ae5Ac64002D {
    completion_tokens: number;
    prompt_tokens: number;
}

```

### Get chat detail

#### GET `/session/info/{session_id}`

```
export interface Request {
    session_id: string;
}

export interface RequestHeaders {
    Authorization?: string;
}

export interface Response {
    code: number;
    data: Data;
    msg: string;
}

export interface Data {
    browser_id: string;
    created_at: string;
    duration: number;
    error_message: string;
    messages: Message[];
    name: string;
    platform: string;
    session_id: string;
    status: string;
    task: Task[];
    task_result: TaskResult;
    team_id: string;
    tokens: Tokens;
    updated_at: string;
    visibility: string;
}

export interface Message {
    content: string;
    created_at: string;
    message_id: string;
    message_type: string;
    source: string;
    source_type: string;
    type: string;
}

export interface Task {
    content?: string;
    role?: string;
}

export interface TaskResult {
    content: string;
    source: string;
    type: string;
}

export interface Tokens {
    models: { [key: string]: any };
}


```

### Get browser detail

#### GET `/browser/info/{browser_id}`

```
export interface Request {
    browser_id: string;
}

export interface RequestHeaders {
    Authorization?: string;
    "x-api-key"?: string;
}

export interface Response {
    code: number;
    data: Data;
    msg: string;
}

export interface Data {
    browser_id: string;
    created_at: string;
    duration_seconds: number;
    height: number;
    session_id: string;
    solve_captcha: boolean;
    status: string;
    timezone: string;
    user_agent: string;
    user_id: string;
    width: number;
    ws_endpoint: string;
}

```

### Get chat messages

#### GET `/session/message/lists`

```

export interface Request {
    page_num?: number;
    page_size?: number;
    session_id?: string;
    sort_order?: string;
}

export interface RequestHeaders {
    Authorization?: string;
}

export interface Response {
    code: number;
    data: Datum[];
    msg: string;
}

export interface Datum {
    content: string;
    created_at: string;
    message_id: string;
    message_type: string;
    source: string;
}

```

### Get chat plans

#### ~~GET `/plan/lists/{session_id}` (deprecated)~~

```
export interface Request {
    session_id: string;
}

export interface RequestQueryParmas {
    page_num?: number;
    page_size?: number;
}

export interface RequestHeaders {
    Authorization?: string;
}
```

## Agent

### Get agents list

#### GET `/agent/lists`

```
export interface Request {
    page_num?: number;
    page_size?: number;
}

export interface RequestHeaders {
    Authorization?: string;
}

export interface Response {
    code: number;
    data: Data;
    msg: string;
}

export interface Data {
    data: Datum[];
    page_num: number;
    page_size: number;
    total: number;
    total_page: number;
}

export interface Datum {
    agent_id: string;
    agent_type: string;
    avatar: string;
    component_type: string;
    created_at: string;
    description: string;
    model: Model;
    name: string;
    parameters: Parameters;
    system_message: string;
    updated_at: string;
    user_id: string;
}

export interface Model {
    created_at: string;
    icon_url: string;
    model_type: string;
    provider: string;
    system_model_id: string;
    updated_at: string;
}

export interface Parameters {
    system_prompt_role: string;
    system_prompt_task_skill: string;
    temperature: Temperature;
}

export type Temperature = number | number;

```

### Get agent detail

#### GET `/agent/info/{agent_id}`

```
export interface Request {
    agent_id: string;
}

export interface RequestHeaders {
    Authorization?: string;
}

export interface Response {
    code: number;
    data: Data;
    msg: string;
}

export interface Data {
    agent_id: string;
    agent_type: string;
    avatar: string;
    component_type: string;
    created_at: string;
    description: string;
    model: Model;
    name: string;
    parameters: Parameters;
    system_message: string;
    updated_at: string;
    user_id: string;
}

export interface Model {
    created_at: string;
    icon_url: string;
    model_type: string;
    provider: string;
    system_model_id: string;
    updated_at: string;
}

export interface Parameters {
    system_prompt_role: string;
    system_prompt_task_skill: string;
    temperature: number;
}
```

## Team

### Get teams list

#### GET `/team/lists`

```
export interface Request {
    page_num?: number;
    page_size?: number;
}

export interface RequestHeaders {
    Authorization?: string;
}

export interface Response {
    code: number;
    data: Data;
    msg: string;
}

export interface Data {
    data: Datum[];
    page_num: number;
    page_size: number;
    total: number;
    total_page: number;
}

export interface Datum {
    agents: Agent[];
    component_type: string;
    created_at: string;
    description: string;
    model: Model;
    name: string;
    parameters: DatumParameters;
    team_id: string;
    team_type: string;
    termination: string;
    updated_at: string;
    user_id: string;
}

export interface Agent {
    agent_id: string;
    agent_type: string;
    component_type: string;
    created_at: string;
    description: string;
    name: string;
    parameters: AgentParameters;
    system_message: string;
    updated_at: string;
    user_id: string;
}

export interface AgentParameters {
    system_prompt_role: string;
    system_prompt_task_skill: string;
    temperature: number;
}

export interface Model {
    api_key: string;
    base_url: string;
    created_at: string;
    icon_url: string;
    model_type: string;
    provider: string;
    system_model_id: string;
    updated_at: string;
    user_id: string;
}

export interface DatumParameters {
    max_turns: number;
    system_prompt_role: string;
    system_prompt_task_skill: string;
    temperature: number;
}

```

### Get team detail

#### GET `/team/info/{team_id}`

```
export interface Request {
    team_id: string;
}

export interface RequestHeaders {
    Authorization?: string;
}

export interface Response {
    code: number;
    data: Data;
    msg: string;
}

export interface Data {
    agents: Agent[];
    component_type: string;
    created_at: string;
    description: string;
    model: Model;
    name: string;
    parameters: DataParameters;
    team_id: string;
    team_type: string;
    termination: string;
    updated_at: string;
    user_id: string;
}

export interface Agent {
    agent_id?: string;
    agent_type?: string;
    component_type?: string;
    created_at?: string;
    description?: string;
    name?: string;
    parameters?: AgentParameters;
    system_message?: string;
    updated_at?: string;
    user_id?: string;
}

export interface AgentParameters {
    system_prompt_role: string;
    system_prompt_task_skill: string;
    temperature: number;
}

export interface Model {
    api_key: string;
    base_url: string;
    created_at: string;
    icon_url: string;
    model_type: string;
    provider: string;
    system_model_id: string;
    updated_at: string;
    user_id: string;
}

export interface DataParameters {
    max_turns: number;
    system_prompt_role: string;
    system_prompt_task_skill: string;
    temperature: number;
}
```

## API Key

### user credits calls

#### GET `/user/call/lists`

```
export interface Request {
    api_key_name?: string;
    end_date?: string;
    order?: string;
    order_field?: string;
    page_num?: number;
    page_size?: number;
    platform?: string;
    start_date?: string;
    status?: string;
}

export interface RequestHeaders {
    Authorization?: string;
}

export interface Response {
    code: number;
    data: Data;
    msg: string;
}


export interface Data {
    data: Datum[];
    page_num: number;
    page_size: number;
    total: number;
    total_page: number;
}

export interface Datum {
    api_key_name: string;
    auth_captcha: Authcaptcha;
    browser_id: string;
    cost: Cost;
    created_at: string;
    duration: number;
    ip_proxy_bandwidth: number;
    session_id: string;
    status: string;
}

export interface Authcaptcha {
    has_used: boolean;
    used_count: number;
}

export interface Cost {
    auto_captcha: number;
    browser: number;
    ip_proxy_bandwidth: number;
    server_traffic: number;
    token: number;
    total_credit: number;
}

```
