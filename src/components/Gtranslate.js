import { useEffect } from "react";

export default function GTranslate() {
  useEffect(() => {
    // Check if the script is already added
    if (!document.getElementById("gtranslate-script")) {
      // Define settings for GTranslate
      window.gtranslateSettings = {
        default_language: "en",
        languages: ["en", "es", "fr", "de", "zh-CN"],
        wrapper_selector: ".gtranslate_wrapper",
        switcher_horizontal_position: "right",
        switcher_vertical_position: "top",
      };

      // Create the script element dynamically
      const script = document.createElement("script");
      script.id = "gtranslate-script";
      script.src = "https://cdn.gtranslate.net/widgets/latest/dropdown.js";
      script.async = true;

      // Append the script to the document body
      document.body.appendChild(script);

      // Initialize the widget after the script is loaded
      script.onload = () => {
        if (window.GTranslate) {
          window.GTranslate.init();
        }
      };
    } else {
      // If the script is already loaded, just initialize the widget again
      if (window.GTranslate) {
        window.GTranslate.init();
      }
    }

    // Cleanup function to remove the script if needed
    return () => {
      if (document.getElementById("gtranslate-script")) {
        document.body.removeChild(document.getElementById("gtranslate-script"));
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return <div className="gtranslate_wrapper ml-10"/>;
}