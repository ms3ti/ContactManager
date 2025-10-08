using System.Reflection;

[assembly: AssemblyCompany("OutSystems")]
[assembly: AssemblyProduct("OutSystems Platform")]
[assembly: AssemblyCopyright("© OutSystems. All rights reserved.")]
[assembly: AssemblyTrademark("")]

[assembly: AssemblyVersion("11.5.0.45040")]
[assembly: AssemblyFileVersion("11.5.0.45040")]

#if (RUNNING_ON_NET_4_6_1 || NET461)
[assembly: AssemblyInformationalVersion("11.5.0.45040+net461")]
#elif (RUNNING_ON_NET_4_7_2 || NET472)
[assembly: AssemblyInformationalVersion("11.5.0.45040+net472")]
#elif (NETSTANDARD2_0)
[assembly: AssemblyInformationalVersion("11.5.0.45040+netstandard2.0")]
#else
[assembly: AssemblyInformationalVersion("11.5.0.45040")]
#endif
