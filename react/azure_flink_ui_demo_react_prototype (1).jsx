import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Bell, LayoutDashboard, Database, Shield, Activity, PlayCircle, Square, Settings, Search, ChevronRight } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const nav=[{name:'Jobs',path:'/jobs'},{name:'Environments',path:'/environments'},{name:'Secrets',path:'/secrets'},{name:'Deployments',path:'/deployments'},{name:'Monitoring',path:'/monitoring'}];

function AzureBlade({open,onClose,title,children}){
 if(!open) return null;
 return (
 <motion.div initial={{x:420}} animate={{x:0}} className='fixed top-0 right-0 h-screen w-[520px] bg-white border-l border-slate-200 shadow-2xl z-50 p-8 overflow-auto'>
 <div className='flex justify-between items-center mb-6'>
 <h2 className='text-2xl font-semibold'>{title}</h2>
 <Button variant='outline' onClick={onClose}>Close</Button>
 </div>
 {children}
 </motion.div>
 )
}
const jobs=[{id:'1',name:'Clickstream Analytics',status:'Running'},{id:'2',name:'Fraud Detection',status:'Pending'},{id:'3',name:'Inventory Sync',status:'Failed'}];
const monitoring=[{time:'10:00',throughput:200},{time:'10:05',throughput:250},{time:'10:10',throughput:310}];

const statusStyles={Running:'bg-emerald-100 text-emerald-700 border-emerald-200',Pending:'bg-amber-100 text-amber-700 border-amber-200',Failed:'bg-red-100 text-red-700 border-red-200',Scaling:'bg-sky-100 text-sky-700 border-sky-200',Stopped:'bg-slate-200 text-slate-700 border-slate-300'};

