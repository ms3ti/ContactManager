using System.Runtime.CompilerServices; // DOWNLOAD_SOURCE_CODE
namespace OutSystems.HubEdition.RuntimePlatform {
    internal sealed class SharedKeys {

        public static string SettingsWeakSymmetricKey() {
            return "toChange";
        }

        public static string ConfidentialInformationSymmetricKey() {
            return "toChange";
        }

        public static string PrivateSalt() {
            return "cdjnes3h4w";
        }

    }
}