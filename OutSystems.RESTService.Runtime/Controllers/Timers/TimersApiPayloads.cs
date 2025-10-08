using Newtonsoft.Json;

#if SCHEDULER_CORE
namespace OutSystems.Scheduler.Core.Timers {
#else
namespace OutSystems.RESTService.Controllers.Timers {
#endif
    public class TimersApiPayloads {
        public class ExecuteTimerRequest {
            [JsonProperty("key")]
            public string Key;

            [JsonProperty("timeout")]
            public int Timeout;

            [JsonProperty("tenantId")]
            public int TenantId;
        }
    }
}
