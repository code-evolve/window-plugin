import com.hierynomus.gradle.license.tasks.LicenseFormat

plugins {
    id("com.github.hierynomus.license") version "0.14.0"
}

task("licenseFormat1", LicenseFormat::class) {
    source = fileTree(mapOf(
            "dir" to "$projectDir/dist/",
            "include" to "**/*.js"
    ))
}

task("licenseFormat2", LicenseFormat::class) {
    source = fileTree(mapOf(
            "dir" to  "$projectDir/tests/",
            "include" to arrayOf("**/*.js", "**/*.vue")
    ))
}

task("licenseFormat3", LicenseFormat::class) {
    source = fileTree(mapOf(
            "dir" to  "$projectDir/src/",
            "include" to arrayOf("**/*.js", "**/*.vue")
    ))
}

val licenseFormat by tasks
licenseFormat.dependsOn("licenseFormat1", "licenseFormat2", "licenseFormat3")