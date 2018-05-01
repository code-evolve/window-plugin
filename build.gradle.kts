import com.hierynomus.gradle.license.tasks.LicenseFormat

plugins {
    id("com.github.hierynomus.license") version "0.14.0"
}

task("licenseFormat1", LicenseFormat::class) {
    source = fileTree(mapOf(
            "dir" to "$projectDir/src/",
            "include" to "**/*.js"
    ))
}

val license by tasks
val licenseFormat by tasks
val licenseFormat1 by tasks

license.dependsOn(licenseFormat1)
licenseFormat.dependsOn(licenseFormat1)