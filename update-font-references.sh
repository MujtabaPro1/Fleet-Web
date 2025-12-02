#!/bin/bash

# Find all files with Helvetica references and replace them with font-figtree
# Excluding the email template which needs Helvetica for compatibility

# List of files to process
files=(
  "/Users/mujtaba/Projects/personal/fleet-plan/fleetplan-frontend/src/components/ui/content/featured-nested-section.tsx"
  "/Users/mujtaba/Projects/personal/fleet-plan/fleetplan-frontend/src/components/ui/about/process-step.tsx"
  "/Users/mujtaba/Projects/personal/fleet-plan/fleetplan-frontend/src/components/ui/content/info-section.tsx"
  "/Users/mujtaba/Projects/personal/fleet-plan/fleetplan-frontend/src/components/ui/content/main-section.tsx"
  "/Users/mujtaba/Projects/personal/fleet-plan/fleetplan-frontend/src/components/ui/content/service-section.tsx"
  "/Users/mujtaba/Projects/personal/fleet-plan/fleetplan-frontend/src/pages/explore/index.tsx"
  "/Users/mujtaba/Projects/personal/fleet-plan/fleetplan-frontend/src/components/ui/content/featured-section.tsx"
  "/Users/mujtaba/Projects/personal/fleet-plan/fleetplan-frontend/src/components/ui/blogs/blog-section.tsx"
  "/Users/mujtaba/Projects/personal/fleet-plan/fleetplan-frontend/src/components/ui/faqs/faq-section.tsx"
  "/Users/mujtaba/Projects/personal/fleet-plan/fleetplan-frontend/src/components/ui/consultation/featured-section.tsx"
  "/Users/mujtaba/Projects/personal/fleet-plan/fleetplan-frontend/src/components/ui/about/info-container.tsx"
  "/Users/mujtaba/Projects/personal/fleet-plan/fleetplan-frontend/src/components/ui/about/featured-section.tsx"
  "/Users/mujtaba/Projects/personal/fleet-plan/fleetplan-frontend/src/components/ui/about/main-content.tsx"
  "/Users/mujtaba/Projects/personal/fleet-plan/fleetplan-frontend/src/components/ui/contact/featured-overview.tsx"
)

# Exclude email template
exclude_files=(
  "/Users/mujtaba/Projects/personal/fleet-plan/fleetplan-frontend/src/pages/api/email/send-email.ts"
)

# Process each file
for file in "${files[@]}"; do
  if [[ -f "$file" ]]; then
    echo "Processing $file..."
    # Replace [font-family:'Figtree',Helvetica] with font-figtree
    sed -i '' 's/\[font-family:'\''Figtree'\'',Helvetica\]/font-figtree/g' "$file"
    echo "Completed processing $file"
  else
    echo "File not found: $file"
  fi
done

echo "Font replacement completed!"
