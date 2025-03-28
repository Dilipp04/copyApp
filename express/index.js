const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

let data = {
  1: `
  //activity_main.xml
  <?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".MainActivity">


    <androidx.appcompat.widget.Toolbar
        android:id="@+id/toolbar"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:background="?attr/colorPrimary"
        android:minHeight="?attr/actionBarSize"
        android:theme="?attr/actionBarTheme" />

    <ListView
        android:id="@+id/list1"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />
</LinearLayout>

//MainActivity.kt
package com.example.myapplication
import android.os.Bundle
import android.widget.ArrayAdapter
import android.widget.ListView
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        var listview : ListView = findViewById(R.id.list1)
        val countrys = arrayOf("India", "America" , "UK" , "Japan" , "sri lanka")
        listview.adapter = ArrayAdapter(this,android.R.layout.simple_list_item_1,countrys)
        listview.setOnItemClickListener{adapterView,view ,i ,l ->
            val toast = Toast.makeText(this,"Hello "+countrys[i],Toast.LENGTH_LONG)
            toast.show()
        }

    }
}

  `,
  2: `
  //activity_main.xml
  <?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <androidx.appcompat.widget.Toolbar
        android:id="@+id/toolbar"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:background="?attr/colorPrimary"
        android:minHeight="?attr/actionBarSize"
        android:theme="?attr/actionBarTheme" />
    <EditText
        android:id="@+id/editTextText"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_margin="40dp"
        android:ems="10"
        android:hint="Enter your text"
        android:inputType="text"
        android:text="Name"
        tools:layout_editor_absoluteX="100dp"
        tools:layout_editor_absoluteY="188dp" />

    <Button
        android:id="@+id/button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="submit"
        tools:layout_editor_absoluteX="158dp"
        tools:layout_editor_absoluteY="397dp" />




</LinearLayout>

  //MainActivity.kt
  package com.example.myapplication
import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        val message = findViewById<TextView>(R.id.editTextText)
        val btn_send = findViewById<Button>(R.id.button)
        btn_send.setOnClickListener{
            var intent = Intent(this,second_activity ::class.java)
            intent.putExtra("msg",message.text.toString())
            startActivity(intent)
        }
    }
}

  //second_activity.xml 
  <?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".second_activity">

    <TextView
        android:id="@+id/textView"
        android:layout_width="233dp"
        android:layout_height="wrap_content"
        android:layout_marginTop="70dp"
        android:layout_marginHorizontal="60dp"
        android:textSize="30dp"
        android:layout_weight="1"
        android:text="TextView" />

</LinearLayout>

  //second_activity.kt
  package com.example.myapplication

import android.os.Bundle
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class second_activity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_second)
        var display_msg = findViewById<TextView>(R.id.textView)
        display_msg.setText(intent.extras?.getString("msg"))
    }
}

  
  `,
  3: `
  //Activity_main.xml
<?xml version="1.0" encoding="utf-8"?>

<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Hello World!"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintVertical_bias="0.358" />

    <androidx.appcompat.widget.Toolbar
        android:id="@+id/toolbar"
        android:layout_width="409dp"
        android:layout_height="wrap_content"
        android:background="?attr/colorPrimary"
        android:minHeight="?attr/actionBarSize"
        android:theme="?attr/actionBarTheme"
        tools:layout_editor_absoluteX="1dp"
        tools:layout_editor_absoluteY="47dp" />

</androidx.constraintlayout.widget.ConstraintLayout>

  //AndroidManifest.xml
<?xml version="1.0" encoding="utf-8"?>

<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
    <uses-permission android:name="android.permission.INTERNET"/>
    <application
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.Practical3"
        tools:targetApi="31">
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>

  //MainActivity.kt
  package com.example.practical3

import android.content.Context
import android.net.ConnectivityManager
import android.net.NetworkCapabilities
import android.net.NetworkInfo
import android.os.Bundle
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)

        //Main code
        val manager  = applicationContext.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
        val network = manager.activeNetwork
        val capabilities = manager.getNetworkCapabilities(network)
        if (capabilities == null) {
            Toast.makeText(this, "Offline", Toast.LENGTH_LONG).show()
        } else if (capabilities.hasTransport(NetworkCapabilities .TRANSPORT_WIFI)) {
            Toast.makeText(this, "You are connected to WiFi", Toast.LENGTH_LONG).show()
        } else if (capabilities.hasTransport(NetworkCapabilities.TRANSPORT_CELLULAR)) {
            Toast.makeText(this, "You are connected to Mobile Network", Toast.LENGTH_LONG).show()
        } else {
            Toast.makeText(this, "Unknown Network", Toast.LENGTH_LONG).show()
        }

    }
}
  `,
  4: `
  //activity_xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".MainActivity">


    <EditText
        android:id="@+id/editTextText"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="200dp"
        android:ems="10"
        android:inputType="number"
        android:hint="Enter the number" />

    <Button
        android:id="@+id/button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Button"
        tools:layout_editor_absoluteX="128dp"
        tools:layout_editor_absoluteY="274dp" />
</LinearLayout>


//MainActivity.kt
package com.example.practical4

import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import android.Manifest

class MainActivity : AppCompatActivity() {
    private val REQUEST_CODE = 1
    lateinit var edtview :EditText
    lateinit var btn :Button
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        edtview = findViewById(R.id.editTextText)
        btn = findViewById(R.id.button)
        btn.setOnClickListener {
//            if (ActivityCompat.checkSelfPermission(
//                    this,
//                    Manifest.permission.CALL_PHONE
//                ) != PackageManager.PERMISSION_GRANTED
//            ) {
//                ActivityCompat.requestPermissions(
//                    this,
//                    arrayOf(
//                        Manifest.permission.CALL_PHONE,
//                        Manifest.permission.ACCESS_FINE_LOCATION
//                    ),
//                    REQUEST_CODE
//                )
//            } else {
//                makecall()
//            }
            makecall()
        }
    }

        private fun makecall(){
            val callIntent = Intent(Intent.ACTION_CALL)
            callIntent.data = Uri.parse("tel:" + edtview.text.toString().trim())
            startActivity(callIntent)
        }

        override fun onRequestPermissionsResult(
            requestCode: Int,
            permissions: Array<out String>,
            grantResults: IntArray
        ) {
            super.onRequestPermissionsResult(requestCode, permissions, grantResults)
            if(requestCode == REQUEST_CODE){
                makecall()
            }
        }
}

//AndroidManifest.xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <uses-feature android:name="android.hardware.telephony" android:required="false" />
    <uses-permission android:name="android.permission.CALL_PHONE"/>
    <application
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.Practical4"
        tools:targetApi="31">
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>
  `,
  5: `
  //Activity_main.xml
  <?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Hello World!"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

</androidx.constraintlayout.widget.ConstraintLayout>

  //MainActivity.kt
  package com.example.practical5

import android.content.pm.PackageManager
import android.os.Bundle
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class MainActivity : AppCompatActivity() {
    val RECORD_AUDIO = 1
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        setPermission()
    }

    private fun setPermission (){
        val permission = ContextCompat.checkSelfPermission(this,android.Manifest.permission.RECORD_AUDIO)

        if(permission != PackageManager.PERMISSION_GRANTED){
            if(ActivityCompat.shouldShowRequestPermissionRationale(this,android.Manifest.permission.RECORD_AUDIO)){
                val builder = AlertDialog.Builder(this)
                builder.setMessage("Permission required to record audio").setTitle("Permission required").setPositiveButton("OK"){
                    dialog,which-> giveRequest()
                }.create().show()

            }else{
                giveRequest()
            }
        }else{
            Toast.makeText(this,"Permission granted" , Toast.LENGTH_LONG).show()
        }
    }

    private fun giveRequest(){
        ActivityCompat.requestPermissions(this,arrayOf(android.Manifest.permission.RECORD_AUDIO),RECORD_AUDIO)
    }

    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<out String>,
        grantResults: IntArray
    ) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        if(requestCode == RECORD_AUDIO){
            if(grantResults.isEmpty() || grantResults[0] != PackageManager.PERMISSION_GRANTED){
                Toast.makeText(this,"Permission Denied",Toast.LENGTH_LONG).show()
            }else{
                Toast.makeText(this,"Permission granted",Toast.LENGTH_LONG).show()
            }
        }
    }

}

  //AndroidManifest.xml
  <?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">
<uses-permission android:name="android.permission.RECORD_AUDIO"/>
    <application
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.Practical5"
        tools:targetApi="31">
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>

  `,
  6: `
  //activity_main.xml
  <?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <androidx.appcompat.widget.Toolbar
        android:id="@+id/toolbar"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="40dp"
        android:background="?attr/colorPrimary"
        android:minHeight="?attr/actionBarSize"
        android:theme="?attr/actionBarTheme"
        tools:layout_editor_absoluteX="1dp"
        tools:layout_editor_absoluteY="5dp" />

</LinearLayout>

  //menu.xml
  <?xml version="1.0" encoding="utf-8"?>
<menu xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:android="http://schemas.android.com/apk/res/android">

    <item android:title="Setting"
        app:showAsAction="never"
        android:id="@+id/setting"
        >
<menu >

<item android:id="@+id/about"
    android:title="About"/>
    <item android:id="@+id/help"
        android:title="Help"/>
    <item android:id="@+id/feedback"
        android:title="Feedback"/>
</menu>
    </item>
</menu>

  //MainActivity.kt
package com.example.practical6

import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.Toolbar


class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        //main code
        var toolbar : Toolbar = findViewById(R.id.toolbar)
        setSupportActionBar(toolbar)
    }
//code
    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        menuInflater.inflate(R.menu.menu,menu)
        return true
    }
//code
    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        when(item.itemId){
            R.id.about -> Toast.makeText(this,"About",Toast.LENGTH_LONG).show()
            R.id.help -> Toast.makeText(this,"Help",Toast.LENGTH_LONG).show()
            R.id.feedback -> Toast.makeText(this,"Feedback",Toast.LENGTH_LONG).show()
            else-> super.onOptionsItemSelected(item)
        }

        return true
    }
}

  `,
  "7a": `
  //Activity_main.xml
  <?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".MainActivity">


    <androidx.appcompat.widget.Toolbar
        android:id="@+id/toolbar"
        android:layout_marginTop="20dp"
        android:layout_width="409dp"
        app:title="Notification"
        android:layout_height="wrap_content"
        android:background="?attr/colorPrimary"
        android:minHeight="?attr/actionBarSize"
        android:theme="?attr/actionBarTheme"
        tools:layout_editor_absoluteX="1dp"
        tools:layout_editor_absoluteY="79dp" />

    <Button
        android:id="@+id/button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Notify"
        tools:layout_editor_absoluteX="164dp"
        tools:ignore="MissingConstraints"
        tools:layout_editor_absoluteY="283dp" />
</LinearLayout>

//MainActivity.kt
package com.example.practical7

import android.Manifest
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import android.os.Bundle
import android.widget.Button
import androidx.activity.enableEdgeToEdge
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.app.NotificationCompat
import androidx.core.content.ContextCompat

class MainActivity : AppCompatActivity() {
    private val CHANNEL_ID = "my_channel_01"
    private val NOTIFICATION_ID = 1
    lateinit var button: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)

        button = findViewById(R.id.button)

        // ✅ Create Notification Channel (important for Android 8+)
        createNotificationChannel()

        // ✅ Request Notification Permission (important for Android 13+)
        requestNotificationPermission()

        button.setOnClickListener {
            showNotification()
        }
    }

    private fun createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val name = "My Notification Channel"
            val descriptionText = "Channel for app notifications"
            val importance = NotificationManager.IMPORTANCE_HIGH
            val channel = NotificationChannel(CHANNEL_ID, name, importance).apply {
                description = descriptionText
            }
            val notificationManager = getSystemService(NotificationManager::class.java)
            notificationManager.createNotificationChannel(channel)
        }
    }

    private fun requestNotificationPermission() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) { // Android 13+ (API 33)
            if (ContextCompat.checkSelfPermission(this, Manifest.permission.POST_NOTIFICATIONS)
                != PackageManager.PERMISSION_GRANTED) {
                ActivityCompat.requestPermissions(this, arrayOf(Manifest.permission.POST_NOTIFICATIONS), 100)
            }
        }
    }

    private fun showNotification() {
        val intent = Intent(this, MainActivity::class.java)
        val pendingIntent = PendingIntent.getActivity(
            this, 0, intent, PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
        )

        val notification = NotificationCompat.Builder(this, CHANNEL_ID)
            .setSmallIcon(R.drawable.ic_launcher_background)
            .setContentTitle("Notification Alert")
            .setContentText("Hi, This is your notification detail")
            .setAutoCancel(true)
            .setPriority(NotificationCompat.PRIORITY_HIGH) // ✅ Important for Android < 8
            .setContentIntent(pendingIntent)
            .build()

        val notificationManager = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
        notificationManager.notify(NOTIFICATION_ID, notification)
    }
}


//AndroidManifest.xml

<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <uses-permission android:name="android.permission.POST_NOTIFICATIONS" />

    <application
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.Practical7"
        tools:targetApi="31">
        <activity
            android:name=".MainActivity2"
            android:exported="false" />
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>
  `,
  "7b": `
  //activity_main.xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".MainActivity">

    <Button
        android:id="@+id/button"
        android:layout_marginTop="200dp"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Button"
        tools:layout_editor_absoluteX="60dp"
        tools:layout_editor_absoluteY="324dp" />

    <Button
        android:id="@+id/button2"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Button"
        tools:layout_editor_absoluteX="128dp"
        tools:layout_editor_absoluteY="446dp" />

</LinearLayout>

  //MainActivty.kt
  package com.example.practical7a
import android.Manifest
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import android.os.Bundle
import android.widget.Button
import androidx.activity.enableEdgeToEdge
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.app.NotificationCompat
import androidx.core.content.ContextCompat

class MainActivity : AppCompatActivity() {
    private val CHANNEL_ID = "my_channel"
    private val NOTIFICATION_ID_NON_CLICKABLE = 1
    private val NOTIFICATION_ID_CLICKABLE = 2

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // ✅ Create Notification Channel
        createNotificationChannel()

        // ✅ Find Buttons
        val showNonClickableNotificationButton: Button = findViewById(R.id.button)
        val showClickableNotificationButton: Button = findViewById(R.id.button2)

        // ✅ Set Click Listeners
        showNonClickableNotificationButton.setOnClickListener {
            showNonClickableNotification()
        }
        showClickableNotificationButton.setOnClickListener {
            showClickableNotification()
        }
    }

    // ✅ Create Notification Channel (Only for Android 8+)
    private fun createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val name = "My Channel"
            val descriptionText = "My Channel Description"
            val importance = NotificationManager.IMPORTANCE_DEFAULT
            val channel = NotificationChannel(CHANNEL_ID, name, importance).apply {
                description = descriptionText
            }
            val notificationManager = getSystemService(NotificationManager::class.java)
            notificationManager.createNotificationChannel(channel)
        }
    }

    // ✅ Show Clickable Notification
    private fun showClickableNotification() {
        val intent = Intent(this, MainActivity::class.java)
        val pendingIntent = PendingIntent.getActivity(
            this, 0, intent, PendingIntent.FLAG_IMMUTABLE
        )

        val builder = NotificationCompat.Builder(this, CHANNEL_ID)
            .setSmallIcon(R.drawable.ic_launcher_foreground)
            .setContentTitle("Clickable Notification")
            .setContentText("Click to reload the app")
            .setContentIntent(pendingIntent)
            .setAutoCancel(true)
            .setPriority(NotificationCompat.PRIORITY_DEFAULT)

        val notificationManager = getSystemService(NotificationManager::class.java)
        notificationManager.notify(NOTIFICATION_ID_CLICKABLE, builder.build())
    }

    // ✅ Show Non-Clickable Notification
    private fun showNonClickableNotification() {
        val builder = NotificationCompat.Builder(this, CHANNEL_ID)
            .setSmallIcon(R.drawable.ic_launcher_foreground)
            .setContentTitle("Non-Clickable Notification")
            .setContentText("This notification cannot be clicked.")
            .setAutoCancel(true)
            .setPriority(NotificationCompat.PRIORITY_DEFAULT)

        val notificationManager = getSystemService(NotificationManager::class.java)
        notificationManager.notify(NOTIFICATION_ID_NON_CLICKABLE, builder.build())
    }
}


  //AndroidManifest.xml
  <?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">
<uses-permission android:name="android.permission.POST_NOTIFICATIONS"/>
    <application
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.Practical7a"
        tools:targetApi="31">
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>
  
  `,
  8: `
  //Activity.xml
  <?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".MainActivity">
    <androidx.appcompat.widget.Toolbar
        android:id="@+id/toolbar"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:background="?attr/colorPrimary"
        android:minHeight="?attr/actionBarSize"
        android:theme="?attr/actionBarTheme" />

    <Button
        android:id="@+id/button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="frag 1"
        tools:layout_editor_absoluteX="160dp"
        tools:layout_editor_absoluteY="265dp" />

    <Button
        android:id="@+id/button2"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="frag 2"
        tools:layout_editor_absoluteX="163dp"
        tools:layout_editor_absoluteY="400dp" />

    <FrameLayout
        android:id="@+id/frame_1"
        android:layout_width="match_parent"
        android:layout_height="match_parent">

    </FrameLayout>




</LinearLayout>

  //MainActivity.kt
package com.example.practical8

import android.os.Bundle
import android.widget.Button
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.fragment.app.Fragment

class MainActivity : AppCompatActivity() {
    lateinit var button1:Button
    lateinit var button2:Button
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)

        button1 = findViewById(R.id.button)
        button2 = findViewById(R.id.button2)

        button1.setOnClickListener{
            val ft1 =   supportFragmentManager.beginTransaction()
            ft1.replace(R.id.frame_1,fragment1())
            ft1.commit()
        }
        button2.setOnClickListener{
            val ft2 =   supportFragmentManager.beginTransaction()
            ft2.replace(R.id.frame_1,fragment2())
            ft2.commit()
        }

    }
}

  //fragment1.xml
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".fragment1">

    <!-- TODO: Update blank fragment layout -->
    <TextView
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:text="Hello BscIT fragment 1" />

</FrameLayout>

  //fragment1.kt
  package com.example.practical8

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup

class fragment1 : Fragment() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_fragment1, container, false)
    }
}

// framgment 1 & fragment 2 are the same !!!

  `,
  9: `
  
//my_dialog.xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.appcompat.widget.LinearLayoutCompat
     xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:orientation="vertical"
    android:layout_height="match_parent">
    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_gravity="center"
        android:padding="40dp"
        android:background="#B1050B"
        android:orientation="vertical">
        <TextView
            android:layout_width="match_parent"
            android:id="@+id/msg"
            android:textColor="@color/white"

            android:layout_height="wrap_content">

        </TextView>
        <EditText
            android:layout_width="match_parent"
            android:id="@+id/edtname"
            android:hint="user name"
            android:textSize="20dp"

            android:textStyle="bold"
            android:textColor="#F8F6F6"
            android:layout_height="wrap_content">

        </EditText>
        <EditText
            android:layout_width="match_parent"
            android:id="@+id/edtpass"
            android:hint="password"
            android:textSize="20dp"

            android:textStyle="bold"
            android:textColor="#F8F6F6"
            android:layout_height="wrap_content">
        </EditText>
        <LinearLayout
            android:layout_width="wrap_content"
            android:orientation="horizontal"
            android:padding="5dp"
            android:layout_height="wrap_content">
            <Button
                android:layout_width="wrap_content"
                android:id="@+id/login"
                android:layout_margin="5dp"
                android:text="login"
                android:textColor="#F8F6F6"
                android:layout_height="wrap_content">
            </Button>
            <Button
                android:layout_width="wrap_content"
                android:id="@+id/cancel"
                android:layout_margin="5dp"
                android:text="cancel"
                android:textColor="#F8F6F6"
                android:layout_height="wrap_content">
            </Button>
        </LinearLayout>
    </LinearLayout>

</androidx.appcompat.widget.LinearLayoutCompat>

//MyFragment.kt

package com.example.alertdialogfragment

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import androidx.fragment.app.DialogFragment

class MyFragment:DialogFragment() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

    }

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
      var rootview:View= inflater.inflate(R.layout.my_dialog,container,false)
        var cancel=rootview.findViewById<Button>(R.id.cancel)
        var login=rootview.findViewById<Button>(R.id.login)
        var edtname=rootview.findViewById<EditText>(R.id.edtname)
        var edtpass=rootview.findViewById<EditText>(R.id.edtpass)
        var message=rootview.findViewById<TextView>(R.id.msg)

        cancel.setOnClickListener {
         dismiss()

        }
        login.setOnClickListener {
         message.text="hello "+edtname.text.toString()

        }

       return rootview
    }

}

//activity_main.xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.appcompat.widget.LinearLayoutCompat xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:padding="100dp"
    android:background="#ED0527"
    tools:context=".MainActivity">

<Button
    android:layout_width="match_parent"
    android:id="@+id/callfrag"
    android:text="call fragment"
    android:textColor="@color/white"
    android:layout_height="wrap_content">

</Button>

</androidx.appcompat.widget.LinearLayoutCompat>
MainActivity.kt
package com.example.alertdialogfragment

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button

class MainActivity : AppCompatActivity() {
lateinit var call: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
call=findViewById<Button>(R.id.callfrag)

        call.setOnClickListener {

            val fm=supportFragmentManager
            val myfragment=MyFragment()
            myfragment.show(fm,"My Login page")
        }


    }
}


  `,
};

// Route that returns JSON data
app.get("/", (req, res) => {
  res.json(data);
});
app.get("/:pno", (req, res) => {
  res.json(data[req.params.pno]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