export default function AzureFlinkUIDemo(){
 const [loggedIn,setLoggedIn]=useState(false);
 const [section,setSection]=useState('Deployments');
 const [deploymentDialog,setDeploymentDialog]=useState(false);
 const [deployments,setDeployments]=useState([{id:'dep-1001',job:'Clickstream Analytics',status:'Running',scale:2,env:'Prod'}]);

 if(!loggedIn){
 return <div className='min-h-screen bg-[#f3f6fb] flex items-center justify-center p-8'>
 <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>
 <Card className='w-[440px] rounded-[28px] border border-slate-200 shadow-xl bg-white'>
 <CardContent className='p-10'>
 <div className='mb-8'>
 <div className='w-14 h-14 rounded-2xl bg-[#0078D4] flex items-center justify-center text-white text-2xl font-bold'>A</div>
 <h1 className='text-3xl font-semibold mt-5 text-slate-900'>Azure Flink Platform</h1>
 <p className='text-slate-500 mt-2'>Sign in to manage Flink streaming deployments</p>
 </div>
 <div className='space-y-4'>
 <Input placeholder='Username' className='h-12 rounded-xl border-slate-300'/>
 <Input type='password' placeholder='Password' className='h-12 rounded-xl border-slate-300'/>
 <Select><SelectTrigger className='h-12 rounded-xl'><SelectValue placeholder='Tenant: Enterprise'/></SelectTrigger><SelectContent><SelectItem value='enterprise'>Enterprise</SelectItem></SelectContent></Select>
 <Select><SelectTrigger className='h-12 rounded-xl'><SelectValue placeholder='Role: Operator'/></SelectTrigger><SelectContent><SelectItem value='operator'>Operator</SelectItem><SelectItem value='admin'>Admin</SelectItem></SelectContent></Select>
 <Button className='w-full h-12 rounded-xl bg-[#0078D4] hover:bg-[#106ebe]' onClick={()=>setLoggedIn(true)}>Sign In</Button>
 </div>
 </CardContent></Card></motion.div></div>
 }

 return <div className='min-h-screen bg-[#f5f7fb] flex text-slate-900'>
 <aside className='w-[280px] bg-[#0f172a] text-white p-5 flex flex-col border-r border-slate-800'>
 <div className='flex items-center gap-3 mb-8'>
 <div className='w-11 h-11 rounded-xl bg-[#0078D4]'/>
 <div><h2 className='font-semibold text-lg'>Azure Flink</h2><p className='text-slate-400 text-sm'>Enterprise Streaming</p></div>
 </div>
 <nav className='space-y-2'>
 {nav.map(n=><button key={n} onClick={()=>setSection(n)} className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all ${section===n?'bg-[#1e293b] border border-slate-700':'hover:bg-slate-800'}`}><span>{n}</span><ChevronRight className='w-4 h-4'/></button>)}
 </nav>
 </aside>

 <main className='flex-1 p-8 overflow-auto'>
 <motion.div initial={{opacity:0}} animate={{opacity:1}} className='space-y-6'>
 <div className='bg-white border border-slate-200 rounded-[28px] p-5 flex justify-between items-center shadow-sm'>
 <div>
 <h1 className='text-3xl font-semibold'>{section}</h1>
 <p className='text-slate-500'>Azure-managed Apache Flink operations</p>
 </div>
 <div className='flex items-center gap-3'>
 <Button variant='outline' className='rounded-xl'><Bell className='mr-2 h-4 w-4'/>Notifications</Button>
 <Button className='rounded-xl bg-[#0078D4]' onClick={()=>setDeploymentDialog(true)}><PlayCircle className='mr-2 h-4 w-4'/>New Deployment</Button>
 </div>
 </div>

 <div className='grid grid-cols-4 gap-4'>
 {['Throughput','Latency','CPU','Failures'].map((k,i)=><Card key={k} className='rounded-[28px] border border-slate-200 shadow-sm'><CardContent className='p-6'><p className='text-slate-500 text-sm'>{k}</p><h3 className='text-3xl font-semibold mt-2'>{['325 msg/s','42 ms','61%','0'][i]}</h3></CardContent></Card>)}
 </div>

 <Card className='rounded-[28px] border border-slate-200 shadow-sm'>
 <CardContent className='p-6'>
 <div className='flex justify-between mb-4'><h2 className='font-semibold text-xl'>Deployments</h2><Input placeholder='Search deployment...' className='w-80 rounded-xl'/></div>
 {deployments.map(dep=><motion.div whileHover={{y:-2}} key={dep.id} className='bg-slate-50 border border-slate-200 rounded-3xl p-5 flex justify-between items-center mb-4'>
 <div><h3 className='font-semibold text-lg'>{dep.job}</h3><p className='text-slate-500'>Environment: {dep.env} • Scale: {dep.scale}</p></div>
 <div className='flex items-center gap-3'>
 <Badge className={`${statusStyles[dep.status]} rounded-full px-4 py-1 border`}>{dep.status}</Badge>
 <Button variant='outline' className='rounded-xl'>Scale</Button>
 <Button variant='destructive' className='rounded-xl'>Stop</Button>
 </div>
 </motion.div>)}
 </CardContent></Card>

 <Card className='rounded-[28px] border border-slate-200 shadow-sm'>
 <CardContent className='p-6'>
 <h2 className='font-semibold text-xl mb-4'>Monitoring</h2>
 <ResponsiveContainer width='100%' height={280}><LineChart data={monitoring}><XAxis dataKey='time'/><YAxis/><Tooltip/><Line type='monotone' dataKey='throughput'/></LineChart></ResponsiveContainer>
 </CardContent></Card>
 </motion.div>
 </main>

 <Dialog open={deploymentDialog} onOpenChange={setDeploymentDialog}>
 <DialogContent className='rounded-[28px]'>
 <DialogHeader><DialogTitle>Create Deployment</DialogTitle></DialogHeader>
 <div className='space-y-4 mt-4'>
 <Select><SelectTrigger><SelectValue placeholder='Job: Clickstream Analytics'/></SelectTrigger><SelectContent><SelectItem value='click'>Clickstream Analytics</SelectItem></SelectContent></Select>
 <Select><SelectTrigger><SelectValue placeholder='Environment: Prod'/></SelectTrigger><SelectContent><SelectItem value='prod'>Prod</SelectItem></SelectContent></Select>
 <Button className='w-full rounded-xl bg-[#0078D4]'>Deploy</Button>
 </div>
 </DialogContent>
 </Dialog>
 </div>
}
