using System;
namespace OutSystems.HubEdition.RuntimePlatform {

    internal sealed class EncryptPasswordForWebServiceRequest {
        private const string ENCRYPTED_SYMMETRIC_PREFIX = "#";
        internal static readonly Version EMPTY_VERSION = new Version();

        public static string Encrypt(string password, Version targetServerVersion) {

            return ENCRYPTED_SYMMETRIC_PREFIX
                + SecureConfidentialInformationEncryption.EncryptWithAlgorithm(password, SecureConfidentialInformationEncryption.FixedKeyAES128.Instance);

        }
    }
}
